import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-100kb-railway'];

export const metadata: Metadata = {
  title: 'Resize Image to 100KB Online — Free Photo Compressor',
  description:
    'Free online tool to compress any image to exactly 100KB. Ideal for Railway (RRB) forms, state PSC exams, and government portals. 100% browser-based, instant, no upload required.',
  keywords:
    'resize image to 100kb, compress photo 100kb, 100kb image online, reduce image 100kb, railway form photo 100kb, RRB photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-100kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-100kb' },
  },
  openGraph: {
    title: 'Resize Image to 100KB Online — Free Photo Compressor',
    description:
      'Compress any photo to exactly 100KB for Railway forms, state PSC exams, and govt portals. Free, instant, browser-based.',
    type: 'website',
    url: 'https://tools.draftly.co.in/resize-image-100kb',
  },
};

const faqs = [
  {
    question: 'How do I compress a photo to exactly 100KB?',
    answer:
      'Upload your JPG or PNG image and click "Compress to 100KB". Our Canvas API binary search algorithm reduces JPEG quality in up to 15 iterations, converging on exactly 100KB (±2KB). Download the result instantly with one click.',
  },
  {
    question: 'Which exams require a 100KB photo?',
    answer:
      'RRB NTPC, RRB Group D, RRB ALP, RRB JE, BPSC, MPSC, TSPSC, UPPSC, SSC (sometimes), DSSSB, and many state government job portals require photos within 100KB. Always confirm with your exam notification.',
  },
  {
    question: 'Will a 100KB JPEG look good enough for official use?',
    answer:
      'Yes. At 100KB, a JPEG photo retains excellent clarity — this is a comfortable file size where compression artifacts are minimal. Your photo will look sharp and professional for identity verification purposes.',
  },
  {
    question: 'My photo is already 95KB. Do I still need to compress?',
    answer:
      'If the portal shows "maximum 100KB" and your file is already under that, you may not need to. However, some portals validate against a specific range. If uploads are rejected, use this tool to produce a file exactly at 100KB.',
  },
  {
    question: 'Can I use this for both photo and signature uploads?',
    answer:
      'Yes. Select 100KB for photos and, where required, use the 10KB or 20KB tools for signature image uploads. All tools use the same compression engine.',
  },
  {
    question: 'How is this page different from the Railway-specific 100KB page?',
    answer:
      'The compression logic is identical. This page covers all exams requiring 100KB, while the Railway-specific page includes RRB exam lists and Railway portal-specific guidance.',
  },
];

export default function ResizeImage100KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);

  return (
    <ToolLayout
      h1="Resize Image to 100KB Online — Free Compressor"
      intro="Instantly compress your photo to exactly 100KB for Railway (RRB) applications, state PSC forms, DSSSB, or any portal with a 100KB image limit. This free, browser-based tool uses Canvas API compression with binary search — achieving 100KB within ±2KB in under a second. Excellent photo quality is preserved at this file size. No server uploads, no account needed, fully private. Works on desktop and mobile browsers."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 100KB"
        description="Upload your photo and compress it to exactly 100KB for Railway forms, state PSC applications, or any portal requiring a 100KB image."
        options={[{ size: 100, label: 'Railway / PSC — 100KB', description: 'Standard RRB & state PSC requirement' }]}
      />
    </ToolLayout>
  );
}
