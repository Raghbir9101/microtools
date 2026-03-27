import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-image-200kb'];

export const metadata: Metadata = {
  title: 'Resize Image to 200KB Online Free — Document Photo Compressor',
  description: 'Compress any image to exactly 200KB for university admissions, visa applications, and document portals. High quality preserved. Free, browser-based, no uploads.',
  keywords: 'resize image 200kb, compress photo 200kb online, 200kb image online free, university admission photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-200kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-200kb' },
  },
  openGraph: {
    title: 'Resize Image to 200KB — Free Online Compressor',
    description: 'Compress photo to exactly 200KB for university, visa, and document portal uploads. Browser-based.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'When do I need a 200KB image?',
    answer: 'University admission portals (DU, JNU, IITs, state universities), visa application websites, professional certification portals, and some corporate HR systems often accept photos up to 200KB or 500KB. The 200KB limit allows for good-quality images while keeping file sizes manageable.',
  },
  {
    question: 'What image quality can I expect at 200KB?',
    answer: 'At 200KB, image quality is excellent — nearly indistinguishable from the original for standard photo sizes. Colours are vivid, facial features are sharp, and the image is well-suited for official identification in university and visa applications.',
  },
  {
    question: 'How is this different from the Railway 100KB tool?',
    answer: 'The Railway 100KB tool targets RRB exam requirements. This 200KB tool is designed for university admissions, visa processing, and professional portals where a higher quality image is acceptable and often preferred.',
  },
  {
    question: 'Should I convert PNG to JPG before compressing to 200KB?',
    answer: 'Not necessarily — at 200KB, even PNG files compress well. However, converting to JPG first gives better file size control. Use our free PNG to JPG converter if you prefer JPG output.',
  },
];

export default function Page200KB() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Resize Image to 200KB — Free Online Compressor"
      intro="Compress your photograph or document image to exactly 200KB for university admissions, visa applications, and professional portal submissions. Many higher education portals — including university admission forms, state PG entrance exams, and visa application websites — accept photos in the 100KB–500KB range. At 200KB, your image retains excellent clarity and vivid colours, making it ideal for official ID purposes in high-stakes applications. Our browser-based tool compresses images client-side with zero server uploads — instant, private, and completely free."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 200KB"
        description="Upload your image and compress it to exactly 200KB. Perfect for university applications, visa portals, and document submissions requiring high-quality photos."
        options={[{ size: 200, label: '200 KB', description: 'High-quality target (±5KB tolerance)' }]}
      />
    </ToolLayout>
  );
}
