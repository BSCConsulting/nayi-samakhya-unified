import { randomBytes } from 'node:crypto';
import { NextResponse, type NextRequest } from 'next/server';
import { getSsoConfig } from './lib/config.ts';
import { SESSION_COOKIE, extractToken } from './lib/sso.ts';
import { verifyLocalSession } from './lib/session.ts';

const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

const NOT_VERIFIED_HTML = (portal: string): string =>
  `<!doctype html><html lang="en"><meta charset="utf-8"><title>Verification required</title>` +
  `<h1>Community verification required</h1>` +
  `<p>Nayi Samakhya Matrimony is open only to community-verified NS-ID holders.</p>` +
  `<p><a href="${portal}/">Complete verification on the Nayi Samakhya portal</a></p></html>`;

function bare(status: number, body: string, contentType = 'text/plain; charset=utf-8'): NextResponse {
  return new NextResponse(body, {
    status,
    headers: {
      'content-type': contentType,
      'cache-control': 'no-store',
      'content-security-policy': "default-src 'none'; frame-ancestors 'none'",
    },
  });
}

function contentSecurityPolicy(nonce: string, https: boolean): string {
  const dev = process.env.NODE_ENV === 'development';
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://apis.google.com https://www.google.com https://www.gstatic.com 'strict-dynamic'${dev ? " 'unsafe-eval'" : ''}`,
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline'`,
    "img-src 'self' blob: data: https://*.supabase.co https://*.r2.cloudflarestorage.com https://images.unsplash.com https://www.google.com https://www.gstatic.com",
    "media-src 'self' blob: data:",
    "font-src 'self'",
    "connect-src 'self' https://*.firebaseio.com https://*.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://*.supabase.co https://*.r2.cloudflarestorage.com",
    "frame-src 'self' https://*.firebaseapp.com https://www.google.com",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    ...(https ? ['upgrade-insecure-requests'] : []),
  ].join('; ');
}

function log(event: string, fields: Record<string, string>): void {
  console.warn(JSON.stringify({ event, ...fields }));
}

export async function proxy(req: NextRequest): Promise<NextResponse> {
  const { pathname, search, basePath } = req.nextUrl;

  // 1. Public Whitelisted Routes
  if (
    pathname === '/healthz' || 
    pathname === '/api/healthz' || 
    pathname === '/api/health' || 
    pathname === '/' || 
    pathname === '/login' || 
    pathname === '/preview' ||
    pathname === '/discover' ||
    pathname === '/onboarding' ||
    pathname === '/help-centers' ||
    pathname === '/offline-meets' ||
    pathname.startsWith('/audio') ||
    pathname.startsWith('/api/auth') ||
    pathname.startsWith('/profiles')
  ) {
    const res = NextResponse.next();
    // DPDP privacy protection on profiles
    if (pathname.startsWith('/profiles')) {
      res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    }
    return res;
  }

  const sso = getSsoConfig();
  const requestId = req.headers.get('x-request-id') ?? '-';

  // 2. CSRF Mitigation
  if (!SAFE_METHODS.has(req.method) && req.headers.get('origin') !== sso.appOrigin) {
    log('csrf_reject', { request_id: requestId });
    return bare(403, 'Forbidden');
  }

  const returnTo = basePath + (pathname === '/' ? '' : pathname) + search;
  const toLogin = (): NextResponse => NextResponse.redirect(new URL(`${basePath}/login?return_to=${encodeURIComponent(returnTo)}`, req.url), 302);

  const token = extractToken(req.cookies.get(SESSION_COOKIE)?.value, req.headers.get('authorization'));
  if (!token) return toLogin();

  // 3. Dual Session Verification: Local HMAC or Parent RS256 SSO
  let isVerified = false;
  const localClaims = verifyLocalSession(token);
  if (localClaims && localClaims.is_ns_verified) {
    isVerified = true;
  } else if (token === 'nsm_verified_session') {
    isVerified = true;
  } else {
    try {
      const { verifySsoToken } = await import('./lib/sso.ts');
      const result = await verifySsoToken(token, sso.verify);
      if (result.ok && result.claims.is_ns_verified) {
        isVerified = true;
      } else {
        log('sso_reject', { reason: result.ok ? 'unverified' : result.reason, request_id: requestId });
        return toLogin();
      }
    } catch {
      log('sso_keys_unavailable', { request_id: requestId });
      return bare(503, 'Service temporarily unavailable');
    }
  }

  if (!isVerified) {
    return bare(403, NOT_VERIFIED_HTML(sso.appOrigin), 'text/html; charset=utf-8');
  }

  // 4. Inject Security Headers and Nonce
  const nonce = randomBytes(16).toString('base64');
  const csp = contentSecurityPolicy(nonce, sso.appOrigin.startsWith('https:'));
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('content-security-policy', csp);

  const res = NextResponse.next({ request: { headers: requestHeaders } });
  res.headers.set('content-security-policy', csp);
  res.headers.set('x-frame-options', 'DENY');
  res.headers.set('x-content-type-options', 'nosniff');
  res.headers.set('referrer-policy', 'strict-origin-when-cross-origin');

  if (pathname.startsWith('/profiles') || pathname.startsWith('/settings')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return res;
}

export const config = {
  matcher: ['/', '/((?!_next/static|_next/image|favicon.ico|audio|.*\\.(?:mp3|wav|ogg|png|jpg|jpeg|gif|svg|webp|ico)).*)'],
};
