import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-100kb-railway'];

export const metadata: Metadata = {
  title: 'Resize Image to 100KB for Railway Forms — Free Photo Compressor',
  description: TOOL.metaDescription,
  keywords: 'railway image 100kb, RRB photo size, compress image 100kb, RRB NTPC photo, railway form photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-100kb-railway',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-100kb-railway' },
  },
  openGraph: {
    title: 'Resize Image to 100KB for Railway Forms',
    description: TOOL.metaDescription,
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the Indian Railway photo size requirement?',
    answer:
      'Indian Railway Recruitment Board (RRB) exams require candidate photographs within 100KB for online applications. This is the standard photo size across RRB NTPC, Group D, ALP, JE, and other RRB exams.',
  },
  {
    question: 'Which Railway exams require a 100KB photo?',
    answer:
      'RRB NTPC, RRB Group D, RRB ALP (Loco Pilot), RRB JE (Junior Engineer), RRB Paramedical, and other Indian Railway recruitment exams require photos within 100KB. Always check your exam notification for exact specifications.',
  },
  {
    question: 'Does the merged Railway application portal accept 100KB photos?',
    answer:
      'Yes. The RRB online application system (oasis.rrbcdg.gov.in and other RRB portals) validates photos at 100KB. Our compressed output passes all standard RRB portal validations.',
  },
  {
    question: 'Is 100KB photo quality good enough for Railway ID verification?',
    answer:
      'Absolutely. At 100KB, a JPEG photo has excellent clarity. Colours, facial features, and background details are fully preserved — well above the minimum quality needed for official identification.',
  },
  {
    question: 'Can I use this for state PSC or other government job forms?',
    answer:
      'Yes. The 100KB preset works for BPSC, MPSC, TSPSC, UPPSC, RPSC, and many other state Public Service Commission exams that set a 100KB photo limit.',
  },
  {
    question: 'What should I do if my photo is already under 100KB?',
    answer:
      'If your photo is already within 100KB, you may not need to compress it. However, if the portal still rejects it, use our tool to compress to exactly 100KB — portal validators sometimes expect a specific size range, not just "under 100KB".',
  },
];

export default function PageRailway() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <ToolLayout
      h1="Resize Image to 100KB for Railway Forms"
      intro="Compress your photograph to exactly 100KB as required by Indian Railway Recruitment Board (RRB) exams — including RRB NTPC, Group D, ALP, and JE applications. Our free tool uses Canvas API-based binary search compression to reliably hit the 100KB target within ±2KB. At 100KB, photo quality is excellent — suitable for official Railway ID verification. Entirely browser-based, zero uploads, no registration."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 100KB (Railway Form)"
        description="Upload your photo and compress it to exactly 100KB as required by RRB/Railway exam portals. Works for RRB NTPC, Group D, ALP, JE, and other Indian Railway recruitment exams."
        options={[{ size: 100, label: 'Railway Form — 100KB', description: 'Standard RRB exam portal requirement' }]}
      />
    </ToolLayout>
  );
}
