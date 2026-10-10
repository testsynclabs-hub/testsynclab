import type { Metadata } from "next";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-brand-deep">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: September 12, 2026</p>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          By using {SITE_URL}, you agree to these terms. Website content is for
          general information about {SITE_NAME} services and packages.
        </p>
        <h2 className="pt-4 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
          Services
        </h2>
        <p>
          Published package prices are starting points. Final scope, timeline,
          and fees are confirmed in a written agreement before work begins.
        </p>
        <h2 className="pt-4 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
          Contact
        </h2>
        <p>
          Questions:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-brand">
            {SITE_EMAIL}
          </a>
        </p>
      </div>
      <FreeQaAuditCta source="terms" variant="compact" />
    </main>
  );
}
