import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import type { Tool } from '@/lib/tools';

interface FAQ {
  question: string;
  answer: string;
}

interface ToolLayoutProps {
  /** H1 heading */
  h1: string;
  /** Lead paragraph below H1 (~100-150 words, SEO content) */
  intro: string;
  faqs: FAQ[];
  /** Related tools for internal linking */
  relatedTools: Tool[];
  children: React.ReactNode;
}

export default function ToolLayout({
  h1,
  intro,
  faqs,
  relatedTools,
  children,
}: ToolLayoutProps) {
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
            <span className="text-foreground font-medium truncate">{h1}</span>
          </nav>

          {/* H1 + Intro */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
              {h1}
            </h1>
            <p className="text-base text-muted-foreground max-w-3xl leading-relaxed">{intro}</p>
          </div>

          {/* Top Ad */}
          <div className="mb-8">
            <AdSlot variant="top" />
          </div>

          {/* Tool UI (children) + Sidebar Ad */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2">
              {children}
            </div>
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <AdSlot variant="sidebar" />
              </div>
            </div>
          </div>

          {/* Mid Ad */}
          <div className="mb-12">
            <AdSlot variant="section" />
          </div>

          {/* Related Tools — Internal Linking */}
          {relatedTools.length > 0 && (
            <section className="mb-12">
              <h2 className="text-lg font-bold text-foreground mb-4">Related Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {relatedTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.href}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-xs leading-none">{tool.badge.replace(/[^0-9KB]/g, '')}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {tool.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">{tool.description.split('—')[0].trim()}</p>
                    </div>
                    <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <FAQSection faqs={faqs} />

          {/* Footer Ad */}
          <div className="mt-12">
            <AdSlot variant="section" />
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 Microtools · <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
