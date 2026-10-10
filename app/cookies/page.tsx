import type { Metadata } from "next";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${SITE_NAME}.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-brand-deep">
        Cookie Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: September 12, 2026</p>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          {SITE_NAME} uses essential cookies and similar technologies required
          for security, load balancing, and basic site operation when hosted on
          platforms such as Vercel.
        </p>
        <p>
          If Google Analytics 4 is enabled via{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">
            NEXT_PUBLIC_GA_MEASUREMENT_ID
          </code>
          , GA may set analytics cookies to measure traffic sources and page
          views. We do not use advertising cookies.
        </p>
        <p>
          You can block analytics cookies in your browser settings. For product
          questions, email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-brand">
            {SITE_EMAIL}
          </a>
          .
        </p>
      </div>
      <FreeQaAuditCta source="cookies" variant="compact" />
    </main>
  );
}
