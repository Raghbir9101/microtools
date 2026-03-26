/**
 * Image Compression Utility for Govt Forms
 * Uses Canvas API for client-side image compression
 *
 * Strategy:
 * 1. First attempt quality-only binary search (full resolution)
 * 2. If quality alone cannot reach target, scale down canvas dimensions
 *    using another binary search on scale factor
 * 3. Track the "best blob" as the one CLOSEST to target, not simply
 *    any blob below target size
 */

export interface CompressionResult {
  blob: Blob;
  originalSize: number;
  compressedSize: number;
  compressionPercentage: number;
  quality: number;
  success: boolean;
  error?: string;
}

/**
 * Compress image to target file size using binary search on quality + scale
 */
export async function compressImageToSize(
  file: File,
  targetSizeKB: number,
  tolerance: number = 2,
  maxQuality: number = 0.92,
  minQuality: number = 0.01
): Promise<CompressionResult> {
  const originalSize = file.size;
  const targetSizeBytes = targetSizeKB * 1024;
  const toleranceBytes = tolerance * 1024;

  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = async () => {
      try {
        URL.revokeObjectURL(url);

        const naturalWidth = img.naturalWidth || img.width;
        const naturalHeight = img.naturalHeight || img.height;

        // ── PHASE 1: Binary search on quality (full resolution) ──────────────
        let bestBlob: Blob | null = null;
        let bestQuality = minQuality;
        let low = minQuality;
        let high = maxQuality;

        for (let i = 0; i < 15; i++) {
          const q = (low + high) / 2;
          const blob = await renderToBlob(img, naturalWidth, naturalHeight, q);

          // Track the blob closest to target (prefer ones at or below target)
          if (
            bestBlob === null ||
            (blob.size <= targetSizeBytes + toleranceBytes &&
              Math.abs(blob.size - targetSizeBytes) <
                Math.abs(bestBlob.size - targetSizeBytes))
          ) {
            bestBlob = blob;
            bestQuality = q;
          }

          if (Math.abs(blob.size - targetSizeBytes) <= toleranceBytes) {
            break; // Within tolerance — done
          }

          if (blob.size > targetSizeBytes) {
            high = q; // Too large → reduce quality
          } else {
            low = q;  // Too small → increase quality
          }
        }

        // ── PHASE 2: If still above target, scale down dimensions ────────────
        if (bestBlob && bestBlob.size > targetSizeBytes + toleranceBytes) {
          let scaleLow = 0.05;
          let scaleHigh = 1.0;

          for (let i = 0; i < 15; i++) {
            const scale = (scaleLow + scaleHigh) / 2;
            const w = Math.round(naturalWidth * scale);
            const h = Math.round(naturalHeight * scale);
            // Use a moderate quality that still achieves small output
            const blob = await renderToBlob(img, w, h, 0.82);

            if (
              bestBlob === null ||
              (blob.size <= targetSizeBytes + toleranceBytes &&
                Math.abs(blob.size - targetSizeBytes) <
                  Math.abs(bestBlob.size - targetSizeBytes))
            ) {
              bestBlob = blob;
              bestQuality = 0.82;
            }

            if (Math.abs(blob.size - targetSizeBytes) <= toleranceBytes) {
              break;
            }

            if (blob.size > targetSizeBytes) {
              scaleHigh = scale; // Still too big → shrink more
            } else {
              scaleLow = scale;  // Too small → enlarge a bit
            }
          }

          // ── PHASE 3: If scale binary search still hasn't reached target,
          //    combine minimum scale with minimum quality ────────────────────
          if (bestBlob && bestBlob.size > targetSizeBytes + toleranceBytes) {
            for (let q = 0.7; q >= minQuality; q -= 0.05) {
              const scale = scaleHigh;
              const w = Math.round(naturalWidth * scale);
              const h = Math.round(naturalHeight * scale);
              const blob = await renderToBlob(img, w, h, q);

              if (
                Math.abs(blob.size - targetSizeBytes) <
                Math.abs(bestBlob.size - targetSizeBytes)
              ) {
                bestBlob = blob;
                bestQuality = q;
              }

              if (blob.size <= targetSizeBytes + toleranceBytes) break;
            }
          }
        }

        if (!bestBlob) {
          resolve({
            blob: new Blob(),
            originalSize,
            compressedSize: 0,
            compressionPercentage: 0,
            quality: 0,
            success: false,
            error: 'Unable to compress the image. Please try a different file.',
          });
          return;
        }

        const compressedSize = bestBlob.size;
        const compressionPercentage =
          ((originalSize - compressedSize) / originalSize) * 100;
        const isWithinTolerance =
          Math.abs(compressedSize - targetSizeBytes) <= toleranceBytes;

        if (isWithinTolerance || compressedSize <= targetSizeBytes) {
          resolve({
            blob: bestBlob,
            originalSize,
            compressedSize,
            compressionPercentage,
            quality: bestQuality,
            success: true,
          });
        } else {
          // Best effort — show closest result with a warning
          resolve({
            blob: bestBlob,
            originalSize,
            compressedSize,
            compressionPercentage,
            quality: bestQuality,
            success: false,
            error: `Closest result: ${(compressedSize / 1024).toFixed(1)}KB. Image may be too complex to reach ${targetSizeKB}KB exactly — try cropping to a smaller area first.`,
          });
        }
      } catch {
        resolve({
          blob: new Blob(),
          originalSize,
          compressedSize: 0,
          compressionPercentage: 0,
          quality: 0,
          success: false,
          error: 'Failed to compress image. Please try another image.',
        });
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({
        blob: new Blob(),
        originalSize,
        compressedSize: 0,
        compressionPercentage: 0,
        quality: 0,
        success: false,
        error: 'Failed to load image. Please upload a valid JPG or PNG file.',
      });
    };

    img.src = url;
  });
}

/**
 * Render image to a canvas of given dimensions and export as JPEG blob
 */
async function renderToBlob(
  img: HTMLImageElement,
  width: number,
  height: number,
  quality: number
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, width);
  canvas.height = Math.max(1, height);

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Cannot get canvas context');

  // Use high-quality image smoothing for better downscale results
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Failed to create blob from canvas'));
      },
      'image/jpeg',
      quality
    );
  });
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Download file
 */
export function downloadFile(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
