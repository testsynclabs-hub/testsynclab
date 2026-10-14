import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) return {};
  const path = `/portfolio/${item.id}`;
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${item.title} | ${SITE_NAME}`,
      description: item.summary,
      url: path,
    },
  };
}

export default async function PortfolioPiecePage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: item.title,
    description: item.summary,
    url: `${SITE_URL}/portfolio/${item.id}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: item.industry,
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold text-brand">
            <Link href="/portfolio" className="hover:text-brand-deep">
              Portfolio
            </Link>
            <span className="mx-2 text-slate-300" aria-hidden="true">
              /
            </span>
            <span className="uppercase tracking-[0.14em]">{item.industry}</span>
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{item.summary}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <dl className="grid gap-6 lg:grid-cols-3">
            {(
              [
                ["Problem", item.problem],
                ["What we did", item.work],
                ["Outcome", item.outcome],
              ] as const
            ).map(([label, text]) => (
              <div
                key={label}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <dt className="text-sm font-bold text-slate-900">{label}</dt>
                <dd
                  className={`mt-2 leading-relaxed ${
                    label === "Outcome"
                      ? "font-medium text-brand-deep"
                      : "text-muted"
                  }`}
                >
                  {text}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
                What left the cycle
              </h2>
              <ul className="mt-5 space-y-3">
                {item.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="rounded-xl border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-slate-700"
                  >
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
                Related services
              </h2>
              <ul className="mt-5 space-y-2">
                {item.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="font-semibold text-brand hover:text-brand-deep"
                    >
                      {service.label} →
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={auditHref(`portfolio-${item.id}`)}
                className="mt-8 inline-flex rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-deep"
              >
                {FREE_QA_AUDIT_LABEL}
              </Link>
            </div>
          </div>

          <p className="mt-12 text-sm text-muted">
            <Link href="/portfolio" className="font-bold text-brand hover:text-brand-deep">
              ← All snapshots
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
