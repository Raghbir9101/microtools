import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Resize Signature to 10KB/20KB — Instant Fix (SSC, IBPS) 2026',
  description:
    'Portal rejecting your signature? Compress it to exactly 10KB (SSC) or 20KB (IBPS/SBI) instantly. No blur, free, no button click. Fix exact KB and dimensions easily.',
  keywords:
    'resize signature online, compress signature 10kb, signature resizer, SSC signature 10kb, IBPS signature 20kb, SBI signature size, signature compress free, scanned signature resize',
  alternates: { canonical: 'https://tools.draftly.co.in/resize-signature' },
  openGraph: {
    title: 'Signature Resizer — Compress to 10KB or 20KB Free',
    description: 'Drop your scanned signature → 10KB or 20KB JPEG instantly. SSC, IBPS, SBI, UPSC, Railway portals covered.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const schemas = [
  {
    '@context': 'https://schema.org', '@type': 'WebApplication',
    name: 'Signature Resizer — Compress to 10KB or 20KB',
    url: `${SITE_URL}/resize-signature`,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    description: 'Free browser tool to compress scanned signatures to 10KB or 20KB for government exam portals.',
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Signature Resizer', item: `${SITE_URL}/resize-signature` },
    ],
  },
];

const faqs = [
  {
    question: 'What size should my signature be for SSC portals?',
    answer: 'SSC CGL, CHSL, MTS, CPO, and GD Constable all require signature max 10KB, JPEG format, approximately 140×60px. Select "10KB" on this tool.',
  },
  {
    question: 'What size should my signature be for IBPS / SBI / bank exams?',
    answer: 'IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI, and NABARD require signature max 20KB in JPEG. Select "20KB" on this tool. IBPS also has a dimension requirement: 3.5 cm × 1.5 cm (140×60px recommended).',
  },
  {
    question: 'How do I scan my signature for online forms?',
    answer: 'Sign on plain white paper with a black or dark blue ball-point pen. Photograph using your phone camera in good lighting — keep the camera directly above, parallel to the paper. Crop tightly (no white margins wider than 2–3mm). Upload here and compress to required size.',
  },
  {
    question: 'My signature looks blurry after compression — why?',
    answer: 'Blurriness comes from a low-resolution original scan, not from compression. If you photographed your signature from an angle or in poor light, redo the scan closer and flatter. At 10–20KB with a clean original, signature edges will be sharp and legible.',
  },
  {
    question: 'The portal says my signature is "illegible" — what do I do?',
    answer: 'Illegible usually means the compressed image looks smudged or the contrast is too low. Re-sign on fresh white paper in good light, use a bold stroke, photograph straight down. Then compress here.',
  },
  {
    question: 'Can I use this for both photo and signature compression?',
    answer: 'This page defaults to 10KB and 20KB — ideal for signatures. For photos, use /resize-image-20kb-ssc (SSC photos) or /resize-image-20kb (generic). The compression engine is identical.',
  },
];

