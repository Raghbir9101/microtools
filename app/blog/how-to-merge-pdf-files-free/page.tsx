import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Convert and Merge Documents to PDF Free — JPG, PNG to PDF',
  description:
    'Complete guide on how to convert JPG, PNG images to PDF and merge multiple documents into one PDF file. Free browser-based tools for government forms, job applications, and academic submissions.',
  keywords:
    'how to merge pdf free, convert jpg to pdf online free, combine documents pdf, images to pdf guide, merge pdf without software, jpg to pdf india, combine documents government form',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/how-to-merge-pdf-files-free',
    languages: { 'en-IN': 'https://tools.draftly.co.in/blog/how-to-merge-pdf-files-free' },
  },
  openGraph: {
    title: 'How to Convert & Merge Documents to PDF Free',
    description: 'Step-by-step guide to convert images to PDF and merge multiple PDFs into one, completely free in your browser.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Is it safe to use online PDF converters?',
    answer: 'With our tool, yes — PDF conversion happens entirely in your browser using PDF.js. Your documents are never uploaded to any server. Unlike most online converters, there is no privacy risk.',
  },
  {
    question: 'What is the size limit for PDFs on government portals?',
    answer: 'Common limits: IBPS portals — 1MB. NTA (NEET/JEE) — 500KB. State government scholarship portals — 2–5MB. Compress images to 100KB each before converting to stay well within limits.',
  },
  {
    question: 'How many images can I combine into one PDF?',
    answer: 'Our tool supports up to 20 images per PDF conversion. For more pages, merge two PDFs together using the Merge PDF tool.',
  },
  {
    question: 'Does PDF conversion work on mobile?',
    answer: 'Yes. Our JPG to PDF and Merge PDF tools work on Android and iOS browsers. No app download needed.',
  },
];

export default function BlogMergePDF() {
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
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">How to Merge PDF Files Free</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">PDF Guide</span>
                <span className="text-xs text-muted-foreground">March 2026 · 5 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                How to Convert & Merge Documents to PDF — Free
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                A complete guide to converting JPG and PNG images to PDF, and merging multiple PDFs into one — without any software, subscriptions, or file uploads to servers.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">When Do You Need to Convert Images to PDF?</h2>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>Government form submissions requiring all documents in one PDF (Aadhar, PAN, certificates)</li>
                  <li>Bank job applications (IBPS, SBI) requiring merged document upload</li>
                  <li>College admission portals needing marksheets as a single PDF</li>
                  <li>Scholarship portals requiring income and caste certificates merged</li>
                  <li>Court filings and legal submissions needing scanned documents in PDF</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Method 1 — Convert Images to PDF (JPG to PDF)</h2>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>Open our <Link href="/jpg-to-pdf" className="text-primary underline">JPG to PDF Converter</Link></li>
                  <li>Upload your images (JPEG, PNG) — multiple images = multiple pages</li>
                  <li>Drag to reorder images in the correct document order</li>
                  <li>Click &ldquo;Convert to PDF&rdquo; — download the multi-page PDF</li>
                </ol>
                <div className="mt-4 p-3 rounded-xl bg-muted/50 border border-border text-xs">
                  <strong className="text-foreground">💡 Tip:</strong> Compress images to 100–200KB each before converting. A 10-page PDF with 100KB images = ~1MB PDF, which fits most portal limits.
                </div>
              </section>

              <AdSlot variant="section" />

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Method 2 — Merge Existing PDFs into One</h2>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>Open our <Link href="/merge-pdf" className="text-primary underline">Merge PDF Tool</Link></li>
                  <li>Upload up to 10 PDF files</li>
                  <li>Drag to set the order (identity → education → experience)</li>
                  <li>Click &ldquo;Merge PDFs&rdquo; — download the combined PDF</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">PDF Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/jpg-to-pdf', label: 'JPG to PDF Converter' },
                    { href: '/merge-pdf', label: 'Merge Multiple PDFs' },
                    { href: '/convert-images-to-pdf-for-govt-forms', label: 'Images to PDF for Govt Forms' },
                    { href: '/jpg-to-pdf-for-bank-documents', label: 'Images to PDF for Bank/Job Applications' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all text-sm font-medium text-foreground">
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-10">
              <FAQSection faqs={faqs} title="FAQ" />
            </div>
          </article>
          <AdSlot variant="section" />
        </div>
      </main>
      <Footer />
    </>
  );
}
