import type { Metadata } from "next";
import Link from "next/link";
import { futureRoadmap, SITE_LINKEDIN, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TestSync Lab is a worldwide QA agency founded by two QA partners — building affordable monthly quality retainers first, with BPO and AI on the roadmap.",
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
            Two QA partners. One mission: help product teams ship with
            confidence — at a price that makes sense.
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
              We work with clients worldwide. Timezones are a feature when
              handoffs are structured: your day ends with a build; our day
              starts with verification.
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
              Where we&apos;re going
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              QA is the foundation. Over time we will expand into adjacent
              delivery capabilities — without diluting quality as our core
              promise.
            </p>
            <ul className="mt-6 space-y-4">
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
        </div>
      </section>

      <section className="border-t border-line bg-surface py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-lg text-muted">
            Want to see if we&apos;re a fit? Book a free QA audit.
          </p>
          <Link
            href="/contact"
            className="rounded-xl bg-brand px-6 py-3 text-center font-bold text-white hover:bg-brand-deep"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
