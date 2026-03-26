'use client';

export interface CompressionOption {
  size: number;
  label: string;
  description: string;
}

interface CompressionControlsProps {
  options: CompressionOption[];
  onCompress: (sizeKB: number) => void;
  isLoading: boolean;
  activeSize?: number | null;
}

const sizeColors: Record<number, { bg: string; text: string; border: string; badge: string }> = {
  10: {
    bg: 'hover:bg-blue-50 dark:hover:bg-blue-950/30',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'hover:border-blue-400',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  20: {
    bg: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/30',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'hover:border-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  },
  50: {
    bg: 'hover:bg-violet-50 dark:hover:bg-violet-950/30',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'hover:border-violet-400',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  },
  100: {
    bg: 'hover:bg-orange-50 dark:hover:bg-orange-950/30',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'hover:border-orange-400',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  },
};

const defaultColor = {
  bg: 'hover:bg-primary/5',
  text: 'text-primary',
  border: 'hover:border-primary',
  badge: 'bg-primary/10 text-primary',
};

export default function CompressionControls({
  options,
  onCompress,
  isLoading,
  activeSize,
}: CompressionControlsProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <div className="w-1 h-5 bg-primary rounded-full" />
        <p className="text-sm font-semibold text-foreground">Select target file size:</p>
      </div>

      <div className={`grid gap-3 ${options.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {options.map((option) => {
          const colors = sizeColors[option.size] ?? defaultColor;
          const isActive = activeSize === option.size;

          return (
            <button
              key={option.size}
              id={`compress-btn-${option.size}kb`}
              onClick={() => onCompress(option.size)}
              disabled={isLoading}
              className={`group relative overflow-hidden rounded-xl border-2 bg-card p-5 text-left transition-all duration-200 ${colors.bg} ${colors.border} ${
                isActive ? `${colors.border} shadow-md` : 'border-border'
              } disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] hover:shadow-md`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className={`text-3xl font-extrabold ${colors.text} leading-none`}>
                    {option.size}
                    <span className="text-lg font-bold ml-0.5">KB</span>
                  </p>
                  <h3 className="font-semibold text-foreground text-sm mt-2 truncate">
                    {option.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">
                    {option.description}
                  </p>
                </div>

                <div className={`flex-shrink-0 w-9 h-9 rounded-xl ${colors.badge} flex items-center justify-center`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-border/50">
                <span className={`text-xs font-semibold ${colors.text} flex items-center gap-1`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Compress &amp; Download
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-3 py-8 rounded-xl bg-primary/5 border border-primary/20 animate-fade-in-up">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <div className="text-center">
            <p className="font-semibold text-foreground text-sm">Compressing your image…</p>
            <p className="text-xs text-muted-foreground mt-0.5">Using Canvas API — stays in your browser</p>
          </div>
        </div>
      )}
    </div>
  );
}
