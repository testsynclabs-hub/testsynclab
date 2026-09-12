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
    <section
      className="overflow-hidden border-y border-white/10 bg-[#050816] py-5"
      aria-label="Coverage focus areas"
    >
      <div className="mx-auto mb-3 max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Built for teams shipping across
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050816] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050816] to-transparent sm:w-24" />
        <div className="animate-marquee flex gap-3 px-4">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex shrink-0 items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold whitespace-nowrap text-slate-100"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
