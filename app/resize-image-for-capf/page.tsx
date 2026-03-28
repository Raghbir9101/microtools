import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for UPSC CAPF 2026 — Compress Photo to 50KB Free',
  description:
    'Compress your photo to exactly 50KB for UPSC CAPF (Assistant Commandant) 2026 application. Free browser-based tool — no uploads, instant download.',
  keywords:
    'UPSC CAPF photo size, CAPF AC photo 50kb, resize image CAPF 2026, UPSC CAPF photo requirement, compress photo CAPF exam, assistant commandant photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-capf',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-capf' },
  },
  openGraph: {
    title: 'Resize Image for UPSC CAPF 2026 — Free 50KB Compressor',
    description: 'Compress photo to 50KB for UPSC CAPF (AC) 2026 application. Free, browser-based tool.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size for UPSC CAPF (AC) 2026?',
    answer:
      'UPSC CAPF (Assistant Commandant) requires: JPEG format, file size 40KB–300KB (50KB recommended), white background, colour photo, taken within 6 months, 350×450 pixels minimum.',
  },
  {
    question: 'What forces are covered under UPSC CAPF?',
    answer:
      'UPSC CAPF (AC) recruits Assistant Commandants for: BSF (Border Security Force), CRPF (Central Reserve Police Force), CISF (Central Industrial Security Force), ITBP (Indo-Tibetan Border Police), and SSB (Sashastra Seema Bal).',
  },
  {
    question: 'Is there a physical test in UPSC CAPF?',
    answer:
      'Yes. UPSC CAPF has a Physical Standard Test (PST) and Physical Efficiency Test (PET) after the written exam. Students must upload a compliant photo during initial registration regardless of physical fitness.',
  },
  {
    question: 'What is the CAPF signature requirement?',
    answer:
      'UPSC CAPF signature: JPEG, max 20KB, dimensions at least 140×60 pixels, black ink on white paper. Same requirement as UPSC CSE.',
  },
  {
    question: 'Can I apply for both IAS (UPSC CSE) and UPSC CAPF?',
    answer:
      "Yes, you can apply for both in the same year if you meet eligibility criteria. Both require the same 40–300KB JPEG photo format — use the same compressed photo (50KB) for both applications.",
  },
  {
    question: 'What happens if the UPSC CAPF portal shows "image too large"?',
    answer:
      'Your photo exceeds 300KB. Compress to 50KB using this tool — it will pass UPSC validation and be well within the accepted range. Re-upload after compressing.',
  },
];

export default function PageCAPF() {
  const relatedTools = getRelatedTools([
    'resize-image-50kb-upsc',
    'resize-image-for-ias-exam',
    'signature-resize-20kb',
    'background-remover',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for UPSC CAPF 2026 (Assistant Commandant)"
      intro="Compress your photograph to exactly 50KB for the UPSC CAPF (Central Armed Police Forces) Assistant Commandant 2026 examination. CAPF AC is one of UPSC's most competitive exams — don't let a simple photo upload error block your application. The portal accepts 40KB–300KB JPEG; our browser-based compressor targets 50KB with ±2KB precision. No server uploads, no account required."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Photo to 50KB for UPSC CAPF (AC)"
        description="Upload your colour passport photo and compress to 50KB for the UPSC CAPF Assistant Commandant application."
        options={[
          { size: 50, label: 'Photo — 50KB (UPSC CAPF)', description: 'Safe size within UPSC 40–300KB range' },
          { size: 20, label: 'Signature — 20KB (UPSC)', description: 'Standard UPSC signature upload requirement' },
        ]}
      />
    </ToolLayout>
  );
}
