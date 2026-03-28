import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'PNG Not Accepted by Portal — Fix "Upload JPEG/JPG Only" Error',
  description:
    'Fixing the "invalid file format" or "only JPEG accepted" error when uploading PNG photos to SSC, UPSC, IBPS, Railway, and other government exam portals. Step-by-step fix.',
  keywords:
    'png not accepted exam portal, only jpeg accepted error, convert png to jpg government portal, png upload failed SSC, IBPS PNG not accepted, how to convert PNG to JPEG for exam',
  alternates: {
    canonical: 'https://tools.draftly.co.in/png-not-accepted-by-portal-fix',
    languages: { 'en-IN': 'https://tools.draftly.co.in/png-not-accepted-by-portal-fix' },
  },
  openGraph: {
    title: 'Fix PNG Not Accepted by Exam Portal — Convert to JPEG',
    description: 'Fix the "only JPEG accepted" error on SSC, UPSC, IBPS, Railway portals. Convert PNG to JPEG in one click.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Why do government portals not accept PNG photos?',
    answer: 'Government exam portals use strict file type validation to enforce size limits (PNG is lossless and larger than JPEG). JPEG allows controlled compression to 10KB, 20KB, etc., which is why portals mandate it. PNG files at the same visual quality would be 5–10× larger.',
  },
  {
    question: 'My iPhone photo is HEIC — how to convert for exam portals?',
    answer: 'Go to iPhone Settings → Camera → Formats → select "Most Compatible". All future photos are saved as JPEG. For existing HEIC files, share to your laptop and it converts automatically, or use an online HEIC to JPG converter.',
  },
  {
    question: 'Does converting PNG to JPEG reduce photo quality?',
    answer: 'JPEG conversion at 90%+ quality shows no visible quality loss for portrait photographs. Our tool converts at 95% quality by default — you cannot see a difference, and the file is now compliant with all exam portals.',
  },
  {
    question: 'What if the portal still rejects after converting to JPEG?',
    answer: 'Check the file size next — portals often show one error at a time. After converting to JPEG, also compress to the target KB (20KB for SSC, 50KB for UPSC) using our photo compressor.',
  },
];

export default function PagePNGFix() {
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
            <span className="text-foreground font-medium">PNG Not Accepted Fix</span>
          </nav>

          <AdSlot variant="top" />

          <div className="mt-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 text-xs font-semibold mb-5 border border-rose-200 dark:border-rose-800">
              🔧 Format Fix
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5 leading-tight">
              PNG Not Accepted — Fix &ldquo;Upload JPEG Only&rdquo; Error
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              You&apos;re seeing &ldquo;invalid file format&rdquo;, &ldquo;please upload a JPEG/JPG file&rdquo;, or &ldquo;only .jpg files are allowed&rdquo; error? You&apos;ve uploaded a PNG file. Indian government exam portals — SSC, UPSC, IBPS, Railway — only accept JPEG. Here&apos;s the one-click fix.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Are You Seeing This Error?</h2>
            <div className="space-y-3">
              {[
                { cause: 'Photo saved as PNG from editing app (Canva, Photoshop, GIMP)', icon: '📱' },
                { cause: 'Screenshot taken and used as passport photo (screenshots are PNG by default)', icon: '📸' },
                { cause: 'iPhone in HEIC mode — converted to PNG not JPEG on share', icon: '🍎' },
                { cause: 'WhatsApp or Google Photos export saved as PNG', icon: '💬' },
                { cause: 'Image downloaded from the internet in PNG or WebP format', icon: '🌐' },
              ].map((item) => (
                <div key={item.cause} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-muted/30">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-sm text-muted-foreground">{item.cause}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">Fix in 2 Steps</h2>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-border bg-card">
                <div className="text-2xl font-extrabold text-primary mb-2">Step 1</div>
                <h3 className="font-bold text-foreground mb-2">Convert PNG → JPEG</h3>
                <p className="text-sm text-muted-foreground mb-3">Open our PNG to JPG Converter, upload your PNG file, and download the JPEG version.</p>
                <Link href="/png-to-jpg" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  PNG to JPG Converter →
                </Link>
              </div>
              <div className="p-5 rounded-2xl border border-border bg-card">
                <div className="text-2xl font-extrabold text-primary mb-2">Step 2</div>
                <h3 className="font-bold text-foreground mb-2">Compress to Required KB</h3>
                <p className="text-sm text-muted-foreground mb-3">After converting, compress the JPEG to the required size (20KB for SSC, 50KB for UPSC, 100KB for Railway).</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/resize-image-20kb-ssc" className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted hover:border-primary/40 text-muted-foreground transition-all">SSC 20KB</Link>
                  <Link href="/resize-image-50kb-upsc" className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted hover:border-primary/40 text-muted-foreground transition-all">UPSC 50KB</Link>
                  <Link href="/resize-image-100kb-railway" className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted hover:border-primary/40 text-muted-foreground transition-all">Railway 100KB</Link>
                  <Link href="/resize-image-for-ibps" className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted hover:border-primary/40 text-muted-foreground transition-all">IBPS 50KB</Link>
                </div>
              </div>
            </div>
          </section>

          <AdSlot variant="section" />

          <FAQSection faqs={faqs} title="FAQ" />
          <AdSlot variant="section" />
        </div>
      </main>
      <Footer />
    </>
  );
}
