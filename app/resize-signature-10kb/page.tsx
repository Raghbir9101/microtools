import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-signature'];

export const metadata: Metadata = {
  title: 'Resize Signature to 10KB Online Free — Bank & Govt Forms',
  description: 'Compress your scanned signature to exactly 10KB for SBI, PNB, bank forms, and government portals requiring small signature files. Free, instant, browser-based.',
  keywords: 'resize signature to 10kb, compress signature 10kb, signature 10kb bank form, SBI signature 10kb, signature size reducer',
  alternates: { canonical: 'https://tools.draftly.co.in/resize-signature' },
  openGraph: {
    title: 'Resize Signature to 10KB — Free Online Signature Compressor',
    description: 'Compress signature image to 10KB for bank and government exam forms.',
    type: 'website', url: 'https://tools.draftly.co.in/resize-signature-10kb',
  },
};

const faqs = [
  {
    question: 'Which forms require a 10KB signature?',
    answer: 'Many state government job portals, cooperative bank exams, some state PSC boards, and older online application systems require signature files to be under 10KB or 12KB. Check your specific exam notification for the exact limit.',
  },
  {
    question: 'How to compress signature to 10KB without losing clarity?',
    answer: 'Use this tool — upload your signature image and select the 10KB option. Our Canvas API compression algorithm finds the optimal JPEG quality to reach 10KB while keeping the signature legible. Results are typically within ±1KB of the target.',
  },
  {
    question: 'What dimensions should a 10KB signature have?',
    answer: 'A 10KB JPEG signature typically fits in dimensions between 100×40 and 200×60 pixels. You do not need to manually resize (crop) the dimensions — just compress to 10KB and the portal will accept it.',
  },
];

export default function ResizeSignature10KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Resize Signature to 10KB Online Free"
      intro="Need your scanned signature compressed to 10KB for an online application form? This free tool uses the HTML Canvas API to reduce your signature image to exactly 10KB without any server uploads. Common for state PSC exams, cooperative bank applications, and older government portals that have strict small file size requirements. Upload any JPG or PNG, click compress, and download your 10KB signature instantly."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Signature to 10KB"
        description="Compress your signature image to exactly 10KB for bank exams and state govt portals."
        options={[
          { size: 10, label: 'Signature — 10KB', description: 'Bank forms, state PSC portals' },
          { size: 20, label: 'Signature — 20KB', description: 'SSC, IBPS forms' },
        ]}
      />
    </ToolLayout>
  );
}
