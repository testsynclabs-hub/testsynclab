import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { outcomePillars } from "@/lib/home-content";
import {
  AI_CONSULT_LABEL,
  aiHref,
  auditHref,
  FREE_QA_AUDIT_LABEL,
} from "@/lib/cta";
import { futureRoadmap, SITE_LINKEDIN, SITE_NAME, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TestSync Lab is a worldwide QA agency founded by two QA partners, with in-house AI engineering for practical copilots, RAG, and workflow automation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            About {SITE_NAME}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Two QA founders. One in-house AI engineer. Quality first — with
            practical AI when a product actually needs it.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              Who we are
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {SITE_NAME} started as a focused software quality assurance
              agency. Both founders are hands-on QA practitioners — which means
              strategy and execution stay close, reporting stays clear, and you
              always know who owns quality outcomes.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              AI development is live now, delivered by an in-house engineer —
              copilots, RAG, and workflow automation, tested like the rest of
              the product. We work with clients worldwide. Timezones are a
              feature when handoffs are structured: your day ends with a build;
              our day starts with verification.
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
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              The team
            </h2>
            <ul className="mt-6 space-y-4">
              {team.map((item) => (
                <li
                  key={item.title + item.detail}
                  className="rounded-xl border border-line bg-white p-4"
                >
                  <p className="font-bold text-brand-deep">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
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
