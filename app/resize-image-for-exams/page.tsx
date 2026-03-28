import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Resize Image for Exams — JEE, NEET, CUET, University Forms (Free)',
  description:
    'Compress your photo for JEE, NEET, CUET, NDA, CDS, and university admission forms. Pick the exact KB target and compress instantly — free, browser-based, no uploads.',
  keywords:
    'resize image for JEE, photo size for NEET, CUET photo compress, NDA photo size, university form photo size, NTA exam photo resize, compress image for exam form',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-exams',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-exams' },
  },
  openGraph: {
    title: 'Resize Image for Exams — JEE, NEET, CUET, University Forms',
    description: 'Compress exam photo to any KB target instantly — JEE, NEET, CUET, NTA, NDA, university portals.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'Resize Image for Exams — JEE, NEET, CUET',
    url: `${SITE_URL}/resize-image-for-exams`,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Resize Image for Exams', item: `${SITE_URL}/resize-image-for-exams` },
    ],
  },
];

const faqs = [
  {
    question: 'What photo size does JEE Main 2025 require?',
    answer: 'JEE Main (NTA) requires photo between 10KB and 200KB in JPEG/JPG format, white or light background, 3.5×4.5 cm. The portal also accepts photos up to 500KB in some registration years — always check the official NTA notification for the exact limit.',
  },
  {
    question: 'What photo size does NEET UG 2025 require?',
    answer: 'NEET UG requires a photo between 10KB and 200KB (JPG/JPEG), with a white or light background. The NTA portal enforces this range fairly loosely — any photo between 50KB and 200KB is safe.',
  },
  {
    question: 'What photo size does CUET 2025 require?',
    answer: 'CUET (Common University Entrance Test) requires photo max 300KB, JPEG format, and signature max 200KB. NTA portals are more lenient than SSC — use 50–100KB for best results.',
  },
  {
    question: 'What is the NDA / CDS photo requirement?',
    answer: 'UPSC NDA and CDS applications require a recent photograph in JPEG format, typically between 20KB and 300KB depending on the year. Use 50KB for a safe, universally accepted size.',
  },
  {
    question: 'Which size should I pick for university admission portals (DU, BHU, etc.)?',
    answer: 'Most Indian university portals (DU, BHU, JNU, IGNOU, etc.) accept photos between 20KB and 100KB in JPEG. Use 50KB as the default — it is universally accepted and looks sharp.',
  },
];

export default function ResizeImageForExams() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">Resize Image for Exams</span>
          </nav>

          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold mb-3 border border-indigo-200 dark:border-indigo-800">
              📚 JEE · NEET · CUET · NDA · CDS · University portals
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Resize Image for Exams — JEE, NEET, CUET &amp; More
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Pick the right KB target for your exam portal below — the tool compresses immediately.
              Covers <strong>JEE Main, NEET UG, CUET, NDA, CDS, NDA</strong>, and all major NTA and university portals.
            </p>
          </div>

          <div className="mb-10">
            <CompressorTool
              title="Compress Exam Photo — Pick Target"
              description="Upload photo, select the KB size your portal requires. Download the compressed JPEG. Use 50KB if unsure."
              options={[
                { size: 50, label: '50KB — Safest for most portals', description: 'JEE · NEET · CUET · NDA · CDS · Most universities' },
                { size: 100, label: '100KB — NTA / CUET max range', description: 'CUET · Some NTA portals · BHU · DU' },
                { size: 20, label: '20KB — Strict portals only', description: 'SSC use /resize-image-20kb-ssc instead' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Photo Requirements by Exam — 2025–26</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Exam</th>
                    <th className="text-left p-3 font-semibold text-indigo-600 dark:text-indigo-400">Photo Size</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                    <th className="text-left p-3 font-semibold text-foreground">Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['JEE Main 2025 (NTA)', '10KB – 200KB', 'JPEG', '50–80KB'],
                    ['JEE Advanced 2025 (IIT)', '5KB – 150KB', 'JPEG', '50KB'],
                    ['NEET UG 2025 (NTA)', '10KB – 200KB', 'JPEG', '50–100KB'],
                    ['CUET UG / PG 2025', '50KB – 300KB', 'JPEG', '100KB'],
                    ['NDA / CDS (UPSC)', '20KB – 300KB', 'JPEG', '50KB'],
                    ['MHT CET', '20KB – 200KB', 'JPEG', '50KB'],
                    ['KCET / COMEDK', '20KB – 150KB', 'JPEG', '50KB'],
                    ['DU / BHU / JNU Admissions', '10KB – 200KB', 'JPEG', '50KB'],
                    ['IGNOU (Open Univ)', '50KB max', 'JPEG', '50KB'],
                  ].map(([exam, size, fmt, rec]) => (
                    <tr key={exam as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-foreground text-xs">{exam}</td>
                      <td className="p-3 text-indigo-600 dark:text-indigo-400 font-semibold text-xs">{size}</td>
                      <td className="p-3 text-muted-foreground text-xs">{fmt}</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">{rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Not an Entrance Exam? Find Your Portal</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { href: '/resize-image-20kb-ssc', badge: 'SSC', title: 'SSC Exams', desc: 'CGL, CHSL, MTS, CPO, GD — 20KB', color: 'border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800', tc: 'text-emerald-700 dark:text-emerald-300' },
                { href: '/resize-image-50kb', badge: 'Bank', title: 'Banking (IBPS/SBI)', desc: 'IBPS, SBI, RBI, NABARD — 50KB', color: 'border-violet-200 bg-violet-50 dark:bg-violet-950/20 dark:border-violet-800', tc: 'text-violet-700 dark:text-violet-300' },
                { href: '/resize-image-100kb', badge: 'Rail', title: 'Railway (RRB)', desc: 'RRB NTPC, Group D — 100KB', color: 'border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-800', tc: 'text-orange-700 dark:text-orange-300' },
              ].map(item => (
                <Link key={item.href} href={item.href} className={`p-4 rounded-xl border ${item.color} hover:shadow-sm transition-all`}>
                  <p className={`text-sm font-bold ${item.tc} mb-1`}>{item.badge} — {item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={faqs} subtitle="Questions about photo requirements for JEE, NEET, CUET, NDA, and university admission portals." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
