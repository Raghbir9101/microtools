import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import AdSlot from '@/components/AdSlot';
import CompressorTool from '@/components/CompressorTool';

export const metadata: Metadata = {
  title: 'SSC CGL Photo Resize Tool (20KB) — Fix Upload Error Instantly | 2026',
  description:
    'SSC CGL 2026 photo upload failing? Compress to exactly 20KB in seconds. Exact specs, rejection causes, 7-step portal walkthrough, and edge cases — all on one page. Free.',
  keywords:
    'SSC CGL photo size 2026, resize image SSC CGL, SSC CGL photo 20kb, compress image SSC CGL, SSC CGL photo upload failed, SSC CGL image requirement, SSC portal photo error, SSC CGL JPEG',
  alternates: {
    canonical: 'https://tools.draftly.co.in/resize-image-for-ssc-cgl',
    languages: { 'en-IN': 'https://tools.draftly.co.in/resize-image-for-ssc-cgl' },
  },
  openGraph: {
    title: 'SSC CGL Photo Resize Tool (20KB) — Fix Upload Error 2026',
    description: 'Compress to exactly 20KB for SSC CGL 2026. Exact specs, rejection causes, portal walkthrough.',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSC CGL Photo Resize Tool — 20KB Instant Fix',
    description: 'SSC CGL photo failing? Compress to 20KB instantly. Rejection reasons, portal guide, edge cases.',
    images: ['/opengraph-image'],
  },
};

const SITE_URL = 'https://tools.draftly.co.in';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'All Tools', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'SSC Photo Resize', item: `${SITE_URL}/ssc-photo-resize` },
    { '@type': 'ListItem', position: 3, name: 'SSC CGL Photo — 20KB', item: `${SITE_URL}/resize-image-for-ssc-cgl` },
  ],
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SSC CGL Photo Compressor — 20KB',
  url: `${SITE_URL}/resize-image-for-ssc-cgl`,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  description: 'Free browser-based tool to compress JPEG photos to exactly 20KB for the SSC CGL 2026 application.',
};

const faqs = [
  {
    question: 'What are the exact SSC CGL 2026 photo requirements?',
    answer:
      'SSC CGL 2026 requires: (1) Format — JPEG/JPG only, no PNG or HEIC. (2) File size — maximum 20KB. (3) Dimensions — 200×230 pixels recommended (minimum 100×130). (4) Background — plain white or off-white only. (5) Face — front-facing, eyes open, no glasses, no cap. (6) Age of photo — taken within the last 3 months.',
  },
  {
    question: 'What are the SSC CGL 2026 signature requirements?',
    answer:
      'SSC CGL 2026 signature must be: JPEG format, maximum 10KB, 140×60 pixels recommended, signed in black or dark blue ink on plain white paper. No pencil, no printed signatures. Crop tightly around the signature to avoid inflating file size with whitespace.',
  },
  {
    question: 'Why does the SSC portal reject my photo even though it is under 20KB?',
    answer:
      'Several reasons beyond file size: (1) Not a genuine JPEG — renaming a PNG to .jpg does not convert it. (2) Dimensions too small — SSC portal enforces a minimum pixel count. (3) Corrupted EXIF data. (4) Wrong color space (CMYK instead of RGB). Our tool produces a clean Canvas API JPEG which passes all server-side checks.',
  },
  {
    question: 'The SSC portal shows "file size too large" even though my photo is 21KB — what do I do?',
    answer:
      'The SSC portal enforces 20KB strictly and sometimes rejects files even at 21KB. Use Photo — 18KB option in this tool to stay clearly under the threshold. Our binary-search algorithm targets 18–20KB by default for safety.',
  },
  {
    question: 'How do I upload my photo on the SSC CGL portal step by step?',
    answer:
      'Step 1: Go to ssc.gov.in → CGL notification → Apply Online. Step 2: Register and note your Registration ID. Step 3: Fill Part I. Step 4: In Part II → Upload Documents → Upload Photograph → select your 20KB JPEG. Step 5: Upload Signature (10KB JPEG). Step 6: Preview both uploads. Step 7: Submit and pay fee — save the application PDF.',
  },
  {
    question: 'I resized to 20KB but the photo preview looks blurry — what to do?',
    answer:
      'Start with the highest quality original — never compress an already-compressed image. Use our Image Dimension Resizer to set 200×230px first, then compress to 20KB here. Blurriness at 20KB is reduced when the source is a clean high-resolution original.',
  },
  {
    question: 'Can I use the same photo for SSC CGL and SSC CHSL?',
    answer:
      'Yes — if taken within 3 months and meeting specs, the same 20KB JPEG works for all SSC exams. Keep the original uncompressed photo and re-compress fresh for each application. Never re-compress an already 20KB file.',
  },
  {
    question: 'SSC portal keeps loading but photo never uploads — what is wrong?',
    answer:
      'Browser or network issue, not the file. Fix: (1) Switch to Google Chrome. (2) Clear cache: Ctrl+Shift+Delete. (3) Disable extensions including ad-blockers. (4) Use broadband, not mobile data. (5) Try incognito mode. (6) Upload at off-peak hours — SSC servers overload before deadlines.',
  },
];

