'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo → homepage */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform flex-shrink-0 bg-white border border-border/50">
              <img src="/logo.png" alt="Microtools logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-bold text-base text-foreground group-hover:text-primary transition-colors leading-none block">
                Microtools
              </span>
              <span className="text-[11px] text-muted-foreground leading-none">Free Utility Tools</span>
            </div>
          </Link>

          {/* Desktop Nav — minimal */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/#categories"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-2 rounded-lg transition-all"
            >
              All Tools
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-2 rounded-lg transition-all"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3">
          <Link
            href="/#categories"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-all"
          >
            All Tools
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="block text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-lg transition-all"
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}
