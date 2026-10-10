import type { NextRequest, NextResponse } from 'next/server';
import { consentEvidence, dbError, json, readJson } from '../../../../lib/http.ts';
import { OnboardingSchema } from '../../../../lib/onboarding.ts';
import { dbContext, submitOnboarding } from '../../../../lib/onboarding-store.ts';
import { requireSession } from '../../../../lib/session.ts';
import { notifyProfileCreated } from '../../../../lib/telegram.ts';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const claims = await requireSession();
  const evidence = consentEvidence(req);
  if (!evidence) return json(400, { error: 'consent_evidence_unavailable' });
  const body = await readJson(req, OnboardingSchema);
  if ('res' in body) return body.res;
  try {
    const res = await submitOnboarding(dbContext(claims), claims.ns_membership_id, body.data, evidence);
    // Non-blocking Telegram notification with safe fallback
    notifyProfileCreated({
      id: res.matrimonialId,
      displayName: body.data.heritage.displayName,
      gender: body.data.heritage.gender,
      district: body.data.heritage.ancestralNativeDistrict,
      mandal: body.data.heritage.ancestralNativeMandal,
      vocation: body.data.heritage.vocation,
      gothra: body.data.heritage.gothra.kind === 'listed' ? body.data.heritage.gothra.id : body.data.heritage.gothra.nameEn,
    }).catch(() => undefined);
    return json(201, res);
  } catch (err) {
    return dbError(err, req, 'onboarding_submit_failed');
  }
}

