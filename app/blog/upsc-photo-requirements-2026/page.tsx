import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'UPSC Photo Requirements 2026 — Complete Guide (Size, Format, Dimensions)',
  description:
    'Complete guide to UPSC photo and signature requirements for 2026 — file size, dimensions, format, background rules, and how to compress your photo free.',
  keywords:
    'UPSC photo requirements 2026, UPSC image size, UPSC photo 50kb, UPSC CSE photo format, compress photo UPSC, UPSC signature size, UPSC civil services photo',
  alternates: {
    canonical: 'https://tools.draftly.co.in/blog/upsc-photo-requirements-2026',
    languages: { 'en-IN': 'https://tools.draftly.co.in/blog/upsc-photo-requirements-2026' },
  },
  openGraph: {
    title: 'UPSC Photo Requirements 2026 — Complete Guide',
    description:
      'Everything about UPSC photo and signature size for 2026 applications — format, dimensions, KB limits, and step-by-step upload guide.',
    type: 'article',
    url: 'https://tools.draftly.co.in/blog/upsc-photo-requirements-2026',
  },
};

const faqs = [
  {
    question: 'What is the exact photo size for UPSC CSE 2026?',
    answer:
      'UPSC Civil Services 2026 requires: JPEG format, between 40KB and 300KB (50KB is safe mid-point), dimensions at least 350×450 pixels (3.5×4.5cm standard), white background.',
  },
  {
    question: 'What is the UPSC signature size?',
    answer:
      'UPSC requires signature in JPEG format, 20KB maximum, on white background with black/blue ink. Dimensions: at least 140×60 pixels.',
  },
  {
    question: 'Can I use the same photo for UPSC Prelims and Mains?',
    answer:
      "You can use the same original photo as long as it was taken within 6 months and meets the specifications. The file may need to be re-compressed to meet the exact KB limit for each application portal.",
  },
  {
    question: 'Does UPSC need a coloured or black-and-white photo?',
    answer:
      'UPSC requires a colour photograph. Black-and-white photos are not accepted for IAS/IPS applications.',
  },
];

export default function BlogUPSCPhoto() {
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
            <span className="text-foreground font-medium">UPSC Photo Requirements 2026</span>
          </nav>

          <AdSlot variant="top" />

          <article className="mt-8">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">Govt Forms</span>
                <span className="text-xs text-muted-foreground">March 2026</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">5 min read</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                UPSC Photo Requirements 2026 — Complete Guide
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Everything you need to know about photograph and signature requirements for UPSC Civil Services (IAS), CAPF, CDS, NDA, and other UPSC 2026 examinations — file size, format, dimensions, and how to meet them.
              </p>
            </div>

            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">UPSC Photo Requirements at a Glance</h2>
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
                        ['Format', 'JPEG / JPG', 'JPEG / JPG'],
                        ['File Size', '40KB – 300KB (50KB recommended)', 'Maximum 20KB'],
                        ['Min Dimensions', '350×450 px (3.5×4.5 cm)', '140×60 px'],
                        ['Background', 'White / Off-white', 'White paper'],
                        ['Colour', 'Colour (not B&W)', 'Black/blue ink'],
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
                <h2 className="text-xl font-bold text-foreground mb-3">What are the UPSC 2026 Photo Rules?</h2>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Photograph must be in <strong className="text-foreground">colour</strong> — black-and-white is not accepted</li>
                  <li>Background must be <strong className="text-foreground">white or light-coloured</strong></li>
                  <li>Face must be clearly visible — <strong className="text-foreground">no caps, goggles, or dark glasses</strong></li>
                  <li>Ears must be visible in the photograph</li>
                  <li>Photo must be recent — <strong className="text-foreground">taken within the last 6 months</strong></li>
                  <li>File must be <strong className="text-foreground">JPEG format</strong> — PNG or WebP will be rejected</li>
                  <li>File size must be between <strong className="text-foreground">40KB and 300KB</strong></li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">How to Compress Photo to 50KB for UPSC</h2>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>Take or scan a passport-size colour photo against a white background</li>
                  <li>Open our <Link href="/resize-image-50kb-upsc" className="text-primary underline underline-offset-2">UPSC 50KB Photo Compressor</Link></li>
                  <li>Upload your photo (any size — JPEG, PNG, WebP supported)</li>
                  <li>Click Compress — the tool automatically hits 50KB within ±2KB</li>
                  <li>Download the compressed JPEG and verify with <Link href="/image-size-checker" className="text-primary underline underline-offset-2">Image Size Checker</Link></li>
                  <li>Upload to the UPSC portal</li>
                </ol>
              </section>

              <AdSlot variant="section" />

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">UPSC Exam-Specific Photo Requirements</h2>
                <div className="space-y-3">
                  {[
                    { exam: 'UPSC Civil Services (IAS/IPS/IFS)', photo: '40KB–300KB JPEG', sig: '20KB JPEG' },
                    { exam: 'UPSC CAPF (AC)', photo: '50KB JPEG', sig: '20KB JPEG' },
                    { exam: 'UPSC CDS', photo: '50KB JPEG', sig: '20KB JPEG' },
                    { exam: 'UPSC NDA / NA', photo: '50KB JPEG', sig: '20KB JPEG' },
                    { exam: 'UPSC ESE (Engineering Services)', photo: '40KB–300KB JPEG', sig: '20KB JPEG' },
                    { exam: 'UPSC CMS (Medical Services)', photo: '50KB JPEG', sig: '20KB JPEG' },
                  ].map((row) => (
                    <div key={row.exam} className="p-4 rounded-xl border border-border bg-card">
                      <div className="font-semibold text-foreground text-sm mb-1">{row.exam}</div>
                      <div className="text-xs text-muted-foreground">Photo: {row.photo} | Signature: {row.sig}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">Quick Links to Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: '/resize-image-50kb-upsc', label: 'Resize Image to 50KB for UPSC' },
                    { href: '/signature-resize-20kb', label: 'Resize Signature to 20KB' },
                    { href: '/background-remover', label: 'Remove Background (White BG)' },
                    { href: '/image-size-checker', label: 'Check Image File Size' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group p-3 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all text-sm font-medium text-foreground group-hover:text-primary"
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
