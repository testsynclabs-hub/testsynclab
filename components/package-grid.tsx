import Link from "next/link";
import { packages } from "@/lib/packages";

export function PackageGrid({
  showEnterprise = true,
}: {
  showEnterprise?: boolean;
}) {
  const plans = showEnterprise
    ? packages
    : packages.filter((plan) => plan.id !== "enterprise");

  return (
    <ul className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
      {plans.map((plan) => (
        <li key={plan.id} className="h-full">
          <article
            className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/15 sm:p-7 ${
              plan.featured
                ? "border-brand ring-2 ring-brand/20"
                : "border-line"
            }`}
          >
            {plan.featured ? (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand">
                Most popular
              </p>
            ) : (
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-transparent">
                Plan
              </p>
            )}
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
            <p className="mt-4 rounded-xl bg-brand-soft/60 px-3 py-2 text-xs font-semibold leading-relaxed text-brand-deep">
              Capacity: {plan.capacity}
            </p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Not included: {plan.notIncluded}
            </p>
            <Link
              href={plan.ctaHref}
              className={`mt-7 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                plan.featured
                  ? "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-deep"
                  : "border border-brand/30 bg-brand-soft/50 text-brand-deep hover:bg-brand-soft"
              }`}
            >
              {plan.ctaLabel}
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
