import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-10kb'];

export const metadata: Metadata = {
  title: 'Resize Image to 10KB — Free Online Compressor',
  description: TOOL.metaDescription,
  keywords: 'resize image 10kb, compress image 10kb, 10kb photo online, govt form 10kb image',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-10kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-10kb' },
  },
  openGraph: {
    title: 'Resize Image to 10KB — Free Online Compressor',
    description: TOOL.metaDescription,
    type: 'website',
  },
};

const faqs = [
  {
    question: 'How does the 10KB compression work?',
    answer:
      'Our tool uses the HTML Canvas API with a binary search algorithm to iteratively reduce image quality until it reaches exactly 10KB (±2KB). All processing happens in your browser — no file is ever uploaded.',
  },
  {
    question: 'Which image formats are supported?',
    answer:
      'JPG, JPEG, and PNG are supported. The compressed output is always saved as JPEG for maximum compression efficiency.',
  },
  {
    question: 'Is my image data secure?',
    answer:
      'Completely secure. Compression happens locally in your browser using the Canvas API. We never upload, store, or access your files.',
  },
  {
    question: 'Why do some govt forms require 10KB?',
    answer:
      'Many government portals set strict file-size caps — often 10KB for signature images and 20–100KB for passport-style photos — to reduce server load and storage costs.',
  },
  {
    question: 'What if my image cannot reach exactly 10KB?',
    answer:
      'We allow a ±2KB tolerance (8–12KB range). If the image content makes exact compression impossible, we show you the closest size achieved and still let you download it.',
  },
  {
    question: 'Can I compress other sizes with this tool?',
    answer:
      'This page targets 10KB. Use our SSC (20KB), UPSC (50KB), or Railway (100KB) tools for other common government exam requirements.',
  },
];

export default function Page10KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <ToolLayout
      h1="Resize Image to 10KB — Free Online Compressor"
      intro="Compress your image to exactly 10KB for government form submissions, email attachments, or any portal with a strict 10KB image size limit. Our free browser-based tool uses the Canvas API with an advanced binary search algorithm to reach your target size within ±2KB. Works with JPG and PNG files. No upload, no registration, instant results — your photo never leaves your device."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 10KB"
        description="Upload your image and compress it to exactly 10KB. Ideal for profile photos, signatures, and documents required by government forms."
        options={[{ size: 10, label: '10 KB', description: 'Exact target size (±2KB tolerance)' }]}
      />
    </ToolLayout>
  );
}
