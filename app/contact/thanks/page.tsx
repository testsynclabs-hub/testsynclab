import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAdsLeadConversion } from "@/components/google-ads";
import { ThanksLeadTracker } from "@/components/thanks-lead-tracker";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Audit request received",
  description: "We received your TestSync Lab QA audit request.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/contact/thanks" },
};

type ThanksSearch = {
  plan?: string;
  source?: string;
};

export default async function ContactThanksPage({
  searchParams,
}: {
  searchParams: Promise<ThanksSearch>;
}) {
  const params = await searchParams;
  const plan = params.plan || "audit";
  const source = params.source || "direct";

  return (
    <main className="flex-1">
      <GoogleAdsLeadConversion value={999} />
      <ThanksLeadTracker plan={plan} source={source} />
      <section className="flex flex-1 items-center justify-center px-5 py-20 sm:px-8">
        <div
          className="flex max-w-lg flex-col items-center rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-8 text-center shadow-xl shadow-emerald-900/5 sm:p-10"
          role="status"
          aria-live="polite"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white shadow-lg shadow-emerald-500/30">
            ✓
          </span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-emerald-950">
            Audit request received
          </h1>
          <p className="mt-3 text-base leading-relaxed text-emerald-900/80">
            Thank you — a TestSync Lab partner will reply within 24 hours on
            business days at{" "}
            <span className="font-semibold">{SITE_EMAIL}</span>.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            Review packages
          </Link>
        </div>
      </section>
    </main>
  );
}
