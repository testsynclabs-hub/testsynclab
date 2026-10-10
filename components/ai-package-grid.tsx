import Link from "next/link";
import { aiPackages } from "@/lib/ai";

type AiPackageGridProps = {
  /** Stronger CTA styling for the primary AI pricing section */
  emphasizeCta?: boolean;
  sourceSuffix?: string;
};

export function AiPackageGrid({
  emphasizeCta = true,
  sourceSuffix,
}: AiPackageGridProps) {
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {aiPackages.map((plan) => {
        const href = sourceSuffix
          ? plan.ctaHref.replace(
              /source=[^&]+/,
              `source=${sourceSuffix}`,
            )
          : plan.ctaHref;

        return (
          <li key={plan.id}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
              {plan.pairsWith ? (
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
                  {plan.pairsWith}
                </p>
              ) : null}
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-3 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-brand-deep">
                  {plan.priceLabel}
                </span>
                <span className="text-sm text-muted">{plan.priceNote}</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {plan.description}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className={`mt-7 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                  emphasizeCta
                    ? "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-deep"
                    : "border border-brand/30 bg-brand-soft/50 text-brand-deep hover:bg-brand-soft"
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
