import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import CategorySection from '@/components/CategorySection';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import { TOOLS, CATEGORIES, getToolsByCategory } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Microtools — Free Online Tools for Govt Forms & Creators',
  description:
    'Free browser-based tools for Indian users. Compress images for SSC, UPSC, Railway forms. PDF, video, and image utilities — no signup, no uploads.',
  keywords:
    'free online tools india, image compressor, govt form tools, SSC photo compressor, UPSC image resize, railway form photo, pdf tools, microtools',
  openGraph: {
    title: 'Microtools — Free Online Tools for Govt Forms & Creators',
    description:
      'Fast, free browser-based tools: image compressors for SSC/UPSC/Railway, PDF tools, and more. No signup needed.',
    type: 'website',
  },
};

const homeFaqs = [
  {
    question: 'What is Microtools?',
    answer:
      'Microtools is a free collection of browser-based utility tools built for Indian users — especially students and job-seekers filling government exam forms. Our tools run entirely in your browser, so your files never leave your device.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'No. Every tool is completely free and requires zero registration. Open a tool, use it, and download your result — that is all.',
  },
  {
    question: 'Are my files safe?',
    answer:
      'Yes. All processing happens locally in your browser using the Canvas API (for images). Nothing is uploaded to any server. We never see your files.',
  },
  {
    question: 'Which image size should I choose for my exam form?',
    answer:
      'SSC exams typically require 20KB, UPSC requires 50KB, and Indian Railway (RRB) exams require 100KB. Always verify the exact requirement in your official exam notification.',
  },
  {
    question: 'Can I use these tools on my phone?',
    answer:
      'Absolutely. All tools are mobile-first and tested on Android and iOS browsers. You can upload, compress, and download directly from your smartphone.',
  },
  {
    question: 'When will PDF and Video tools be available?',
    answer:
      "We're actively building them. Subscribe to updates or check back soon — PDF compressor and converter tools are coming next.",
  },
];

export default function Home() {
  const imageTools = getToolsByCategory('image');
  const pdfTools = getToolsByCategory('pdf');
  const videoTools = getToolsByCategory('video');
  const utilityTools = getToolsByCategory('utility');
  const socialTools = getToolsByCategory('social');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">

          {/* Top Ad */}
          <AdSlot variant="top" />

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="mt-14 mb-16 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-5 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Free · Browser-based · No uploads needed
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-5 leading-tight tracking-tight">
              Free Online Tools for{' '}
              <span className="gradient-text">Govt Forms &amp; Creators</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Instantly resize images for SSC, UPSC, and Railway exam portals. Convert PDFs,
              compress videos, and more — all running privately in your browser with zero signup.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#categories"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:bg-primary/90 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                Browse All Tools
              </Link>
              <Link
                href="/resize-image-20kb-ssc"
                className="px-6 py-3 rounded-xl border-2 border-border text-foreground font-semibold text-sm hover:border-primary/40 hover:bg-muted transition-all"
              >
                SSC Photo Compressor
              </Link>
            </div>
          </section>

          {/* ── Stats bar ────────────────────────────────────────────────── */}
          <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { value: '9+', label: 'Tools Available' },
              { value: '100%', label: 'Browser-Based' },
              { value: '0 ₹', label: 'Always Free' },
              { value: '±2KB', label: 'Compression Tolerance' },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-xl border border-border bg-card text-center">
                <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ── Tool Categories ──────────────────────────────────────────── */}
          <div id="categories" className="space-y-14 scroll-mt-20">

            <CategorySection
              id="image-tools"
              emoji={CATEGORIES.image.emoji}
              title={CATEGORIES.image.label}
              description={CATEGORIES.image.description}
              tools={imageTools}
            />

            {/* Mid Ad between categories */}
            <AdSlot variant="section" />

            <CategorySection
              id="pdf-tools"
              emoji={CATEGORIES.pdf.emoji}
              title={CATEGORIES.pdf.label}
              description={CATEGORIES.pdf.description}
              tools={pdfTools}
            />

            <AdSlot variant="section" />

            <CategorySection
              id="utility-tools"
              emoji={CATEGORIES.utility.emoji}
              title={CATEGORIES.utility.label}
              description={CATEGORIES.utility.description}
              tools={utilityTools}
            />

            <CategorySection
              id="social-tools"
              emoji={CATEGORIES.social.emoji}
              title={CATEGORIES.social.label}
              description={CATEGORIES.social.description}
              tools={socialTools}
            />

            <CategorySection
              id="video-tools"
              emoji={CATEGORIES.video.emoji}
              title={CATEGORIES.video.label}
              description={CATEGORIES.video.description}
              tools={videoTools}
            />
          </div>

          {/* ── How It Works ─────────────────────────────────────────────── */}
          <section className="mt-20 mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">How It Works</h2>
              <p className="text-sm text-muted-foreground">Three steps — no expertise needed</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  step: '1',
                  title: 'Pick a Tool',
                  desc: 'Choose from image compressors, PDF tools, or video utilities above.',
                  color: 'text-blue-500',
                  bg: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800',
                },
                {
                  step: '2',
                  title: 'Upload Your File',
                  desc: 'Drag-and-drop or click to select. Your file stays in your browser — never sent to a server.',
                  color: 'text-violet-500',
                  bg: 'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800',
                },
                {
                  step: '3',
                  title: 'Download the Result',
                  desc: 'Processing is instant. Click download and upload directly to your exam portal.',
                  color: 'text-emerald-500',
                  bg: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800',
                },
              ].map((item) => (
                <div key={item.step} className={`p-6 rounded-2xl border ${item.bg}`}>
                  <div className={`text-5xl font-extrabold ${item.color} opacity-20 mb-3 leading-none`}>{item.step}</div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Bottom Ad ────────────────────────────────────────────────── */}
          <AdSlot variant="section" />

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section className="mt-12">
            <FAQSection faqs={homeFaqs} title="Frequently Asked Questions" />
          </section>

          {/* ── Footer ───────────────────────────────────────────────────── */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
              <p>© 2026 Microtools · All rights reserved</p>
              <nav className="flex flex-wrap items-center gap-4">
                {TOOLS.filter((t) => t.status === 'live').map((t) => (
                  <Link key={t.slug} href={t.href} className="hover:text-foreground transition-colors">
                    {t.title}
                  </Link>
                ))}
              </nav>
              <nav className="flex items-center gap-4">
                <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
                <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              </nav>
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}
