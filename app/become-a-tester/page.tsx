import type { Metadata } from "next";
import Link from "next/link";
import { CareersForm } from "@/components/careers-form";
import { CAREERS_PATH } from "@/lib/careers";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const maxDuration = 30;

export const metadata: Metadata = {
  title: "Become a Tester | Apply or Get a CV Review",
  description:
    `Want to join ${SITE_NAME} as a QA tester, freelance with us, or get a CV review? Share a short profile and upload your PDF or Word resume (up to 10 MB).`,
  alternates: { canonical: CAREERS_PATH },
  openGraph: {
    title: `Become a Tester | ${SITE_NAME}`,
    description:
      "Apply to join our QA bench, freelance with us, or request a practical CV review. PDF or Word resume up to 10 MB.",
    url: CAREERS_PATH,
  },
};

const steps = [
  {
    title: "Tell us a little",
    detail: "Experience, strengths, timezone, and what you want next.",
  },
  {
    title: "Upload your CV",
    detail: "PDF or Word only — max 10 MB. No ZIP or images.",
  },
  {
    title: "We reply honestly",
    detail:
      "Hire / freelance fit, CV feedback, or a polite pass if timing is off.",
  },
] as const;

export default function BecomeATesterPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Careers &amp; talent
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            Become a tester with {SITE_NAME}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            We mainly deliver QA retainers to product teams — and we grow a
            trusted bench of testers when capacity opens. Apply to join, offer
            freelance help, or request a practical CV review.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Looking for QA services for your product instead?{" "}
            <Link href="/services" className="font-semibold text-brand hover:text-brand-deep">
              See services
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-brand hover:text-brand-deep">
              book a free QA audit
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-3 sm:px-8">
          {steps.map((step, index) => (
            <div key={step.title}>
              <p className="text-sm font-bold text-brand">0{index + 1}</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
              What happens after you apply
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Hiring:</span>{" "}
                when we need more capacity, strong profiles go on a shortlist.
                Roles are not always open — we will say so.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Freelance:</span>{" "}
                contract / surge coverage when a client engagement needs extra
                hands.
              </li>
              <li>
                <span className="font-semibold text-slate-900">CV review:</span>{" "}
                practical notes on clarity, impact, and how US SaaS teams read QA
                resumes.
              </li>
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              Prefer email? Send your CV to{" "}
              <a
                className="font-semibold text-brand hover:text-brand-deep"
                href={`mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Become a tester — CV")}`}
              >
                {SITE_EMAIL}
              </a>
              .
            </p>
          </div>

          <CareersForm source="become-a-tester-page" />
        </div>
      </section>
    </main>
  );
}
