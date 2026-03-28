import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import JpgToPdfTool from '@/components/JpgToPdfTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Convert Images to PDF for Job Application — Free Online Tool',
  description:
    'Combine resume, experience letter, certificates, and marksheets into a single PDF for job applications. Free browser-based JPG to PDF converter, no uploads.',
  keywords:
    'images to pdf job application, combine documents for job apply, resume certificates into pdf, experience letter pdf converter, marksheet pdf for job application',
  alternates: {
    canonical: 'https://tools.draftly.co.in/jpg-to-pdf-for-bank-documents',
    languages: { 'en-IN': 'https://tools.draftly.co.in/jpg-to-pdf-for-bank-documents' },
  },
  openGraph: {
    title: 'Convert Images to PDF for Job Application — Free',
    description: 'Combine resume, certificates, experience letters into a single PDF for job and bank applications. Free, browser-based.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What documents do I need to upload for a bank job application?',
    answer:
      'Typical bank (IBPS/SBI) document upload requirements: 10th marksheet, 12th marksheet, graduation certificate, identity proof (Aadhar/PAN), residence proof, caste certificate (if applicable), experience certificate. All in a single PDF under 2MB.',
  },
  {
    question: 'What is the PDF size limit for IBPS document upload?',
    answer:
      'IBPS document upload portal typically accepts PDFs up to 1MB. To stay within this limit, compress each JPEG to 100KB before converting to PDF. A 10-page PDF at 100KB per image is roughly 1MB.',
  },
  {
    question: 'How do I combine my resume and certificates into one PDF?',
    answer:
      'Option 1: If your resume is already a PDF, use our Merge PDF tool to combine the resume PDF with the certificate PDF. Option 2: If everything is JPEG images, upload all images here in the correct order and download as a single multi-page PDF.',
  },
  {
    question: 'What order should I put my documents in the PDF?',
    answer:
      'Standard order: 1. Identity proof (Aadhar/PAN), 2. Education certificates (10th, 12th, graduation, latest first), 3. Experience letters, 4. Category certificate (OBC/SC/ST if applicable), 5. Address proof. Follow the specific portal instructions if provided.',
  },
  {
    question: 'Can I add a passport photo to my application PDF?',
    answer:
      'Yes. After compressing your passport photo to the required KB using our compressor, you can include it as an image page at the beginning of your PDF using this tool.',
  },
  {
    question: 'My total PDF is above the portal limit — how to reduce?',
    answer:
      'Compress each individual JPEG image first (use our 100KB or 200KB compressor), then convert to PDF. Alternatively, use Merge PDF only after compressing each source document independently.',
  },
];

export default function PageImagesToPDFBank() {
  const relatedTools = getRelatedTools([
    'jpg-to-pdf',
    'merge-pdf',
    'resize-image-200kb',
    'resize-image-100kb-railway',
  ]);

  return (
    <ToolLayout
      h1="Convert Images to PDF for Job & Bank Applications"
      intro="Combine your resume, educational certificates, experience letters, and marksheets into a single PDF for job applications — IBPS, SBI, government PSU, and private sector applications. Government job portals have strict PDF size limits (usually 1–2MB) and specific document order requirements. Convert all your JPEGs here into a perfectly ordered multi-page PDF, ready to upload. Runs entirely in your browser."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <JpgToPdfTool />
    </ToolLayout>
  );
}
