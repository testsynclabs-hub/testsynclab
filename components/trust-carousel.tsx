const trustItems = [
  "SaaS platforms",
  "Fintech apps",
  "Mobile releases",
  "Marketplaces",
  "Healthcare portals",
  "Playwright CI",
  "API contracts",
  "Checkout flows",
  "Regression gates",
  "Performance checks",
] as const;

export function TrustCarousel() {
  const loop = [...trustItems, ...trustItems];

  return (
    <div
      className="relative z-10 mt-auto shrink-0 overflow-hidden border-t border-white/10 bg-[#050816]/90 py-3 backdrop-blur-sm sm:py-4"
      aria-label="Coverage focus areas"
    >
      <p className="mb-2 px-4 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400 sm:mb-3 sm:text-xs sm:tracking-[0.18em]">
        Built for teams shipping across
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#050816] to-transparent sm:w-20 md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#050816] to-transparent sm:w-20 md:w-28" />
        <div className="animate-marquee flex gap-2 px-3 sm:gap-3 sm:px-4">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex shrink-0 items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-slate-100 sm:px-4 sm:py-2 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
