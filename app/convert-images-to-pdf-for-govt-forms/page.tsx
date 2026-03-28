import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import JpgToPdfTool from '@/components/JpgToPdfTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Convert Images to PDF for Govt Form Submission — Free Online',
  description:
    'Convert JPG, PNG images to a single PDF for government form submissions — Aadhar, PAN, certificates, marksheets. Free, browser-based, no upload.',
  keywords:
    'images to pdf govt forms, convert jpg to pdf for government, combine documents pdf india, jpg to pdf aadhar certificate, merge images pdf form submission',
  alternates: {
    canonical: 'https://tools.draftly.co.in/convert-images-to-pdf-for-govt-forms',
    languages: { 'en-IN': 'https://tools.draftly.co.in/convert-images-to-pdf-for-govt-forms' },
  },
  openGraph: {
    title: 'Convert Images to PDF for Govt Form Submission — Free',
    description: 'Combine photos of Aadhar, PAN, certificates into a single PDF for online form submissions. Free, browser-based.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Why do government portals ask for documents in PDF format?',
    answer:
      'PDF is the standard format for document portals because it preserves page layout, is universally readable, and cannot be easily edited. State government portals, court filings, scholarship portals, and CSC centres all require multi-document PDFs.',
  },
  {
    question: 'What documents can I convert to PDF for form submission?',
    answer:
      'Any scanned or photographed documents: Aadhar card, PAN card, marksheets, certificates, income certificate, caste certificate, domicile certificate, birth certificate, employment letter. Photograph each document clearly and convert here.',
  },
  {
    question: 'How do I scan documents with my phone for conversion?',
    answer:
      'Use Microsoft Lens (free) or CamScanner. Open the app, select "Document" mode, photograph each page. The app auto-crops and adjusts perspective. Save as JPEG for each page, then combine here into a single PDF.',
  },
  {
    question: 'What is the maximum PDF size accepted by government portals?',
    answer:
      'Most government portals accept PDFs between 1MB–5MB. IBPS allows up to 1MB PDFs. Central government scholarship portals allow 5MB. Compress individual JPEGs to 200KB each before converting to stay within limits.',
  },
  {
    question: 'Can I add a cover page or title to the PDF?',
    answer:
      'Our JPG to PDF tool creates a multi-page PDF from your images. For a cover page, create a plain document image with the title and add it as the first image in the sequence.',
  },
  {
    question: 'Does this tool work offline?',
    answer:
      'Yes. Once the page loads in your browser, the PDF conversion process uses PDF.js / browser APIs and does not require an active internet connection. Your files are never uploaded to any server.',
  },
];

export default function PageImagesToPDFGovt() {
  const relatedTools = getRelatedTools([
    'jpg-to-pdf',
    'merge-pdf',
    'pdf-to-jpg',
    'resize-image-200kb',
  ]);

  return (
    <ToolLayout
      h1="Convert Images to PDF for Government Form Submission"
      intro="Convert multiple JPEG/PNG photos of your documents — Aadhar card, PAN card, marksheets, certificates — into a single PDF for online form submissions. Government portals across India require documents merged into one PDF file with a size limit. Our JPG to PDF tool combines all your images into a clean multi-page PDF, completely in your browser with zero server uploads. No file size limit on input."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <JpgToPdfTool />
    </ToolLayout>
  );
}
