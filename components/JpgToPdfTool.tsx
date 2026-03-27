'use client';

import { useState, useRef } from 'react';

export default function JpgToPdfTool() {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [resultUrl, setResultUrl] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const imgs = Array.from(newFiles).filter(f => f.type.startsWith('image/'));
    setFiles(prev => [...prev, ...imgs]);
    setResultUrl('');
  };

  const removeFile = (idx: number) => setFiles(prev => prev.filter((_, i) => i !== idx));

  const convert = async () => {
    if (files.length === 0) { setError('Please add at least one image.'); return; }
    setError('');
    setConverting(true);
    try {
      const { PDFDocument } = await import('pdf-lib');
      const pdf = await PDFDocument.create();
      for (const file of files) {
        const buf = await file.arrayBuffer();
        let img;
        if (file.type === 'image/png') {
          img = await pdf.embedPng(buf);
        } else {
          // Convert to JPEG via canvas first
          const blob = await new Promise<Blob>((res) => {
            const i = new Image();
            i.onload = () => {
              const c = document.createElement('canvas');
              c.width = i.width; c.height = i.height;
              const ctx = c.getContext('2d')!;
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(0, 0, c.width, c.height);
              ctx.drawImage(i, 0, 0);
              c.toBlob((b) => res(b!), 'image/jpeg', 0.95);
            };
            i.src = URL.createObjectURL(file);
          });
          img = await pdf.embedJpg(await blob.arrayBuffer());
        }
        const page = pdf.addPage([img.width, img.height]);
        page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
      }
      const bytes = await pdf.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      setResultUrl(URL.createObjectURL(blob));
    } catch (e) {
      setError(`Conversion failed: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
    setConverting(false);
  };

  const download = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = files.length === 1 ? files[0].name.replace(/\.[^/.]+$/, '') + '.pdf' : 'images.pdf';
    a.click();
  };

  return (
    <div className="space-y-5">
      <div onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-border rounded-2xl p-10 text-center cursor-pointer hover:border-primary/50 transition-all">
        <input ref={inputRef} type="file" accept="image/*" multiple className="hidden"
          onChange={(e) => addFiles(e.target.files)} />
        <div className="text-4xl mb-3">🖼️</div>
        <p className="font-semibold text-sm text-foreground">Click or drag images here</p>
        <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WebP — each image becomes one PDF page</p>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-foreground">Images ({files.length})</p>
          <div className="grid grid-cols-3 gap-2">
            {files.map((f, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden border border-border">
                <img src={URL.createObjectURL(f)} alt={f.name} className="w-full h-20 object-cover" />
                <button onClick={() => removeFile(i)}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-destructive text-white text-xs flex items-center justify-center">✕</button>
                <p className="text-xs text-center p-1 text-muted-foreground truncate">{i+1}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">{error}</div>}

      {files.length > 0 && !resultUrl && (
        <button onClick={convert} disabled={converting}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm hover:opacity-90 disabled:opacity-50 transition-all shadow-md">
          {converting ? '🔄 Creating PDF…' : `📄 Convert ${files.length} Image${files.length>1?'s':''} to PDF`}
        </button>
      )}

      {resultUrl && (
        <div className="space-y-3">
          <div className="p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-center">
            <p className="text-emerald-700 dark:text-emerald-400 font-bold">✅ PDF created!</p>
            <p className="text-xs text-muted-foreground mt-1">{files.length} image{files.length>1?'s':''} → 1 PDF document</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={download}
              className="py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md">
              ⬇ Download PDF
            </button>
            <button onClick={() => { setFiles([]); setResultUrl(''); }}
              className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              Convert more
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
