import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for RPF Constable 2026 — Compress Photo to 100KB Free',
  description:
    'Compress your photo to exactly 100KB for RPF Constable 2026 application. Meets Railway Protection Force photo requirements. Free, browser-based, instant.',
  keywords:
    'RPF constable photo size, resize image RPF 2026, railway protection force photo 100kb, RPF photo requirement JPEG, compress photo RPF constable, RPSF photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-rpf-constable',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-rpf-constable' },
  },
  openGraph: {
    title: 'Resize Image for RPF Constable 2026 — Free 100KB Compressor',
    description: 'Compress photo to 100KB for RPF Constable / RPSF application. Unique physical test requirements explained.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size for RPF Constable 2026?',
    answer:
      'RPF Constable 2026 requires: JPEG/JPG format, file size 15KB–100KB, dimensions 200×230 pixels, white or off-white background, colour photo taken within 6 months. Same as RRB NTPC and other Railway recruitment.',
  },
  {
    question: 'What forces come under RPF and RPSF?',
    answer:
      'RPF (Railway Protection Force) protects railway property and passengers under the Ministry of Railways. RPSF (Railway Protection Special Force) is a battalion-level force. Both use the same recruitment and photo requirements.',
  },
  {
    question: 'Is there a physical test for RPF Constable?',
    answer:
      'Yes. RPF Constable PET (Physical Efficiency Test) includes: 1600m run (5 min 45 sec for male, 8 min 45 sec for female), 800m run (alternative for female), long jump (14 feet male / 9 feet female), and high jump (4 feet male / 3 feet female).',
  },
  {
    question: 'What should I wear in my RPF application photo?',
    answer:
      'Wear formal clothing — a plain shirt or blouse. No uniform, cap, or safety vest. White or off-white background. Face fully visible. No goggles. The photo is used for identification at PET and document verification stages.',
  },
  {
    question: 'Can I use the same photo for RPF Sub-Inspector and RPF Constable?',
    answer:
      'Yes, if the photo is current and meets requirements. Both posts require 15KB–100KB JPEG photos. Re-compress separately for each application to ensure the file meets exact requirements.',
  },
  {
    question: 'What is the RPF Constable signature requirement?',
    answer:
      'RPF Constable signature: JPEG format, 10KB–40KB, signed clearly in dark ink on white paper. Do not use a printed or computer-generated signature.',
  },
];

export default function PageRPF() {
  const relatedTools = getRelatedTools([
    'resize-image-100kb-railway',
    'resize-image-for-rrb-ntpc',
    'resize-signature',
    'png-to-jpg',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for RPF Constable 2026 Application"
      intro="Compress your photograph to exactly 100KB for the Railway Protection Force (RPF) Constable and RPSF 2026 recruitment. RPF is a uniformed force under the Ministry of Railways — the application portal uses the same 15KB–100KB JPEG photo requirement as other Railway recruitment exams. Our free browser-based tool handles precise compression targeting 80–100KB while keeping your face clearly visible for the PET and document verification stages."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Photo to 100KB for RPF Constable"
        description="Upload your passport-size colour photo and compress to 100KB for the RPF Constable / RPSF 2026 application form."
        options={[
          { size: 80, label: 'Photo — 80KB (RPF)', description: 'Safe within 15KB–100KB range' },
          { size: 100, label: 'Photo — 100KB (max)', description: 'Maximum allowed for RPF portal' },
          { size: 20, label: 'Signature — 20KB', description: 'Within signature 10KB–40KB requirement' },
        ]}
      />
    </ToolLayout>
  );
}
