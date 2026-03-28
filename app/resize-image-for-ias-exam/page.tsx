import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for IAS Exam (UPSC CSE) — Compress Photo to 50KB Free',
  description:
    'Compress your photo to exactly 50KB for UPSC Civil Services (IAS/IPS/IFS) 2026 application. Meets UPSC CSE photo requirements. Free, browser-based.',
  keywords:
    'IAS photo size, UPSC CSE photo 50kb, resize image IAS exam, IAS application photo requirement, compress photo IAS 2026, UPSC civil services photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-ias-exam',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-ias-exam' },
  },
  openGraph: {
    title: 'Resize Image for IAS Exam (UPSC CSE) — Free 50KB Compressor',
    description: 'Compress your photo to 50KB for UPSC Civil Services (IAS/IPS/IFS) application. Free, browser-based tool.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What photo size is required for UPSC Civil Services (IAS) 2026?',
    answer:
      'UPSC CSE 2026 requires: JPEG/JPG format, file size between 40KB and 300KB (50KB is the recommended safe size), minimum 350×450 pixels, white or off-white background, colour photograph, taken within 6 months.',
  },
  {
    question: 'Is the IAS photo requirement different from UPSC general?',
    answer:
      'IAS (Civil Services Exam) is conducted by UPSC and uses the same photo specifications as all UPSC exams — 40KB–300KB JPEG. 50KB is the safest size in this range.',
  },
  {
    question: 'Which services can I get through UPSC CSE?',
    answer:
      'UPSC Civil Services Examination leads to: IAS (Indian Administrative Service), IPS (Indian Police Service), IFS (Indian Foreign Service), IRS (Indian Revenue Service), and 20+ other Group A and Group B central services.',
  },
  {
    question: 'Can I use a digital studio photo for UPSC CSE?',
    answer:
      'Yes. A digital studio photo is ideal — proper lighting, white background, formal attire. Ask for a 3.5×4.5cm portrait in JPEG format. Compress it to 50KB using this tool before uploading to the UPSC portal.',
  },
  {
    question: 'What is the UPSC CSE signature requirement?',
    answer:
      'UPSC CSE signature: JPEG format, maximum 20KB, dimensions at least 140×60 pixels, signed with black/dark blue ink on white paper. Do not use a stylus or digital signature.',
  },
  {
    question: 'What happens if I fail UPSC photo validation?',
    answer:
      'If the UPSC portal rejects your photo, the application will not proceed. The most common cause is exceeding 300KB or being below 40KB. Compress to exactly 50KB to safely pass validation every time.',
  },
];

export default function PageIAS() {
  const relatedTools = getRelatedTools([
    'resize-image-50kb-upsc',
    'resize-image-for-capf',
    'signature-resize-20kb',
    'background-remover',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for IAS Exam (UPSC Civil Services)"
      intro="Compress your photograph to exactly 50KB for the UPSC Civil Services Examination (IAS/IPS/IFS) 2026 application. UPSC CSE has one of the highest stakes photo upload requirements — a failed upload can result in an incomplete application at the most critical stage. The UPSC portal accepts 40KB–300KB JPEG; our tool targets 50KB, safely in the middle of that range. Compression runs entirely in your browser with no server uploads."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Photo to 50KB for IAS / UPSC CSE"
        description="Upload your passport-size colour photo and compress it to exactly 50KB for the UPSC Civil Services (IAS/IPS/IFS) application portal."
        options={[
          { size: 50, label: 'Photo — 50KB (UPSC CSE)', description: 'Safe size within UPSC 40–300KB range' },
          { size: 20, label: 'Signature — 20KB (UPSC)', description: 'Standard UPSC signature requirement' },
        ]}
      />
    </ToolLayout>
  );
}
