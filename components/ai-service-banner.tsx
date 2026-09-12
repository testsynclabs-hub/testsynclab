import Link from "next/link";
import { AI_CONSULT_LABEL, aiHref } from "@/lib/cta";
import { aiOffer } from "@/lib/ai";

type AiServiceBannerProps = {
  source: string;
};

export function AiServiceBanner({ source }: AiServiceBannerProps) {
  return (
    <aside className="overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-slate-950 via-brand-deep to-slate-900 p-7 text-white sm:p-9">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-300">
        {aiOffer.eyebrow}
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight sm:text-3xl">
        {aiOffer.title}
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
        {aiOffer.summary}
      </p>
      <p className="mt-3 max-w-2xl text-sm font-semibold text-sky-200">
        {aiOffer.differentiator}
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/ai"
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-deep hover:bg-brand-soft"
        >
          Explore AI services
        </Link>
        <Link
          href={aiHref(source)}
          className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
        >
          {AI_CONSULT_LABEL}
        </Link>
      </div>
    </aside>
  );
}
