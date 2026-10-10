import { NextRequest, NextResponse } from 'next/server';

// Verified candidate unique ID to phone registry fallback for registered members
const REGISTERED_UNIQUE_IDS: Record<string, string> = {
  'NS-M1042': '9848012345',
  'NS-F1043': '9848012346',
  'NS-M1044': '9848012347',
  'NS-F1045': '9848012348',
  'NS-M1046': '9848012349',
  'NS-F1047': '9848012350',
  'NS-M1048': '9848012351',
  'NS-F1049': '9848012352',
  'NS-M1050': '9848012353',
  'NS-F1051': '9848012354',
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const uniqueId = searchParams.get('uniqueId')?.trim().toUpperCase();

  if (!uniqueId || !/^NS-[MF]\d{4,}$/.test(uniqueId)) {
    return NextResponse.json({ ok: false, error: 'invalid_unique_id' }, { status: 400 });
  }

  // Look up registered phone
  const phone = REGISTERED_UNIQUE_IDS[uniqueId];
  if (!phone) {
    return NextResponse.json({ ok: false, error: 'unique_id_not_found' }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    uniqueId,
    phone,
    maskedPhone: `${phone.slice(0, 2)}******${phone.slice(-2)}`,
  });
}
