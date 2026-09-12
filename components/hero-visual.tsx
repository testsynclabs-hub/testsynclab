export function HeroVisual() {
  return (
    <div className="relative w-full" aria-hidden="true">
      <div className="absolute -inset-x-8 -inset-y-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.28),transparent_65%)] blur-2xl" />
      <div className="animate-drift relative overflow-hidden border border-white/50 bg-gradient-to-br from-white/90 via-sky-50/90 to-brand-soft/80 p-6 shadow-[0_30px_80px_rgba(30,58,138,0.22)] backdrop-blur-md sm:p-7 lg:-mr-8 lg:rounded-l-[1.75rem] lg:rounded-r-none lg:border-r-0">
        <div className="flex items-end justify-between gap-4 border-b border-brand/15 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              Live quality signal
            </p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-extrabold text-brand-deep">
              Release readiness
            </p>
          </div>
          <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-brand">
            94%
          </p>
        </div>

        <div className="mt-6 space-y-4">
          {[
            { label: "Critical path smoke", width: "w-[92%]", tone: "bg-brand" },
            {
              label: "API contract suite",
              width: "w-[86%]",
              tone: "bg-brand-bright",
            },
            {
              label: "Checkout edge cases",
              width: "w-[71%]",
              tone: "bg-amber-500",
            },
            {
              label: "Playwright CI gate",
              width: "w-[96%]",
              tone: "bg-emerald-500",
            },
          ].map((row) => (
            <div key={row.label}>
              <div className="mb-1.5 flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-slate-800">{row.label}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/70">
                <div className={`h-full rounded-full ${row.tone} ${row.width}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3 border-t border-brand/15 pt-5 text-center">
          {[
            { value: "12", label: "Cases today" },
            { value: "2", label: "Open bugs" },
            { value: "1d", label: "Cycle time" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-display)] text-xl font-extrabold text-brand-deep">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
