import Link from "next/link";
import { faqs } from "@/lib/faq";

type FaqListProps = {
  showCategories?: boolean;
  limit?: number;
};

export function FaqList({ showCategories = true, limit }: FaqListProps) {
  const items = typeof limit === "number" ? faqs.slice(0, limit) : faqs;

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.question}>
          <details className="group rounded-2xl border border-line bg-white open:border-brand/30 open:shadow-md open:shadow-brand/10">
            <summary className="cursor-pointer list-none px-5 py-4 font-[family-name:var(--font-display)] text-base font-bold text-slate-900 sm:px-6 sm:text-lg [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>
                  {showCategories ? (
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                      {item.category}
                    </span>
                  ) : null}
                  {item.question}
                </span>
                <span className="mt-1 text-brand transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-line px-5 py-4 text-muted sm:px-6">
              {item.answer}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
}

export function FaqCta() {
  return (
    <div className="mt-10 rounded-2xl border border-brand/20 bg-brand-soft/40 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <p className="font-semibold text-brand-deep">
        Still unsure which package fits? Get a free audit.
      </p>
      <Link
        href="/contact?plan=audit&source=faq-cta"
        className="mt-4 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-deep sm:mt-0"
      >
        Book free QA audit
      </Link>
    </div>
  );
}
