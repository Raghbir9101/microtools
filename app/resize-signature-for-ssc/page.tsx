import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Signature for SSC Exam — Compress to 10KB Free',
  description:
    'Compress your scanned signature to exactly 10KB for SSC CGL, CHSL, MTS, CPO forms. Free browser-based signature resizer — no upload, instant download.',
  keywords:
    'resize signature SSC, SSC signature 10kb, compress signature SSC CGL, SSC signature size requirement, signature too large SSC, SSC CHSL signature resize',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-signature-for-ssc',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-signature-for-ssc' },
  },
  openGraph: {
    title: 'Resize Signature for SSC — Compress to 10KB Free',
    description: 'Compress your signature scan to 10KB for all SSC exam portals. Free, browser-based signature resizer.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the SSC signature size requirement?',
    answer:
      'All SSC exams (CGL, CHSL, MTS, CPO, GD Constable) require a scanned signature in JPEG format, maximum 10KB file size, recommended dimensions 140×60 pixels.',
  },
  {
    question: 'How do I scan my signature for SSC?',
    answer:
      'Sign on white paper with a black or dark blue pen (use a slightly thick pen for better clarity). Options to digitise: (1) Use CamScanner / Microsoft Lens app on your phone — photograph the signature. (2) Use a flatbed scanner at 200–300 DPI. Crop tightly to the signature before uploading.',
  },
  {
    question: 'Can I resize a PNG signature for SSC?',
    answer:
      'SSC portals accept only JPEG. If your scan is PNG, use our PNG to JPG converter first, then compress to 10KB using this tool.',
  },
  {
    question: 'What should my SSC signature look like?',
    answer:
      'Sign clearly in your regular signature style — not too small, not too large. Black or dark blue ink on white paper. No pencil. Avoid extra lines or smudges around the signature. Sign on an unlined white page for best results.',
  },
  {
    question: 'Does the SSC portal verify the signature against my physical signature?',
    answer:
      'Yes, during the exam and document verification stage, your signature is compared against what you upload. Any significant mismatch can cause issues. Use your consistent day-to-day signature.',
  },
  {
    question: 'What if my signature image is already very small (under 5KB) but gets rejected?',
    answer:
      'Portals may reject files below a minimum size or below a minimum dimension. Ensure your signature image is at least 140×60 pixels. If it\'s too small in dimensions, use our Image Dimension Resizer to fix the size.',
  },
];

export default function PageSignatureSSC() {
  const relatedTools = getRelatedTools([
    'resize-signature',
    'resize-signature-ssc',
    'resize-image-20kb-ssc',
    'png-to-jpg',
  ]);

  return (
    <ToolLayout
      h1="Resize Signature for SSC Exam Forms"
      intro="Compress your scanned signature to exactly 10KB for all SSC exam portals — SSC CGL, CHSL, MTS, CPO, GD Constable, and JHT. SSC portals strictly enforce the 10KB maximum for signature uploads and will reject any file above this limit. Our browser-based compressor hits 10KB with ±2KB accuracy using Canvas API binary search. The signature file never leaves your device."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Signature to 10KB for SSC"
        description="Upload your scanned signature image and compress it to exactly 10KB for SSC CGL, CHSL, MTS, CPO, and GD Constable form submissions."
        options={[
          { size: 10, label: 'Signature — 10KB (SSC)', description: 'Standard SSC exam portal requirement' },
          { size: 20, label: 'Signature — 20KB (UPSC/Bank)', description: 'For UPSC, IBPS, SBI signature uploads' },
        ]}
      />
    </ToolLayout>
  );
}
