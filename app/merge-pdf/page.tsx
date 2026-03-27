import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import PdfMergeTool from '@/components/PdfMergeTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['merge-pdf'];
export const metadata: Metadata = {
  title: 'Merge PDF Files Online Free — Combine PDFs in One Click',
  description: 'Merge multiple PDF files into one online free. No uploads to server, browser-based, no account needed. Combine PDFs for govt submissions, work, and academia.',
  keywords: 'merge pdf files online free, combine pdf files, pdf merger online, merge pdf online, join pdf files free, combine two pdf online',
  alternates: { canonical: 'https://tools.draftly.co.in/merge-pdf' },
  openGraph: { title: 'Merge PDF Files Free Online — Combine in One Click', description: 'Combine multiple PDFs into one document. Browser-based, no uploads, instant.', type: 'website', url: 'https://tools.draftly.co.in/merge-pdf' },
};

const faqs = [
  { question: 'How do I merge PDF files online?', answer: 'Click "Upload PDFs", select multiple files (or add them one by one). Reorder them using the up/down arrows. Click "Merge PDFs" and download the combined document.' },
  { question: 'Is there a limit on how many PDFs I can merge?', answer: 'No hard limit — you can merge as many PDFs as needed. For very large files (100MB+), processing may take a few seconds. All processing happens in your browser using pdf-lib.' },
  { question: 'Are merged PDFs safe? Are they uploaded anywhere?', answer: 'Completely safe. All PDF merging happens in your browser using the pdf-lib library. Your files never leave your device. No server, no cloud storage, no privacy risk.' },
  { question: 'Will merged PDF work with all PDF viewers?', answer: 'Yes — the output is a standard PDF 1.7 compatible file that works with Adobe Acrobat, Windows PDF viewer, Chrome, Firefox, and all standard PDF applications.' },
  { question: 'Can I merge password-protected PDFs?', answer: 'No — the tool requires non-encrypted PDFs. Remove password protection first using Adobe Acrobat or another PDF tool before merging.' },
];

export default function MergePdf() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="PDF Merger — Combine Multiple PDF Files Online Free"
      intro="Merge multiple PDF documents into a single file in seconds, entirely in your browser. No registration, no file upload to any external server — it uses the pdf-lib library running locally on your device. Perfect for combining multiple scanned documents for government form submissions, academic applications, or work portfolios. Add PDFs in any order, reorder them with up/down arrows, and download the combined PDF instantly."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <PdfMergeTool />
    </ToolLayout>
  );
}
