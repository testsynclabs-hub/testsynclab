"use client";

import { useActionState } from "react";
import Link from "next/link";
import { FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { submitContact } from "@/lib/actions/contact";
import type { ContactState } from "@/lib/contact-state";
import { SITE_EMAIL } from "@/lib/site";

const initialContactState: ContactState = { status: "idle" };

type ContactFormProps = {
  plan?: string;
  source?: string;
  sent?: boolean;
};

const inputClassName =
  "w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20";

function SuccessCard() {
  return (
    <div
      className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-8 text-center shadow-xl shadow-emerald-900/5 sm:p-10"
      role="status"
      aria-live="polite"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-3xl text-white shadow-lg shadow-emerald-500/30">
        ✓
      </span>
      <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-emerald-950">
        Form submitted
      </h2>
      <p className="mt-3 max-w-md text-base leading-relaxed text-emerald-900/80">
        Thank you — we received your request at{" "}
        <span className="font-semibold">{SITE_EMAIL}</span>. A TestSync Lab
        partner will reply within 24 hours on business days.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
      >
        Back to home
      </Link>
    </div>
  );
}

export function ContactForm({
  plan = "audit",
  source = "",
  sent = false,
}: ContactFormProps) {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    sent ? { status: "success" } : initialContactState,
  );

  if (state.status === "success") {
    return <SuccessCard />;
  }

  return (
    <form
      action={formAction}
      className="relative rounded-2xl border border-line bg-white p-6 shadow-xl shadow-brand/10 sm:p-8"
    >
      <input type="hidden" name="plan" value={plan} />
      <input type="hidden" name="source" value={source} />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "validation" ? (
        <p
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          Please complete name, a valid work email, and a short message before
          submitting.
        </p>
      ) : null}
      {state.status === "delivery" ? (
        <p
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          We could not send that just now. Email us directly at{" "}
          <a className="font-semibold underline" href={`mailto:${SITE_EMAIL}`}>
            {SITE_EMAIL}
          </a>{" "}
          and we&apos;ll pick it up.
        </p>
      ) : null}

      {plan !== "general" && plan !== "audit" ? (
        <p className="mb-5 rounded-xl border border-brand/20 bg-brand-soft/50 px-4 py-3 text-sm font-medium text-brand-deep">
          Selected plan: <span className="font-bold capitalize">{plan}</span>
        </p>
      ) : null}

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Alex Morgan"
              className={inputClassName}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="alex@company.com"
              className={inputClassName}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Acme Inc."
              className={inputClassName}
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="mb-1.5 block text-sm font-semibold text-slate-700"
            >
              Website or staging URL
            </label>
            <input
              id="website"
              name="website"
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="https://app.yourproduct.com"
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            What should we audit?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Product, stack, next release date, and the journeys that must not break..."
            className={`${inputClassName} resize-y`}
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep hover:shadow-2xl hover:shadow-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Submitting…" : `Request ${FREE_QA_AUDIT_LABEL}`}
        </button>
        <p className="text-center text-xs text-muted">
          Stays on this page. Goes to {SITE_EMAIL}. No commitment. Response
          within 24 hours on business days.
        </p>
      </div>
    </form>
  );
}
