import Link from "next/link";
import type { Metadata } from "next";
import { CapabilityExplorer } from "@/components/capability-explorer";
import { FaqCta, FaqList } from "@/components/faq-list";
import { HeroHeadline } from "@/components/hero-headline";
import { HeroVisual } from "@/components/hero-visual";
import { PackageGrid } from "@/components/package-grid";
import { Reveal } from "@/components/reveal";
import { StickyCta } from "@/components/sticky-cta";
import { TrustCarousel } from "@/components/trust-carousel";
import { AiServiceBanner } from "@/components/ai-service-banner";
import {
  auditSteps,
  coverageStats,
  engagementSteps,
  industries,
  outcomePillars,
  workflowTools,
} from "@/lib/home-content";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { services, SITE_EMAIL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";
import { markets, outsourcedQa } from "@/lib/markets";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main className="flex-1 pb-24 md:pb-0">
      <StickyCta />

      <section
        className="relative flex min-h-[calc(100svh-4.5rem-5.25rem)] flex-col overflow-hidden bg-[#07111f] text-white md:min-h-[calc(100svh-4.5rem)]"
        aria-labelledby="hero-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_12%_18%,rgba(37,99,235,0.38),transparent_55%),radial-gradient(ellipse_70%_50%_at_88%_12%,rgba(14,165,233,0.22),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.95),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(148,163,184,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.28)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl flex-1 content-center items-center gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:py-10">
          <div className="max-w-2xl">
            <p className="animate-fade-up font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.4rem]">
              {SITE_NAME}
            </p>
            <HeroHeadline />
            <p className="animate-fade-up delay-200 mt-3 max-w-xl text-base leading-relaxed text-slate-300 sm:mt-4 sm:text-lg lg:text-xl">
              Manual, API, Playwright automation, and release gates — monthly
              from $999, for product teams in the US, Canada, and worldwide.
            </p>
            <div className="animate-fade-up delay-300 mt-6 flex flex-wrap gap-3 sm:mt-8">
              <Link
                href={auditHref("home-hero")}
                className="animate-cta-pulse inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-bright sm:px-7 sm:py-3.5 sm:text-base"
              >
                {FREE_QA_AUDIT_LABEL}
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-base"
              >
                See Packages
              </Link>
            </div>

            <div className="animate-fade-up delay-300 mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-6">
              <div
                className="flex items-center gap-0.5"
                aria-label="Five-star quality focus"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400 sm:h-4 sm:w-4"
                    aria-hidden="true"
                  >
                    <path d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.9l-4.78 2.5.91-5.32L2.27 7.12l5.34-.78L10 1.5z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-white sm:text-sm">
                Clear QA ownership
              </span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
              <Link
                href="/pricing"
                className="text-xs font-medium text-sky-300 transition hover:text-sky-200 sm:text-sm"
              >
                Fixed monthly packages →
              </Link>
              <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden />
              <Link
                href="/ai"
                className="text-sm font-medium text-sky-300 transition hover:text-sky-200"
              >
                Also: AI testing →
              </Link>
            </div>
          </div>

          <div className="animate-fade-in delay-200 relative hidden min-[900px]:block lg:justify-self-end">
            <HeroVisual />
          </div>
        </div>

        <TrustCarousel />
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
              href={auditHref("home-audit-steps")}
              className="inline-flex rounded-xl bg-brand px-6 py-3.5 font-bold text-white transition hover:bg-brand-deep"
            >
              {FREE_QA_AUDIT_LABEL}
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
          <Reveal className="mt-12">
            <AiServiceBanner source="home-services" />
          </Reveal>
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
        className="border-t border-line bg-surface py-20 sm:py-24"
        aria-labelledby="markets-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2
                id="markets-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Worldwide delivery. Fastest path: US and Canada.
              </h2>
              <p className="mt-4 text-lg text-muted">
                We take clients anywhere English-speaking teams ship. Right now
                we push hardest where deals close faster — US and Canadian
                product teams — with USD retainers, Slack/Jira, and
                follow-the-sun verification.
              </p>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {markets.map((market, index) => (
              <li key={market.path}>
                <Reveal delayMs={index * 60}>
                  <article className="h-full border-t border-brand/25 pt-5">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                      {market.navLabel}
                    </h3>
                    <p className="mt-2 text-muted">{market.navDescription}</p>
                    <Link
                      href={market.path}
                      className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
                    >
                      {market.eyebrow} QA services →
                    </Link>
                  </article>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal delayMs={120}>
                <article className="h-full border-t border-brand/25 pt-5">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                    {outsourcedQa.navLabel}
                  </h3>
                  <p className="mt-2 text-muted">{outsourcedQa.navDescription}</p>
                  <Link
                    href={outsourcedQa.path}
                    className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
                  >
                    How outsourced QA works →
                  </Link>
                </article>
              </Reveal>
            </li>
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
            href={auditHref("home-footer")}
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-brand-deep transition duration-200 hover:bg-brand-soft"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </div>
      </section>
    </main>
  );
}
