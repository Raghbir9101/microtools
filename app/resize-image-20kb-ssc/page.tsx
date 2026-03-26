import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-20kb-ssc'];

export const metadata: Metadata = {
  title: 'Resize Image to 20KB for SSC Forms — Free Photo Compressor',
  description: TOOL.metaDescription,
  keywords: 'SSC image 20kb, resize photo 20kb SSC, SSC CGL photo size, SSC CHSL image compress, 20kb photo online',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-20kb-ssc',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-20kb-ssc' },
  },
  openGraph: {
    title: 'Resize Image to 20KB for SSC Forms',
    description: TOOL.metaDescription,
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the SSC image size requirement?',
    answer:
      'SSC (Staff Selection Commission) exam portals — including SSC CGL, CHSL, MTS, CPO, and GD — typically require candidate photographs within 20KB and signature scans within 10KB for online registration.',
  },
  {
    question: 'Will my compressed photo be accepted by SSC portal?',
    answer:
      'Yes. We compress to exactly 20KB (±2KB) in JPEG format, which meets SSC portal requirements. Ensure the dimensions are also within your notification — typically 3.5×4.5 cm for photos.',
  },
  {
    question: 'Which SSC exams require a 20KB photo?',
    answer:
      'SSC CGL, SSC CHSL (10+2), SSC CPO, SSC MTS, SSC GD Constable, SSC JHT, and Delhi Police exams all require 20KB photographs. Always verify with your specific exam admit card instructions.',
  },
  {
    question: 'Does compression reduce photo quality significantly?',
    answer:
      'Our algorithm reduces JPEG quality iteratively using binary search. At 20KB, colours and facial features remain clear for official identification — quality is acceptable for all govt portals.',
  },
  {
    question: 'Can I use this for signature image compression too?',
    answer:
      'Yes! Select the 10KB option if your signature needs to be under 10KB. This page is tuned for photos, but the compression logic works for signatures too.',
  },
  {
    question: 'How long does SSC image compression take?',
    answer:
      'Typically under 1 second. The entire process — binary search across 15 quality iterations — runs client-side in your browser without any server round-trips.',
  },
];

export default function PageSSC() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <ToolLayout
      h1="Resize Image to 20KB for SSC Forms"
      intro="Compress your photograph to exactly 20KB as required by SSC CGL, CHSL, CPO, MTS, and GD exam online registration portals. Our free browser-based tool uses advanced Canvas API compression with a binary search algorithm to hit the precise 20KB target within ±2KB tolerance — while preserving enough photo quality for official identification. No uploads, no server, no registration required. Your photo stays on your device at all times."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 20KB (SSC Form)"
        description="Upload your photograph and compress it to exactly 20KB as required by SSC exam portals. Works for SSC CGL, CHSL, CPO, MTS, and GD Constable applications."
        options={[{ size: 20, label: 'SSC Form — 20KB', description: 'Standard SSC exam portal requirement' }]}
      />
    </ToolLayout>
  );
}
