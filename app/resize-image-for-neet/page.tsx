import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for NEET UG Exam — Compress Photo to 200KB Free',
  description:
    'Compress your photo and signature for NEET UG application form. Meets NTA NEET photo size requirements (10KB–200KB). Free, browser-based, instant.',
  keywords:
    'NEET image size, resize photo NEET UG, NEET photo requirement 2026, NTA NEET photo compress, compress image NEET form, NEET 200kb photo',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-neet',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-neet' },
  },
  openGraph: {
    title: 'Resize Image for NEET UG — Compress Photo to 200KB Free',
    description:
      'Free tool to compress photos for NEET UG / NTA application form. Compress to 200KB in seconds, no uploads needed.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size requirement for NEET UG 2026?',
    answer:
      'NTA NEET UG requires a scanned JPEG photograph between 10KB and 200KB. Dimensions should be at least 3.5cm × 4.5cm. The photograph must have a white or light background with the candidate facing directly forward.',
  },
  {
    question: 'What is the signature size for NEET UG form?',
    answer:
      'NEET UG requires a scanned signature between 4KB and 30KB in JPEG format. Dimensions: 3.5cm wide × 1.5cm tall. Use a dark ink pen on white paper and scan clearly.',
  },
  {
    question: 'What should I wear in my NEET application photo?',
    answer:
      'NTA guidelines require: formal attire, no caps or hats (except religious headgear), no goggles or dark glasses, ears must be visible, white or light-coloured background. Recent photo (not older than 3 months).',
  },
  {
    question: 'Can I use a mobile phone photo for NEET registration?',
    answer:
      'Yes, but ensure the photo is taken against a plain white wall, in good lighting, and the face is clearly visible. Use our tool to compress the mobile photo to the required 10KB–200KB range. Avoid blurry or dark photos.',
  },
  {
    question: 'What format should the photo be in for NEET form?',
    answer:
      'NEET UG accepts JPEG (JPG) format only. Do not upload PNG or WebP. If your photo is in another format, use our JPG to PNG or PNG to JPG converters first, then compress it here.',
  },
  {
    question: 'What happens if I upload the wrong photo size for NEET?',
    answer:
      "The NTA portal will reject photos outside the 10KB–200KB range with an error message. Use this tool to compress your photo, then verify the exact KB size using our Image Size Checker before uploading.",
  },
];

export default function PageNEET() {
  const relatedTools = getRelatedTools([
    'resize-image-200kb',
    'resize-image-50kb-upsc',
    'resize-signature',
    'image-size-checker',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for NEET UG Exam Form"
      intro="Compress your photograph to exactly the right size for NTA NEET UG application — between 10KB and 200KB as required. The NTA portal strictly enforces file size limits and rejects out-of-range files. Our browser-based tool compresses your photo using Canvas API binary search, guaranteeing the output falls within the accepted range while maintaining maximum possible clarity. All processing happens on your device — zero uploads, zero privacy risk."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image for NEET UG Application"
        description="Upload your passport-size photograph and compress it to the size required by the NTA NEET UG registration portal."
        options={[
          { size: 100, label: 'NEET Photo — 100KB', description: 'Safe mid-range for NTA portal (10KB–200KB accepted)' },
          { size: 200, label: 'NEET Photo — 200KB', description: 'Maximum allowed size for NEET UG photo' },
          { size: 20, label: 'Signature — 20KB', description: 'For NEET signature upload (4KB–30KB required)' },
        ]}
      />
    </ToolLayout>
  );
}
