import Link from 'next/link';
import { TOOLS } from '@/lib/tools';

export default function Footer() {
  const liveTools = TOOLS.filter((t) => t.status === 'live');

  return (
    <footer className="mt-16 pt-8 pb-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-muted-foreground">

          {/* Brand */}
          <p className="shrink-0 font-medium">© 2026 Microtools · All rights reserved</p>

          {/* All live tool links */}
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {liveTools.map((t) => (
              <Link
                key={t.slug}
                href={t.href}
                className="hover:text-foreground transition-colors whitespace-nowrap"
              >
                {t.title}
              </Link>
            ))}
          </nav>

          {/* Legal links */}
          <nav className="flex items-center gap-4 shrink-0">
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>

        </div>
      </div>
    </footer>
  );
}
