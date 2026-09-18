import Link from "next/link";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { SITE_NAME } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
          404
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-muted">
          That link doesn&apos;t exist on {SITE_NAME}. Head home, browse
          services, or book a free QA audit.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex rounded-xl border border-brand/30 bg-white px-5 py-3 text-sm font-bold text-brand-deep hover:bg-brand-soft"
          >
            Go home
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-xl border border-brand/30 bg-white px-5 py-3 text-sm font-bold text-brand-deep hover:bg-brand-soft"
          >
            Services
          </Link>
          <Link
            href={auditHref("404")}
            className="inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </div>
      </div>
    </main>
  );
}
