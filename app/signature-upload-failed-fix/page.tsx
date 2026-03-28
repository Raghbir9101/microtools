import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Signature Upload Failed — Fix for SSC, UPSC, IBPS, Railway Forms',
  description:
    'Fix "signature upload failed" or "signature file size exceeds limit" errors on SSC, UPSC, IBPS, Railway exam portals. Step-by-step guide to compress and fix your signature.',
  keywords:
    'signature upload failed SSC, signature file too large error, IBPS signature upload error, signature not uploading exam portal, how to fix signature upload error, SSC signature rejected fix',
  alternates: {
    canonical: 'https://tools.draftly.co.in/signature-upload-failed-fix',
    languages: { 'en-IN': 'https://tools.draftly.co.in/signature-upload-failed-fix' },
  },
  openGraph: {
    title: 'Fix Signature Upload Failed Error on Exam Portals',
    description: 'Fix signature upload errors on SSC, UPSC, IBPS, and Railway portals. Exact file size, format, and dimension requirements explained.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What signature file size does SSC accept?',
    answer: 'SSC accepts signatures between 1KB and 10KB, JPEG format only, dimensions 140×60 pixels minimum.',
  },
  {
    question: 'What signature size does IBPS accept?',
    answer: 'IBPS accepts signatures between 10KB and 20KB, JPEG format, dimensions 140×60 pixels.',
  },
  {
    question: 'What signature size does UPSC accept?',
    answer: 'UPSC accepts signatures up to 20KB, JPEG format, at least 140×60 pixels, black or blue ink on white paper.',
  },
  {
    question: 'My signature is in PNG — will exam portals accept it?',
    answer: 'No. All Indian government exam portals strictly require JPEG/JPG. Convert PNG to JPG first using our PNG to JPG tool, then compress to the target KB.',
  },
  {
    question: 'My signature looks clear but the file is only 2KB — is that a problem?',
    answer: 'For most portals, yes — minimum size requirements exist. IBPS requires at least 10KB. If your file is 2KB, the signature scan may be too small in dimensions. Ensure minimum 140×60 pixels and use our resizer.',
  },
];

const portalSignatureReqs = [
  { portal: 'SSC CGL / CHSL / MTS / CPO', format: 'JPEG', size: 'Max 10KB', dim: '140×60 px' },
  { portal: 'UPSC CSE / CAPF / CDS', format: 'JPEG', size: 'Max 20KB', dim: '140×60 px' },
  { portal: 'IBPS PO / Clerk / SO', format: 'JPEG', size: '10KB–20KB', dim: '140×60 px' },
  { portal: 'SBI PO / SBI Clerk', format: 'JPEG', size: '10KB–20KB', dim: '140×60 px' },
  { portal: 'RRB NTPC / Group D / ALP', format: 'JPEG', size: '10KB–40KB', dim: '140×60 px' },
  { portal: 'NEET UG / JEE Main (NTA)', format: 'JPEG', size: '4KB–30KB', dim: '140×60 px' },
];

export default function PageSignatureFix() {
  const relatedTools = getRelatedTools([
    'resize-signature',
    'resize-signature-ssc',
    'signature-resize-20kb',
    'png-to-jpg',
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
            <span className="text-foreground font-medium">Signature Upload Failed Fix</span>
          </nav>

          <AdSlot variant="top" />

          <div className="mt-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 text-xs font-semibold mb-5 border border-orange-200 dark:border-orange-800">
              ✍️ Signature Fix Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5 leading-tight">
              Signature Upload Failed — Fix for All Exam Portals
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              Getting a &ldquo;signature upload failed&rdquo;, &ldquo;file size exceeds limit&rdquo;, or &ldquo;invalid signature format&rdquo; error on SSC, UPSC, IBPS, SBI, or Railway portals? This guide explains every cause and provides the exact fix for each portal.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Signature Requirements by Portal</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground">Portal / Exam</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                    <th className="text-left p-3 font-semibold text-foreground">Size</th>
                    <th className="text-left p-3 font-semibold text-foreground">Dimensions</th>
                  </tr>
                </thead>
                <tbody>
                  {portalSignatureReqs.map((row) => (
                    <tr key={row.portal} className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">{row.portal}</td>
                      <td className="p-3 text-muted-foreground">{row.format}</td>
                      <td className="p-3 text-primary font-semibold">{row.size}</td>
                      <td className="p-3 text-muted-foreground">{row.dim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">Common Errors and Fixes</h2>
            <div className="space-y-3">
              {[
                { err: '"Signature file size exceeds limit"', fix: 'Compress your signature to the target KB using our Signature Resizer (10KB for SSC, 20KB for IBPS/UPSC)', href: '/resize-signature' },
                { err: '"Unsupported file format for signature"', fix: 'Your file is PNG or HEIC — convert to JPEG first, then compress', href: '/png-to-jpg' },
                { err: '"Signature dimensions too small"', fix: 'Ensure minimum 140×60 pixels — use Image Dimension Resizer', href: '/resize-image-dimensions' },
                { err: '"Signature is blank/not visible"', fix: 'The signature scan is too light — re-sign with darker ink and scan again with better lighting', href: '/resize-signature' },
              ].map((item) => (
                <div key={item.err} className="p-4 rounded-xl border border-border bg-card">
                  <code className="text-xs text-red-500 font-medium block mb-2">{item.err}</code>
                  <p className="text-sm text-muted-foreground mb-2">{item.fix}</p>
                  <Link href={item.href} className="text-xs text-primary font-medium hover:underline">Fix now →</Link>
                </div>
              ))}
            </div>
          </section>

          <AdSlot variant="section" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Signature Resizers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link key={tool.slug} href={tool.href} className="group p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary mb-1">{tool.title}</div>
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
