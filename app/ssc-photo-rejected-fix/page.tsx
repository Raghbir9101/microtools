import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSlot from '@/components/AdSlot';
import FAQSection from '@/components/FAQSection';
import { getRelatedTools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'SSC Photo Rejected — Why It Happens and How to Fix It',
  description:
    'Your SSC photo got rejected? Find out every reason why SSC photos are rejected (size, format, background, dimension) and get the exact fix for each error.',
  keywords:
    'SSC photo rejected reason, SSC photo not accepted, why SSC photo rejected, SSC application photo error, fix SSC photo rejection, SSC CGL photo not accepted portal',
  alternates: {
    canonical: 'https://tools.draftly.co.in/ssc-photo-rejected-fix',
    languages: { 'en-IN': 'https://tools.draftly.co.in/ssc-photo-rejected-fix' },
  },
  openGraph: {
    title: 'SSC Photo Rejected — Complete Fix Guide 2026',
    description: 'All reasons why SSC photos get rejected and step-by-step fixes for each error type.',
    type: 'article',
  },
};

const faqs = [
  {
    question: 'Can I edit and resubmit my SSC application after photo rejection?',
    answer:
      'SSC provides a correction window (usually 5–7 days) after the initial application opens. During this window, you can re-upload the photo and signature. If the window is closed, contact SSC regional office through the official grievance portal.',
  },
  {
    question: 'Will SSC reject my entire application if the photo is wrong?',
    answer:
      'During the online registration, portal validation will reject wrong format or oversized photos immediately. However, during document verification, if the physical photo does not match the uploaded one significantly, it can lead to rejection at that stage.',
  },
  {
    question: 'My SSC photo was accepted previously — why is it rejected this year?',
    answer:
      'SSC periodically updates portal requirements. A photo that passed last year might fail this year if: (1) you are using a photo that is now older than 3 months, (2) SSC has tightened format validation, or (3) the new portal has stricter dimension checks.',
  },
  {
    question: 'Can I use a photo taken on iPhone for SSC?',
    answer:
      'iPhone saves photos in HEIC format by default. SSC portals reject HEIC. In iPhone Settings → Camera → Formats, change to "Most Compatible" (JPEG). Alternatively, use our WebP to JPG or PNG to JPG converter on the file, then compress to 20KB.',
  },
];

const rejectionReasons = [
  {
    reason: 'File size above 20KB',
    fix: 'Compress to 20KB using our SSC Photo Compressor',
    href: '/resize-image-20kb-ssc',
    color: 'border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800',
  },
  {
    reason: 'Wrong format (PNG, HEIC, WebP uploaded)',
    fix: 'Convert to JPEG first using PNG to JPG converter',
    href: '/png-to-jpg',
    color: 'border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800',
  },
  {
    reason: 'Photo older than 3 months',
    fix: 'Take a new photo and compress to 20KB',
    href: '/resize-image-20kb-ssc',
    color: 'border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-800',
  },
  {
    reason: 'Coloured or patterned background',
    fix: 'Use Background Remover to create white background',
    href: '/background-remover',
    color: 'border-violet-200 bg-violet-50 dark:bg-violet-950/20 dark:border-violet-800',
  },
  {
    reason: 'Sunglasses, cap, or face partially covered',
    fix: 'Take a new photo without glasses/headgear, then compress',
    href: '/resize-image-20kb-ssc',
    color: 'border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800',
  },
  {
    reason: 'Low quality, blurry, or pixelated image',
    fix: 'Take a new photo in good lighting and compress to 20KB',
    href: '/resize-image-20kb-ssc',
    color: 'border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800',
  },
  {
    reason: 'Image dimensions too small',
    fix: 'Resize to 200×230px minimum using Image Dimension Resizer',
    href: '/resize-image-dimensions',
    color: 'border-cyan-200 bg-cyan-50 dark:bg-cyan-950/20 dark:border-cyan-800',
  },
];

export default function PageSSCPhotoRejected() {
  const relatedTools = getRelatedTools([
    'resize-image-20kb-ssc',
    'resize-signature-ssc',
    'background-remover',
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
            <span className="text-foreground font-medium">SSC Photo Rejected Fix</span>
          </nav>

          <AdSlot variant="top" />

          <div className="mt-8 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 text-xs font-semibold mb-5 border border-red-200 dark:border-red-800">
              🛠️ Fix Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5 leading-tight">
              SSC Photo Rejected — Every Reason and Fix
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
              SSC photo rejection happens at two stages — during online portal upload, or during document verification. This guide covers every possible rejection reason and the exact fix for each, so you can resolve it in minutes.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">All SSC Photo Rejection Reasons + Fixes</h2>
            <div className="space-y-3">
              {rejectionReasons.map((item) => (
                <div key={item.reason} className={`p-4 rounded-2xl border ${item.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-lg flex-shrink-0">✕</span>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm mb-1">{item.reason}</p>
                      <p className="text-xs text-muted-foreground mb-2">Fix: {item.fix}</p>
                      <Link href={item.href} className="text-xs text-primary font-medium hover:underline">
                        Use this tool →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AdSlot variant="section" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">SSC Photo Requirements Summary</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
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
                    ['Max Size', '20KB', '10KB'],
                    ['Min Dimensions', '200×230 px', '140×60 px'],
                    ['Background', 'White / off-white', 'White paper'],
                    ['Recency', 'Within 3 months', 'Recent'],
                    ['Colour', 'Colour only', 'Dark ink'],
                  ].map(([p, photo, sig]) => (
                    <tr key={p} className="border-t border-border">
                      <td className="p-3 font-medium text-foreground">{p}</td>
                      <td className="p-3 text-muted-foreground">{photo}</td>
                      <td className="p-3 text-muted-foreground">{sig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tools to Fix Your SSC Photo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={tool.href}
                  className="group p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
                >
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
