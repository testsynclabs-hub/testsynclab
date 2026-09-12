import Link from "next/link";
import { CapabilityExplorer } from "@/components/capability-explorer";
import { FaqCta, FaqList } from "@/components/faq-list";
import { HeroVisual } from "@/components/hero-visual";
import { PackageGrid } from "@/components/package-grid";
import { Reveal } from "@/components/reveal";
import { StickyCta } from "@/components/sticky-cta";
import {
  auditSteps,
  coverageStats,
  engagementSteps,
  industries,
  outcomePillars,
  workflowTools,
} from "@/lib/home-content";
import { services, SITE_EMAIL, SITE_NAME } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="flex-1 pb-24 md:pb-0">
      <StickyCta />

      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef5ff] via-white to-sky-100" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.22),_transparent_55%)]" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(120deg,transparent,rgba(29,78,216,0.08)_40%,rgba(30,58,138,0.12))]" />
          <div className="absolute -right-24 top-16 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white/80 to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="max-w-2xl">
            <p className="animate-fade-up font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl lg:text-[3.4rem]">
              {SITE_NAME}
            </p>
            <h1
              id="hero-heading"
              className="animate-fade-up delay-100 mt-5 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]"
            >
              Senior QA retainers that keep every release shippable.
            </h1>
            <p className="animate-fade-up delay-200 mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Manual, API, Playwright automation, and release gates — monthly
              from $999, for product teams worldwide.
            </p>
            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact?plan=growth"
                className="animate-cta-pulse inline-flex items-center justify-center rounded-xl bg-brand px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep"
              >
                Book Free QA Audit
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-brand/30 bg-white/80 px-7 py-4 text-base font-bold text-brand-deep transition-all duration-300 hover:-translate-y-1 hover:bg-brand-soft"
              >
                See Packages
              </Link>
            </div>
          </div>

          <div className="animate-fade-in delay-200 relative lg:justify-self-end">
            <HeroVisual />
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="border-t border-line bg-surface py-20 sm:py-24"
        aria-labelledby="impact-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="impact-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Coverage and depth without hiring delay
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Clear offer. Fast response. Senior QA partners — not a bloated
                bench.
              </p>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coverageStats.map((stat, index) => (
              <li key={stat.label}>
                <Reveal delayMs={index * 80}>
                  <article className="h-full border-l-2 border-brand/30 pl-5">
                    <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-brand">
                      {stat.value}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                      {stat.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {stat.detail}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-white py-20 sm:py-24"
        aria-labelledby="engagement-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                id="engagement-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                How we run with your team
              </h2>
              <p className="mt-4 text-lg text-muted">
                From first audit to compounding release quality — transparent
                every step.
              </p>
            </div>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {engagementSteps.map((item, index) => (
              <li key={item.step}>
                <Reveal delayMs={index * 70}>
                  <div className="flex gap-4">
                    <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-brand/30">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-muted">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="border-t border-line bg-gradient-to-b from-sky-50/80 to-white py-20 sm:py-24"
        aria-labelledby="capabilities-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                id="capabilities-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Validation for demanding releases
              </h2>
              <p className="mt-4 text-lg text-muted">
                Explore the lanes we cover — then pick the retainer depth that
                matches your roadmap.
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-12" delayMs={100}>
            <CapabilityExplorer />
          </Reveal>
        </div>
      </section>

      <section
        className="border-t border-line bg-white py-20 sm:py-24"
        aria-labelledby="audit-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                id="audit-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Free QA audit in 3 steps
              </h2>
              <p className="mt-4 text-lg text-muted">
                Low-friction path from first message to first test cycle.
              </p>
            </div>
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {auditSteps.map((item, index) => (
              <li key={item.step}>
                <Reveal delayMs={index * 80}>
                  <p className="font-[family-name:var(--font-display)] text-sm font-bold text-brand">
                    Step {item.step}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted">{item.detail}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-brand px-6 py-3.5 font-bold text-white transition hover:bg-brand-deep"
            >
              Start Free Audit
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        className="border-t border-line bg-gradient-to-b from-background to-white py-20 sm:py-24"
        aria-labelledby="services-preview-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="services-preview-heading"
                  className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
                >
                  QA Services
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Manual, API, automation, and performance — scoped to how you
                  ship.
                </p>
              </div>
              <Link
                href="/services"
                className="text-sm font-bold text-brand hover:text-brand-deep"
              >
                All services →
              </Link>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Reveal delayMs={index * 60}>
                  <article className="h-full border-t border-brand/25 pt-5">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">
                      {service.summary}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
                    >
                      Learn more →
                    </Link>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-brand-deep py-20 sm:py-24"
        aria-labelledby="outcomes-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                id="outcomes-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
              >
                Built to help you move faster
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Flexibility without overhead. Confidence without second-guessing.
                Visibility from kickoff to release.
              </p>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {outcomePillars.map((item, index) => (
              <li key={item.title}>
                <Reveal delayMs={index * 70}>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-blue-100">{item.detail}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-surface py-20 sm:py-24"
        aria-labelledby="packages-preview-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2
                id="packages-preview-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Monthly Packages
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                $999 · $1,899 · $2,799 — clear scope, no hourly surprises.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <PackageGrid />
          </Reveal>
        </div>
      </section>

      <section
        className="border-t border-line bg-white py-20 sm:py-24"
        aria-labelledby="workflows-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                id="workflows-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Fits the tools you already use
              </h2>
              <p className="mt-4 text-lg text-muted">
                We plug into your issue tracker, chat, and CI — so QA doesn&apos;t
                live in a side channel.
              </p>
            </div>
          </Reveal>
          <ul className="mt-12 flex flex-wrap gap-3">
            {workflowTools.map((tool, index) => (
              <li key={tool.name}>
                <Reveal delayMs={index * 40}>
                  <div className="flex items-center gap-3 rounded-full border border-brand/15 bg-sky-50/70 px-4 py-2.5 transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-[family-name:var(--font-display)] text-xs font-bold text-white">
                      {tool.mark}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-slate-900">
                      {tool.name}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-gradient-to-b from-sky-50/60 to-background py-20 sm:py-24"
        aria-labelledby="industries-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                id="industries-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Built for product teams shipping weekly
              </h2>
              <p className="mt-4 text-lg text-muted">
                Same retainer model — tailored risk focus by product type.
              </p>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2">
            {industries.map((item, index) => (
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

      <section
        className="border-t border-line bg-white py-20 sm:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="faq-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                FAQ
              </h2>
              <Link
                href="/faq"
                className="text-sm font-bold text-brand hover:text-brand-deep"
              >
                View all FAQs →
              </Link>
            </div>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <FaqList showCategories={false} limit={6} />
            <FaqCta />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-brand-deep py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need QA this sprint?
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Book a free audit today. We&apos;ll tell you exactly what to test
              before your next release. Or email{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-deep transition duration-200 hover:bg-brand-soft"
          >
            Contact {SITE_NAME}
          </Link>
        </div>
      </section>
    </main>
  );
}
