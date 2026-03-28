import { Metadata } from 'next';
import ToolLayout from '@/components/ToolLayout';
import CompressorTool from '@/components/CompressorTool';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Resize Image for Aadhar Card Update — Compress Photo to 80KB Free',
  description:
    'Compress your passport photo for Aadhar Card update on UIDAI myAadhaar portal. Correct photo size (80KB max, JPEG). Free, browser-based, no upload.',
  keywords:
    'aadhar card photo update size, uidai photo size kb, compress image aadhar update, aadhar photo 80kb, myaadhaar photo requirement, aadhaar image size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-aadhar',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-aadhar' },
  },
  openGraph: {
    title: 'Resize Image for Aadhar Update — Compress to 80KB Free',
    description:
      'Compress your passport photo for UIDAI myAadhaar portal — correct 80KB JPEG format required for Aadhar photo update.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What is the photo size requirement for Aadhar card update?',
    answer:
      'UIDAI myAadhaar portal requires photos for Aadhar update to be in JPEG or JPG format, maximum 80KB in size. The image should show only the face, with plain background. Dimensions are not strictly specified but a standard passport-size layout works.',
  },
  {
    question: 'How do I update my Aadhar card photo online?',
    answer:
      'Visit myaadhaar.uidai.gov.in → Login with Aadhar number and OTP → Select "Update Aadhaar Online" → Choose "Face (Photo)" option → Upload JPEG under 80KB. Charges apply for demographic updates at Aadhar Kendra.',
  },
  {
    question: 'Can I update my Aadhar photo at home?',
    answer:
      'Online photo update on myAadhaar.gov.in is available. Ensure you select a recent, clear JPEG photo with plain background, compress it to under 80KB using this tool, and upload during the verification process.',
  },
  {
    question: 'What type of photo is accepted for Aadhar update?',
    answer:
      'UIDAI requires: recent passport-size photo (within 3 months), clear face visibility, plain white or off-white background, no goggles or heavy accessories, proper lighting, JPEG format, max 80KB.',
  },
  {
    question: 'Can I update my Aadhar at the post office?',
    answer:
      'Yes. Common Service Centres (CSC), India Post offices, and designated Aadhaar Kendra locations accept biometric-based photo updates. However, this requires a fee of ₹100. Prepare a printed passport photo as well.',
  },
  {
    question: 'What if myAadhaar shows "file size exceeded" error?',
    answer:
      'This means your photo is above the 80KB limit. Use this tool to compress to 60–75KB to stay safely under the limit. After compressing, verify the size using our Image Size Checker, then re-upload.',
  },
];

export default function PageAadhar() {
  const relatedTools = getRelatedTools([
    'passport-photo-maker',
    'resize-image-100kb-railway',
    'background-remover',
    'image-size-checker',
  ]);

  return (
    <ToolLayout
      h1="Resize Image for Aadhar Card Update"
      intro="Compress your photograph to meet UIDAI's requirement for Aadhar card photo update — maximum 80KB JPEG. The myAadhaar portal strictly enforces this limit and shows an error for any file above 80KB. Our tool compresses JPEG photos to your chosen size target using binary search — guaranteeing the output is under the limit while maximising image clarity. Your photo is processed entirely in your browser with no server uploads."
      faqs={faqs}
      relatedTools={relatedTools}
    >
      <CompressorTool
        title="Compress Image for Aadhar Card Update"
        description="Upload your passport-size photo and compress it to meet the UIDAI myAadhaar portal requirement (max 80KB JPEG)."
        options={[
          { size: 60, label: 'Aadhar Update — 60KB', description: 'Safe below UIDAI 80KB limit' },
          { size: 80, label: 'Aadhar Update — 80KB', description: 'Maximum allowed for myAadhaar portal' },
        ]}
      />
    </ToolLayout>
  );
}
