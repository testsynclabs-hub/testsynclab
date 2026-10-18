import Link from "next/link";
import { auditSampleSections, caseStudies } from "@/lib/case-studies";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";

export function CaseStudiesSection() {
  return (
    <section
      className="border-t border-line bg-surface py-20 sm:py-24"
      aria-labelledby="cases-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Delivery snapshots
          </p>
          <h2
            id="cases-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
          >
            What a month of senior QA looks like
          </h2>
          <p className="mt-4 text-lg text-muted">
            Anonymized patterns from product teams that needed coverage before
            the next release — without hiring a full QA department.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <li key={item.id}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm shadow-brand/5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                  {item.industry}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-slate-800">Problem</dt>
                    <dd className="mt-1 text-muted">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-800">What we did</dt>
                    <dd className="mt-1 text-muted">{item.work}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-800">Outcome</dt>
                    <dd className="mt-1 font-medium text-brand-deep">
                      {item.outcome}
                    </dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AuditSamplePreview({
  source = "home-audit-sample",
}: {
  source?: string;
}) {
  return (
    <section
      className="border-t border-line bg-white py-20 sm:py-24"
      aria-labelledby="audit-sample-heading"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Free QA audit
          </p>
          <h2
            id="audit-sample-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
          >
            See what you get before you book
          </h2>
          <p className="mt-4 text-lg text-muted">
            The free audit is a working artifact — risk map, coverage plan, and
            package fit — not a vague “discovery call.”
          </p>
          <Link
            href={auditHref(source)}
            className="mt-8 inline-flex rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </div>

        <div className="rounded-3xl border border-brand/20 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-6 shadow-xl shadow-brand/10 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-deep">
            Sample deliverable
          </p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-extrabold text-slate-900">
            Free QA audit preview
          </p>
          <ul className="mt-6 space-y-4">
            {auditSampleSections.map((section, index) => (
              <li
                key={section.title}
                className="rounded-2xl border border-line bg-white/90 px-4 py-3"
              >
                <p className="text-sm font-bold text-slate-900">
                  <span className="mr-2 text-brand">{index + 1}.</span>
                  {section.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {section.detail}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs font-medium text-slate-500">
            Delivered after a short product brief — usually within one business
            day of kickoff.
          </p>
        </div>
      </div>
    </section>
  );
}
