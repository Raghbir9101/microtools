import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Background Remover — Free Online Tool (Coming Soon)',
  description:
    'Remove image backgrounds automatically for passport photos, govt ID photos, and profile pictures. Free, browser-based tool launching soon on Microtools.',
  keywords:
    'background remover online, remove background free, passport photo background, govt photo background remove, image background eraser India',
  openGraph: {
    title: 'Background Remover — Coming Soon | Microtools',
    description:
      'Automatically remove image backgrounds for passport and govt ID photos. Free browser-based tool launching soon.',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'What will the Background Remover do?',
    answer:
      'The tool will automatically detect and remove the background from your photo — replacing it with white, transparent, or a custom colour. Ideal for passport photos, govt ID cards, and professional profile pictures.',
  },
  {
    question: 'Will it work for Indian passport-size photos?',
    answer:
      'Yes. We are specifically designing it to handle the Indian passport photo standard (35×45mm, white background) and government ID photo requirements.',
  },
  {
    question: 'Will it require any app install or sign-up?',
    answer:
      'No. Like all Microtools, the Background Remover will run entirely in your browser with no account needed.',
  },
  {
    question: 'When will it be available?',
    answer:
      'We are actively building it. Check back soon or use our image compressor tools in the meantime.',
  },
];

const relatedTools = getRelatedTools([
  'resize-image-20kb-ssc',
  'resize-image-50kb-upsc',
  'resize-image-100kb-railway',
]);

export default function BackgroundRemover() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">

          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">Background Remover</span>
          </nav>

          <AdSlot variant="top" />

          {/* Hero */}
          <div className="mt-10 mb-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 text-xs font-semibold mb-6 border border-rose-200 dark:border-rose-800">
              🚧 Coming Soon
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              Background Remover
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Automatically remove the background from your photo for Indian passport photos, govt ID
              cards, and professional profile pictures. Free, browser-based, and completely private.
            </p>

            {/* Illustrated placeholder */}
            <div className="mx-auto max-w-sm bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-2 border-dashed border-rose-200 dark:border-rose-800 rounded-2xl p-10 mb-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center">
                  <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-rose-600 dark:text-rose-400">Tool Preview Coming Soon</p>
                <p className="text-xs text-muted-foreground text-center">
                  We&apos;re building AI-powered background removal that runs entirely in your browser.
                </p>
              </div>
            </div>

            {/* What's coming */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {[
                { icon: '🎨', title: 'Auto Background Removal', desc: 'AI detects and removes backgrounds in one click.' },
                { icon: '🏛️', title: 'Govt Photo Ready', desc: 'Output in white background — standard for Indian passport & ID photos.' },
                { icon: '🔒', title: '100% Private', desc: 'All processing in your browser. No uploads, no data sharing.' },
              ].map((f) => (
                <div key={f.title} className="p-4 rounded-xl border border-border bg-card text-center">
                  <div className="text-xl mb-2">{f.icon}</div>
                  <p className="text-xs font-bold text-foreground mb-1">{f.title}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <AdSlot variant="section" />

          {/* Related tools */}
          <section className="mt-12 mb-12">
            <h2 className="text-lg font-bold text-foreground mb-4">Available Tools You Can Use Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">{tool.badge.replace(/[^0-9KB]/g, '')}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">{tool.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{tool.description.split('—')[0].trim()}</p>
                  </div>
                  <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={faqs} title="About Background Remover" />

          <footer className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 Microtools ·{' '}
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
