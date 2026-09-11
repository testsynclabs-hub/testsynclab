import { redirect } from "next/navigation";

const services = [
  {
    title: "Manual Testing",
    description:
      "Exploratory and structured test cycles that catch usability gaps, edge cases, and business-logic defects before release.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <path
          d="M9 11l3 3L22 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "API Testing",
    description:
      "Contract, schema, and integration validation across REST and GraphQL services so your backends stay reliable under load.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <path
          d="M4 7h6M14 7h6M4 17h6M14 17h6M10 7v10M14 7v10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Automation",
    description:
      "Stable end-to-end suites wired into CI/CD so every commit is verified without slowing your delivery cadence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <rect
          x="3"
          y="4"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 21h8M12 18v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 10h2v4H8zM14 8h2v6h-2z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Performance",
    description:
      "Load, stress, and soak testing that surfaces bottlenecks early and proves your product scales with confidence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
        <path
          d="M3 17l5-5 4 4 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8h6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

const impactStats = [
  {
    value: "99.9%",
    label: "Bug-Free Deployments",
    detail: "Release confidence backed by rigorous regression coverage.",
  },
  {
    value: "40%",
    label: "Faster Testing Cycles",
    detail: "Lean automation that shortens feedback loops in CI/CD.",
  },
  {
    value: "24/7",
    label: "Robust Automation",
    detail: "Always-on suites that protect quality between releases.",
  },
] as const;

const techStack = [
  { name: "Python", mark: "Py" },
  { name: "Playwright", mark: "Pw" },
  { name: "Selenium", mark: "Se" },
  { name: "Postman", mark: "Pm" },
  { name: "JMeter", mark: "Jm" },
] as const;

async function submitContact(formData: FormData) {
  "use server";

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    redirect("/?error=1#contact");
  }

  // Lead capture ready for email/CRM wiring
  void { name, email, message };
  redirect("/?sent=1#contact");
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const params = await searchParams;
  const sent = params.sent === "1";
  const error = params.error === "1";

  return (
    <div className="flex min-h-full flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      {/* Sticky glassmorphism header */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm shadow-brand/5 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-brand sm:text-xl"
          >
            TestSync Lab
          </a>
          <nav
            aria-label="Primary"
            className="flex items-center gap-4 text-sm font-semibold text-slate-600 sm:gap-6"
          >
            <a
              href="#services"
              className="hidden transition-colors hover:text-brand sm:inline"
            >
              Services
            </a>
            <a
              href="#tech"
              className="hidden transition-colors hover:text-brand sm:inline"
            >
              Tech Stack
            </a>
            <a
              href="#contact"
              className="hidden transition-colors hover:text-brand md:inline"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-brand px-3.5 py-2 text-white shadow-md shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lg hover:shadow-brand/30"
            >
              Get Audit
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" className="flex-1">
        {/* Premium Hero */}
        <section
          id="top"
          className="relative min-h-[100svh] overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-blue-100" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.18),_transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(191,219,254,0.65),_transparent_50%)]" />
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
            <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
          </div>

          <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-6xl flex-col justify-center px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
            <div className="max-w-3xl">
              <p className="animate-fade-up font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
                TestSync Lab
              </p>
              <h1
                id="hero-heading"
                className="animate-fade-up delay-100 mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Software Quality Assurance &amp; Testing
              </h1>
              <p className="animate-fade-up delay-200 mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
                Quality You Can Trust. Software That Performs.
              </p>
              <div className="animate-fade-up delay-300 mt-10">
                <a
                  href="#contact"
                  className="animate-cta-pulse inline-flex items-center justify-center rounded-xl bg-brand px-7 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Get a Free QA Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Impact */}
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
                Why Choose Us / Our Impact
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Measurable quality outcomes trusted by product and engineering
                teams shipping under pressure.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <li key={stat.label}>
                  <article className="h-full rounded-2xl border border-line bg-gradient-to-b from-white to-sky-50/80 p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/10">
                    <p className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
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

        {/* Services */}
        <section
          id="services"
          className="border-t border-line bg-gradient-to-b from-background to-white py-20 sm:py-24"
          aria-labelledby="services-heading"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2
                id="services-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                QA Services Built for Delivery Teams
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                From first feature to production release, we harden quality at
                every layer of your stack.
              </p>
            </div>

            <ul className="mt-12 grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.title}>
                  <article className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/35 hover:shadow-2xl hover:shadow-brand/15 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-lg shadow-brand/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-deep">
                      {service.icon}
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section
          id="tech"
          className="border-t border-line bg-surface py-20 sm:py-24"
          aria-labelledby="tech-heading"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <h2
                id="tech-heading"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
              >
                Core Testing Stack
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Industry-standard tools we use to deliver reliable, repeatable
                quality signals.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              {techStack.map((tool) => (
                <li key={tool.name}>
                  <div className="group flex items-center gap-3 rounded-full border border-brand/20 bg-gradient-to-r from-white to-brand-soft/60 px-5 py-3 shadow-[0_0_20px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-2xl hover:shadow-brand/25">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-[family-name:var(--font-display)] text-xs font-bold text-white shadow-md shadow-brand/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-deep">
                      {tool.mark}
                    </span>
                    <span className="pr-1 font-[family-name:var(--font-display)] text-base font-semibold text-slate-900">
                      {tool.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Lead Capture / Contact */}
        <section
          id="contact"
          className="border-t border-line bg-gradient-to-b from-sky-50 to-white py-20 sm:py-24"
          aria-labelledby="contact-heading"
        >
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <h2
                  id="contact-heading"
                  className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
                >
                  Start Your Free QA Audit
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Share your product context and release goals. Our team will
                  respond with a practical quality assessment plan.
                </p>
                <p className="mt-6 text-sm text-muted">
                  Prefer email?{" "}
                  <a
                    href="mailto:info@testsynclab.com"
                    className="font-semibold text-brand hover:text-brand-deep"
                  >
                    info@testsynclab.com
                  </a>
                </p>
              </div>

              <form
                action={submitContact}
                className="rounded-2xl border border-line bg-white p-6 shadow-xl shadow-brand/10 sm:p-8"
              >
                {sent ? (
                  <p
                    className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
                    role="status"
                  >
                    Thank you — your message was received. We&apos;ll be in touch
                    shortly.
                  </p>
                ) : null}
                {error ? (
                  <p
                    className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                    role="alert"
                  >
                    Please complete all fields before submitting.
                  </p>
                ) : null}

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="alex@company.com"
                      className="w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your product, stack, and release timeline..."
                      className="w-full resize-y rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep hover:shadow-2xl hover:shadow-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive footer */}
      <footer
        className="border-t border-line bg-slate-950 text-slate-300"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Company information
        </h2>
        <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                TestSync Lab
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                TestSync Lab is a software quality assurance partner for
                product and engineering teams that need dependable release
                confidence. We combine disciplined manual testing, API
                validation, automation engineering, and performance analysis to
                reduce production risk, accelerate delivery cycles, and help
                organizations ship software that performs under real-world
                conditions.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
                  Contact
                </h3>
                <a
                  href="mailto:info@testsynclab.com"
                  className="mt-3 inline-block text-base font-medium text-white transition-colors hover:text-blue-300"
                >
                  info@testsynclab.com
                </a>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
                  Follow Us
                </h3>
                <ul className="mt-3 flex flex-wrap gap-3">
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/10"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-blue-300"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.15V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/10"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-blue-300"
                      >
                        <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.1 22H1.84l8.03-9.17L1.5 2h6.75l4.66 6.17L18.244 2zm-1.16 18h1.82L7.02 3.94H5.07L17.084 20z" />
                      </svg>
                      X / Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {new Date().getFullYear()} TestSync Lab. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="transition-colors hover:text-blue-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="transition-colors hover:text-blue-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="transition-colors hover:text-blue-300"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
