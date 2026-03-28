import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import { getRelatedTools } from '@/lib/tools';
import BackgroundRemoverTool from '@/components/BackgroundRemoverTool';

export const metadata: Metadata = {
  title: 'Remove Background from Photo for Govt ID — Free Online Tool',
  description:
    'Remove and replace photo background with white for SSC, UPSC, Railway, Aadhar, PAN card, and government ID photos. Free AI background remover, browser-based.',
  keywords:
    'remove background govt id photo, white background SSC photo, replace background for exam form, background remover government exam, UPSC photo white background, SSC photo background remove',
  alternates: {
    canonical: 'https://tools.draftly.co.in/remove-background-for-govt-id',
    languages: { 'en-IN': 'https://tools.draftly.co.in/remove-background-for-govt-id' },
  },
  openGraph: {
    title: 'Remove Background for Govt ID Photo — Free White Background Converter',
    description: 'Replace photo background with white for any Indian government exam form or ID application. Free, AI-powered, browser-based.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Why do government exams require white background photos?',
    answer:
      'White backgrounds are required for ICAO biometric compliance and consistent photo processing. They ensure facial features are clearly visible and help automated facial recognition systems during verification. SSC, UPSC, Railway, and Aadhar all mandate white backgrounds.',
  },
  {
    question: 'Can I use a coloured wall photo for SSC and change the background?',
    answer:
      'Yes. Take a clear, well-lit portrait photo. Use this tool to remove the existing background and replace it with white. Then crop to passport size and compress to 20KB (SSC) or 50KB (UPSC) using our compressor tools.',
  },
  {
    question: 'Which government exams need white background photos?',
    answer:
      'SSC CGL, CHSL, MTS, CPO — white background required. UPSC CSE, CAPF, CDS, NDA — white background required. Railway RRB NTPC, Group D, ALP — white background required. IBPS PO, SBI PO — white background required. All government ID and exam photos need white background.',
  },
  {
    question: 'What shade of white is acceptable for government exam photos?',
    answer:
      'Pure white (#FFFFFF) or very slightly off-white. Avoid cream, yellow, grey, or blue-tinted backgrounds. Our Background Remover replaces with pure white by default, which meets all government exam requirements.',
  },
  {
    question: 'Will the AI remove the background accurately for passport-size photos?',
    answer:
      'Yes. The AI (BiRefNet model) is trained specifically for portrait segmentation and performs very well on close-up face photos. Ensure the original photo has good lighting — avoid very dark or heavily shadowed photos for best results.',
  },
  {
    question: 'How do I make the complete government exam photo (background + size + KB)?',
    answer:
      'Step 1: Remove background here (white). Step 2: Crop to passport dimensions using Passport Photo Maker or Image Crop. Step 3: Compress to required KB (20KB for SSC, 50KB for UPSC) using our compressors. Done in 3 steps, all free.',
  },
];

export default function PageBGGovtID() {
  const relatedTools = getRelatedTools([
    'background-remover',
    'resize-image-20kb-ssc',
    'resize-image-50kb-upsc',
    'passport-photo-maker',
  ]);

  return (
    <ToolLayout
      h1="Remove Background for Government ID & Exam Photos"
      intro="Remove any background from your photo and replace it with a clean white background — as required by SSC, UPSC, Railway, IBPS, Aadhar, PAN card, and all major government exam and ID portals. Our AI-powered background removal tool uses the BiRefNet model to accurately separate the subject from any background type. Everything runs in your browser — private, fast, and completely free."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <BackgroundRemoverTool />
    </ToolLayout>
  );
}
