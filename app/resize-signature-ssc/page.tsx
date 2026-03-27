import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { TOOL_BY_SLUG, getRelatedTools } from '@/lib/tools';

const TOOL = TOOL_BY_SLUG['resize-signature'];

export const metadata: Metadata = {
  title: 'Resize Signature to 20KB for SSC Online — Free Tool',
  description: 'Compress your scanned signature to exactly 20KB for SSC CGL, CHSL, MTS, CPO, and GD exam forms. Free, instant, no uploads. Works on all devices.',
  keywords: 'resize signature to 20kb for SSC, SSC signature size 20kb, compress signature SSC, SSC CGL signature upload, signature 20kb SSC exam',
  alternates: { canonical: 'https://tools.draftly.co.in/resize-signature' },
  openGraph: {
    title: 'Resize Signature to 20KB for SSC — Free Online Tool',
    description: 'Compress signature to 20KB for SSC CGL, CHSL, MTS online application forms. Free, instant.',
    type: 'website',
    url: 'https://tools.draftly.co.in/resize-signature-ssc',
  },
};

const faqs = [
  {
    question: 'What is the signature size requirement for SSC exams?',
    answer: 'SSC CGL, CHSL, MTS, CPO, and GD portals require your signature to be in JPEG format, maximum 20KB, with dimensions between 140×60 pixels to 220×60 pixels approximately. The exact size varies slightly per notification — always verify with your specific SSC exam advertisement.',
  },
  {
    question: 'How do I make my signature image exactly 20KB for SSC?',
    answer: 'Upload your signature image here, select "Signature — 20KB", and click compress. Our binary search algorithm adjusts JPEG quality automatically to reach exactly 20KB (within ±2KB tolerance). Then download and upload directly to the SSC portal.',
  },
  {
    question: 'Can I upload a smartphone photo of my signature?',
    answer: 'Yes. Sign on plain white paper with a black/dark ink pen, take a clear photo with your phone in good lighting, crop the image tightly around the signature, then upload it here to compress to 20KB.',
  },
  {
    question: 'Which SSC exams need signature in 20KB?',
    answer: 'SSC CGL (Combined Graduate Level), SSC CHSL (Combined Higher Secondary Level), SSC MTS (Multi Tasking Staff), SSC CPO (Central Police Organisation), SSC GD Constable, and most state SSC exams require signature images under 20KB.',
  },
  {
    question: 'What if my signature is already under 20KB?',
    answer: "If your signature photo is already under 20KB, it may still be worth compressing — portals sometimes reject files not in the exact JPEG format. Upload it anyway and download the properly formatted JPEG output.",
  },
];

export default function ResizeSignatureSSC() {
  const relatedTools = getRelatedTools(TOOL.relatedSlugs);
  return (
    <ToolLayout
      h1="Resize Signature to 20KB for SSC Online Forms"
      intro="Applying for SSC CGL, CHSL, MTS, or CPO? Most SSC portals require your scanned signature to be in JPEG format, under 20KB. This free browser-based tool compresses your signature image to exactly 20KB using the Canvas API — no server uploads, no registration required. Just upload your signature photo (JPG or PNG), click compress, and download the 20KB JPEG ready to upload directly to the SSC CHSL or CGL application portal."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Signature to 20KB (SSC)"
        description="Upload your scanned signature and compress it to exactly 20KB for SSC CGL, CHSL, MTS, and CPO application forms."
        options={[
          { size: 20, label: 'SSC Signature — 20KB', description: 'Standard SSC portal requirement' },
          { size: 10, label: 'Signature — 10KB', description: 'Some portals require smaller size' },
        ]}
      />
    </ToolLayout>
  );
}
