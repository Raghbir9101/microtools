import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-50kb-upsc'];

export const metadata: Metadata = {
  title: 'Resize Image to 50KB for UPSC Forms — Free Photo Compressor',
  description: TOOL.metaDescription,
  keywords: 'UPSC image 50kb, resize photo 50kb UPSC, UPSC CSE photo size, compress image 50kb, UPSC online form image',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-50kb-upsc',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-50kb-upsc' },
  },
  openGraph: {
    title: 'Resize Image to 50KB for UPSC Forms',
    description: TOOL.metaDescription,
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the UPSC photo size requirement?',
    answer:
      'UPSC requires candidate photographs to be within 40KB–300KB for most exams, with 50KB being the most commonly cited upper limit for JPEGs. Always verify with your specific UPSC exam notification.',
  },
  {
    question: 'Which UPSC exams require a 50KB photo?',
    answer:
      'UPSC Civil Services (IAS/IPS/IFS), UPSC CMS, UPSC ESE, UPSC CISF, and UPSC NDA/CDS exams all require 50KB or smaller photographs for online applications.',
  },
  {
    question: 'Will the compressed photo pass UPSC portal validation?',
    answer:
      'Yes. We compress to 50KB (±2KB) in JPEG format. UPSC portals validate by file size; our output consistently passes. Ensure dimensions match your notification (typically 3.5×4.5 cm at 300 DPI).',
  },
  {
    question: 'How accurate is the 50KB compression?',
    answer:
      'Our binary search algorithm iterates up to 15 times to achieve exactly 50KB within ±2KB tolerance (48–52KB). This guarantees your file meets UPSC size requirements.',
  },
  {
    question: 'Does my image quality remain acceptable at 50KB?',
    answer:
      'Yes. At 50KB, a JPEG photo retains excellent clarity — faces, colours, and fine details are preserved. Quality at 50KB is noticeably better than 20KB files.',
  },
  {
    question: 'Can I use this tool for bank exam forms?',
    answer:
      'Absolutely. The 50KB preset works for IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and other banking exam portals that accept photos up to 50KB.',
  },
];

export default function PageUPSC() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <ToolLayout
      h1="Resize Image to 50KB for UPSC Forms"
      intro="Compress your photograph to exactly 50KB as required by UPSC Civil Services, CMS, Engineering Services, and other UPSC exam online portals. Our free browser-based tool applies Canvas API compression with a binary search technique — reliably hitting 50KB within ±2KB. Excellent photo quality is preserved at this file size, making it suitable for official government identification. No server uploads, no account required, fully private."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 50KB (UPSC Form)"
        description="Upload your photo and compress it to exactly 50KB as required by UPSC exam portals. Works for UPSC CSE, CMS, ESE, NDA, CDS, and other UPSC recruitment exams."
        options={[{ size: 50, label: 'UPSC Form — 50KB', description: 'Standard UPSC exam portal requirement' }]}
      />
    </ToolLayout>
  );
}
