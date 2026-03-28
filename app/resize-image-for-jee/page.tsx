import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for JEE Main 2026 — Compress Photo to 100KB Free',
  description:
    'Compress your photo and signature for JEE Main application. NTA JEE requires 10KB–200KB JPEG photo. Free browser-based tool, no upload needed.',
  keywords:
    'JEE Main image size, resize photo JEE Main 2026, NTA JEE photo requirement, compress image JEE form, JEE main photo 100kb, JEE advanced photo size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-jee',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-jee' },
  },
  openGraph: {
    title: 'Resize Image for JEE Main — Compress Photo to 100KB Free',
    description:
      'Free tool to compress photos for JEE Main / JEE Advanced NTA application form. Compress to required KB instantly.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size requirement for JEE Main 2026?',
    answer:
      'NTA JEE Main requires a scanned JPEG photograph between 10KB and 200KB. Dimensions: 3.5×4.5 cm or equivalent. White or off-white background, full face visible, no caps or goggles.',
  },
  {
    question: 'What is the signature requirement for JEE Main?',
    answer:
      'JEE Main signature upload requires a JPEG file between 4KB and 30KB. Dimensions: 3.5cm × 1.5cm. Sign on white paper in black/blue ink, scan or photograph clearly.',
  },
  {
    question: 'What is the JEE Advanced photo size requirement?',
    answer:
      'JEE Advanced (conducted by IITs) also requires JPEG photos. Photo file size is typically 5KB–100KB. Always check the current year\'s JEE Advanced information bulletin for exact specifications.',
  },
  {
    question: 'Can I use the same photo for NEET and JEE Main?',
    answer:
      'You can use the same original photo for both, but you may need to compress to different sizes. JEE Main and NEET have similar requirements (10KB–200KB JPEG). Compress separately using this tool to ensure exact sizes.',
  },
  {
    question: 'How do I scan my photo for JEE Main registration?',
    answer:
      'Options: (1) Use CamScanner or Adobe Scan app on your phone. (2) Photograph against a white wall in natural daylight. (3) Use a flatbed scanner at 300 DPI. Then compress with this tool to meet the size requirement.',
  },
  {
    question: 'What if JEE portal shows "photo size too large" error?',
    answer:
      'This means your photo exceeds 200KB. Use this tool to compress to 100KB — well within the accepted range. Refresh the JEE portal page and upload again after compression.',
  },
];

export default function PageJEE() {
  const relatedTools = getRelatedTools([
    'resize-image-200kb',
    'resize-image-100kb-railway',
    'resize-signature',
    'image-size-checker',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for JEE Main Application Form"
      intro="Compress your photograph to the correct size for NTA JEE Main and JEE Advanced application forms. NTA requires JPEG photos between 10KB and 200KB — photos outside this range are rejected with an error. Our free browser-based compressor uses Canvas API with binary search compression to hit your exact target size. Process runs entirely in your browser with no server uploads and zero data collection."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image for JEE Main / JEE Advanced"
        description="Upload your passport-size photo and compress it to size required by the NTA JEE Main or JEE Advanced registration portal."
        options={[
          { size: 100, label: 'JEE Main Photo — 100KB', description: 'Safe size within NTA accepted range (10KB–200KB)' },
          { size: 50, label: 'JEE Advanced — 50KB', description: 'IIT JEE Advanced typical requirement' },
          { size: 20, label: 'Signature — 20KB', description: 'JEE signature upload (4KB–30KB accepted)' },
        ]}
      />
    </ToolLayout>
  );
}
