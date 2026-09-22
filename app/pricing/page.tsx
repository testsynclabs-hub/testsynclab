import type { Metadata } from "next";
import Link from "next/link";
import { AiPackageGrid } from "@/components/ai-package-grid";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { PackageGrid } from "@/components/package-grid";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { aiPackagePolicy, aiPackages } from "@/lib/ai";
import { pricingComparePoints } from "@/lib/packages";
import { packageNeedMap } from "@/lib/client-guide";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "QA Testing Pricing | Monthly Retainers from $999",
  description:
    "QA testing pricing for SaaS teams: Basic $999, Growth $1,899, Scale $2,799 — each with ~40 QA hours/week on your region's calendar. Price buys depth, not fewer hours. AI testing scoped separately.",
  keywords: [
    "QA testing pricing",
    "QA retainer pricing",
    "monthly QA packages",
    "outsourced QA cost",
    "software testing company pricing",
    "AI testing pricing",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `QA Testing Pricing | ${SITE_NAME}`,
    description:
      "Basic, Growth, and Scale each include ~40 QA hours/week. Price buys depth — not fewer hours. AI testing scoped separately.",
    url: `${SITE_URL}/pricing`,
  },
};

const pricingOfferJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: `${SITE_NAME} QA and AI testing packages`,
  url: `${SITE_URL}/pricing`,
  itemListElement: [
    {
      "@type": "Offer",
      name: "Basic QA retainer",
      price: "999",
      priceCurrency: "USD",
      description:
        "Monthly manual QA with ~40 focused hours per week on your region's calendar.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Growth QA retainer",
      price: "1899",
      priceCurrency: "USD",
      description:
        "Same ~40 QA hours/week plus API checks and automation start.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Scale QA retainer",
      price: "2799",
      priceCurrency: "USD",
      description:
        "Same ~40 QA hours/week with performance spot checks, release gates, and named lead cadence.",
      url: `${SITE_URL}/pricing`,
    },
    ...aiPackages.map((plan) => ({
      "@type": "Offer" as const,
      name: plan.name,
      description: plan.description,
      url: `${SITE_URL}/ai`,
      priceSpecification: {
        "@type": "PriceSpecification" as const,
        priceCurrency: "USD",
        description: `${plan.priceLabel} — ${plan.priceNote}`,
      },
    })),
  ],
};

export default function PricingPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingOfferJsonLd) }}
      />

      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            QA testing pricing — ~40 hours a week on every package
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Basic, Growth, and Scale each include about 40 QA hours every week.
            Package price is not linked to hour caps — you pay for depth of
            work, not a thinner clock. Weekends and holidays follow your
            region's calendar.
          </p>
          <Link
            href={auditHref("pricing-hero")}
            className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL} first
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <PackageGrid />
          <p className="mt-10 text-center text-sm text-muted">
            Need more than one pod, a game/desktop scope, or a custom SLA?{" "}
            <Link
              href="/contact?plan=audit&source=pricing-enterprise"
              className="font-semibold text-brand hover:text-brand-deep"
            >
              Talk to an expert
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        className="border-t border-line bg-surface py-16 sm:py-20"
        aria-labelledby="pricing-map-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2
            id="pricing-map-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep"
          >
            If you only know this, pick this
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Same pattern as the homepage cards — you want this, you get that.
            We confirm the fit on the free audit.
          </p>
          <ul className="mt-10 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {packageNeedMap.map((row) => (
              <li
                key={row.id}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="max-w-xl">
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                    You want
                  </p>
                  <p className="mt-1 font-medium text-slate-800">{row.youWant}</p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                    You get
                  </p>
                  <p className="mt-1 text-sm text-muted">{row.youGet}</p>
                </div>
                <Link
                  href={row.href}
                  className="shrink-0 text-sm font-bold text-brand hover:text-brand-deep"
                >
                  {row.pick} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-white py-16 sm:py-20"
        aria-labelledby="pricing-compare-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2
            id="pricing-compare-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep"
          >
            Why retainers beat waiting to hire
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Coverage this month — without a six-figure headcount bet or a long
            lock-in. Clear weekly capacity, aligned to your region's calendar.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingComparePoints.map((item) => (
              <li
                key={item.title}
                className="border-t border-brand/25 pt-5"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="ai-testing"
        className="scroll-mt-28 border-t border-line bg-surface py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
            {aiPackagePolicy.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {aiPackagePolicy.body}
          </p>
          <p className="mt-3 max-w-2xl text-base font-semibold text-brand-deep">
            {aiPackagePolicy.tip}
          </p>
          <div className="mt-10">
            <AiPackageGrid emphasizeCta={false} sourceSuffix="pricing-ai" />
          </div>
          <p className="mt-8 text-sm text-muted">
            Full AI testing lanes and sprint flow:{" "}
            <Link href="/ai" className="font-semibold text-brand hover:text-brand-deep">
              AI testing →
            </Link>
          </p>
        </div>
      </section>

      <FreeQaAuditCta
        source="pricing-footer"
        heading="Unsure which package fits?"
        body="Shopify, game, desktop, Cypress — say it in your words. Free audit, then we point you at Basic, Growth, Scale, or a custom scope."
      />
    </main>
  );
}
