import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * Fast image preview endpoint.
 * Converts any format (including HEIC/HEIF) to a small JPEG thumbnail.
 * Used client-side to show a preview while background removal is in progress.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;
    if (!file) return NextResponse.json({ error: 'No image' }, { status: 400 });

    let buf = Buffer.from(await file.arrayBuffer());
    const sharp = (await import('sharp')).default;

    // Convert HEIC/HEIF to JPEG first
    const meta = await sharp(buf).metadata().catch(() => null);
    if (meta?.format === 'heif') {
      const heicConvert = (await import('heic-convert')).default;
      buf = Buffer.from(
        await heicConvert({ buffer: buf, format: 'JPEG', quality: 0.8 })
      );
    }

    // Return a small 500px thumbnail — fast to transfer and display
    const thumb = await sharp(buf)
      .resize(500, 500, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 75 })
      .toBuffer();

    return new NextResponse(new Uint8Array(thumb), {
      status: 200,
      headers: { 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-store' },
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
