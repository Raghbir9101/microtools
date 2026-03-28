import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Signature for IBPS / SBI Bank Exam — Compress to 20KB Free',
  description:
    'Compress your scanned signature to exactly 20KB for IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and other bank exam forms. Free browser-based tool.',
  keywords:
    'resize signature IBPS, IBPS signature 20kb, compress signature SBI PO, bank exam signature size, IBPS signature requirement, SBI clerk signature resize 20kb',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-signature-for-ibps',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-signature-for-ibps' },
  },
  openGraph: {
    title: 'Resize Signature for IBPS / SBI — Compress to 20KB Free',
    description: 'Compress bank exam signature to 20KB for IBPS PO, Clerk, SBI PO, and SBI Clerk. Free browser-based tool.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the IBPS signature size requirement?',
    answer:
      'IBPS PO, IBPS Clerk, and IBPS SO all require signature in JPEG format, between 10KB and 20KB, dimensions 140×60 pixels (width × height).',
  },
  {
    question: 'What is the SBI PO and SBI Clerk signature requirement?',
    answer:
      'SBI PO and SBI Clerk require a JPEG signature between 10KB and 20KB, dimensions 140×60 pixels. Sign with black or blue ink on plain white paper.',
  },
  {
    question: 'What other bank exams need a 20KB signature?',
    answer:
      'RBI Grade B, NABARD Grade A, LIC AAO, NPS Trust, Bank of Baroda, Punjab National Bank, and most nationalised bank recruitments that use IBPSlink portals all require 20KB JPEG signatures.',
  },
  {
    question: 'How do I photograph my signature for bank exams?',
    answer:
      'Sign on plain white printer paper with a black or dark blue ballpoint pen. Place the paper on a flat surface in daylight. Photograph from directly above using your phone camera (do not tilt). Crop tightly to the signature leaving 5px white border.',
  },
  {
    question: 'Can I use the same signature for IBPS and SBI applications?',
    answer:
      'Yes, as long as it is your consistent signature. The compressed 20KB file can be uploaded to both IBPS and SBI portals. During biometric verification, your live signature will be checked against this.',
  },
  {
    question: 'Why does IBPS portal say "signature file size must be between 10 and 20 KB"?',
    answer:
      'Your file is either below 10KB (too small/compressed) or above 20KB (too large). Use this tool which targets exactly 20KB — the maximum accepted size. This guarantees the file is within the valid range.',
  },
];

export default function PageSignatureIBPS() {
  const relatedTools = getRelatedTools([
    'signature-resize-20kb',
    'resize-signature',
    'resize-image-for-ibps',
    'png-to-jpg',
  ]);

  return (
    <ToolLayout
      h1="Resize Signature for IBPS / SBI Bank Exam"
      intro="Compress your scanned signature to exactly 20KB for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, SBI Clerk, RBI Grade B, and other banking sector recruitment exam portals. IBPS portals enforce a strict 10KB–20KB range for signature files — our compressor targets exactly 20KB using binary search, guaranteeing compliance. Process runs entirely in your browser, zero server uploads."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Signature to 20KB for IBPS / SBI"
        description="Upload your scanned signature and compress it to exactly 20KB for IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, and banking exam forms."
        options={[
          { size: 20, label: 'Signature — 20KB (IBPS/SBI)', description: 'Standard bank exam signature requirement' },
          { size: 10, label: 'Signature — 10KB (SSC)', description: 'For SSC exam portal signature upload' },
        ]}
      />
    </ToolLayout>
  );
}