export default function PageSSCCGL() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">

          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">All Tools</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/ssc-photo-resize" className="hover:text-foreground transition-colors">SSC Photo Resize</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-foreground font-medium">SSC CGL — 20KB</span>
          </nav>

          {/* H1 — tight */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold mb-3 border border-emerald-200 dark:border-emerald-800">
              🎯 SSC CGL 2026 · Photo + Signature
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              SSC CGL Photo Resize Tool — Fix 20KB Upload Error
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Compress your photo to exactly <strong>20KB for SSC CGL 2026</strong>. Signature to 10KB. Works for every SSC regional portal.
              The most common cause of upload failure: file above 20KB or wrong format (PNG uploaded as JPG).
            </p>
          </div>

          {/* ─────────── TOOL — ABOVE THE FOLD ─────────── */}
          <div className="mb-10">
            <CompressorTool
              title="Compress Photo / Signature for SSC CGL 2026"
              description="Upload your JPEG. The tool compresses to exactly 20KB (photo) or 10KB (signature) — guaranteed to pass SSC portal validation."
              options={[
                { size: 20, label: 'Photo — 20KB (SSC CGL)', description: 'Standard SSC CGL photograph requirement' },
                { size: 10, label: 'Signature — 10KB (SSC CGL)', description: 'Standard SSC CGL signature requirement' },
                { size: 18, label: 'Photo — 18KB (safe margin)', description: 'Use if 20KB is still getting rejected' },
              ]}
            />
          </div>

          <AdSlot variant="section" />

          {/* ─── SECTION 1: Requirements Table ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">SSC CGL 2026 — Exact Photo & Signature Requirements</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/60">
                    <th className="text-left p-3 font-semibold text-foreground">Requirement</th>
                    <th className="text-left p-3 font-semibold text-emerald-600 dark:text-emerald-400">Photograph</th>
                    <th className="text-left p-3 font-semibold text-blue-600 dark:text-blue-400">Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['File Format', 'JPEG / JPG only', 'JPEG / JPG only'],
                    ['Max File Size', '20KB', '10KB'],
                    ['Recommended Dimensions', '200 × 230 pixels', '140 × 60 pixels'],
                    ['Minimum Dimensions', '100 × 130 pixels', '70 × 30 pixels'],
                    ['Background', 'Plain white or off-white', 'White paper'],
                    ['Age of Photo', 'Within 3 months', 'Recent'],
                    ['Face / Extras', 'No glasses, no cap, front-facing', 'Black/dark blue ink only'],
                  ].map(([req, photo, sig]) => (
                    <tr key={req} className="border-t border-border hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-medium text-muted-foreground">{req}</td>
                      <td className="p-3 text-foreground">{photo}</td>
                      <td className="p-3 text-foreground">{sig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── SECTION 2: Why Photos Get Rejected ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Why SSC CGL Photos Get Rejected — Real Reasons</h2>
            <div className="space-y-3">
              {[
                { rank:'1', color:'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900', numColor:'bg-red-500', title:'File above 20KB', body:'Even 20.1KB causes rejection. The portal enforces this strictly. Our tool targets 18–20KB to leave a safe margin.' },
                { rank:'2', color:'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900', numColor:'bg-orange-500', title:'PNG file renamed to .jpg', body:'iPhone photos are HEIC, screenshots are PNG. Renaming to .jpg does NOT convert — the SSC server reads the file header. Use our PNG→JPG converter first.' },
                { rank:'3', color:'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900', numColor:'bg-yellow-500', title:'Photo older than 3 months', body:'Portal won\'t catch this at upload — but document verification at the SSC Regional Office will. Using an old photo can disqualify you from appearing in the exam after clearing it.' },
                { rank:'4', color:'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900', numColor:'bg-blue-500', title:'Non-white background', body:'Blue, grey, or patterned backgrounds are rejected at document verification. Use our Background Remover to replace with pure white (#FFFFFF) before compressing.' },
                { rank:'5', color:'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-900', numColor:'bg-violet-500', title:'Glasses, cap, or head covering', body:'Not permitted in SSC CGL photos — even if you wear glasses daily. Take a fresh photo without them specifically for the application.' },
                { rank:'6', color:'bg-slate-50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-900', numColor:'bg-slate-500', title:'Blurry or over-compressed original', body:'Compressing an already-blurry or WhatsApp-forwarded JPEG makes things worse. Always compress from the highest quality original you have.' },
              ].map((item) => (
                <div key={item.rank} className={`p-4 rounded-xl border ${item.color} flex gap-4 items-start`}>
                  <span className={`flex-shrink-0 ${item.numColor} text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mt-0.5`}>{item.rank}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── SECTION 3: Portal Walkthrough ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Step-by-Step: Upload Photo on SSC CGL Portal</h2>
            <div className="space-y-2">
              {[
                { step:'A', icon:'📸', title:'Prepare your photo file', desc:'Take a recent passport-size photo against a white background. If not JPEG, convert using our PNG to JPG tool. Start with the best quality original.' },
                { step:'B', icon:'🔧', title:'Compress to 20KB using this tool', desc:'Upload the JPEG above. Select "Photo — 20KB (SSC CGL)". Download the compressed file. Rename clearly — e.g., ssc_cgl_photo_20kb.jpg.' },
                { step:'C', icon:'✅', title:'Verify the output file size', desc:'Open our Image Size Checker — drag in the downloaded file and confirm it is between 18–20KB and JPEG format. Do not skip this step.' },
                { step:'D', icon:'🌐', title:'Log in to the SSC portal', desc:'Go to ssc.gov.in → CGL notification → Apply Online. Use Google Chrome. Log in to your One-Time Registration account.' },
                { step:'E', icon:'⬆️', title:'Upload photo in Part II', desc:'Part II → Upload Documents → "Upload Photograph" → select your verified 20KB JPEG → click OK. The preview should appear clearly.' },
                { step:'F', icon:'✍️', title:'Upload signature separately', desc:'"Upload Signature" → select your 10KB JPEG of your signature → click OK. Verify the preview looks clean and signature is visible.' },
                { step:'G', icon:'💾', title:'Submit and save proof', desc:'Click Preview → Submit → Pay fee. Save the final application PDF — it contains your Registration Number needed for all future stages.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                  <span className="flex-shrink-0 text-xl">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── SECTION 4: Edge Cases ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Edge Cases — When the Fix Still Doesn&apos;t Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { q:'Photo is accepted but looks completely black', a:'Your original was a PNG with transparency — Canvas renders transparent areas as black in JPEG. Convert with our PNG→JPG tool first to fill background white.' },
                { q:'Rejected with "invalid image" even after conversion', a:'The original file is corrupted. Take the photo again or get a fresh scan. Avoid WhatsApp-shared photos — WhatsApp re-encodes images during transfer.' },
                { q:'Preview shows photo but portal says "upload failed"', a:'Server-side issue. Refresh and re-upload. Try incognito mode. Try at off-peak hours — SSC servers overload before deadline dates.' },
                { q:'Compressed to 18KB but photo is too pixelated', a:'Source photo resolution is too low. Resize to 200×230px first with our Image Dimension Resizer, then compress to 20KB from the resized file.' },
                { q:'Photo accepted but face barely visible', a:'JPEG compression at 20KB is high. Use a closer, well-lit photo. Face should fill 70–80% of the frame with clear visibility.' },
                { q:'Already submitted — need to change photo', a:'SSC does not allow editing uploaded photos after Part II submission. Request correction via the regional SSC office with supporting original documents.' },
              ].map((item) => (
                <div key={item.q} className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20">
                  <p className="font-semibold text-foreground text-xs mb-2">⚠️ {item.q}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <AdSlot variant="section" />

          {/* ─── SECTION 5: Intent-based Tool Links ─── */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">Complete Your SSC CGL Application — All Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href:'/ssc-photo-resize', badge:'SSC', title:'SSC Photo Resize (All Exams)', desc:'Covers CGL, CHSL, MTS, CPO, GD in one broad page', tag:'Broad Tool' },
                { href:'/resize-signature-ssc', badge:'SIG', title:'Signature Resizer for SSC', desc:'Compress signature to exactly 10KB for SSC portals', tag:'Required' },
                { href:'/png-to-jpg', badge:'PNG→JPG', title:'PNG to JPG Converter', desc:'Convert before compressing if your photo is PNG/HEIC', tag:'Format Fix' },
                { href:'/image-size-checker', badge:'✓', title:'Image Size Checker', desc:'Verify output is under 20KB before uploading', tag:'Verification' },
                { href:'/photo-upload-failed-ssc-fix', badge:'🛠', title:'Fix SSC Photo Upload Errors', desc:'Portal keeps rejecting? Full troubleshooting guide', tag:'Problem Fix' },
                { href:'/background-remover', badge:'BG', title:'Background Remover', desc:'Replace coloured background with pure white instantly', tag:'Background Fix' },
                { href:'/resize-image-for-ssc-chsl', badge:'CHSL', title:'SSC CHSL Photo — 20KB', desc:'LDC, PA, DEO posts — Tier 2 typing requirements', tag:'Related Exam' },
                { href:'/resize-image-for-ssc-mts', badge:'MTS', title:'SSC MTS + Havaldar — 20KB', desc:'Havaldar PET/PST physical standards included', tag:'Related Exam' },
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

          <FAQSection faqs={faqs} subtitle="Common questions from SSC CGL applicants about photo upload requirements and portal errors." />
          <AdSlot variant="section" />
        </div>
      </main>
    </>
  );
}
