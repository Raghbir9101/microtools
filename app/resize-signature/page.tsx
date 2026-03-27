import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-signature'];

export const metadata: Metadata = {
  title: 'Signature Resizer Online Free — Compress Signature to 10KB & 20KB',
  description: 'Resize your scanned signature to 10KB or 20KB for SSC, IBPS, SBI, UPSC, and Railway exam forms. Free, instant, browser-based — no uploads needed.',
  keywords: 'resize signature online, compress signature 20kb, signature resizer, signature size reducer, signature 10kb, scanned signature resize',
  alternates: { canonical: 'https://tools.draftly.co.in/resize-signature' },
  openGraph: {
    title: 'Signature Resizer — Compress to 10KB or 20KB Online Free',
    description: 'Compress your scanned signature to exact size for government exam forms. No upload, no signup.',
    type: 'website',
    url: 'https://tools.draftly.co.in/resize-signature',
  },
};

const faqs = [
  {
    question: 'What size should my signature be for SSC forms?',
    answer: 'SSC CGL, CHSL, MTS, and CPO forms typically require your signature to be under 20KB. Some older portals require 10–12KB. Always check the exact size in your official SSC notification before uploading.',
  },
  {
    question: 'What size should my signature be for IBPS/SBI bank exams?',
    answer: 'IBPS PO, IBPS Clerk, SBI PO, and SBI Clerk typically require signature images between 10KB and 20KB in JPEG format. Use our tool to compress your signature to exactly the required size.',
  },
  {
    question: 'What format should my signature be in?',
    answer: 'Most government portals require JPEG (.jpg) format for signatures. Our tool outputs JPEG by default, which is accepted by SSC, IBPS, SBI, UPSC, and Railway portals.',
  },
  {
    question: 'How do I scan my signature for online forms?',
    answer: 'Sign on white paper with a black pen. Use your phone camera or a scanner app to photograph it. Crop tightly around the signature, then use this tool to compress it to the required size.',
  },
  {
    question: 'Will compressing change how my signature looks?',
    answer: 'At 10–20KB, your signature will look nearly identical to the original on screen and in print. The compression is optimised to preserve edges and contrast — exactly what you need for identification purposes.',
  },
];

export default function ResizeSignature() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Signature Resizer — Compress to 10KB or 20KB"
      intro="Need to resize your scanned signature for an online application form? This free browser-based tool lets you compress your signature image to exactly 10KB or 20KB — the standard requirements for SSC, IBPS, SBI, UPSC, and Railway exam portals. Simply upload your signature JPG or PNG, select your target size, and download the compressed file instantly. All processing happens in your browser using the Canvas API — your signature is never uploaded to any server. Works on mobile and desktop."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Signature"
        description="Upload your scanned signature and compress it to the required size for your exam or bank form."
        options={[
          { size: 10, label: 'Signature — 10KB', description: 'Bank forms, SBI, smaller portals' },
          { size: 20, label: 'Signature — 20KB', description: 'SSC, IBPS, UPSC forms' },
        ]}
      />
    </ToolLayout>
  );
}
