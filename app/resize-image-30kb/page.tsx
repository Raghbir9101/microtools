import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-30kb'];

export const metadata: Metadata = {
  title: 'Resize Image to 30KB Online Free — Photo Compressor',
  description: 'Compress any image to exactly 30KB for exam forms, email submissions, and portals that require photos between 20KB and 50KB. Free, browser-based, instant.',
  keywords: 'resize image 30kb, compress photo 30kb online, 30kb image compressor, photo 30kb free',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-30kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-30kb' },
  },
  openGraph: {
    title: 'Resize Image to 30KB — Free Online Compressor',
    description: 'Compress photo to exactly 30KB for exam portals and form submissions. No uploads, instant.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Which exams or portals require 30KB images?',
    answer: 'Several state government exam boards, some UPSC prelims portals, certain university admission forms, and corporate application portals accept photos in the 20–50KB range. If your portal specifies "maximum 30KB", this tool is exactly what you need.',
  },
  {
    question: 'How is 30KB different from the SSC 20KB requirement?',
    answer: 'SSC typically caps photos at 20KB, while some other portals allow up to 30KB. A 30KB photo retains noticeably better quality than 20KB, giving a clearer image for identification while still meeting tight file size restrictions.',
  },
  {
    question: 'What is the tolerance for 30KB compression?',
    answer: 'Our algorithm targets ±2KB — so your file will be in the 28–32KB range. This is within acceptable limits for all portals that specify 30KB as the maximum.',
  },
  {
    question: 'Can I use this for signature compression?',
    answer: 'Yes. The tool works for both photos and scanned signatures. Upload your signature image and compress it to 30KB if your portal requires it for signature verification.',
  },
];

export default function Page30KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Resize Image to 30KB — Free Online Compressor"
      intro="Compress your photograph or document image to exactly 30KB for exam portals, email attachments, or any online form with a 30KB photo size restriction. Unlike the 20KB requirement typical for SSC exams, a 30KB limit lets you retain better image quality while still satisfying strict file size caps. Our free browser tool uses the Canvas API compression with a precise binary-search algorithm to reach 30KB within ±2KB. No software, no registration, no server upload — all processing runs locally in your browser for complete privacy."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 30KB"
        description="Upload your image and compress it to exactly 30KB. Suitable for state exam portals, university applications, and corporate form submissions."
        options={[{ size: 30, label: '30 KB', description: 'Standard target size (±2KB tolerance)' }]}
      />
    </ToolLayout>
  );
}
