import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['signature-resize-20kb'];

export const metadata: Metadata = {
  title: 'Resize Signature to 20KB Online Free (UPSC, Bank, Railway)',
  description: 'Compress scanned signature to exactly 20KB for UPSC, SBI, IBPS, RRB, and state PSC form uploads. Free, browser-based, instant. No upload to server.',
  keywords: 'resize signature 20kb, compress signature UPSC, signature size 20kb online, UPSC signature compressor, bank exam signature size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/signature-resize-20kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/signature-resize-20kb' },
  },
  openGraph: {
    title: 'Resize Signature to 20KB — UPSC, Bank, Railway Forms',
    description: 'Compress signature to exactly 20KB for UPSC, SBI, IBPS, RRB applications. Free, browser-based.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Which exams require a 20KB signature?',
    answer: 'UPSC Civil Services, UPSC CMS, SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, RRB NTPC, and many state PSC exams require candidate signatures in the 10–20KB range. For SSC, the limit is usually 10KB. Always check your official exam notification for the exact specification.',
  },
  {
    question: 'How should I scan my signature for the form?',
    answer: 'Sign on plain white paper using a black or dark blue pen. Scan it in colour or greyscale at 100–200 DPI. Alternatively, take a close-up photo of the signature in good light. Crop tightly around the signature, then upload and compress to 20KB here.',
  },
  {
    question: 'What dimensions should the signature image be?',
    answer: 'Most exam portals require signature dimensions around 140×60 pixels to 280×120 pixels. Use our Image Dimension Resizer to set exact pixel dimensions before compressing to 20KB.',
  },
  {
    question: 'Is a 20KB signature acceptable for all bank exams?',
    answer: 'Most bank exams including IBPS and SBI allow signatures between 10KB and 20KB. Some portals allow up to 50KB. Always verify the maximum size from the portal\'s "Instructions" section before uploading.',
  },
  {
    question: 'What if my signature looks blurry at 20KB?',
    answer: 'Start from a high-resolution scan. A 300KB–1MB signature scan will compress to 20KB with very good clarity. If you start with a low-quality image, quality loss is more visible. Re-scan at higher resolution if possible.',
  },
];

export default function SignatureResize20KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Resize Signature to 20KB — UPSC, Bank & Railway Forms"
      intro="Compress your scanned signature to exactly 20KB for UPSC, SBI, IBPS, RRB, and state PSC exam form submissions. Many government job application portals — especially UPSC and banking exams — require signature images between 10KB and 20KB in JPG format. Our free browser-based tool uses the Canvas API to hit the 20KB target precisely (±2KB tolerance) while keeping your signature sharp and readable. Works with both scanned signatures and smartphone photos of signatures. No server upload, no registration, 100% private — your signature image never leaves your device."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Signature to 20KB"
        description="Upload your scanned signature and compress it to exactly 20KB. Suitable for UPSC, SBI PO, IBPS, RRB NTPC, and state PSC exam signature upload requirements."
        options={[{ size: 20, label: 'Signature — 20KB', description: 'UPSC / Bank / Railway requirement' }]}
      />
    </ToolLayout>
  );
}
