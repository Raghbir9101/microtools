import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Free Online PDF Tools — Merge, Convert, Compress | All in One',
  description:
    'All free PDF tools in one place — merge PDF, JPG to PDF, PDF to JPG, HTML to PDF, and PDF tools for govt form submissions. Free, browser-based, no uploads.',
  keywords:
    'free pdf tools online, merge pdf, jpg to pdf, pdf to jpg, html to pdf, pdf converter, pdf tools for government forms',
  alternates: {
    canonical: 'https://tools.draftly.co.in/pdf-tools',
    languages: { 'en-IN': 'https://tools.draftly.co.in/pdf-tools' },
  },
  openGraph: {
    title: 'Free Online PDF Tools — Merge, Convert, Compress',
    description: 'Merge PDF, JPG to PDF, PDF to JPG, HTML to PDF — all free and browser-based.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free Online PDF Tools',
  url: `${SITE_URL}/pdf-tools`,
  description: 'Collection of free browser-based PDF tools — merge, convert JPG/HTML to PDF, and more.',
};

const tools = [
  {
    href: '/merge-pdf',
    label: 'Merge PDF',
    desc: 'Combine multiple PDF files into one — for applications, certificates, ID bundles',
    badge: 'Most Used',
    badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  },
  {
    href: '/jpg-to-pdf',
    label: 'JPG to PDF',
    desc: 'Convert one or more JPEG images into a single PDF document',
    badge: 'Popular',
    badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  },
  {
    href: '/jpg-to-pdf-for-bank-documents',
    label: 'JPG to PDF — Bank Documents',
    desc: 'Bundle bank statement photos, cancelled cheque, ID proof into one PDF',
    badge: 'Banking',
    badgeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  },
  {
    href: '/convert-images-to-pdf-for-govt-forms',
    label: 'Images to PDF — Govt Forms',
    desc: 'Combine photo, signature, ID scans into one PDF for government applications',
    badge: 'Govt Forms',
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  {
    href: '/html-to-pdf',
    label: 'HTML to PDF',
    desc: 'Convert web pages or HTML templates to PDF — invoices, letters, forms',
    badge: 'Dev Use',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  },
  {
    href: '/pdf-to-jpg',
    label: 'PDF to JPG',
    desc: 'Extract images from a PDF — each page becomes a JPEG',
    badge: null,
    badgeColor: '',
  },
];

const useCases = [
  {
    icon: '🏦',
    title: 'Bank Account Opening',
    steps: ['Compress your ID photo to 50KB', 'Scan signature (20KB)', 'Bundle all into one PDF with JPG → PDF'],
    links: [
      { href: '/resize-image-50kb', label: 'Compress to 50KB' },
      { href: '/jpg-to-pdf-for-bank-documents', label: 'JPG to PDF — Bank' },
    ],
  },
  {
    icon: '🏛️',
    title: 'Government Application Bundle',
    steps: ['Photo compressed to 20KB (SSC standard)', 'Signature at 10KB', 'Merge all document scans into one PDF'],
    links: [
      { href: '/resize-image-20kb-ssc', label: 'SSC Photo 20KB' },
      { href: '/convert-images-to-pdf-for-govt-forms', label: 'Images → PDF' },
    ],
  },
  {
    icon: '🎓',
    title: 'University / Scholarship Application',
    steps: ['Certificate scans → individual JPEGs', 'Compress each to under 200KB', 'Merge into single PDF bundle'],
    links: [
      { href: '/reduce-image-size', label: 'Reduce Image Size' },
      { href: '/merge-pdf', label: 'Merge PDF' },
    ],
  },
];

export default function PdfTools() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">PDF Tools</span>
          </nav>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Free Online PDF Tools
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Merge PDFs, convert JPG/HTML to PDF, and extract pages — all free, browser-based.
              No uploads, no registration. Perfect for government forms, bank applications, and university submissions.
            </p>
          </div>

          {/* Tools list */}
          <section className="mb-10">
            <div className="rounded-xl border border-border overflow-hidden">
              {tools.map((tool, i) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`flex items-center justify-between gap-4 px-4 py-4 hover:bg-muted/30 transition-colors group ${i > 0 ? 'border-t border-border' : ''}`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{tool.label}</p>
                      {tool.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${tool.badgeColor}`}>{tool.badge}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{tool.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot variant="section" />

          {/* Use case workflows */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Common Workflows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {useCases.map(uc => (
                <div key={uc.title} className="p-4 rounded-xl border border-border bg-card">
                  <p className="text-2xl mb-2">{uc.icon}</p>
                  <p className="font-semibold text-foreground text-sm mb-2">{uc.title}</p>
                  <ol className="space-y-1 mb-3">
                    {uc.steps.map((step, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
                        <span className="font-bold text-foreground">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="flex flex-col gap-1.5">
                    {uc.links.map(l => (
                      <Link key={l.href} href={l.href} className="text-xs text-primary hover:underline font-medium">
                        → {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cross-link to image tools */}
          <div className="p-4 rounded-xl border border-border bg-muted/20 flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground text-sm">Need image tools instead?</p>
              <p className="text-xs text-muted-foreground">Compress, resize, convert, remove background — all image tools in one hub.</p>
            </div>
            <Link href="/image-tools" className="flex-shrink-0 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all">
              Image Tools →
            </Link>
          </div>

          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
