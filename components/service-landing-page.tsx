import type { Metadata } from "next";
import Link from "next/link";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import type { ServiceLanding } from "@/lib/service-landings";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function serviceLandingMetadata(landing: ServiceLanding): Metadata {
  return {
    title: landing.metaTitle,
    description: landing.metaDescription,
    keywords: landing.keywords,
    alternates: { canonical: landing.path },
    openGraph: {
      title: `${landing.title} | ${SITE_NAME}`,
      description: landing.metaDescription,
      url: `${SITE_URL}${landing.path}`,
    },
  };
}

export function ServiceLandingPage({ landing }: { landing: ServiceLanding }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: landing.title,
        description: landing.metaDescription,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
        areaServed: [
          "United States",
          "United Kingdom",
          "Canada",
          "Australia",
          "Worldwide",
        ],
        url: `${SITE_URL}${landing.path}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: landing.title,
            item: `${SITE_URL}${landing.path}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: landing.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-brand">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-slate-700">{landing.title}</li>
            </ol>
          </nav>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-brand">
            {landing.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            {landing.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{landing.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={auditHref(`service-${landing.slug}`)}
              className="inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-deep"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
            <Link
              href="/pricing"
              className="inline-flex rounded-xl border border-brand/30 bg-white px-5 py-3 text-sm font-bold text-brand-deep hover:bg-brand-soft"
            >
              See packages
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
            Outcomes teams buy
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {landing.outcomes.map((item) => (
              <li key={item.title}>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
            What’s included
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {landing.includes.map((item) => (
              <li key={item} className="flex gap-2 text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Related:{" "}
            <Link href="/services" className="font-semibold text-brand hover:text-brand-deep">
              all services
            </Link>
            {" · "}
            <Link
              href="/qa-services-usa"
              className="font-semibold text-brand hover:text-brand-deep"
            >
              QA for US teams
            </Link>
            {" · "}
            <Link href="/outsourced-qa" className="font-semibold text-brand hover:text-brand-deep">
              outsourced QA
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
            FAQ
          </h2>
          <ul className="mt-8 space-y-4">
            {landing.faqs.map((item) => (
              <li key={item.question}>
                <details className="rounded-2xl border border-line bg-surface open:border-brand/30">
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
        </div>
      </section>

      <FreeQaAuditCta
        source={`service-${landing.slug}-footer`}
        heading={`Ready for ${landing.title.toLowerCase()}?`}
        body="Book a free QA audit. We map risk to Basic, Growth, or Scale — or tell you if a focused sprint is enough."
      />
    </main>
  );
}
