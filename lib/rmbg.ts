/**
 * RMBG-1.4 background removal using @huggingface/transformers.
 * Model is loaded once and cached in memory (singleton).
 * Uses onnxruntime-node (native C++ backend) for fast CPU inference.
 */

import type { PreTrainedModel, Processor } from '@huggingface/transformers';

let _model: PreTrainedModel | null = null;
let _processor: Processor | null = null;
let _loadPromise: Promise<void> | null = null;

async function ensureModel(): Promise<void> {
  if (_model && _processor) return;
  if (_loadPromise) return _loadPromise;

  _loadPromise = (async () => {
    console.log('[RMBG] Loading briaai/RMBG-1.4 model (first run — downloads ~175MB)…');
    const { AutoModel, AutoProcessor } = await import('@huggingface/transformers');

    [_model, _processor] = await Promise.all([
      AutoModel.from_pretrained('briaai/RMBG-1.4', {
        config: { model_type: 'custom' },
      }),
      AutoProcessor.from_pretrained('briaai/RMBG-1.4', {
        config: {
          do_normalize: true,
          do_pad: false,
          do_rescale: true,
          do_resize: true,
          image_mean: [0.5, 0.5, 0.5],
          feature_extractor_type: 'ImageFeatureExtractor',
          image_std: [1, 1, 1],
          resample: 2,
          rescale_factor: 0.00392156862745098,
          size: { width: 1024, height: 1024 },
        },
      }),
    ]);
    console.log('[RMBG] Model loaded and cached.');
  })();

  return _loadPromise;
}

/**
 * Remove background from an image using RMBG-1.4.
 * @param origBuf  original image buffer
 * @param mimeType mime type of the image (e.g. 'image/jpeg')
 * @returns PNG buffer with transparent background
 */
export async function removeBackgroundRMBG(
  origBuf: Buffer
): Promise<Buffer> {
  await ensureModel();

  const { RawImage } = await import('@huggingface/transformers');
  const sharp = (await import('sharp')).default;

  // Get original dimensions
  const meta = await sharp(origBuf).metadata();
  const origW = meta.width!;
  const origH = meta.height!;

  // Decode image to raw RGB pixels and construct RawImage directly (no URL fetch)
  const { data: rgbData, info: rgbInfo } = await sharp(origBuf)
    .toColorspace('srgb')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = rgbInfo.channels as 3 | 4;
  // RawImage constructor: (data: Uint8ClampedArray, width, height, channels)
  const image = new RawImage(
    new Uint8ClampedArray(rgbData),
    rgbInfo.width,
    rgbInfo.height,
    channels
  );

  // Preprocess
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { pixel_values } = await (_processor as any)(image);

  // Run RMBG-1.4 inference
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { output } = await (_model as any)({ input: pixel_values });

  // output[0] shape: [1, H, W] — sigmoid probability mask
  const maskImage = await RawImage.fromTensor(
    output[0].mul(255).to('uint8')
  ).resize(origW, origH);

  const maskBuf = Buffer.from(maskImage.data);

  // Get original RGBA pixels
  const { data: rgba, info } = await sharp(origBuf)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Apply mask as alpha channel
  const pixelCount = info.width * info.height;
  for (let i = 0; i < pixelCount; i++) {
    rgba[i * 4 + 3] = maskBuf[i];
  }

  // Encode as PNG
  return sharp(rgba, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}
