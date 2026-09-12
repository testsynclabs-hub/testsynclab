import type { Metadata } from "next";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-brand-deep">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: September 12, 2026</p>
      <div className="mt-8 space-y-4 leading-relaxed text-slate-700">
        <p>
          {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) operates {SITE_URL}. This
          policy explains how we handle information submitted through our
          website contact forms and related communications.
        </p>
        <h2 className="pt-4 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
          Information we collect
        </h2>
        <p>
          When you contact us, we collect your name, email address, message
          content, and any package interest you select. Server logs may include
          standard technical data such as IP address and browser type.
        </p>
        <h2 className="pt-4 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
          How we use information
        </h2>
        <p>
          We use this information to respond to inquiries, provide proposed QA
          scopes, and improve our services. We do not sell personal information.
        </p>
        <h2 className="pt-4 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
          Contact
        </h2>
        <p>
          Questions about privacy:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-brand">
            {SITE_EMAIL}
          </a>
        </p>
      </div>
      <FreeQaAuditCta source="privacy" variant="compact" />
    </main>
  );
}
