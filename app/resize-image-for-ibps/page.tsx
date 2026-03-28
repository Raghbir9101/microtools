import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for IBPS PO / Clerk Exam — Compress Photo to 50KB Free',
  description:
    'Compress your photo to exactly 50KB for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, and SBI Clerk exam form submissions. Free, browser-based, no uploads.',
  keywords:
    'IBPS image size 50kb, resize photo IBPS PO, IBPS clerk photo size, SBI PO image compress, bank exam photo size, compress image 50kb bank',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-ibps',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-ibps' },
  },
  openGraph: {
    title: 'Resize Image for IBPS / SBI Exam — Compress Photo to 50KB Free',
    description:
      'Free photo compressor for IBPS PO, IBPS Clerk, SBI PO, and bank exam applications. Compress to 50KB instantly.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size requirement for IBPS PO?',
    answer:
      'IBPS PO requires a scanned photograph of 20KB–50KB in JPEG format. The dimensions should be approximately 200×230 pixels. Anything above 50KB may be rejected by the IBPS application portal.',
  },
  {
    question: 'What is the IBPS Clerk photo size requirement?',
    answer:
      'IBPS Clerk exam requires the same as IBPS PO: photograph between 20KB and 50KB. Signature scans should be between 10KB and 20KB in JPEG format.',
  },
  {
    question: 'What is the SBI PO and SBI Clerk photo size requirement?',
    answer:
      'SBI PO and SBI Clerk require a JPEG photograph between 20KB and 50KB with dimensions of 200×230 pixels. Signature should be 10KB–20KB and 140×60 pixels.',
  },
  {
    question: 'Which bank exams use the 50KB photo requirement?',
    answer:
      'Most IBPS-affiliated exams (PO, Clerk, SO, RRB Officer, RRB Office Assistant) and SBI exams (PO, Clerk, SO) require photographs under 50KB. Also applies to RBI Grade B, NABARD, and most nationalised bank recruitment.',
  },
  {
    question: 'Will a 50KB JPEG photo be clear enough for identification?',
    answer:
      'Yes. A JPEG at 50KB and dimensions of 200×230 pixels provides more than sufficient clarity for official identification. The face, features, and background are clearly visible at this size.',
  },
  {
    question: 'What colour should the background of my IBPS photo be?',
    answer:
      'IBPS requires a plain white background for the photograph. Avoid coloured walls or patterned backgrounds. Use our Background Remover tool to replace any background with white.',
  },
];

export default function PageIBPS() {
  const relatedTools = getRelatedTools([
    'resize-image-20kb-ssc',
    'resize-image-50kb-upsc',
    'resize-signature',
    'background-remover',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for IBPS / SBI Bank Exam"
      intro="Compress your photograph to exactly 50KB for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, SBI Clerk, and other banking sector recruitment exams. The IBPS application portal rejects photos above 50KB — our free browser-based compressor hits this target precisely using a binary search algorithm with ±2KB accuracy. Your photo never leaves your device, making this the most privacy-safe way to compress your exam photo."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image to 50KB (IBPS / SBI Bank Exam)"
        description="Upload your photo and compress it to exactly 50KB for IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and other bank exam form submissions."
        options={[
          { size: 50, label: 'IBPS / SBI — 50KB', description: 'Standard bank exam portal requirement' },
          { size: 20, label: 'Minimum — 20KB', description: 'If portal asks for 20KB photo' },
        ]}
      />
    </ToolLayout>
  );
}
