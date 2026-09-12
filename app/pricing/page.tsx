import type { Metadata } from "next";
import Link from "next/link";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { PackageGrid } from "@/components/package-grid";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Pricing & Packages",
  description:
    "Affordable monthly QA retainers: Basic $999, Growth $1,899, Scale $2,799, and custom Enterprise plans.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            Simple monthly packages
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            No hourly meters. Clear scope. Built for startups and product teams
            that want senior QA without enterprise pricing.
          </p>
          <Link
            href={auditHref("pricing-hero")}
            className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL} first
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <PackageGrid />
          <p className="mt-10 text-center text-sm text-muted">
            Need more than one pod or a custom SLA?{" "}
            <Link
              href="/contact?plan=enterprise"
              className="font-semibold text-brand hover:text-brand-deep"
            >
              Contact us for Enterprise
            </Link>
            .
          </p>
        </div>
      </section>

      <FreeQaAuditCta
        source="pricing-footer"
        heading="Unsure which package fits?"
        body="Book a free QA audit. We recommend Basic, Growth, Scale, or Enterprise from your actual release risk."
      />
    </main>
  );
}
