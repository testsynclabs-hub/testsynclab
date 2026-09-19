"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";

type Variant = "banner" | "card" | "compact";

type FreeQaAuditCtaProps = {
  source: string;
  variant?: Variant;
  heading?: string;
  body?: string;
};

export function FreeQaAuditCta({
  source,
  variant = "banner",
  heading = "Book a free QA audit",
  body = "Share your product, stack, and next release. We map risks and a practical test plan — then you decide if a monthly retainer fits.",
}: FreeQaAuditCtaProps) {
  const href = auditHref(source);
  const onAuditClick = () => {
    trackCtaClick({ source, label: "free_qa_audit" });
  };

  if (variant === "compact") {
    return (
      <p className="mt-8 text-sm text-muted">
        Need release confidence?{" "}
        <Link
          href={href}
          onClick={onAuditClick}
          className="font-bold text-brand hover:text-brand-deep"
        >
          {FREE_QA_AUDIT_LABEL} →
        </Link>
      </p>
    );
  }

  if (variant === "card") {
    return (
      <aside className="my-10 rounded-2xl border border-brand/20 bg-brand-soft/40 p-6">
        <p className="font-[family-name:var(--font-display)] text-lg font-bold text-brand-deep">
          {heading}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">{body}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={href}
            onClick={onAuditClick}
            className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-xl border border-brand/30 bg-white px-5 py-2.5 text-sm font-bold text-brand-deep hover:bg-brand-soft"
          >
            View packages
          </Link>
        </div>
      </aside>
    );
  }

  return (
    <section className="border-t border-line bg-brand-deep py-14 sm:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div className="max-w-xl">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-blue-100 sm:text-lg">{body}</p>
        </div>
        <Link
          href={href}
          onClick={onAuditClick}
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-bold text-brand-deep transition duration-200 hover:bg-brand-soft"
        >
          {FREE_QA_AUDIT_LABEL}
        </Link>
      </div>
    </section>
  );
}
