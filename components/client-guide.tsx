import Link from "next/link";
import { qaPlainSpeak } from "@/lib/client-guide";

export function QaPlainSpeak() {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {qaPlainSpeak.map((item) => (
        <li
          key={item.term}
          className="rounded-2xl border border-line bg-white p-5"
        >
          <p className="font-[family-name:var(--font-display)] text-sm font-extrabold uppercase tracking-[0.12em] text-brand">
            {item.term}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.meaning}</p>
        </li>
      ))}
    </ul>
  );
}

export function NeedChooser({
  needs,
}: {
  needs: {
    id: string;
    title: string;
    plain: string;
    fit: string;
    href: string;
    cta: string;
  }[];
}) {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {needs.map((need) => (
        <li key={need.id}>
          <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
              {need.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted">{need.plain}</p>
            <p className="mt-3 text-sm font-semibold text-brand-deep">{need.fit}</p>
            <Link
              href={need.href}
              className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
            >
              {need.cta} →
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
