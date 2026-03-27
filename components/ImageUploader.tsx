'use client';

import { useRef, useState } from 'react';

interface ImageUploaderProps {
  onImageSelect: (file: File, preview: string) => void;
  onPreviewReady?: (dataUrl: string) => void;
}

export default function ImageUploader({ onImageSelect, onPreviewReady }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) handleFile(files[0]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) handleFile(files[0]);
  };

  const handleFile = (file: File) => {
    setError(null);

    // Reject formats sharp can't handle even after HEIC conversion
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    if (['avif', 'tiff', 'tif', 'bmp'].includes(ext)) {
      setError(`${ext.toUpperCase()} format is not supported. Please convert to JPG or PNG first.`);
      return;
    }

    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic', 'image/heif'];
    if (file.type && !validTypes.includes(file.type)) {
      setError('Only JPG, PNG, or HEIC images are supported.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('File is too large. Please upload an image under 10MB.');
      return;
    }

    const isHeic = ['heic', 'heif'].includes(ext) ||
      ['image/heic', 'image/heif'].includes(file.type);

    if (isHeic) {
      // Instant blob URL preview — Safari shows HEIC natively, Chrome shows camera icon (onError)
      const blobUrl = URL.createObjectURL(file);
      onImageSelect(file, blobUrl);
      // In the background: convert to JPEG for Chrome/non-Safari preview
      import('heic2any').then(({ default: heic2any }) => {
        console.log('[HEIC] Starting heic2any conversion for preview…');
        heic2any({ blob: file, toType: 'image/jpeg', quality: 0.8 })
          .then((result) => {
            console.log('[HEIC] heic2any conversion complete, updating preview.');
            const jpegBlob = Array.isArray(result) ? result[0] : result;
            const jpegUrl = URL.createObjectURL(jpegBlob);
            URL.revokeObjectURL(blobUrl);
            onPreviewReady?.(jpegUrl);
          })
          .catch((err) => {
            console.warn('[HEIC] heic2any failed:', err);
          });
      }).catch((err) => {
        console.warn('[HEIC] heic2any import failed:', err);
      });
      return;
    }

    // Regular formats: instant blob URL preview (no FileReader needed)
    const blobUrl = URL.createObjectURL(file);
    onImageSelect(file, blobUrl);
  };

  return (
    <div className="space-y-3">
      <div
        className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer ${
          dragActive
            ? 'border-primary bg-primary/5 scale-[1.01]'
            : 'border-border bg-muted/20 hover:border-primary/60 hover:bg-primary/3'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        aria-label="Upload image by clicking or dragging"
      >
        <input
          ref={inputRef}
          id="image-upload-input"
          type="file"
          accept=".jpg,.jpeg,.png,image/jpeg,image/png"
          onChange={handleChange}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-4">
          {/* Upload icon */}
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${dragActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <div>
            <p className="text-base font-semibold text-foreground">
              {dragActive ? 'Drop your image here' : 'Drag & drop your photo here'}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              or <span className="text-primary font-medium underline underline-offset-2">click to browse</span>
            </p>
          </div>

          <div className="flex items-center gap-2 mt-1">
            {['JPG', 'JPEG', 'PNG', 'HEIC'].map((fmt) => (
              <span key={fmt} className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-xs font-medium">
                {fmt}
              </span>
            ))}
            <span className="text-muted-foreground text-xs">· Max 10MB</span>
          </div>
        </div>
      </div>

      {/* Inline error message */}
      {error && (
        <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/8 border border-destructive/20 text-destructive text-sm animate-fade-in-up">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
