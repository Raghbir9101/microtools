import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for Visa Application — Compress Photo to 50KB Free',
  description:
    'Compress your passport photo for visa applications — UK, USA, Schengen, Canada, UAE. Correct dimensions and file size for online visa portals. Free, browser-based.',
  keywords:
    'visa photo size, compress photo for visa, uk visa photo size, usa visa photo requirement, schengen visa photo, canada visa photo size, resize image for visa',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-visa',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-visa' },
  },
  openGraph: {
    title: 'Resize Image for Visa Application — Compress Photo Free',
    description:
      'Compress passport photos for UK, USA, Schengen, Canada, UAE visa applications. Correct file size and dimensions. Free, browser-based.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size for UK visa application?',
    answer:
      'UK visa requires: 45mm × 35mm (portrait), white background, clear face, no glasses. For the online UK visa portal (visa4uk), the digital photo must be JPEG, under 6MB. Our tool compresses to the right size for all portals.',
  },
  {
    question: 'What photo size is needed for USA (B1/B2) visa?',
    answer:
      'US visa requires a 2×2 inch (51×51mm) photo with white background. For the DS-160 online form, the digital photo must be JPEG, 240×240 to 600×600 pixels, between 1KB and 240KB. We recommend compressing to 200KB.',
  },
  {
    question: 'What is the Schengen visa photo requirement?',
    answer:
      'Schengen visa (Europe) requires: 35×45mm photo, white background, 70–80% of photo should be face, taken within last 6 months. For online portals, files should be JPEG under 500KB.',
  },
  {
    question: 'What is the Canada visa photo size?',
    answer:
      'Canada (IRCC) requires: 35mm × 45mm photo, white or off-white background, JPEG format. For online applications on IRCC portal, photo must be between 60KB–4MB and minimum 420×540 pixels.',
  },
  {
    question: 'What is the UAE visa photo requirement?',
    answer:
      'UAE visa requires: 4×6 cm or 2×2 inch photo, white background, JPEG format. For e-visa portals, typically 50KB–2MB is accepted. Use the 200KB option in this tool for UAE visa photos.',
  },
  {
    question: 'Can I take a visa photo on my phone?',
    answer:
      'Yes. Photograph yourself in good lighting against a plain white wall, facing straight ahead. Use our Background Remover to ensure the background is pure white, then compress using this tool.',
  },
];

export default function PageVisa() {
  const relatedTools = getRelatedTools([
    'passport-photo-maker',
    'background-remover',
    'resize-image-200kb',
    'photo-dpi-converter',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for Visa Application"
      intro="Compress your passport photo to the correct file size for UK, US, Schengen, Canada, UAE, and other country visa application portals. Each country's online visa portal has specific JPEG size and dimension requirements — photos outside the accepted range are rejected. Our browser-based tool compresses JPEG photos to your chosen target size (50KB–200KB range covers all major visa portals). Runs completely privately, no server uploads."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Photo for Visa Application"
        description="Upload your passport/visa photo and compress it to the size required by your country's online visa application portal."
        options={[
          { size: 50, label: 'Compact — 50KB', description: 'Multiple visa portals, UK visa online' },
          { size: 200, label: 'Standard — 200KB', description: 'USA DS-160, Schengen portals' },
          { size: 500, label: 'High Quality — 500KB', description: 'Canada IRCC, portals with larger limits' },
        ]}
      />
    </ToolLayout>
  );
}
