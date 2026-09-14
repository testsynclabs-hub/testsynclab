import type { Metadata } from "next";
import { AuditSamplePreview } from "@/components/case-studies";
import { BookingCta } from "@/components/booking-cta";
import { ContactForm } from "@/components/contact-form";
import {
  AI_CONSULT_LABEL,
  isAiInquiry,
  planDisplayName,
} from "@/lib/cta";
import { SITE_EMAIL, SITE_LINKEDIN } from "@/lib/site";

export const maxDuration = 30;

type ContactSearch = {
  plan?: string;
  source?: string;
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<ContactSearch>;
}): Promise<Metadata> {
  const params = await searchParams;
  const plan = params.plan || "audit";

  if (isAiInquiry(plan)) {
    return {
      title: "Talk about AI testing",
      description:
        "Scope chatbot, RAG, or LLM product QA with TestSync Lab — golden sets, jailbreak checks, and release gates.",
      alternates: { canonical: "/contact" },
    };
  }

  return {
    title: "Book a Free QA Audit",
    description:
      "Request a free software QA audit from TestSync Lab. Manual, API, and automation retainers from $999/mo for product teams worldwide.",
    alternates: { canonical: "/contact" },
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<ContactSearch>;
}) {
  const params = await searchParams;
  const plan = params.plan || "audit";
  const source = params.source || "contact-page";
  const aiMode = isAiInquiry(plan);

  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Response within 24 hours
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            {aiMode
              ? "Talk about AI testing"
              : "Book your free QA audit"}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            {aiMode
              ? "Share the AI surface (chatbot, RAG, agent), the stack, and the next release date. We will recommend an AI testing sprint or an AI add-on to your QA retainer — or tell you it is not a fit yet."
              : "Share your website, product context, and release goals. We'll map risks and recommend the right monthly package — this is the same form every blog post sends you to."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookingCta
              source="contact-hero"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-deep"
              label="Book a 20-min audit call"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              Prefer a call or email?
            </h2>
            <p className="mt-4 text-muted">
              Email{" "}
              <a
                href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent(
                  aiMode ? AI_CONSULT_LABEL : "Free QA Audit",
                )}`}
                className="font-semibold text-brand hover:text-brand-deep"
              >
                {SITE_EMAIL}
              </a>
            </p>
            <p className="mt-3 text-muted">
              LinkedIn:{" "}
              <a
                href={SITE_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-deep"
              >
                TestSync Lab
              </a>
            </p>
            <div className="mt-6">
              <BookingCta source="contact-sidebar" />
              <p className="mt-2 text-xs text-muted">
                Calendar link uses your booking URL when set — otherwise this
                page&apos;s form.
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-muted">
              {aiMode ? (
                <>
                  <li>
                    • Selected: {planDisplayName(plan)} — no commitment to start
                    the conversation
                  </li>
                  <li>• Scoped quote after a short discovery, not hourly drift</li>
                  <li>• Golden sets + release gates for chatbots and LLM features</li>
                </>
              ) : (
                <>
                  <li>
                    • Free audit — no retainer required to start the conversation
                  </li>
                  <li>• Packages from $999 / $1,899 / $2,799 per month</li>
                  <li>• Serving startups and product teams worldwide</li>
                </>
              )}
            </ul>
          </div>
          <ContactForm plan={plan} source={source} />
        </div>
      </section>

      {!aiMode ? <AuditSamplePreview source="contact-audit-sample" /> : null}
    </main>
  );
}
