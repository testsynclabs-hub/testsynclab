import type { Metadata } from "next";
import Link from "next/link";
import { AiServiceBanner } from "@/components/ai-service-banner";
import { CapabilityExplorer } from "@/components/capability-explorer";
import { Reveal } from "@/components/reveal";
import { capabilityAreas } from "@/lib/home-content";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "QA Services",
  description:
    "Manual testing, API validation, Playwright/Selenium automation, performance, and practical AI development for product teams worldwide.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-blue-100" />
          <div className="absolute -right-16 top-10 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Retainer-ready coverage
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            QA Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Practical quality engineering for web and mobile products — scoped
            to your release cadence. Built for US and Canadian teams first,
            delivered remotely worldwide.
          </p>
        </div>
      </section>

      <section
        className="border-b border-line bg-white py-16 sm:py-20"
        aria-labelledby="explore-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2
              id="explore-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
            >
              Explore what we validate
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              Interactive overview of the lanes behind every monthly package —
              pick depth, not noise.
            </p>
          </Reveal>
          <Reveal className="mt-10" delayMs={80}>
            <CapabilityExplorer />
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-background to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
              Core service lanes
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              The four retainable foundations — plus release and accessibility
              depth when your package includes them.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-10">
            {services.map((service, index) => (
              <Reveal key={service.slug} delayMs={index * 50}>
                <article
                  id={service.slug}
                  className="scroll-mt-28 border-t border-brand/20 pt-8"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">
                    {service.details}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
              Also available inside retainers
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {capabilityAreas
              .filter(
                (area) =>
                  area.id === "release" || area.id === "accessibility",
              )
              .map((area, index) => (
                <li key={area.id}>
                  <Reveal delayMs={index * 60}>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-muted">{area.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {area.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <AiServiceBanner source="services-ai" />
        </div>
      </section>

      <section className="border-t border-line bg-brand-deep py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <p className="max-w-xl text-lg text-blue-100">
            Not sure which services you need? Start with a free QA audit — we
            map risk to the right package.
          </p>
          <Link
            href={auditHref("services-footer")}
            className="rounded-xl bg-white px-6 py-3 font-bold text-brand-deep transition hover:bg-brand-soft"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </div>
      </section>
    </main>
  );
}
