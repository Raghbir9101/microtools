import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'IBPS PO Photo Size 2026 — IBPS Clerk, SBI Image Requirements Guide',
  description:
    'Complete guide to photo and signature requirements for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, SBI Clerk 2026. 50KB JPEG, exact dimensions, and upload tips.',
  keywords:
    'IBPS PO photo size 2026, IBPS Clerk image requirement, SBI PO photo size, bank exam photo 50kb, compress photo IBPS, IBPS photo format JPEG',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/ibps-photo-size-requirements',
    languages: { 'en-IN': 'https://tools.draftly.co.in/blog/ibps-photo-size-requirements' },
  },
  openGraph: {
    title: 'IBPS PO Photo Size 2026 — Complete Guide',
    description: 'Photo and signature requirements for all IBPS and SBI exams — 50KB JPEG, dimensions, background rules, and step-by-step upload guide.',
    type: 'article',
    url: 'https://tools.draftly.co.in/blog/ibps-photo-size-requirements',
  },
};

const faqs = [
  {
    question: 'What is the IBPS PO photo size 2026?',
    answer:
      'IBPS PO 2026 requires a JPEG photograph between 20KB and 50KB. Dimensions: 200×230 pixels. White background, recent photo within 6 months.',
  },
  {
    question: 'What is the SBI Clerk photo size?',
    answer:
      'SBI Clerk requires a JPEG photo between 20KB and 50KB, 200×230 pixels, white background. Same requirements as SBI PO and most IBPS exams.',
  },
  {
    question: 'What happens if I upload a PNG photo to the IBPS portal?',
    answer:
      'The IBPS portal will reject PNG files with an "unsupported format" error. Convert to JPEG first using our PNG to JPG tool, then compress to the required 50KB.',
  },
  {
    question: 'Can I use a smartphone photo for IBPS PO registration?',
    answer:
      'Yes. Photograph against a plain white wall, in good lighting. Save as JPEG and compress to 50KB using our tool. Avoid photos taken in dim light, or with a patterned background.',
  },
];

export default function BlogIBPSPhoto() {
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
            <span className="text-foreground font-medium">IBPS Photo Requirements</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Banking</span>
                <span className="text-xs text-muted-foreground">March 2026</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">4 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                IBPS PO / Clerk Photo Size 2026 — SBI Included
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Exact photo and signature requirements for IBPS PO, IBPS Clerk, IBPS SO, SBI PO, SBI Clerk, and all major banking recruitment exams in 2026.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">IBPS / SBI Photo Requirements — Quick Table</h2>
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
                        ['File Size', '20KB – 50KB', '10KB – 20KB'],
                        ['Dimensions', '200×230 pixels', '140×60 pixels'],
                        ['Background', 'White / Off-white', 'White paper'],
                        ['Colour', 'Colour photo required', 'Black or dark blue ink'],
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
                <h2 className="text-xl font-bold text-foreground mb-3">Bank Exam-Specific Requirements</h2>
                <div className="space-y-3">
                  {[
                    { exam: 'IBPS PO (Probationary Officer)', photo: '20KB–50KB JPEG', sig: '10KB–20KB JPEG' },
                    { exam: 'IBPS Clerk', photo: '20KB–50KB JPEG', sig: '10KB–20KB JPEG' },
                    { exam: 'IBPS SO (Specialist Officer)', photo: '20KB–50KB JPEG', sig: '10KB–20KB JPEG' },
                    { exam: 'IBPS RRB Officer', photo: '20KB–50KB JPEG', sig: '10KB–20KB JPEG' },
                    { exam: 'SBI PO', photo: '20KB–50KB JPEG', sig: '10KB–20KB JPEG' },
                    { exam: 'SBI Clerk (Junior Associate)', photo: '20KB–50KB JPEG', sig: '10KB–20KB JPEG' },
                    { exam: 'RBI Grade B', photo: '20KB–50KB JPEG', sig: '10KB–20KB JPEG' },
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
                <h2 className="text-xl font-bold text-foreground mb-3">Quick Links</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/resize-image-for-ibps', label: 'Resize Image for IBPS / SBI' },
                    { href: '/resize-image-50kb-upsc', label: 'Compress Image to 50KB' },
                    { href: '/signature-resize-20kb', label: 'Resize Signature to 20KB' },
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
