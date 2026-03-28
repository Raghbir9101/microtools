import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Resize Signature for Exam Forms — SSC, UPSC, IBPS, Railway Guide',
  description:
    'Complete guide on how to resize and compress your scanned signature for SSC, UPSC, IBPS, SBI, Railway exam forms. File size requirements, scanning tips, and common errors explained.',
  keywords:
    'how to resize signature exam form, SSC signature resize, IBPS signature size, compress signature for exam, signature scan for govt exam, signature upload requirement india',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/how-to-resize-signature-for-exam-forms',
    languages: { 'en-IN': 'https://tools.draftly.co.in/blog/how-to-resize-signature-for-exam-forms' },
  },
  openGraph: {
    title: 'How to Resize Signature for Exam Forms — SSC, UPSC, IBPS Guide',
    description: 'Step-by-step guide to scan, resize, and compress your signature to meet exam portal requirements.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Can I use a digital signature on exam forms?',
    answer: 'No. Government exam portals require a wet ink signature (signed by hand) that has been scanned or photographed. A typed or stylus signature is not accepted.',
  },
  {
    question: 'What pen should I use for the exam signature scan?',
    answer: 'Use a black or dark navy blue ballpoint pen on white unlined paper. Avoid gel pens (they smudge) and pencils (too faint). Medium tip pens produce the clearest scan.',
  },
  {
    question: 'How do I remove the background from my signature scan?',
    answer: 'Photograph with good lighting on a white surface. In editing, you can slightly increase brightness and contrast to make the signature darker on a white background. Our Background Remover tool can also isolate just the signature stroke.',
  },
];

const exams = [
  { name: 'SSC CGL / CHSL / MTS', photo: 'Max 10KB', format: 'JPEG', dim: '140×60 px', href: '/resize-signature-for-ssc' },
  { name: 'UPSC CSE / CAPF / CDS', photo: 'Max 20KB', format: 'JPEG', dim: '140×60 px', href: '/signature-resize-20kb' },
  { name: 'IBPS PO / SBI PO / Clerk', photo: '10–20KB', format: 'JPEG', dim: '140×60 px', href: '/resize-signature-for-ibps' },
  { name: 'RRB NTPC / Group D', photo: '10–40KB', format: 'JPEG', dim: '140×60 px', href: '/resize-signature' },
  { name: 'NTA (NEET / JEE)', photo: '4–30KB', format: 'JPEG', dim: '140×60 px', href: '/resize-signature' },
];

export default function BlogSignatureResize() {
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
            <span className="text-foreground font-medium">Resize Signature for Exam Forms</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Tutorial</span>
                <span className="text-xs text-muted-foreground">March 2026 · 5 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                How to Resize Signature for Exam Forms — Complete 2026 Guide
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                A step-by-step guide to scanning, photographing, and resizing your signature for any government exam portal — SSC, UPSC, IBPS, SBI, Railway, and NTA.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Signature Requirements by Exam</h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left p-3 font-semibold text-foreground">Exam</th>
                        <th className="text-left p-3 font-semibold text-foreground">Max Size</th>
                        <th className="text-left p-3 font-semibold text-foreground">Format</th>
                        <th className="text-left p-3 font-semibold text-foreground">Dimensions</th>
                        <th className="text-left p-3 font-semibold text-foreground">Tool</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exams.map((e) => (
                        <tr key={e.name} className="border-t border-border">
                          <td className="p-3 font-medium text-foreground">{e.name}</td>
                          <td className="p-3 text-primary font-semibold">{e.photo}</td>
                          <td className="p-3">{e.format}</td>
                          <td className="p-3">{e.dim}</td>
                          <td className="p-3"><Link href={e.href} className="text-primary hover:underline text-xs font-medium">Resize →</Link></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Step 1 — Sign on White Paper</h2>
                <ul className="space-y-1.5 list-disc pl-5">
                  <li>Use a blank white page (A4 or plain copy paper)</li>
                  <li>Sign with a black or dark navy blue ballpoint pen</li>
                  <li>Use your standard day-to-day signature — no artistic variations</li>
                  <li>Leave 1–2cm white space around the signature</li>
                  <li>Do not sign on lined paper — the lines show up in scans</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Step 2 — Photograph or Scan the Signature</h2>
                <p className="mb-3"><strong className="text-foreground">Option A — Phone Camera:</strong> Place the paper flat on a white table surface. In daylight, photograph from directly above (bird&apos;s eye view). Use portrait mode OFF, no flash.</p>
                <p className="mb-3"><strong className="text-foreground">Option B — Scanner App:</strong> Use Microsoft Lens or CamScanner with &ldquo;Document&rdquo; mode. This auto-corrects perspective. Save as JPEG.</p>
                <p><strong className="text-foreground">Option C — Flatbed Scanner:</strong> Scan at 200 DPI, save as JPEG. Crop tightly to the signature in any photo editor.</p>
              </section>

              <AdSlot variant="section" />

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Step 3 — Crop and Compress</h2>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>Crop the image tightly to the signature (5px white border on all sides)</li>
                  <li>Open the relevant signature resizer for your exam</li>
                  <li>Upload the signature image (JPEG preferred; convert PNG first)</li>
                  <li>Select the target size (10KB for SSC, 20KB for IBPS/UPSC)</li>
                  <li>Download the compressed JPEG signature</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Signature Resizer Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/resize-signature-for-ssc', label: 'Signature Resizer — 10KB (SSC)' },
                    { href: '/resize-signature-for-ibps', label: 'Signature Resizer — 20KB (IBPS/SBI)' },
                    { href: '/signature-resize-20kb', label: 'Signature Resizer — 20KB (UPSC)' },
                    { href: '/resize-signature', label: 'General Signature Resizer' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium text-foreground">
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
