'use client';

import { useState, useRef } from 'react';

export default function PdfToJpgTool() {
  const [pages, setPages] = useState<string[]>([]);
  const [converting, setConverting] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const convert = async (file: File) => {
    setConverting(true);
    setError('');
    setPages([]);
    setFileName(file.name.replace(/\.pdf$/i, ''));

    try {
      // Dynamically import pdfjs to avoid SSR issues
      const pdfjsLib = await import('pdfjs-dist');
      // Use CDN worker to avoid bundling issues
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const numPages = pdf.numPages;

      const urls: string[] = [];
      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 }); // 2x scale = high quality

        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d')!;

        await page.render({ canvasContext: ctx, viewport }).promise;

        await new Promise<void>((res) =>
          canvas.toBlob((blob) => {
            if (blob) urls.push(URL.createObjectURL(blob));
            res();
          }, 'image/jpeg', 0.95)
        );
      }

      setPages(urls);
    } catch (e) {
      setError(`Conversion failed: ${e instanceof Error ? e.message : 'Unknown error'}. Make sure the PDF is not password-protected.`);
    }

    setConverting(false);
  };

  const downloadPage = (url: string, pageNum: number) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}_page_${pageNum}.jpg`;
    a.click();
  };

  const downloadAll = () => {
    pages.forEach((url, i) => {
      setTimeout(() => downloadPage(url, i + 1), i * 200);
    });
  };

  return (
    <div className="space-y-5">
      {/* Upload */}
      <div
        onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type === 'application/pdf') convert(f); }}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all"
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) convert(f); }}
        />
        <div className="text-4xl mb-3">📄</div>
        <p className="font-semibold text-sm text-foreground">Click or drag a PDF file here</p>
        <p className="text-xs text-muted-foreground mt-1">Each PDF page will be converted to a JPG image</p>
      </div>

      {/* Converting indicator */}
      {converting && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <svg className="w-5 h-5 animate-spin text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-sm text-amber-700 dark:text-amber-400 font-medium">Converting PDF pages to JPG… this may take a moment</span>
        </div>
      )}

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">{error}</div>
      )}

      {/* Results */}
      {pages.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">{pages.length} page{pages.length > 1 ? 's' : ''} converted</p>
            {pages.length > 1 && (
              <button
                onClick={downloadAll}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs hover:opacity-90 transition-all shadow"
              >
                ⬇ Download All ({pages.length} JPGs)
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {pages.map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border bg-muted/20 group relative">
                <img src={url} alt={`Page ${i + 1}`} className="w-full object-contain max-h-48" />
                <div className="p-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Page {i + 1}</span>
                  <button
                    onClick={() => downloadPage(url, i + 1)}
                    className="text-xs px-3 py-1 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all"
                  >
                    ⬇ Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => { setPages([]); setFileName(''); }}
            className="w-full py-2.5 rounded-xl border border-border text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Convert another PDF
          </button>
        </div>
      )}

      <div className="p-3 rounded-lg bg-muted/30 border border-border text-xs text-muted-foreground">
        ℹ️ All conversion happens in your browser — your PDF is never uploaded to any server.
      </div>
    </div>
  );
}
