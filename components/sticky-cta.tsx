import Link from "next/link";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { SITE_EMAIL } from "@/lib/site";

export function StickyCta() {
  return (
    <div
      data-sticky-cta
      className="fixed inset-x-0 bottom-0 z-40 border-t border-brand/20 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(29,78,216,0.12)] backdrop-blur md:hidden"
    >
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={`mailto:${SITE_EMAIL}?subject=Free%20QA%20Audit%20Request`}
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-brand/30 px-3 py-3 text-sm font-bold text-brand-deep"
        >
          Email Us
        </a>
        <Link
          href={auditHref("sticky-mobile")}
          className="inline-flex flex-[1.4] items-center justify-center rounded-lg bg-brand px-3 py-3 text-sm font-bold text-white"
        >
          {FREE_QA_AUDIT_LABEL}
        </Link>
      </div>
    </div>
  );
}
