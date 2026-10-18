import Link from "next/link";
import { PackageGrid } from "@/components/package-grid";
import { Reveal } from "@/components/reveal";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import type { MarketFaq } from "@/lib/markets";
import { marketNavChildren } from "@/lib/markets";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Highlight = { title: string; detail: string };

type MarketLandingProps = {
  path: string;
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: readonly Highlight[];
  pains: readonly Highlight[];
  faqs: readonly MarketFaq[];
  areaServedName: string;
  serviceName: string;
};

export function marketJsonLd(options: {
  path: string;
  serviceName: string;
  description: string;
  areaServedName: string | string[];
  faqs: readonly MarketFaq[];
}) {
  const pageUrl = `${SITE_URL}${options.path}`;
  const served = Array.isArray(options.areaServedName)
    ? options.areaServedName.map((name) => ({ "@type": "Country", name }))
    : { "@type": "Country", name: options.areaServedName };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: options.serviceName,
        provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        areaServed: served,
        serviceType: "Software quality assurance",
        description: options.description,
        url: pageUrl,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "999",
          highPrice: "2799",
        },
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
            name: options.serviceName,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: options.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export function MarketLanding({
  path,
  eyebrow,
  h1,
  intro,
  highlights,
  pains,
  faqs,
  areaServedName,
  serviceName,
}: MarketLandingProps) {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-brand">
            <Link href="/" className="hover:text-brand-deep">
              Home
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-700">{eyebrow}</span>
          </nav>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-brand">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            {h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={auditHref(`${path.replace("/", "")}-hero`)}
              className="inline-flex rounded-xl bg-brand px-6 py-3.5 font-bold text-white hover:bg-brand-deep"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
            <Link
              href="/pricing"
              className="inline-flex rounded-xl border border-brand/30 bg-white px-6 py-3.5 font-bold text-brand-deep hover:bg-brand-soft"
            >
              See packages
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
              Why {areaServedName} teams hire {SITE_NAME}
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
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

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
              Problems this retainer replaces
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {pains.map((item, index) => (
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

      <section className="border-t border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
              Monthly packages in USD
            </h2>
          </Reveal>
          <PackageGrid showEnterprise={false} />
          <p className="mt-8 text-sm text-muted">
            Full comparison, including Enterprise:{" "}
            <Link href="/pricing" className="font-semibold text-brand hover:text-brand-deep">
              pricing →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep">
            {serviceName} FAQ
          </h2>
          <ul className="mt-8 space-y-4">
            {faqs.map((item) => (
              <li key={item.question}>
                <details className="group rounded-2xl border border-line bg-white open:border-brand/30">
                  <summary className="cursor-pointer list-none px-5 py-4 font-[family-name:var(--font-display)] text-base font-bold text-slate-900 [&::-webkit-details-marker]:hidden">
                    {item.question}
                  </summary>
                  <p className="border-t border-line px-5 py-4 text-muted">
                    {item.answer}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-white py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Also in this lab
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            {marketNavChildren
              .filter((item) => item.href !== path)
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand hover:text-brand-deep"
                  >
                    {item.label} →
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/services" className="text-brand hover:text-brand-deep">
                All QA services →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-brand-deep py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <p className="max-w-xl text-lg text-blue-100">
            Share the product, stack, and next release. We return a practical
            QA audit within 24 hours on business days.
          </p>
          <Link
            href={auditHref(`${path.replace("/", "")}-footer`)}
            className="rounded-xl bg-white px-6 py-3 font-bold text-brand-deep hover:bg-brand-soft"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </div>
      </section>
    </main>
  );
}
