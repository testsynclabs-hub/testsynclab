import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  aiEngagementSteps,
  aiLanes,
  aiOffer,
  aiPackages,
} from "@/lib/ai";
import { AI_CONSULT_LABEL, aiHref } from "@/lib/cta";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Development",
  description:
    "Practical AI development from TestSync Lab: copilots, RAG, workflow automation, and AI quality evals — shipped with the same QA bar as our monthly testing retainers.",
  keywords: [
    "AI development services",
    "LLM feature development",
    "RAG chatbot development",
    "AI quality evals",
    "hire AI engineer",
  ],
  alternates: { canonical: "/ai" },
  openGraph: {
    title: `AI Development | ${SITE_NAME}`,
    description:
      "Copilots, RAG, and workflow automation — built in-house and tested like a product.",
    url: `${SITE_URL}/ai`,
  },
};

const aiJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Practical AI development",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: "Worldwide",
  serviceType: "AI software development",
  description:
    "Scoped AI feature sprints and AI + QA pods for copilots, RAG, workflow automation, and model evals.",
  url: `${SITE_URL}/ai`,
};

export default function AiPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-blue-100" />
          <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            {aiOffer.eyebrow}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            AI development that can actually ship
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{aiOffer.summary}</p>
          <p className="mt-4 max-w-2xl text-base font-semibold text-brand-deep">
            {aiOffer.differentiator}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={aiHref("ai-hero")}
              className="inline-flex rounded-xl bg-brand px-6 py-3.5 font-bold text-white hover:bg-brand-deep"
            >
              {AI_CONSULT_LABEL}
            </Link>
            <Link
              href="/services"
              className="inline-flex rounded-xl border border-brand/30 bg-white px-6 py-3.5 font-bold text-brand-deep hover:bg-brand-soft"
            >
              See QA services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="ai-lanes-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2
              id="ai-lanes-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              What we build
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Narrow, useful features — not an AI transformation program.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2">
            {aiLanes.map((lane, index) => (
              <li key={lane.slug} id={lane.slug} className="scroll-mt-28">
                <Reveal delayMs={index * 60}>
                  <article className="h-full border-t border-brand/25 pt-5">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                      {lane.title}
                    </h3>
                    <p className="mt-2 text-muted">{lane.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {lane.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-surface py-16 sm:py-20"
        aria-labelledby="ai-how-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2
              id="ai-how-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              How an AI sprint runs
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              QA founders stay in the loop so the feature is testable on day one.
            </p>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {aiEngagementSteps.map((item, index) => (
              <li key={item.step}>
                <Reveal delayMs={index * 70}>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-brand/30">
                    {item.step}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted">{item.detail}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-t border-line bg-white py-16 sm:py-20"
        aria-labelledby="ai-pricing-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2
              id="ai-pricing-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              How we price AI work
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              QA stays on clear monthly retainers. AI is scoped so you are not
              buying an open-ended experiment.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {aiPackages.map((plan) => (
              <li key={plan.id}>
                <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
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
                    href={plan.ctaHref}
                    className="mt-7 inline-flex items-center justify-center rounded-xl bg-brand px-4 py-3 text-sm font-bold text-white hover:bg-brand-deep"
                  >
                    {plan.ctaLabel}
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-brand-deep py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <p className="max-w-xl text-lg text-blue-100">
            Have a feature in mind? Tell us the job-to-be-done, the data you
            already have, and the deadline. We will say yes, no, or not yet.
          </p>
          <Link
            href={aiHref("ai-footer")}
            className="rounded-xl bg-white px-6 py-3 font-bold text-brand-deep transition hover:bg-brand-soft"
          >
            {AI_CONSULT_LABEL}
          </Link>
        </div>
      </section>
    </main>
  );
}
