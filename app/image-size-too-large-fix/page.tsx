import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Image Size Too Large Error — How to Fix File Too Big (2026)',
  description:
    'Fix "file size too large" or "image too big" errors on exam portals, government websites, and upload forms. Compress your image to any KB size for free.',
  keywords:
    'image size too large error, file too big upload, reduce image size fix, compress image file too large, photo size exceeds limit, how to fix image upload error',
  alternates: {
    canonical: 'https://tools.draftly.co.in/image-size-too-large-fix',
    languages: { 'en-IN': 'https://tools.draftly.co.in/image-size-too-large-fix' },
  },
  openGraph: {
    title: 'Fix "Image Size Too Large" Error — Compress Image Free',
    description:
      'Fix file too large errors instantly. Compress any image to the exact KB required by government portals, email, WhatsApp, and more.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Why does the portal show "file size too large" even though my photo looks small?',
    answer:
      'File size (KB/MB) and visual size (pixels) are different. A high-resolution JPEG from a modern phone can be 8+ megapixels and 3–8MB even at small visual dimensions. You need to compress the file size in KB using our tool — not just resize the dimensions.',
  },
  {
    question: 'What is the fastest way to reduce image file size?',
    answer:
      'Use our image compressor — enter the target KB, upload your photo, and download the compressed version in under 2 seconds. This is faster and more accurate than Photoshop, Paint, or online tools that guess the compression level.',
  },
  {
    question: 'How do I reduce photo size on iPhone?',
    answer:
      'iPhone photos are saved as HEIC format which some portals reject. Open this tool on your iPhone browser → upload the HEIC photo → select your target size → download as JPEG. The tool automatically converts and compresses in one step.',
  },
  {
    question: 'How do I reduce image size on Android?',
    answer:
      'Open this website on your Android browser → tap the upload button → select your photo from the gallery → enter the target size in KB → tap Compress → download. Alternatively, use Google Photos built-in export feature with reduced quality.',
  },
  {
    question: 'How do I reduce image size in MB to KB?',
    answer:
      'Our compressor works for any target — whether you need 20KB, 50KB, 100KB, 500KB, or 1MB. Simply select the appropriate preset or type a custom value. A typical 3MB phone photo can be compressed to 50KB while remaining visually clear.',
  },
  {
    question: 'Will compressing reduce the visual quality of my photo?',
    answer:
      'At 50KB and above, quality loss is nearly invisible for most use cases. At 20KB (SSC exam portals), there is moderate compression but faces and features remain clear for official identification. Our binary search algorithm achieves the best quality possible at each target size.',
  },
];

const portals = [
  { name: 'SSC Portal', limit: '20KB', slug: 'resize-image-20kb-ssc' },
  { name: 'UPSC Portal', limit: '50KB', slug: 'resize-image-50kb-upsc' },
  { name: 'Railway RRB Portal', limit: '100KB', slug: 'resize-image-100kb-railway' },
  { name: 'IBPS / SBI Portal', limit: '50KB', slug: 'resize-image-for-ibps' },
  { name: 'NEET / JEE Portal', limit: '200KB', slug: 'resize-image-for-neet' },
  { name: 'Aadhar Update', limit: '80KB', slug: 'resize-image-for-aadhar' },
  { name: 'Visa Application', limit: '200KB', slug: 'resize-image-for-visa' },
  { name: 'WhatsApp', limit: '200KB', slug: 'resize-image-for-whatsapp' },
];

export default function PageImageSizeFix() {
  const relatedTools = getRelatedTools([
    'resize-image-20kb-ssc',
    'resize-image-50kb-upsc',
    'resize-image-100kb-railway',
    'image-size-checker',
  ]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">Fix Image Size Too Large</span>
          </nav>

          <AdSlot variant="top" />

          <div className="mt-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold mb-5 border border-orange-200 dark:border-orange-800">
              ⚠️ Fix Guide
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
              Fix &ldquo;Image Size Too Large&rdquo; Error
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Seeing a &ldquo;file too large&rdquo;, &ldquo;image size exceeds limit&rdquo;, or &ldquo;photo too big&rdquo; error when uploading to a government exam portal, bank form, or any online portal? This page explains the cause and gives you the exact tool to fix it — in under 60 seconds.
            </p>
          </div>

          {/* Quick fix CTA */}
          <div className="mb-10 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="font-bold text-foreground mb-2">⚡ Quick Fix</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Choose your portal below and go directly to the right compressor:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {portals.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-center"
                >
                  <div className="text-xs font-semibold text-foreground">{p.name}</div>
                  <div className="text-xs text-primary font-bold mt-0.5">max {p.limit}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Why */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Does This Error Happen?</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Modern smartphone cameras capture photos at 12–108 megapixels. A single photo from a modern Android phone is typically{' '}
                <strong className="text-foreground">3MB to 8MB</strong> in size — far above the 20KB–200KB limits imposed by government portals.
              </p>
              <p>
                Government exam portals (SSC, UPSC, Railway) set strict file size limits to reduce server storage costs and standardise document handling. These portals enforce limits using server-side validation — they check the actual file size, not just the extension.
              </p>
              <p>
                The solution is <strong className="text-foreground">JPEG compression</strong> — reducing the quality parameter of a JPEG file to bring its size below the required threshold. Our tool does this automatically using a binary search algorithm that finds the optimal quality setting to hit your exact KB target.
              </p>
            </div>
          </section>

          <AdSlot variant="section" />

          {/* Generic Compressor link */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Don&apos;t Know the Exact KB Limit?</h2>
            <p className="text-sm text-muted-foreground mb-6">
              If you need to compress to a custom size (any KB value), use our size-specific compressors:
            </p>
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

          <FAQSection faqs={faqs} title="Frequently Asked Questions" />
          <AdSlot variant="section" />
        </div>
      </main>
      <Footer />
    </>
  );
}
