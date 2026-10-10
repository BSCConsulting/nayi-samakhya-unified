import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { getR2Config, getR2Endpoint, buildPhotoStorageKey } from '../../../../lib/storage-r2.ts';
import { presign } from '../../../../lib/sigv4.ts';
import { getOptionalSession } from '../../../../lib/session.ts';

const UploadRequestSchema = z.object({
  filename: z.string().min(1).max(100),
  contentType: z.enum(['image/jpeg', 'image/png', 'image/webp']),
  sizeBytes: z.number().max(5 * 1024 * 1024, 'File exceeds 5MB statutory limit'),
});

export async function POST(req: NextRequest) {
  try {
    const claims = await getOptionalSession();
    if (!claims || !claims.is_ns_verified) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }

    const body = await req.json().catch(() => ({}));
    const parsed = UploadRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'invalid_input', issues: parsed.error.issues }, { status: 400 });
    }

    const { filename, contentType } = parsed.data;
    const config = getR2Config();

    const objectKey = buildPhotoStorageKey(claims.sub, filename);
    const endpointUrl = new URL(getR2Endpoint(config.accountId));

    // Sign a direct PUT URL to Cloudflare R2 bucket using AWS SigV4
    const signedQuery = presign(
      {
        accessKey: config.accessKeyId,
        secretKey: config.secretAccessKey,
        region: 'auto',
      },
      {
        method: 'PUT',
        host: endpointUrl.host,
        path: `/${config.bucketName}/${objectKey}`,
        expiresSeconds: 300,
        now: new Date(),
      }
    );

    const uploadUrl = `https://${endpointUrl.host}${signedQuery}`;

    return NextResponse.json({
      ok: true,
      uploadUrl,
      objectKey,
      contentType,
      publicUrl: config.publicCustomDomain
        ? `${config.publicCustomDomain.replace(/\/$/, '')}/${objectKey}`
        : `/matrimony/media/${objectKey}`,
    });
  } catch (err) {
    console.error('[R2:PresignError]', err);
    return NextResponse.json({ error: 'presign_failed' }, { status: 500 });
  }
}
