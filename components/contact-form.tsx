"use client";

import { useState, type FormEvent } from "react";
import { FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { SITE_EMAIL, SITE_URL } from "@/lib/site";

type ContactFormProps = {
  plan?: string;
  source?: string;
  sent?: boolean;
  error?: boolean;
  deliveryError?: boolean;
};

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendViaFormSubmit(formData: FormData) {
  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const company = asString(formData.get("company"));
  const website = asString(formData.get("website"));
  const message = asString(formData.get("message"));
  const plan = asString(formData.get("plan")) || "audit";
  const source = asString(formData.get("source"));

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: `New lead (${plan}): ${name}${company ? ` @ ${company}` : ""}`,
        _template: "table",
        _captcha: "false",
        company: company || "—",
        website: website || "—",
        plan,
        source: source || "direct",
        message,
      }),
    },
  );

  const body = (await response.json().catch(() => null)) as {
    success?: boolean | string;
    message?: string;
  } | null;

  return (
    response.ok &&
    (body?.success === true ||
      body?.success === "true" ||
      Boolean(body?.message?.toLowerCase().includes("success")))
  );
}

export function ContactForm({
  plan = "audit",
  source = "",
  sent = false,
  error = false,
  deliveryError = false,
}: ContactFormProps) {
  const [pending, setPending] = useState(false);
  const [clientError, setClientError] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setClientError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (asString(formData.get("company_website"))) {
      window.location.href = `/contact?sent=1&plan=${encodeURIComponent(plan)}`;
      return;
    }

    try {
      const delivered = await sendViaFormSubmit(formData);
      if (delivered) {
        const ok = new URLSearchParams({ sent: "1", plan });
        if (source) ok.set("source", source);
        window.location.href = `/contact?${ok.toString()}`;
        return;
      }
    } catch {
      // Native FormSubmit POST still reaches info@ if ajax is blocked.
    }

    form.submit();
  }

  return (
    <form
      action={`https://formsubmit.co/${SITE_EMAIL}`}
      method="POST"
      onSubmit={onSubmit}
      className="relative rounded-2xl border border-line bg-white p-6 shadow-xl shadow-brand/10 sm:p-8"
    >
      <input type="hidden" name="plan" value={plan} />
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="_subject" value={`New website lead (${plan})`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value={`${SITE_URL}/contact?sent=1&plan=${encodeURIComponent(plan)}`}
      />
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
        <label htmlFor="_honey">Leave blank</label>
        <input id="_honey" name="_honey" type="text" tabIndex={-1} />
      </div>

      {sent ? (
        <p
          className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
          role="status"
        >
          Thank you — your free QA audit request was sent to {SITE_EMAIL}.
          We&apos;ll reply shortly.
        </p>
      ) : null}
      {error ? (
        <p
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          Please complete name, a valid email, and message before submitting.
        </p>
      ) : null}
      {deliveryError || clientError ? (
        <p
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          Email delivery is not configured yet. Check {SITE_EMAIL} (including
          spam) for a one-time FormSubmit confirmation, or email us directly.
        </p>
      ) : null}

      {plan !== "general" ? (
        <p className="mb-5 rounded-xl border border-brand/20 bg-brand-soft/50 px-4 py-3 text-sm font-medium text-brand-deep">
          Selected plan:{" "}
          <span className="font-bold capitalize">
            {plan === "audit" ? "Free QA Audit" : plan}
          </span>
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
              className="w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
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
              className="w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
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
              className="w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
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
              className="w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
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
            className="w-full resize-y rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep hover:shadow-2xl hover:shadow-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending to info@…" : `Request ${FREE_QA_AUDIT_LABEL}`}
        </button>
        <p className="text-center text-xs text-muted">
          Submits to {SITE_EMAIL}. No commitment. Response within 24 hours on
          business days.
        </p>
      </div>
    </form>
  );
}
