interface AdSlotProps {
  variant: 'top' | 'sidebar' | 'section';
}

const variantConfig = {
  top: {
    dimensions: 'w-full h-20 md:h-24',
    label: 'Ad Slot — Top Banner (Google AdSense)',
    sublabel: '728×90 Leaderboard',
  },
  sidebar: {
    dimensions: 'w-full h-96',
    label: 'Ad Slot — Sidebar (Google AdSense)',
    sublabel: '300×600 Half Page',
  },
  section: {
    dimensions: 'w-full h-28',
    label: 'Ad Slot — Section (Google AdSense)',
    sublabel: '728×90 Banner',
  },
};

export default function AdSlot({ variant }: AdSlotProps) {
  const config = variantConfig[variant];

  return (
    <div
      className={`${config.dimensions} bg-muted/40 border border-dashed border-border/60 rounded-xl flex flex-col items-center justify-center gap-1 text-muted-foreground/60`}
      aria-label="Advertisement slot"
    >
      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
      <span className="text-xs font-medium">{config.label}</span>
      <span className="text-[10px] opacity-60">{config.sublabel}</span>
    </div>
  );
}
