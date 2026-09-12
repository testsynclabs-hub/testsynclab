import type { Metadata } from "next";
import Link from "next/link";
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
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <p className="max-w-xl text-lg text-muted">
            Not sure which services you need? Start with a free QA audit.
          </p>
          <Link
            href="/contact"
            className="rounded-xl bg-brand px-6 py-3 font-bold text-white hover:bg-brand-deep"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </main>
  );
}
