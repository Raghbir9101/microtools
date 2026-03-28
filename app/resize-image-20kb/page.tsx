import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'Compress Image to 20KB — Instant, No Click Needed (SSC, Aadhar, Govt Forms)',
  description:
    'Drop your photo and get a 20KB JPEG instantly — no button click. Works for SSC, IBPS, SBI, state PSC, and any govt portal requiring 20KB. Free, browser-based, no uploads.',
  keywords:
    'compress image to 20kb, resize image 20kb, reduce photo size 20kb, 20kb image online, photo 20kb ssc ibps, image compress 20kb free, photo size reducer 20kb',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-20kb',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-20kb' },
  },
  openGraph: {
    title: 'Compress Image to 20KB — Instant (Drop & Done)',
    description: 'Drop your photo → 20KB JPEG instantly. No clicks, no uploads. Works for SSC, IBPS, SBI, all govt portals.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compress Image to 20KB Instantly — Free, No Button Click (SSC, Aadhar)',
    description: 'Drop photo → 20KB JPEG. No server. Works for all govt portals.',
    images: ['/opengraph-image'],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Compress Image to 20KB — Instant',
  url: `${SITE_URL}/resize-image-20kb`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free browser-based tool to compress any photo to exactly 20KB instantly — no button click needed.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Compress Image to 20KB', item: `${SITE_URL}/resize-image-20kb` },
  ],
};

const faqs = [
  {
    question: 'Which exams and portals require a 20KB photo?',
    answer:
      'SSC CGL, SSC CHSL, SSC MTS, SSC CPO, SSC GD Constable, IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RBI, NABARD, many state PSC boards (BPSC, KPSC, MPPSC, RPSC, UPPSC), and Aadhar update/correction forms. When in doubt, check your admit card or notification — if it says "photo max 20KB JPEG", this tool handles it.',
  },
  {
    question: 'How does drop → instant compress work?',
    answer:
      'When you drop or select your image, the tool immediately starts compressing to 20KB using the Canvas API binary search algorithm. There is no separate button to click — the result is ready in 1–3 seconds. This is intentional: no extra friction between you and your download.',
  },
  {
    question: 'Will the photo still look acceptable at 20KB?',
    answer:
      'Yes. At 20KB with 200×230 pixel dimensions, face features, skin tone, and background are preserved well enough for portal upload and subsequent biometric/physical verification. The binary search targets the highest possible JPEG quality that still lands under 20KB.',
  },
  {
    question: 'What file formats can I upload?',
    answer:
      'JPG, JPEG, PNG, and HEIC (iPhone Live Photos). All output is JPEG — the format required by all major govt portals. PNG and HEIC are auto-converted to JPEG during compression. Do not upload AVIF, BMP, or TIFF.',
  },
  {
    question: 'Why does the portal say "file too large" for my photo that is 21KB?',
    answer:
      'SSC and IBPS portals enforce the 20KB limit byte-by-byte. Even 20.1KB triggers the error. Our tool targets 18–20KB (a deliberate safe margin below 20KB) so you stay clearly under the server limit.',
  },
  {
    question: 'Do I need to create an account or install anything?',
    answer:
      'No. Everything runs inside your browser using the Canvas API. Your photo never leaves your device. No server, no account, no extension required.',
  },
];

