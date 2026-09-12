import type { Metadata } from "next";
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
          We do not currently use advertising cookies. If analytics are added
          later, this page will be updated and consent controls provided where
          required.
        </p>
        <p>
          Questions:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-brand">
            {SITE_EMAIL}
          </a>
        </p>
      </div>
    </main>
  );
}
