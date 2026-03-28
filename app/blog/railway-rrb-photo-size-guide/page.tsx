import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Railway RRB Exam Photo Size 2026 — Complete Guide (100KB Requirement)',
  description:
    'Complete guide to photo and signature size requirements for Railway RRB NTPC, Group D, ALP, JE 2026. 100KB JPEG, dimensions, background rules, and upload tips.',
  keywords:
    'railway photo size 2026, RRB NTPC photo size, RRB Group D image size, railway exam photo 100kb, compress photo railway form, RRB photo requirement, railway signature size',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/railway-rrb-photo-size-guide',
    languages: { 'en-IN': 'https://tools.draftly.co.in/blog/railway-rrb-photo-size-guide' },
  },
  openGraph: {
    title: 'Railway RRB Exam Photo Size 2026 — Complete Guide',
    description: 'Complete guide to Railway RRB photo requirements — 100KB JPEG, dimensions, and step-by-step upload guide.',
    type: 'article',
    url: 'https://tools.draftly.co.in/blog/railway-rrb-photo-size-guide',
  },
};

const faqs = [
  {
    question: 'What is the photo size for RRB NTPC 2026?',
    answer:
      'RRB NTPC 2026 requires a JPEG photo between 15KB and 100KB. Dimensions should be 200×230 pixels (width×height). White background, front-facing, recent (within 6 months).',
  },
  {
    question: 'What is the RRB Group D photo size requirement?',
    answer:
      'RRB Group D requires the same as RRB NTPC: JPEG photo, 15KB–100KB, 200×230 px recommended, white background.',
  },
  {
    question: 'What file format does Railway portal accept for photos?',
    answer:
      'Railway RRB portals only accept JPEG/JPG format for photographs. PNG, HEIC, WebP, and GIF are not accepted. Convert your photo to JPEG first if needed.',
  },
  {
    question: 'What is the Railway exam signature size requirement?',
    answer:
      'Railway RRB signature must be: JPEG format, 10KB–40KB, dimensions 140×60 pixels, signed in black or dark blue ink on white paper.',
  },
];

export default function BlogRailwayPhoto() {
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
            <span className="text-foreground font-medium">Railway RRB Photo Size Guide</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">Railway</span>
                <span className="text-xs text-muted-foreground">March 2026</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">5 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Railway RRB Exam Photo Size 2026 — Complete Guide
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                A complete guide covering photo and signature requirements for all Indian Railway recruitment exams — RRB NTPC, Group D, ALP, JE, RPF, and RPSF — for 2026 applications.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Railway Photo Requirements — Quick Reference</h2>
                <div className="overflow-x-auto rounded-xl border border-border mb-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold text-foreground">Parameter</th>
                        <th className="text-left p-3 font-semibold text-foreground">Photo</th>
                        <th className="text-left p-3 font-semibold text-foreground">Signature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Format', 'JPEG / JPG only', 'JPEG / JPG only'],
                        ['File Size', '15KB – 100KB', '10KB – 40KB'],
                        ['Dimensions', '200×230 pixels', '140×60 pixels'],
                        ['Background', 'White / Off-white', 'White paper'],
                        ['Colour', 'Colour photo required', 'Black or dark blue ink'],
                        ['Recency', 'Within 6 months', 'Recent'],
                      ].map(([p, photo, sig]) => (
                        <tr key={p} className="border-t border-border">
                          <td className="p-3 text-foreground font-medium">{p}</td>
                          <td className="p-3">{photo}</td>
                          <td className="p-3">{sig}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Exam-Specific Railway Photo Requirements</h2>
                <div className="space-y-3">
                  {[
                    { exam: 'RRB NTPC (Non-Technical Popular Categories)', photo: '15KB–100KB JPEG', sig: '10KB–40KB JPEG' },
                    { exam: 'RRB Group D (Level 1)', photo: '15KB–100KB JPEG', sig: '10KB–40KB JPEG' },
                    { exam: 'RRB ALP (Assistant Loco Pilot)', photo: '15KB–100KB JPEG', sig: '10KB–40KB JPEG' },
                    { exam: 'RRB JE (Junior Engineer)', photo: '15KB–100KB JPEG', sig: '10KB–40KB JPEG' },
                    { exam: 'RPF / RPSF Constable & SI', photo: '15KB–100KB JPEG', sig: '10KB–40KB JPEG' },
                  ].map((row) => (
                    <div key={row.exam} className="p-4 rounded-xl border border-border bg-card">
                      <div className="font-semibold text-foreground text-sm mb-1">{row.exam}</div>
                      <div className="text-xs text-muted-foreground">Photo: {row.photo} | Signature: {row.sig}</div>
                    </div>
                  ))}
                </div>
              </section>

              <AdSlot variant="section" />

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">How to Compress Photo to 100KB for Railway</h2>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>Photograph yourself against a white wall in good lighting (or use our Background Remover)</li>
                  <li>Open our <Link href="/resize-image-100kb-railway" className="text-primary underline underline-offset-2">Railway 100KB Photo Compressor</Link></li>
                  <li>Upload your photo — any format is accepted as input</li>
                  <li>Compressed to 80KB–100KB JPEG (within the 15KB–100KB accepted range)</li>
                  <li>Download and verify size with <Link href="/image-size-checker" className="text-primary underline underline-offset-2">Image Size Checker</Link></li>
                  <li>Upload to the RRB portal</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Quick Links to Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/resize-image-100kb-railway', label: 'Resize Image to 100KB for Railway' },
                    { href: '/resize-signature', label: 'Resize Signature (10KB–40KB)' },
                    { href: '/background-remover', label: 'Remove Background (White BG)' },
                    { href: '/png-to-jpg', label: 'Convert PNG to JPG' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium text-foreground"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-10">
              <FAQSection faqs={faqs} title="Frequently Asked Questions" />
            </div>
          </article>

          <AdSlot variant="section" />
        </div>
      </main>
      <Footer />
    </>
  );
}
