import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Photo Upload Failed SSC Portal — How to Fix (2026)',
  description:
    'Fix "photo upload failed" or "invalid file" errors on the SSC exam portal. Step-by-step guide: correct format, size, and dimensions to upload successfully.',
  keywords:
    'SSC photo upload failed, SSC portal photo error, photo not uploading SSC, SSC image rejected, fix SSC photo upload error, SSC invalid image format',
  alternates: {
    canonical: 'https://tools.draftly.co.in/photo-upload-failed-ssc-fix',
    languages: { 'en-IN': 'https://tools.draftly.co.in/photo-upload-failed-ssc-fix' },
  },
  openGraph: {
    title: 'Fix Photo Upload Failed Error on SSC Portal',
    description:
      'Step-by-step guide to fix photo upload errors on SSC exam portals. Correct JPEG format, 20KB limit, and dimension requirements explained.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Why does SSC portal say "invalid file format"?',
    answer:
      'The SSC portal only accepts JPEG/JPG files. If your photo is PNG, HEIC (iPhone), WebP, or any other format, it will be rejected. Convert to JPG using our PNG to JPG or WebP to JPG converter, then compress to 20KB.',
  },
  {
    question: 'Why is my SSC photo rejected even though its under 20KB?',
    answer:
      'Possible reasons: (1) File extension is .png even if renamed to .jpg — actual format check happens server-side. (2) Photo dimensions are too small (min 100×130 pixels). (3) The file is corrupted. Try uploading a fresh conversion from this tool.',
  },
  {
    question: 'The SSC portal shows "file size too large" — my photo is 25KB. What to do?',
    answer:
      'SSC portals sometimes enforce 20KB strictly. Compress your photo to 15–18KB using the 20KB option in our tool (it targets ±2KB, so try reducing to 15KB for safety). Then re-upload.',
  },
  {
    question: 'SSC portal keeps loading but photo does not upload — what is wrong?',
    answer:
      'This is likely a browser or network issue, not the photo file itself. Try: (1) Switch to Chrome browser. (2) Clear browser cache. (3) Use a stable internet connection (not mobile data). (4) Disable VPN if active. (5) Try incognito mode.',
  },
  {
    question: 'Can I upload the same photo for SSC CGL that I used for SSC CHSL last year?',
    answer:
      'Only if the photo was taken recently (within 3 months). SSC guidelines require a recent photograph — using an old photo can lead to rejection during document verification even if it passes the online portal check.',
  },
];

const steps = [
  {
    num: '1',
    title: 'Check the file format',
    desc: 'Open your photo file. If it ends in .png, .heic, .webp, or anything other than .jpg/.jpeg — convert it first using our PNG to JPG converter.',
    color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
    numColor: 'text-blue-500',
  },
  {
    num: '2',
    title: 'Compress to 20KB',
    desc: 'Use our SSC Photo Compressor (20KB) to compress your JPEG photo to exactly 20KB. This takes under 1 second and runs in your browser.',
    color: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800',
    numColor: 'text-emerald-500',
  },
  {
    num: '3',
    title: 'Verify the file size',
    desc: 'After downloading, use our Image Size Checker to confirm the output is exactly within the 18–22KB range. Do not guess — verify.',
    color: 'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800',
    numColor: 'text-violet-500',
  },
  {
    num: '4',
    title: 'Upload on Chrome',
    desc: 'Open the SSC portal in Google Chrome (not Firefox or Edge). Clear cache if needed (Ctrl+Shift+Delete). Upload the verified 20KB JPEG.',
    color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800',
    numColor: 'text-orange-500',
  },
];

export default function PageSSCPhotoFix() {
  const relatedTools = getRelatedTools([
    'resize-image-20kb-ssc',
    'resize-signature-ssc',
    'png-to-jpg',
    'image-size-checker',
  ]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">Fix SSC Photo Upload Error</span>
          </nav>

          <AdSlot variant="top" />

          <div className="mt-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 text-xs font-semibold mb-5 border border-red-200 dark:border-red-800">
              🛠️ Troubleshooting Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
              Photo Upload Failed on SSC Portal — How to Fix
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Getting a &ldquo;photo upload failed&rdquo;, &ldquo;invalid file format&rdquo;, or &ldquo;file size too large&rdquo; error on the SSC exam portal is one of the most common problems during online registration. This guide explains exactly why it happens and how to fix it in under 2 minutes.
            </p>
          </div>

          {/* Common errors banner */}
          <div className="mb-10 p-5 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
            <h2 className="font-bold text-foreground mb-3">Common SSC Photo Upload Errors</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                '"File size exceeds 20KB limit"',
                '"Invalid file format — only JPG/JPEG accepted"',
                '"Photo upload failed, please try again"',
                '"Image dimensions too small"',
                '"File corrupted or unsupported"',
              ].map((err) => (
                <li key={err} className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  <code className="text-xs bg-background px-2 py-0.5 rounded border">{err}</code>
                </li>
              ))}
            </ul>
          </div>

          {/* Fix Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-Step Fix</h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.num} className={`p-5 rounded-2xl border ${step.color} flex gap-4`}>
                  <div className={`text-4xl font-extrabold ${step.numColor} opacity-30 leading-none flex-shrink-0`}>
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSlot variant="section" />

          {/* Quick Links to Tools */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tools You Need</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="group p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                    {tool.title}
                  </div>
                  <div className="text-xs text-muted-foreground">{tool.description}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Requirements Table */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">SSC Photo Requirements at a Glance</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground">Requirement</th>
                    <th className="text-left p-3 font-semibold text-foreground">Photo</th>
                    <th className="text-left p-3 font-semibold text-foreground">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Format', 'JPEG / JPG only', 'JPEG / JPG only'],
                    ['File Size', 'Maximum 20KB', 'Maximum 10KB'],
                    ['Dimensions', '200×230 pixels (recommended)', '140×60 pixels (recommended)'],
                    ['Background', 'White / Off-white', 'White paper'],
                    ['Age of Photo', 'Within 3 months', 'Recent'],
                  ].map(([req, photo, sig]) => (
                    <tr key={req} className="border-t border-border">
                      <td className="p-3 text-muted-foreground">{req}</td>
                      <td className="p-3 text-foreground">{photo}</td>
                      <td className="p-3 text-foreground">{sig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <FAQSection faqs={faqs} title="Frequently Asked Questions" />

          <AdSlot variant="section" />
        </div>
      </main>
      <Footer />
    </>
  );
}
