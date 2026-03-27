import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'About Microtools — Free Online Tools for Indian Users',
  description: 'Microtools is a free collection of browser-based utility tools built for Indian students and job seekers filling government exam forms. Learn about our mission.',
  alternates: { canonical: 'https://tools.draftly.co.in/about' },
};

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="mb-10">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">← Back to all tools</Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mt-4 mb-2">About Microtools</h1>
            <p className="text-sm text-muted-foreground">Making government forms a little less painful</p>
          </div>

          <div className="space-y-10 text-muted-foreground text-sm leading-relaxed">

            <section className="p-6 rounded-2xl border border-border bg-card">
              <h2 className="text-xl font-bold text-foreground mb-3">Our Mission</h2>
              <p>Every year, millions of Indian students apply for SSC, UPSC, Railway, and state government exams. Each portal has strict rules — photos must be exactly 20KB, 50KB, or 100KB, scanned signatures under 10KB, and specific dimensions.</p>
              <p className="mt-3">Most students struggle with this. They use paid apps, download bloatware, or give up and ask at a photo studio. <strong>Microtools exists to fix that.</strong> We build fast, free, browser-based tools that do exactly what you need — no signup, no subscription, no ads blocking the tool.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">What We Build</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: '🖼️',
                    title: 'Image Compressors',
                    desc: 'Resize photos to exact sizes — 10KB, 20KB, 50KB, 100KB — for SSC, UPSC, Railway, and bank exam portals.',
                  },
                  {
                    icon: '✂️',
                    title: 'Background Remover',
                    desc: 'AI-powered background removal for passport photos and profile pictures using BiRefNet and withoutBG models.',
                  },
                  {
                    icon: '📄',
                    title: 'PDF Tools (Coming Soon)',
                    desc: 'Merge, split, and compress PDFs for uploading to government portals.',
                  },
                  {
                    icon: '🔧',
                    title: 'More Utilities',
                    desc: 'We add new tools regularly based on what Indian users actually need. Suggestions welcome!',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl border border-border bg-card">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <h2 className="text-xl font-bold text-foreground mb-3">Our Principles</h2>
              <ul className="space-y-2">
                {[
                  '🔒 Privacy first — image compression runs entirely in your browser, no uploads needed',
                  '⚡ Speed matters — tools load fast and process instantly',
                  '💸 Always free — core tools will never require payment or registration',
                  '🇮🇳 Built for India — we understand the specific requirements of Indian government portals',
                ].map((p) => (
                  <li key={p} className="text-sm">{p}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact & Feedback</h2>
              <p>Have a suggestion for a new tool? Found a bug? We&apos;d love to hear from you. <Link href="/contact" className="text-primary underline font-medium">Send us a message →</Link></p>
            </section>

          </div>
        </div>
      </main>
    </>
  );
}