export default function ResizeSignature() {
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
            <span className="text-foreground font-medium">Signature Resizer</span>
          </nav>

          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3 border border-blue-200 dark:border-blue-800">
              ✍️ 10KB for SSC · 20KB for IBPS/SBI · Instant, no button click
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Signature Resizer — Compress to 10KB or 20KB
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Drop your scanned signature and select the target size — <strong>10KB for SSC</strong> or <strong>20KB for IBPS/SBI</strong>.
              JPEG output accepted by all government exam portals.
            </p>
          </div>

          {/* ─── TOOL ─── */}
          <div className="mb-10">
            <CompressorTool
              portalContext="signature"
              title="Compress Signature — Pick Your Size"
              description="Upload your scanned signature JPG or PNG. Select target size. Download the compressed JPEG."
              options={[
                { size: 10, label: '10KB — SSC Signature', description: 'SSC CGL · CHSL · MTS · CPO · GD Constable' },
                { size: 20, label: '20KB — Bank / IBPS / SBI', description: 'IBPS · SBI · RBI · UPSC · NABARD · Railway' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* Signature size table */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Signature Size Requirements by Portal</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Exam / Portal</th>
                    <th className="text-left p-3 font-semibold text-blue-600 dark:text-blue-400">Signature Max</th>
                    <th className="text-left p-3 font-semibold text-foreground">Dimensions</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC CGL / CHSL / MTS / CPO / GD', '10KB', '140×60px recommended', 'JPEG'],
                    ['IBPS PO / Clerk / SO', '20KB', '3.5cm × 1.5cm', 'JPEG'],
                    ['SBI PO / Clerk / SO', '20KB', '3.5cm × 1.5cm', 'JPEG'],
                    ['RBI Grade B / Assistant', '20KB', '3.5cm × 1.5cm', 'JPEG'],
                    ['NABARD Grade A / B', '20KB', '3.5cm × 1.5cm', 'JPEG'],
                    ['UPSC Civil Services', '300KB (generous)', 'Natural size', 'JPEG'],
                    ['RRB NTPC / Group D', '30KB', '3.5cm × 1.5cm', 'JPEG'],
                  ].map(([exam, sig, dim, fmt]) => (
                    <tr key={exam as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-foreground text-xs">{exam}</td>
                      <td className="p-3 text-blue-600 dark:text-blue-400 font-bold text-xs">{sig}</td>
                      <td className="p-3 text-muted-foreground text-xs">{dim}</td>
                      <td className="p-3 text-muted-foreground text-xs">{fmt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to scan guide */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">How to Scan Your Signature (Right Way)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { step: '1', title: 'Sign correctly', body: 'Use a blue or black ball-point pen. Sign on plain white A4 paper. Signature should be clear, not smudged. Avoid gel pen (bleeds during compression).' },
                { step: '2', title: 'Photograph correctly', body: 'Hold your phone directly above — camera parallel to the paper. Use natural light, not flash. The signature should fill 80% of the frame. No shadows.' },
                { step: '3', title: 'Crop and compress', body: 'Crop tightly around the signature (2–3mm white border). Upload here. Select 10KB for SSC or 20KB for bank exams. Done in 1 second.' },
              ].map(item => (
                <div key={item.step} className="p-4 rounded-xl border border-border bg-card">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-2">{item.step}</span>
                  <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Common errors */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Common Signature Upload Errors — Fixes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { err: '"Signature file too large"', fix: 'Select 10KB on this tool. SSC portals enforce 10KB — even 10.1KB fails.' },
                { err: '"Signature not clear / illegible"', fix: 'Re-scan from original with better lighting. Blurriness comes from the scan, not from compression.' },
                { err: '"Only JPG format accepted"', fix: 'Upload your PNG here — the output is always JPEG regardless of input format.' },
                { err: '"Signature dimensions not valid"', fix: 'Crop your signature tightly before compressing. The portal checks pixel dimensions. Target 140×60px for SSC.' },
              ].map(item => (
                <div key={item.err} className="p-4 rounded-xl border border-border bg-card">
                  <p className="font-mono text-xs text-red-500 dark:text-red-400 mb-2">❌ {item.err}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">✅ {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/resize-signature-for-ssc', badge: 'SSC', title: 'SSC Signature Guide', desc: 'SSC-specific rules, dimensions, and rejection fixes', tag: 'SSC' },
                { href: '/resize-image-20kb-ssc', badge: '20KB', title: 'SSC Photo Resize (20KB)', desc: 'Compress SSC photo — CGL, CHSL, MTS, CPO, GD', tag: 'SSC Photo' },
                { href: '/resize-image-20kb', badge: 'Generic', title: 'Compress to 20KB', desc: 'Generic 20KB for any portal (non-signature)', tag: 'Photo' },
                { href: '/signature-upload-failed-fix', badge: '🛠', title: 'Signature Upload Failed', desc: 'Full troubleshooting for portal rejection', tag: 'Problem Fix' },
              ].map(tool => (
                <Link key={tool.href} href={tool.href} className="group flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs leading-none">{tool.badge}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{tool.title}</p>
                      <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{tool.tag}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{tool.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <FAQSection faqs={faqs} subtitle="Questions about compressing scanned signatures for SSC, IBPS, SBI, and banking portals." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
