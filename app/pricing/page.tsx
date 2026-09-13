import type { Metadata } from "next";
import Link from "next/link";
import { AiPackageGrid } from "@/components/ai-package-grid";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { PackageGrid } from "@/components/package-grid";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { aiPackagePolicy, aiPackages } from "@/lib/ai";
import { pricingComparePoints } from "@/lib/packages";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "Monthly QA retainers: Basic $999, Growth $1,899, Scale $2,799. AI testing stays separate as a scoped sprint or Growth/Scale add-on.",
  keywords: [
    "QA retainer pricing",
    "monthly QA packages",
    "outsourced QA cost",
    "AI testing pricing",
    "chatbot QA cost",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `Pricing & Packages | ${SITE_NAME}`,
    description:
      "Clear monthly QA packages from $999. AI testing quoted as a sprint or retainer add-on.",
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
      description: "Monthly manual exploratory and regression QA.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Growth QA retainer",
      price: "1899",
      priceCurrency: "USD",
      description: "Monthly QA with API checks and automation start.",
      url: `${SITE_URL}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Scale QA retainer",
      price: "2799",
      priceCurrency: "USD",
      description:
        "Full-stack monthly QA with performance spot checks and release gates.",
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
            Simple monthly packages
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            No hourly meters. Clear scope. Built for startups and product teams
            that want senior QA without enterprise pricing.
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
            Need more than one pod or a custom SLA?{" "}
            <Link
              href="/contact?plan=enterprise"
              className="font-semibold text-brand hover:text-brand-deep"
            >
              Contact us for Enterprise
            </Link>
            .
          </p>
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
            lock-in.
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
        body="Book a free QA audit for Classic QA fit — or talk about AI testing if a chatbot or RAG feature is already live."
      />
    </main>
  );
}
