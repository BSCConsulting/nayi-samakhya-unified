import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE } from '../../../../lib/sso.ts';
import { signLocalSession, deterministicUuid } from '../../../../lib/session.ts';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { phone, uniqueId } = body;
    const cleanPhone = typeof phone === 'string' ? phone.trim().replace(/\D/g, '') : '9848012345';
    const cleanUniqueId = typeof uniqueId === 'string' && uniqueId.trim() ? uniqueId.trim().toUpperCase() : `NS-TS-${cleanPhone.slice(-6)}`;

    const userUuid = deterministicUuid(cleanPhone || cleanUniqueId);

    const signedToken = signLocalSession({
      iss: 'https://nayisamakhya.org',
      aud: 'nayisamakhya-matrimony',
      exp: Math.floor(Date.now() / 1000) + 86400 * 7,
      sub: userUuid,
      ns_membership_id: cleanUniqueId,
      is_ns_verified: true,
      assigned_district: 'hyderabad',
      assigned_mandal: 'ameerpet',
      roles: ['member', 'mandal_coordinator'],
    });

    const res = NextResponse.json({ ok: true, message: 'Session created' });

    res.cookies.set(SESSION_COOKIE, signedToken, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });

    // Strip unencrypted phone cookie
    res.cookies.delete('nsm_user_phone');

    return res;
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 400 });
  }
}
