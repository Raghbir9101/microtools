import Link from 'next/link';
import type { Tool } from '@/lib/tools';

const accentConfig = {
  blue: {
    size: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    border: 'hover:border-blue-400',
    bg: 'hover:bg-blue-50 dark:hover:bg-blue-950/20',
    cta: 'text-blue-600 dark:text-blue-400',
    pill: 'bg-blue-500',
  },
  emerald: {
    size: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    border: 'hover:border-emerald-400',
    bg: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/20',
    cta: 'text-emerald-600 dark:text-emerald-400',
    pill: 'bg-emerald-500',
  },
  violet: {
    size: 'text-violet-600 dark:text-violet-400',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
    border: 'hover:border-violet-400',
    bg: 'hover:bg-violet-50 dark:hover:bg-violet-950/20',
    cta: 'text-violet-600 dark:text-violet-400',
    pill: 'bg-violet-500',
  },
  orange: {
    size: 'text-orange-600 dark:text-orange-400',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    border: 'hover:border-orange-400',
    bg: 'hover:bg-orange-50 dark:hover:bg-orange-950/20',
    cta: 'text-orange-600 dark:text-orange-400',
    pill: 'bg-orange-500',
  },
  rose: {
    size: 'text-rose-600 dark:text-rose-400',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    border: 'hover:border-rose-400',
    bg: 'hover:bg-rose-50 dark:hover:bg-rose-950/20',
    cta: 'text-rose-600 dark:text-rose-400',
    pill: 'bg-rose-500',
  },
  amber: {
    size: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    border: 'hover:border-amber-400',
    bg: 'hover:bg-amber-50 dark:hover:bg-amber-950/20',
    cta: 'text-amber-600 dark:text-amber-400',
    pill: 'bg-amber-500',
  },
  cyan: {
    size: 'text-cyan-600 dark:text-cyan-400',
    badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    border: 'hover:border-cyan-400',
    bg: 'hover:bg-cyan-50 dark:hover:bg-cyan-950/20',
    cta: 'text-cyan-600 dark:text-cyan-400',
    pill: 'bg-cyan-500',
  },
  pink: {
    size: 'text-pink-600 dark:text-pink-400',
    badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
    border: 'hover:border-pink-400',
    bg: 'hover:bg-pink-50 dark:hover:bg-pink-950/20',
    cta: 'text-pink-600 dark:text-pink-400',
    pill: 'bg-pink-500',
  },
  slate: {
    size: 'text-slate-600 dark:text-slate-400',
    badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800/50 dark:text-slate-300',
    border: 'hover:border-slate-400',
    bg: 'hover:bg-slate-50 dark:hover:bg-slate-950/20',
    cta: 'text-slate-600 dark:text-slate-400',
    pill: 'bg-slate-500',
  },
};


interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const colors = accentConfig[tool.accent];
  const isComingSoon = tool.status === 'coming-soon';

  const cardContent = (
    <div
      className={`group relative h-full flex flex-col p-5 rounded-2xl border-2 border-border bg-card transition-all duration-200 ${
        isComingSoon
          ? 'opacity-75 cursor-default'
          : `cursor-pointer ${colors.border} ${colors.bg} hover:shadow-lg hover:-translate-y-0.5`
      }`}
    >
      {/* Coming Soon ribbon */}
      {isComingSoon && (
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-semibold uppercase tracking-wide">
          Coming Soon
        </span>
      )}

      {/* Badge */}
      <span className={`self-start px-2.5 py-1 rounded-lg text-xs font-bold mb-3 ${colors.badge}`}>
        {tool.badge}
      </span>

      {/* Title */}
      <h3 className="font-bold text-sm text-foreground mb-1.5 leading-snug">{tool.title}</h3>

      {/* Description */}
      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{tool.description}</p>

      {/* CTA */}
      {!isComingSoon && (
        <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${colors.cta}`}>
          Use Tool
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (isComingSoon) return cardContent;

  return (
    <Link href={tool.href} className="h-full" id={`tool-card-${tool.slug}`}>
      {cardContent}
    </Link>
  );
}
