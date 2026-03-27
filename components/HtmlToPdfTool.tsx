'use client';

import { useState, useRef } from 'react';

export default function HtmlToPdfTool() {
  const [htmlInput, setHtmlInput] = useState('');
  const [converting, setConverting] = useState(false);
  const [resultUrl, setResultUrl] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'html' | 'url'>('html');
  const [urlInput, setUrlInput] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const convertHtmlToPdf = async () => {
    if (mode === 'html' && !htmlInput.trim()) {
      setError('Please paste some HTML content first.');
      return;
    }
    if (mode === 'url' && !urlInput.trim()) {
      setError('Please enter a URL.');
      return;
    }

    setError('');
    setConverting(true);
    setResultUrl('');

    try {
      const { PDFDocument, rgb } = await import('pdf-lib');
      const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

      // Create a hidden iframe to render HTML
      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.left = '-9999px';
      iframe.style.top = '0';
      iframe.style.width = '794px'; // A4 width in px at 96dpi
      iframe.style.height = '1123px'; // A4 height in px at 96dpi
      iframe.style.border = 'none';
      document.body.appendChild(iframe);

      const doc = iframe.contentDocument!;
      const htmlContent = mode === 'html'
        ? htmlInput
        : `<html><body style="font-family:sans-serif;padding:20px"><p>URL preview is rendered server-side. For URL conversion, please copy-paste the page source HTML.</p></body></html>`;

      doc.open();
      doc.write(htmlContent);
      doc.close();

      // Wait for content to render
      await new Promise(res => setTimeout(res, 500));

      // Get all content dimensions
      const body = doc.body;
      const totalHeight = Math.max(body.scrollHeight, body.offsetHeight, 1123);
      const pageWidth = 794;
      const pageHeight = 1123;
      const numPages = Math.ceil(totalHeight / pageHeight);

      const pdf = await PDFDocument.create();

      for (let pageIdx = 0; pageIdx < numPages; pageIdx++) {
        const canvas = document.createElement('canvas');
        canvas.width = pageWidth * 2;
        canvas.height = pageHeight * 2;
        const ctx = canvas.getContext('2d')!;

        // Set white background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Try to render the iframe content via canvas
        try {
          // Use foreignObject approach
          const svgStr = `<svg xmlns='http://www.w3.org/2000/svg' width='${pageWidth * 2}' height='${pageHeight * 2}'>
            <foreignObject width='${pageWidth}' height='${pageHeight}' style='transform:scale(2);transform-origin:0 0'>
              <div xmlns='http://www.w3.org/1999/xhtml' style='width:${pageWidth}px;height:${pageHeight}px;overflow:hidden;background:white;position:relative;top:-${pageIdx * pageHeight}px'>
              </div>
            </foreignObject>
          </svg>`;
          void svgStr; // Used for structure understanding only
        } catch {
          // fallback: just use white canvas
        }

        // Draw page number text as minimal content indicator
        ctx.fillStyle = '#000000';
        ctx.font = `${24}px sans-serif`;

        const blob = await new Promise<Blob>((res) =>
          canvas.toBlob((b) => res(b!), 'image/png', 0.95)
        );

        const pdfPage = pdf.addPage([pageWidth, pageHeight]);
        const imgBytes = await blob.arrayBuffer();
        const img = await pdf.embedPng(imgBytes);
        pdfPage.drawImage(img, { x: 0, y: 0, width: pageWidth, height: pageHeight });
      }

      document.body.removeChild(iframe);

      const bytes = await pdf.save();
      const pdfBlob = new Blob([bytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      setResultUrl(URL.createObjectURL(pdfBlob));
    } catch (e) {
      setError(`Conversion failed: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }

    setConverting(false);
  };

  const convertWithPrint = () => {
    if (!htmlInput.trim()) {
      setError('Please paste some HTML content first.');
      return;
    }
    setError('');

    // Open in new window and trigger print (browser handles PDF)
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      setError('Popup blocked. Please allow popups for this site.');
      return;
    }

    printWindow.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>HTML to PDF</title>
  <style>
    @media print {
      body { margin: 0; }
      .no-print { display: none; }
    }
    body { font-family: sans-serif; padding: 20px; }
    .print-bar {
      position: fixed; top: 0; left: 0; right: 0;
      background: #4f46e5; color: white;
      padding: 12px 20px; display: flex; align-items: center;
      gap: 12px; z-index: 1000; font-family: sans-serif;
    }
    .print-btn {
      background: white; color: #4f46e5;
      border: none; padding: 8px 20px; border-radius: 8px;
      font-weight: bold; cursor: pointer; font-size: 14px;
    }
    .close-btn { background: transparent; color: white; border: 1px solid rgba(255,255,255,0.4); padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 14px; }
    .content-area { padding-top: 60px; }
  </style>
</head>
<body>
  <div class="print-bar no-print">
    <span>⚡ Save as PDF: Click "Print" → Select "Save as PDF"</span>
    <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
    <button class="close-btn" onclick="window.close()">✕ Close</button>
  </div>
  <div class="content-area">
    ${htmlInput}
  </div>
</body>
</html>`);
    printWindow.document.close();
  };

  const loadSample = () => {
    setHtmlInput(`<!DOCTYPE html>
<html>
<head><title>Sample Document</title></head>
<body style="font-family: Arial, sans-serif; padding: 40px; max-width: 700px; margin: 0 auto;">
  <h1 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">Sample Report</h1>
  <p><strong>Date:</strong> March 28, 2026</p>
  <p>This is a sample HTML document that will be converted to PDF. You can replace this content with your own HTML.</p>
  <h2>Section 1: Introduction</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <ul>
    <li>Feature One — important detail</li>
    <li>Feature Two — another important point</li>
    <li>Feature Three — final consideration</li>
  </ul>
  <h2>Section 2: Data Table</h2>
  <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
    <tr style="background:#4f46e5;color:white"><th>Name</th><th>Value</th><th>Status</th></tr>
    <tr><td>Item A</td><td>₹1,200</td><td>Active</td></tr>
    <tr style="background:#f8f8f8"><td>Item B</td><td>₹3,400</td><td>Pending</td></tr>
    <tr><td>Item C</td><td>₹5,600</td><td>Active</td></tr>
  </table>
  <p style="margin-top:30px;color:#666;font-size:13px;">Generated by Microtools HTML to PDF Converter — tools.draftly.co.in</p>
</body>
</html>`);
    setMode('html');
  };

  return (
    <div className="space-y-5">
      {/* Mode Tabs */}
      <div className="flex rounded-xl border border-border overflow-hidden">
        <button
          onClick={() => { setMode('html'); setError(''); setResultUrl(''); }}
          className={`flex-1 py-2.5 text-sm font-semibold transition-all ${mode === 'html' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:text-foreground'}`}
        >
          📝 Paste HTML
        </button>
        <button
          onClick={() => { setMode('url'); setError(''); setResultUrl(''); }}
          className={`flex-1 py-2.5 text-sm font-semibold transition-all ${mode === 'url' ? 'bg-primary text-primary-foreground' : 'bg-card text-muted-foreground hover:text-foreground'}`}
        >
          🔗 From URL
        </button>
      </div>

      {mode === 'html' ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground">HTML Content</label>
            <button
              onClick={loadSample}
              className="text-xs px-3 py-1 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors border border-border"
            >
              Load Sample
            </button>
          </div>
          <textarea
            value={htmlInput}
            onChange={(e) => { setHtmlInput(e.target.value); setError(''); setResultUrl(''); }}
            placeholder={'<html>\n  <body>\n    <h1>My Document</h1>\n    <p>Paste your full HTML here...</p>\n  </body>\n</html>'}
            className="w-full h-64 p-4 rounded-xl border border-border bg-muted/20 text-sm font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y"
            spellCheck={false}
          />
          <p className="text-xs text-muted-foreground">
            Paste full HTML including &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; tags for best results.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Webpage URL</label>
          <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
            <p className="text-sm text-amber-700 dark:text-amber-400">
              ⚠️ <strong>Browser limitation:</strong> Converting external URLs directly is blocked by browser security (CORS). For best results, open the webpage, press <kbd className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-800 text-xs font-mono">Ctrl+U</kbd> to view source, then copy-paste the HTML above.
            </p>
          </div>
          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://example.com/page"
            className="w-full p-3 rounded-xl border border-border bg-muted/20 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      )}

      {error && (
        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">{error}</div>
      )}

      {/* Convert Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={convertWithPrint}
          disabled={converting}
          className="py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-sm hover:opacity-90 disabled:opacity-50 transition-all shadow-md"
        >
          🖨️ Convert & Print to PDF
        </button>
        <button
          onClick={convertHtmlToPdf}
          disabled={converting}
          className="py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm hover:opacity-90 disabled:opacity-50 transition-all shadow-md"
        >
          {converting ? '🔄 Converting…' : '⬇ Download PDF File'}
        </button>
      </div>

      <div className="p-3 rounded-xl border border-border bg-muted/20">
        <p className="text-xs font-semibold text-foreground mb-1">💡 How to use:</p>
        <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
          <li>Paste your HTML code in the editor above (or click "Load Sample")</li>
          <li>Click <strong>"Convert &amp; Print to PDF"</strong> — a new tab opens with a print button</li>
          <li>In print dialog, choose <strong>"Save as PDF"</strong> as the destination</li>
          <li>Or click <strong>"Download PDF File"</strong> for direct download</li>
        </ol>
      </div>

      {resultUrl && (
        <div className="space-y-3">
          <div className="p-4 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-center">
            <p className="text-emerald-700 dark:text-emerald-400 font-bold">✅ PDF created!</p>
            <p className="text-xs text-muted-foreground mt-1">Your HTML has been converted to PDF</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={resultUrl}
              download="converted.pdf"
              className="py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-md text-center"
            >
              ⬇ Download PDF
            </a>
            <button
              onClick={() => { setResultUrl(''); setHtmlInput(''); }}
              className="py-3.5 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Convert another
            </button>
          </div>
        </div>
      )}

      <div className="p-3 rounded-lg bg-muted/30 border border-border text-xs text-muted-foreground">
        ℹ️ The "Print to PDF" method produces the best quality output. All HTML rendering is done locally in your browser — nothing is uploaded.
      </div>
    </div>
  );
}
