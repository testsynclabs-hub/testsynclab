import Link from "next/link";
import { PackageGrid } from "@/components/package-grid";
import { services, SITE_NAME } from "@/lib/site";

const impactStats = [
  {
    value: "99.9%",
    label: "Release Confidence Focus",
    detail: "Regression discipline built to catch critical defects early.",
  },
  {
    value: "40%",
    label: "Faster Test Cycles",
    detail: "Lean automation and clear handoffs shorten feedback loops.",
  },
  {
    value: "Global",
    label: "Clients Worldwide",
    detail: "Serving product teams across timezones — wherever you ship.",
  },
] as const;

const techStack = [
  { name: "Python", mark: "Py" },
  { name: "Playwright", mark: "Pw" },
  { name: "Selenium", mark: "Se" },
  { name: "Postman", mark: "Pm" },
  { name: "JMeter", mark: "Jm" },
] as const;

export default function HomePage() {
  return (
    <main className="flex-1">
      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-blue-100" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.18),_transparent_55%)]" />
          <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-3xl">
            <p className="animate-fade-up font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
              {SITE_NAME}
            </p>
            <h1
              id="hero-heading"
              className="animate-fade-up delay-100 mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Software Quality Assurance &amp; Testing
            </h1>
            <p className="animate-fade-up delay-200 mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Quality You Can Trust. Software That Performs. Affordable monthly
              QA retainers for product teams worldwide.
            </p>
            <div className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact?plan=growth"
                className="animate-cta-pulse inline-flex items-center justify-center rounded-xl bg-brand px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep"
              >
                Get a Free QA Audit
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-brand/30 bg-white px-7 py-4 text-base font-bold text-brand-deep transition-all duration-300 hover:-translate-y-1 hover:bg-brand-soft"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="impact"
        className="border-t border-line bg-surface py-20 sm:py-24"
        aria-labelledby="impact-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="impact-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              Why Choose Us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Senior QA capacity at a price built for startups and scale-ups —
              not enterprise bloat.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-3">
            {impactStats.map((stat) => (
              <li key={stat.label}>
                <article className="h-full rounded-2xl border border-line bg-gradient-to-b from-white to-sky-50/80 p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10">
                  <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-brand sm:text-5xl">
                    {stat.value}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {stat.detail}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-t border-line bg-gradient-to-b from-background to-white py-20 sm:py-24"
        aria-labelledby="services-preview-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
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
                actually ship.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold text-brand hover:text-brand-deep"
            >
              All services →
            </Link>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <article className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/15 sm:p-7">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </article>
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
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="packages-preview-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              Monthly Packages
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              $999 · $1,899 · $2,799 — clear scope, no hourly surprises.
              Enterprise when you need more than one pod.
            </p>
          </div>
          <PackageGrid />
        </div>
      </section>

      <section
        className="border-t border-line bg-gradient-to-b from-brand-soft/40 to-background py-20 sm:py-24"
        aria-labelledby="tech-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h2
            id="tech-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
          >
            Core Testing Stack
          </h2>
          <ul className="mt-12 flex flex-wrap gap-4">
            {techStack.map((tool) => (
              <li key={tool.name}>
                <div className="group flex items-center gap-3 rounded-full border border-brand/20 bg-gradient-to-r from-white to-brand-soft/60 px-5 py-3 shadow-[0_0_20px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/25">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-[family-name:var(--font-display)] text-xs font-bold text-white">
                    {tool.mark}
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-base font-semibold text-slate-900">
                    {tool.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-brand-deep py-16 sm:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for a free QA audit?
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Tell us about your release goals — we&apos;ll map risks and a
              practical plan.
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