export default function ResizeImage20KB() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">Compress Image to 20KB</span>
          </nav>

          {/* H1 — problem-first, tight */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-3 border border-emerald-200 dark:border-emerald-800">
              ⚡ Drop image → 20KB instantly · No button click
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Compress Image to 20KB — Instant, Free
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Drop your photo below and it compresses to <strong>exactly 20KB</strong> automatically — no extra button click.
              Works for <strong>SSC, IBPS, SBI, state PSCs</strong>, and every govt portal that enforces a 20KB limit.
            </p>
          </div>

          {/* ─────────── TOOL — ABOVE THE FOLD · AUTO-COMPRESS ON DROP ─────────── */}
          <div className="mb-10">
            <CompressorTool
              autoCompress
              portalContext="generic"
              title="Drop Image → 20KB Instantly"
              description="Drop or click to select your photo. Compression starts immediately — result downloads in 1–3 seconds."
              options={[
                { size: 20, label: 'Auto — 20KB', description: 'SSC · IBPS · SBI · State PSC · All govt portals' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* Which portals need 20KB */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Which Portals Require 20KB Photo?</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Exam / Portal</th>
                    <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">Photo Limit</th>
                    <th className="text-left p-3 font-semibold text-foreground">Format</th>
                    <th className="text-left p-3 font-semibold text-foreground">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['SSC CGL / CHSL / MTS / CPO', '20KB', 'JPEG', '10KB'],
                    ['IBPS PO / Clerk / RRB', '50KB photo / 20KB sig', 'JPEG', '20KB'],
                    ['SBI PO / Clerk', '50KB', 'JPEG', '20KB'],
                    ['RBI Grade B / Asst', '50KB', 'JPEG', '20KB'],
                    ['UPSC Civil Services (IAS)', '300KB (but 50KB preferred)', 'JPEG', '300KB'],
                    ['State PSC (BPSC/RPSC/MPPSC)', '20–50KB (varies)', 'JPEG', '10–20KB'],
                    ['Aadhar Card Update / Enrolment', '< 20KB', 'JPEG', 'N/A'],
                  ].map(([exam, photo, fmt, sig]) => (
                    <tr key={exam as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-foreground">{exam}</td>
                      <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">{photo}</td>
                      <td className="p-3 text-muted-foreground">{fmt}</td>
                      <td className="p-3 text-muted-foreground">{sig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Why it fails section */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Why "Resize and Save" in Paint Doesn&apos;t Hit 20KB</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🎲', title: 'JPEG quality is unpredictable', body: 'MS Paint and basic editors give you a quality slider — but the resulting file size is unpredictable. You might get 15KB or 35KB. Our binary search finds the exact quality level that produces 18–20KB.' },
                { icon: '📐', title: 'Resizing dimensions ≠ reducing file size', body: 'Making an image "200×230px" in Photoshop does NOT compress it to 20KB. Dimension resize and file size compression are separate operations. Our tool handles both.' },
                { icon: '🔁', title: 'Re-compressing a JPEG degrades it', body: 'If you repeatedly save a JPEG, quality degrades with each save. Our tool compresses from your original in one pass — maintaining maximum quality at the target size.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl border border-border bg-card">
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 🔥 SEARCH BAIT 1: Exact size rules 2026 */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-1">Exact 20KB Photo Requirements — 2026 Rules</h2>
            <p className="text-xs text-muted-foreground mb-4">Updated March 2026 · Based on official portal notifications</p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Rule</th>
                    <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">SSC Portal</th>
                    <th className="text-left p-3 font-semibold text-foreground">Aadhar / UIDAI</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Max file size', '20KB (strictly enforced)', '< 20KB'],
                    ['Format', 'JPEG / JPG only — no PNG', 'JPEG only'],
                    ['Photo dimensions', '200 × 230 pixels recommended', '35mm × 45mm equivalent'],
                    ['Background', 'Plain white or off-white only', 'White only'],
                    ['Age of photo', 'Within 3 months of application date', 'Recent (same requirement)'],
                    ['Face coverage', 'Face must cover 70–80% of frame', '70–80% of frame'],
                    ['Glasses / accessories', 'Not permitted — even prescription', 'Not permitted'],
                    ['Signature', '10KB max · JPEG · 140×60px', 'N/A for Aadhar update'],
                  ].map(([rule, ssc, aadhar]) => (
                    <tr key={rule as string} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-muted-foreground text-xs">{rule}</td>
                      <td className="p-3 text-foreground text-xs">{ssc}</td>
                      <td className="p-3 text-foreground text-xs">{aadhar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 🔥 SEARCH BAIT 2: Why portals reject your photo */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Why Government Portals Reject Your Photo — 5 Real Causes</h2>
            <div className="space-y-3">
              {[
                { n:'1', title:'File is above 20KB (even by 0.5KB)', detail:'Portals check file size byte-by-byte. 20.1KB → instant rejection. Our tool targets 18–20KB — always stays under.', color:'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900', nc:'bg-red-500' },
                { n:'2', title:'PNG file renamed to .jpg — not a real JPEG', detail:'The server checks the file header (magic bytes), not the extension. A PNG renamed to .jpg has PNG magic bytes → rejected. Convert using our PNG → JPG tool, then compress here.', color:'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900', nc:'bg-orange-500' },
                { n:'3', title:'Photo older than 3 months', detail:'Not caught at upload — rejected at document verification. If your form date is March 2026, the photo must be from December 2025 or later. Retake if unsure.', color:'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900', nc:'bg-yellow-500' },
                { n:'4', title:'Non-white background', detail:'Blue, grey, cream, or patterned backgrounds fail document verification even if the portal accepts them at upload. Use our Background Remover to replace with pure white (#FFFFFF).', color:'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900', nc:'bg-blue-500' },
                { n:'5', title:'Photo already compressed / WhatsApp-forwarded', detail:'WhatsApp re-encodes images during transfer — adding compression artifacts. Never use a WhatsApp-received photo. Always compress from the original camera/scan file.', color:'bg-slate-50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-900', nc:'bg-slate-500' },
              ].map((item) => (
                <div key={item.n} className={`flex gap-4 p-4 rounded-xl border ${item.color}`}>
                  <span className={`flex-shrink-0 ${item.nc} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mt-0.5`}>{item.n}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 🔥 SEARCH BAIT 3: Upload error messages decoded */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Common Upload Error Messages — Decoded</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { err: '"Please upload a file smaller than 20KB"', fix: 'Compress using this tool with autoCompress on. Output targets 18–20KB — guaranteed under the threshold.' },
                { err: '"Invalid file format. Only JPG allowed."', fix: 'Your file is PNG or HEIC. Step 1: use PNG → JPG converter. Step 2: compress here to 20KB.' },
                { err: '"Image upload failed. Please try again."', fix: 'Usually a server overload issue before deadlines. Switch to Chrome, clear cache (Ctrl+Shift+Delete), try at off-peak hours.' },
                { err: '"File is corrupted or cannot be read."', fix: 'Photo was damaged during transfer (WhatsApp, Telegram). Use the original camera file — never a forwarded photo.' },
              ].map((item) => (
                <div key={item.err} className="p-4 rounded-xl border border-border bg-card">
                  <p className="font-mono text-xs text-red-500 dark:text-red-400 mb-2 leading-relaxed">❌ {item.err}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">✅ {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Related Size Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: '/ssc-photo-resize', badge: 'SSC', title: 'SSC Photo Resize — All Exams', desc: 'CGL, CHSL, MTS, CPO, GD — all covered with exam details', tag: 'Most Popular' },
                { href: '/resize-image-50kb', badge: '50KB', title: 'Compress Image to 50KB', desc: 'UPSC, IBPS, RBI, SBI portal requirement', tag: 'Also Needed' },
                { href: '/resize-image-10kb', badge: '10KB', title: 'Compress Image to 10KB', desc: 'SSC signature requirement — 10KB JPEG', tag: 'Signature' },
                { href: '/resize-image-100kb-railway', badge: '100KB', title: 'Compress to 100KB (Railway)', desc: 'RRB NTPC, RPF, Railway Board portals', tag: 'Railway' },
                { href: '/png-to-jpg', badge: 'PNG→JPG', title: 'PNG to JPG Converter', desc: 'Convert before compressing if your photo is PNG', tag: 'Format Fix' },
                { href: '/image-size-checker', badge: '✓', title: 'Image Size Checker', desc: 'Verify the output is exactly under 20KB', tag: 'Verify' },
              ].map((tool) => (
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

          <FAQSection faqs={faqs} subtitle="Common questions about compressing photos to 20KB for government portals." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
