import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioBrowser } from "@/components/portfolio-browser";
import { caseStudies } from "@/lib/case-studies";
import {
  AI_CONSULT_LABEL,
  aiHref,
  auditHref,
  FREE_QA_AUDIT_LABEL,
} from "@/lib/cta";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "QA portfolio",
  description:
    "TestSync Lab portfolio — anonymized QA delivery snapshots for SaaS, mobile, and API releases. One practice, one report, client names kept private.",
  keywords: [
    "TestSync Lab portfolio",
    "QA agency portfolio",
    "software testing case studies",
    "SaaS QA portfolio",
    "remote QA work samples",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "QA portfolio | TestSync Lab",
    description:
      "Anonymized delivery snapshots from TestSync Lab — manual, API, and mobile QA under one brand.",
    url: "/portfolio",
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${SITE_NAME} QA portfolio`,
  url: `${SITE_URL}/portfolio`,
  description:
    "Anonymized software QA delivery snapshots from TestSync Lab.",
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${SITE_URL}/portfolio/${item.id}`,
    })),
  },
};

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            {SITE_NAME} portfolio
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            The work, under one lab
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Anonymized snapshots from product teams that needed coverage before
            the next release. Client names stay private. The practice does not:
            every engagement is scoped, staffed, and reported as {SITE_NAME}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={auditHref("portfolio-hero")}
              className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
            <Link
              href="/about"
              className="rounded-xl border border-brand/25 bg-white px-5 py-2.5 text-sm font-bold text-brand-deep hover:bg-brand-soft"
            >
              About the lab →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                One brand
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                Clients hire the lab
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Scope, cycle, and handoff sit with {SITE_NAME}. There is one
                portfolio because there is one report.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                NDA-safe
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                Patterns, not logos
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                No invented client marks. These are the same delivery patterns
                already on the homepage, written so a buyer can see the work.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                Lanes
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                Manual, API, mobile
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Filter by the kind of release risk. Playwright and AI sit in
                the service pages when a retainer needs them.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              Delivery snapshots
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Three anonymized engagements. Open any snapshot for the problem,
              the work, and the artifacts that left the cycle.
            </p>
            <div className="mt-8">
              <PortfolioBrowser />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-lg text-muted">
            Want this kind of coverage on your next release?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={auditHref("portfolio-footer")}
              className="rounded-xl bg-brand px-6 py-3 text-center font-bold text-white hover:bg-brand-deep"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
            <Link
              href={aiHref("portfolio-footer")}
              className="rounded-xl border border-brand/30 bg-white px-6 py-3 text-center font-bold text-brand-deep hover:bg-brand-soft"
            >
              {AI_CONSULT_LABEL}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
