import type { Metadata } from "next";
import Link from "next/link";
import { CareersForm } from "@/components/careers-form";
import { CAREERS_PATH, hiringProcessSteps } from "@/lib/careers";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const maxDuration = 30;

export const metadata: Metadata = {
  title: "Become a Tester | Apply to TestSync Lab",
  description:
    `Apply to join ${SITE_NAME} as a QA tester. Short form + CV. Process: Apply → Initial call → Final interview → Selected or rejected.`,
  alternates: { canonical: CAREERS_PATH },
  openGraph: {
    title: `Become a Tester | ${SITE_NAME}`,
    description:
      "Apply with a short form and CV. Clear hiring steps from apply to selected or rejected.",
    url: CAREERS_PATH,
  },
};

export default function BecomeATesterPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
            Careers
          </p>
          <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            Become a tester with {SITE_NAME}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Short application. Clear process. We hire QA talent for client
            retainers when capacity opens — and we tell you yes or no.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Looking for QA for your product?{" "}
            <Link href="/contact" className="font-semibold text-brand hover:text-brand-deep">
              Book a free audit
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
            Hiring process
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hiringProcessSteps.map((step, index) => (
              <div key={step.title}>
                <p className="text-sm font-bold text-brand">0{index + 1}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900 sm:text-3xl">
              What we need from you
            </h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
              <li>• Real CV (PDF or Word)</li>
              <li>• Honest years of QA experience</li>
              <li>• City / timezone for overlap</li>
              <li>• Phone or WhatsApp for the initial call</li>
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
