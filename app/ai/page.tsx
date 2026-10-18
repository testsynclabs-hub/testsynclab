import type { Metadata } from "next";
import Link from "next/link";
import { AiPackageGrid } from "@/components/ai-package-grid";
import { Reveal } from "@/components/reveal";
import {
  aiBuildNote,
  aiEngagementSteps,
  aiLanes,
  aiOffer,
  aiPackagePolicy,
  aiPackages,
} from "@/lib/ai";
import { AI_CONSULT_LABEL, aiHref, auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { faqs } from "@/lib/faq";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Testing for Chatbots, RAG & LLM Products",
  description:
    "AI testing for chatbots, copilots, RAG, and LLM products. Hallucination checks, prompt regression, and release gates — scoped separately from monthly QA retainers.",
  keywords: [
    "AI testing services",
    "chatbot testing",
    "LLM QA",
    "RAG testing",
    "prompt regression testing",
    "AI product QA",
    "hire AI QA",
    "AI testing sprint",
    "LLM release gates",
  ],
  alternates: { canonical: "/ai" },
  openGraph: {
    title: `AI Testing | ${SITE_NAME}`,
    description:
      "Chatbot, RAG, and LLM QA — golden sets, jailbreak checks, and release gates from a QA lab.",
    url: `${SITE_URL}/ai`,
  },
};

const aiFaqs = faqs.filter((item) => item.category === "AI");

const aiJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI testing for chatbots and LLM products",
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  areaServed: ["United States", "Canada", "Worldwide"],
  serviceType: "Software quality assurance",
  description:
    "QA for AI features: chatbot testing, RAG faithfulness, LLM evals, prompt regression, and AI workflow quality.",
  url: `${SITE_URL}/ai`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI testing packages",
    itemListElement: aiPackages.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      url: `${SITE_URL}/pricing#ai-testing`,
    })),
  },
};

const aiFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aiFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
  url: `${SITE_URL}/ai`,
};

export default function AiPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiFaqJsonLd) }}
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
            AI testing that protects the release
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
              href={auditHref("ai-hero-qa")}
              className="inline-flex rounded-xl border border-brand/30 bg-white px-6 py-3.5 font-bold text-brand-deep hover:bg-brand-soft"
            >
              {FREE_QA_AUDIT_LABEL}
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
              What we test
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              AI surfaces that already hit customers — chat, search, agents, and
              workflows.
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
              How AI testing runs here
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Same QA discipline as your retainer — applied to models, prompts,
              and retrieval.
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
              How we price AI testing
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              {aiPackagePolicy.body}
            </p>
            <p className="mt-3 max-w-2xl text-base font-semibold text-brand-deep">
              {aiPackagePolicy.tip}
            </p>
          </Reveal>
          <div className="mt-12">
            <AiPackageGrid sourceSuffix="ai-pricing" />
          </div>
          <p className="mt-8 text-sm text-muted">
            Classic monthly QA packages stay on{" "}
            <Link
              href="/pricing"
              className="font-semibold text-brand hover:text-brand-deep"
            >
              /pricing
            </Link>
            . AI testing is quoted after discovery.
          </p>

          <aside className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-7">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
              {aiBuildNote.title}
            </h3>
            <p className="mt-2 max-w-2xl text-muted">{aiBuildNote.detail}</p>
            <Link
              href={aiBuildNote.href}
              className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
            >
              {aiBuildNote.label} →
            </Link>
          </aside>
        </div>
      </section>

      <section
        className="border-t border-line bg-surface py-16 sm:py-20"
        aria-labelledby="ai-faq-heading"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <h2
              id="ai-faq-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              AI testing FAQ
            </h2>
            <p className="mt-4 text-lg text-muted">
              Straight answers on packages, add-ons, and when to start.
            </p>
          </Reveal>
          <ul className="mt-10 space-y-4">
            {aiFaqs.map((item) => (
              <li key={item.question}>
                <details className="group rounded-2xl border border-line bg-white open:border-brand/30">
                  <summary className="cursor-pointer list-none px-5 py-4 font-[family-name:var(--font-display)] text-base font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {item.question}
                  </summary>
                  <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            More retainer questions:{" "}
            <Link href="/faq" className="font-semibold text-brand hover:text-brand-deep">
              full FAQ →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-brand-deep py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <p className="max-w-xl text-lg text-blue-100">
            Shipping a chatbot or RAG feature? Tell us the product, the model
            stack, and the next release date. We will say what to test first.
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
