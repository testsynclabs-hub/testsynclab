import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  FoundersGrid,
  TrustSignalsLight,
} from "@/components/founders";
import { outcomePillars } from "@/lib/home-content";
import {
  AI_CONSULT_LABEL,
  aiHref,
  auditHref,
  FREE_QA_AUDIT_LABEL,
} from "@/lib/cta";
import { futureRoadmap, SITE_LINKEDIN, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About TestSync Lab | Remote QA Agency",
  description:
    "About TestSync Lab — a remote QA agency for SaaS teams. Monthly retainers for manual, API, Playwright, and AI testing, plus a free QA audit.",
  keywords: [
    "About TestSync Lab",
    "TestSync Lab QA agency",
    "remote QA agency",
    "software testing company",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TestSync Lab | Remote QA Agency",
    description:
      "Learn who TestSync Lab is — a remote QA agency delivering monthly SaaS testing retainers worldwide.",
    url: "/about",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  url: `${SITE_URL}/about`,
  description:
    "TestSync Lab is a remote software QA agency for SaaS teams worldwide.",
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [SITE_LINKEDIN],
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Remote QA agency
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            About {SITE_NAME}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {SITE_NAME} is a remote QA agency for SaaS teams. Hands-on monthly
            retainers, clear reporting, and the same release bar for AI features
            your customers already use.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/qa-agency"
              className="rounded-xl border border-brand/25 bg-white px-5 py-2.5 text-sm font-bold text-brand-deep hover:bg-brand-soft"
            >
              QA agency overview →
            </Link>
            <Link
              href={auditHref("about-hero")}
              className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              Who we are
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {SITE_NAME} ({SITE_URL.replace("https://", "")}) is a focused
              software quality assurance agency — not a generic IT body shop.
              Strategy and execution stay close, reporting stays clear, and you
              always know who owns quality outcomes.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We deliver remote QA retainers for product teams worldwide,
              especially US and Canadian SaaS buyers: manual exploratory testing,
              API checks, Playwright automation, performance gates, and AI product
              QA for chatbots, RAG, and LLM workflows.
            </p>
            <a
              href={SITE_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-semibold text-brand hover:text-brand-deep"
            >
              Follow us on LinkedIn →
            </a>
          </div>

          <div className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              Leadership
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Public faces stay honest — we only list people we can stand behind.
            </p>
            <div className="mt-6 max-w-xl">
              <FoundersGrid />
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              How we engage
            </h2>
            <div className="mt-6">
              <TrustSignalsLight />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
            Where we&apos;re going
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            QA remains the foundation. AI is already a live lane. We will expand
            into adjacent delivery later — without diluting quality as the core
            promise.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {futureRoadmap.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-line bg-white p-4"
              >
                <p className="font-bold text-brand-deep">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Coming later
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-white py-16 sm:py-20"
        aria-labelledby="about-outcomes-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2
              id="about-outcomes-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep"
            >
              What we optimize for
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              The same principles that make enterprise testing partners useful —
              delivered as affordable monthly retainers, with AI when the
              roadmap needs it.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {outcomePillars.map((item, index) => (
              <li key={item.title}>
                <Reveal delayMs={index * 60}>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted">{item.detail}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-lg text-muted">
            Want to see if we&apos;re a fit? Book a free QA audit — or talk AI.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={auditHref("about-footer")}
              className="rounded-xl bg-brand px-6 py-3 text-center font-bold text-white hover:bg-brand-deep"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
            <Link
              href={aiHref("about-footer")}
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
