import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SITE_EMAIL, SITE_LINKEDIN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a free QA audit with TestSync Lab. Email info@testsynclab.com or send a message — we serve product teams worldwide.",
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

  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            Start your free QA audit
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Share your website, product context, and release goals. We&apos;ll
            respond with a practical quality plan — this is the same form every
            blog post sends you to.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
              How to reach us
            </h2>
            <p className="mt-4 text-muted">
              Email{" "}
              <a
                href={`mailto:${SITE_EMAIL}`}
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
            <p className="mt-6 text-sm leading-relaxed text-muted">
              We work with clients worldwide. Tell us your timezone and release
              cadence — we&apos;ll propose a retainer that fits.
            </p>
          </div>
          <ContactForm
            plan={plan}
            source={source}
            sent={sent}
            error={error}
          />
        </div>
      </section>
    </main>
  );
}
