import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for RRB NTPC 2026 — Compress Photo to 100KB Free',
  description:
    'Compress your photo to exactly 100KB for RRB NTPC 2026 application. Meets Railway Recruitment Board NTPC photo requirements. Free, browser-based tool.',
  keywords:
    'RRB NTPC photo size 2026, resize image RRB NTPC, railway NTPC photo 100kb, compress photo RRB NTPC, NTPC photo requirement, RRB NTPC image format JPEG',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-rrb-ntpc',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-rrb-ntpc' },
  },
  openGraph: {
    title: 'Resize Image for RRB NTPC 2026 — Free 100KB Compressor',
    description: 'Compress photo to 100KB for RRB NTPC 2026 application. Free browser-based tool for Railway NTPC candidates.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size for RRB NTPC 2026?',
    answer:
      'RRB NTPC 2026 requires: JPEG format, file size 15KB–100KB, dimensions 200×230 pixels, white/light background, colour photo taken within 6 months.',
  },
  {
    question: 'What posts are filled via RRB NTPC?',
    answer:
      'RRB NTPC (Non-Technical Popular Categories) fills posts like: Junior Clerk cum Typist, Accounts Clerk cum Typist, Junior Time Keeper, Trains Clerk, Commercial cum Ticket Clerk, Station Master, Goods Guard, and Senior Commercial cum Ticket Clerk.',
  },
  {
    question: 'What is the RRB NTPC signature size?',
    answer:
      'RRB NTPC signature must be: JPEG format, 10KB–40KB, dimensions 140×60 pixels, signed in black/dark blue ink on white paper.',
  },
  {
    question: 'Can I upload a PNG photo for RRB NTPC?',
    answer:
      'No. RRB portals only accept JPEG files for photographs. If your photo is PNG, use our PNG to JPG converter first, then compress to 100KB using this tool.',
  },
  {
    question: 'What happens at RRB NTPC photo verification stage?',
    answer:
      'During Document Verification (DV), you bring printed passport photos and originals. The digital photo you uploaded is compared against you in person. Use a natural, recent photo that genuinely looks like you.',
  },
  {
    question: 'Is 80KB photo acceptable for RRB NTPC if requirement says 15KB–100KB?',
    answer:
      'Yes. Any size between 15KB and 100KB passes RRB NTPC portal validation. 80KB is perfectly fine. This tool targets 80KB by default (within the ±2KB margin), but you can choose any size from the options.',
  },
];

export default function PageRRBNTPC() {
  const relatedTools = getRelatedTools([
    'resize-image-100kb-railway',
    'resize-image-for-rpf-constable',
    'resize-signature',
    'png-to-jpg',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for RRB NTPC 2026 Application"
      intro="Compress your photograph to exactly 100KB for the Railway Recruitment Board NTPC (Non-Technical Popular Categories) 2026 examination. RRB NTPC attracts millions of applicants — photo upload errors at registration are among the most common reasons applications fail. The portal accepts 15KB–100KB JPEG; our tool targets 80–100KB with ±2KB precision. Complete browser-based processing, no server uploads."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Photo to 100KB for RRB NTPC"
        description="Upload your colour passport photo and compress to 100KB for the RRB NTPC 2026 online application."
        options={[
          { size: 80, label: 'Photo — 80KB (RRB NTPC)', description: 'Safe within 15KB–100KB range' },
          { size: 100, label: 'Photo — 100KB (max)', description: 'Maximum allowed for RRB NTPC portal' },
          { size: 20, label: 'Signature — 20KB', description: 'Within signature 10KB–40KB requirement' },
        ]}
      />
    </ToolLayout>
  );
}
