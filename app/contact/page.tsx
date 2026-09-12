import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE_EMAIL, SITE_LINKEDIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free QA Audit",
  description:
    "Request a free software QA audit from TestSync Lab. Manual, API, and automation retainers from $999/mo for product teams worldwide.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    plan?: string;
    source?: string;
    sent?: string;
    error?: string;
  }>;
}) {
  const params = await searchParams;
  const plan = params.plan || "audit";
  const source = params.source || "contact-page";
  const sent = params.sent === "1";
  const error = params.error === "1";
  const deliveryError = params.error === "delivery";

  return (
    <main className="flex-1 pb-24 md:pb-0">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Response within 24 hours
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            Book your free QA audit
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Share your website, product context, and release goals. We&apos;ll
            map risks and recommend the right monthly package — this is the same
            form every blog post sends you to.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              Prefer direct contact?
            </h2>
            <p className="mt-4 text-muted">
              Email{" "}
              <a
                href={`mailto:${SITE_EMAIL}?subject=Free%20QA%20Audit`}
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
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li>• Free audit — no retainer required to start the conversation</li>
              <li>• Packages from $999 / $1,899 / $2,799 per month</li>
              <li>• Serving startups and product teams worldwide</li>
            </ul>
          </div>
          <ContactForm
            plan={plan}
            source={source}
            sent={sent}
            error={error}
            deliveryError={deliveryError}
          />
        </div>
      </section>
    </main>
  );
}
