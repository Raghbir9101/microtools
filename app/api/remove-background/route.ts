import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const maxDuration = 120;

const WITHOUTBG_URL = process.env.WITHOUTBG_URL ?? 'http://localhost:8088';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/heic', 'image/heif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Unsupported format. Please upload JPG, PNG, or HEIC.' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    let origBuf = Buffer.from(arrayBuffer);

    // Auto-convert HEIC → JPEG before sending to withoutbg
    const sharp = (await import('sharp')).default;
    const meta = await sharp(origBuf).metadata().catch(() => null);

    if (!meta) {
      return NextResponse.json(
        { error: 'Could not read image. Make sure it is a valid JPG or PNG.' },
        { status: 400 }
      );
    }

    if (meta.format === 'heif') {
      const heicConvert = (await import('heic-convert')).default;
      const converted = await heicConvert({ buffer: origBuf, format: 'JPEG', quality: 0.95 });
      origBuf = Buffer.from(converted);
    } else if (meta.format && !['jpeg', 'png', 'webp', 'heif'].includes(meta.format)) {
      return NextResponse.json(
        { error: `Unsupported format: ${meta.format.toUpperCase()}. Please convert to JPG or PNG.` },
        { status: 400 }
      );
    }

    // ── Try withoutbg Docker container ────────────────────────────────────
    try {
      const imgBlob = new Blob([origBuf], { type: 'image/jpeg' });
      const fd = new FormData();
      fd.append('image', imgBlob, 'image.jpg');

      const res = await fetch(`${WITHOUTBG_URL}/v1.0/image-without-background`, {
        method: 'POST',
        body: fd,
        signal: AbortSignal.timeout(90_000),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => res.statusText);
        throw new Error(`withoutbg responded ${res.status}: ${txt}`);
      }

      const resultBuffer = Buffer.from(await res.arrayBuffer());

      return new NextResponse(new Uint8Array(resultBuffer), {
        status: 200,
        headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-store' },
      });

    } catch (dockerErr) {
      // ── Fallback: RMBG-1.4 (when Docker not running) ──────────────────
      console.warn(
        '[remove-bg] withoutbg Docker unavailable, falling back to RMBG-1.4.',
        dockerErr instanceof Error ? dockerErr.message : dockerErr
      );

      const { removeBackgroundRMBG } = await import('@/lib/rmbg');
      const resultBuffer = await removeBackgroundRMBG(origBuf);

      return new NextResponse(new Uint8Array(resultBuffer), {
        status: 200,
        headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-store' },
      });
    }

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[remove-background] Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
