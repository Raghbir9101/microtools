import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import PdfToJpgTool from '@/components/PdfToJpgTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['pdf-to-jpg'];

export const metadata: Metadata = {
  title: 'PDF to JPG Converter Online Free — Extract PDF Pages as Images',
  description: 'Convert PDF pages to JPG images online free. Extract every page as a high-quality JPEG. Browser-based, no file uploads, instant conversion.',
  keywords: 'pdf to jpg converter, pdf to image online free, convert pdf to jpg, extract pdf pages as images, pdf to jpeg online, pdf page to image',
  alternates: { canonical: 'https://tools.draftly.co.in/pdf-to-jpg' },
  openGraph: {
    title: 'PDF to JPG Converter — Extract Pages as Images Free',
    description: 'Convert PDF pages to JPG images. Each page becomes a separate JPEG. No uploads.',
    type: 'website',
    url: 'https://tools.draftly.co.in/pdf-to-jpg',
  },
};

const faqs = [
  {
    question: 'How do I convert a PDF to JPG?',
    answer: 'Upload your PDF using the button above. The tool automatically converts every page to a high-quality JPG image. You can download individual pages or all pages at once.',
  },
  {
    question: 'What quality are the converted JPG images?',
    answer: 'Each page is rendered at 2× scale using the PDF.js engine, producing sharp, high-resolution JPEG images at 95% quality. Text and graphics are crisp and readable.',
  },
  {
    question: 'Can I convert just one page from a multi-page PDF?',
    answer: 'Yes — after conversion, each page is shown individually with its own Download button. You can download only the pages you need, or click "Download All" to get every page.',
  },
  {
    question: 'Is my PDF uploaded to a server?',
    answer: 'No. All conversion happens directly in your browser using the open-source PDF.js library. Your document never leaves your device.',
  },
  {
    question: 'Why would I convert a PDF to JPG?',
    answer: 'Common reasons: sharing a single page as an image on WhatsApp, posting a document scan to social media, checking how a page looks as an image, or using a page image in a presentation.',
  },
];

export default function PdfToJpg() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="PDF to JPG Converter — Extract Every Page as a JPG Image Free"
      intro="Convert any PDF file to JPG images online — one image per page. Upload your PDF and this tool will render each page using PDF.js (the same engine used by Firefox) at high resolution, then let you download individual pages or all pages at once as JPEG images. Completely browser-based — no server uploads, no account required, works on mobile and desktop."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <PdfToJpgTool />
    </ToolLayout>
  );
}
