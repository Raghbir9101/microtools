import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import JpgToPdfTool from '@/components/JpgToPdfTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['jpg-to-pdf'];
export const metadata: Metadata = {
  title: 'JPG to PDF Converter Online Free — Convert Images to PDF',
  description: 'Convert JPG, PNG, or WebP images to PDF online free. Combine multiple photos into one PDF. Browser-based, no uploads to server, instant conversion.',
  keywords: 'jpg to pdf converter, convert jpg to pdf online free, image to pdf, photos to pdf online, jpeg to pdf free, multiple images to pdf',
  alternates: { canonical: 'https://tools.draftly.co.in/jpg-to-pdf' },
  openGraph: { title: 'JPG to PDF Converter — Images to PDF Free Online', description: 'Convert photos to PDF or combine multiple images into one PDF. No uploads.', type: 'website', url: 'https://tools.draftly.co.in/jpg-to-pdf' },
};

const faqs = [
  { question: 'How do I convert JPG to PDF?', answer: 'Click Upload, select one or more JPG/PNG images. Each image becomes one page in the PDF. Click "Convert to PDF" and download. Multiple images are combined into a single multi-page PDF.' },
  { question: 'Can I convert multiple images to one PDF?', answer: 'Yes — add as many images as needed. Each image becomes one PDF page in the order you uploaded them. You can remove unwanted images before converting.' },
  { question: 'What image formats are supported?', answer: 'JPG, PNG, and WebP images are all supported. PNG images with transparency are converted with a white background (as required by PDF format).' },
  { question: 'Why do I need JPG to PDF?', answer: 'Government portals often require documents in PDF format. When you have multiple scanned pages as JPG images, converting them to a single PDF makes submission easier and keeps documents organized.' },
  { question: 'Are my images uploaded to any server?', answer: 'No — all conversion happens in your browser using the pdf-lib library. Your images never leave your device.' },
];

export default function JpgToPdf() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="JPG to PDF Converter — Convert Photos to PDF Free Online"
      intro="Convert one or multiple JPG images to a PDF document instantly in your browser. Ideal for government applications requiring scanned documents as PDF — combine your separate photo scans into one organized PDF file. Supports JPG, PNG, and WebP images. Each image becomes one full page in the resulting PDF. Uses the pdf-lib browser library — no server uploads, completely private."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <JpgToPdfTool />
    </ToolLayout>
  );
}
