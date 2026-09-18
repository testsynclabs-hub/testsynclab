import { trustSignals } from "@/lib/founders";

export function TrustSignals({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul
      className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
      aria-label="Engagement commitments"
    >
      {trustSignals.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm"
        >
          <p className="text-sm font-bold text-white">{item.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">
            {item.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function TrustSignalsLight({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul
      className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
      aria-label="Why teams book us"
    >
      {trustSignals.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl border border-line bg-white px-4 py-4 shadow-sm shadow-brand/5"
        >
          <p className="text-sm font-bold text-brand-deep">{item.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {item.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}
