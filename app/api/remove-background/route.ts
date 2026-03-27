import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const maxDuration = 120;

const BIREFNET_URL  = process.env.BIREFNET_URL  ?? 'http://localhost:8089';
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


    // ── Shared helper: POST image to a local microservice ─────────────────
    const callService = async (url: string, field: string): Promise<Buffer> => {
      const fd = new FormData();
      fd.append(field, new Blob([origBuf], { type: 'image/jpeg' }), 'image.jpg');
      const res = await fetch(url, { method: 'POST', body: fd, signal: AbortSignal.timeout(90_000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text().catch(() => res.statusText)}`);
      return Buffer.from(await res.arrayBuffer());
    };

    const respond = (buf: Buffer) => new NextResponse(new Uint8Array(buf), {
      status: 200,
      headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-store' },
    });

    // ── Tier 1: BiRefNet Python server (best quality) ─────────────────────
    try {
      console.log(`[remove-bg] Tier 1 → BiRefNet at ${BIREFNET_URL}/remove-background`);
      const buf = await callService(`${BIREFNET_URL}/remove-background`, 'file');
      console.log('[remove-bg] ✓ BiRefNet succeeded.');
      return respond(buf);
    } catch (e) {
      console.warn(`[remove-bg] BiRefNet unavailable: ${(e as Error).message}`);
    }

    // ── Tier 2: withoutBG Docker (Focus model) ────────────────────────────
    try {
      console.log(`[remove-bg] Tier 2 → withoutBG Docker at ${WITHOUTBG_URL}/api/remove-background`);
      const buf = await callService(`${WITHOUTBG_URL}/api/remove-background`, 'file');
      console.log('[remove-bg] ✓ withoutBG Docker succeeded.');
      return respond(buf);
    } catch (e) {
      console.warn(`[remove-bg] withoutBG Docker unavailable: ${(e as Error).message}`);
    }

    // ── Tier 3: RMBG-1.4 local Node.js (always available) ────────────────
    console.warn('[remove-bg] Tier 3 → falling back to local RMBG-1.4.');
    const { removeBackgroundRMBG } = await import('@/lib/rmbg');
    return respond(await removeBackgroundRMBG(origBuf));

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[remove-background] Error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
