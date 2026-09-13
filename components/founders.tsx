import Link from "next/link";
import { founders, trustSignals } from "@/lib/founders";

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

export function FoundersGrid({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <ul
      className={`grid gap-5 ${compact ? "md:grid-cols-2" : "lg:grid-cols-2"}`}
    >
      {founders.map((person) => (
        <li key={person.name + person.role}>
          <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm shadow-brand/5 sm:p-6">
            <div className="flex items-start gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand font-[family-name:var(--font-display)] text-lg font-extrabold text-white shadow-lg shadow-brand/25"
                aria-hidden
              >
                {person.initials}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                  {person.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-brand">
                  {person.role}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {person.bio}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {person.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-brand-soft/70 px-3 py-1 text-xs font-semibold text-brand-deep"
                >
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={person.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
            >
              LinkedIn →
            </a>
          </article>
        </li>
      ))}
    </ul>
  );
}

export function FoundersTeaser() {
  return (
    <section
      className="border-t border-line bg-white py-20 sm:py-24"
      aria-labelledby="founders-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Who you work with
            </p>
            <h2
              id="founders-heading"
              className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              Meet the partners
            </h2>
            <p className="mt-4 text-lg text-muted">
              Two founding QA partners — not a black-box bench. Strategy and
              execution stay close.
            </p>
          </div>
          <Link
            href="/about"
            className="text-sm font-bold text-brand hover:text-brand-deep"
          >
            About TestSync Lab →
          </Link>
        </div>
        <div className="mt-10">
          <FoundersGrid compact />
        </div>
      </div>
    </section>
  );
}
