/**
 * Cloudflare Worker: Unified Origin Sub-path Router
 * 
 * Intercepts requests on nayisamakhya.org and routes:
 * - /matrimony/*  -> nayisamakhya-matrimony.pages.dev (Matrimony Engine)
 * - /* (all else) -> pass-through to default origin (Civic Portal)
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Route /matrimony traffic to the dedicated Matrimony Pages deployment
    if (url.pathname === '/matrimony' || url.pathname.startsWith('/matrimony/')) {
      const matrimonyHost = env.MATRIMONY_HOST || 'nayisamakhya-matrimony.pages.dev';
      const targetUrl = new URL(request.url);
      targetUrl.hostname = matrimonyHost;
      targetUrl.protocol = 'https:';

      const forwardHeaders = new Headers(request.headers);
      // Explicitly set Host to target Pages hostname to avoid Cloudflare 403 Host Mismatch
      forwardHeaders.set('Host', matrimonyHost);
      forwardHeaders.set('X-Forwarded-Host', url.hostname);
      forwardHeaders.set('X-Forwarded-Proto', url.protocol.replace(':', ''));

      return fetch(targetUrl.toString(), {
        method: request.method,
        headers: forwardHeaders,
        body: request.body,
        redirect: 'manual',
      });
    }

    // Default pass-through to the Civic Portal
    return fetch(request);
  },
};
