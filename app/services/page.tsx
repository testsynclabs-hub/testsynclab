import type { Metadata } from "next";
import Link from "next/link";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "QA Services",
  description:
    "Manual testing, API validation, Playwright/Selenium automation, and performance testing for product teams worldwide.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            QA Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Practical quality engineering for web and mobile products — scoped
            to your release cadence, not a bloated checklist.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8">
          {services.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 sm:p-8"
            >
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
                {service.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {service.summary}
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-700">
                {service.details}
              </p>
              <Link
                href={auditHref(`services:${service.slug}`)}
                className="mt-5 inline-flex font-bold text-brand hover:text-brand-deep"
              >
                {FREE_QA_AUDIT_LABEL} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <FreeQaAuditCta
        source="services-footer"
        heading="Not sure which services you need?"
        body="Start with a free QA audit. We map manual, API, automation, and performance risk to a monthly package."
      />
    </main>
  );
}
