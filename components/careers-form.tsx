"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { trackLeadSubmit } from "@/lib/analytics";
import { submitCareer } from "@/lib/actions/careers";
import type { CareerState } from "@/lib/career-state";
import {
  careerInterests,
  careerSkillOptions,
  CV_ACCEPT,
  CV_MAX_BYTES,
  formatMb,
  isAllowedCvFile,
} from "@/lib/careers";
import { sendCareerFromBrowser } from "@/lib/send-career-client";
import { SITE_EMAIL } from "@/lib/site";

const initialState: CareerState = { status: "idle" };

const fieldClass =
  "w-full rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20";

function asText(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function SuccessPanel() {
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
        Application received
      </h2>
      <p className="mt-3 max-w-md text-base leading-relaxed text-emerald-900/80">
        Thanks — we received your details and CV. Next step if there is a fit:{" "}
        <span className="font-semibold">initial call</span>, then final
        interview, then selected or rejected. Replies go to your email on
        business days ({SITE_EMAIL}).
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
        >
          See our QA services
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-brand/30"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

type CareersFormProps = {
  source?: string;
};

export function CareersForm({ source = "become-a-tester" }: CareersFormProps) {
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileLabel, setFileLabel] = useState("No file chosen");

  const [state, formAction, pending] = useActionState<CareerState, FormData>(
    async (_prev, formData) => {
      if (asText(formData.get("company_website"))) {
        return { status: "success" };
      }

      const cvEntry = formData.get("cv");
      const cv = cvEntry instanceof File && cvEntry.size > 0 ? cvEntry : null;
      if (!cv) {
        setFileError("Please attach your CV (PDF or Word, up to 10 MB).");
        return {
          status: "validation",
          message: "Please attach your CV (PDF or Word, up to 10 MB).",
        };
      }
      if (!isAllowedCvFile(cv) || cv.size > CV_MAX_BYTES) {
        setFileError("CV must be PDF or Word (.doc/.docx) and under 10 MB.");
        return {
          status: "validation",
          message: "CV must be PDF or Word (.doc/.docx) and under 10 MB.",
        };
      }
      setFileError(null);

      const skills = formData
        .getAll("skills")
        .map(asText)
        .filter(Boolean)
        .join(", ");

      const fields = {
        name: asText(formData.get("name")),
        email: asText(formData.get("email")),
        phone: asText(formData.get("phone")),
        location: asText(formData.get("location")),
        experience: asText(formData.get("experience")),
        skills,
        linkedin: asText(formData.get("linkedin")),
        interest: asText(formData.get("interest")) || "join-team",
        note: asText(formData.get("note")) || "—",
        source: asText(formData.get("source")) || source,
      };

      if (!fields.name || !fields.email || !fields.location) {
        return {
          status: "validation",
          message: "Please fill name, email, and city / timezone.",
        };
      }

      try {
        if (await sendCareerFromBrowser(fields, cv)) {
          trackLeadSubmit({ plan: "careers", source: fields.source });
          return { status: "success" };
        }
      } catch {
        // Fall through to server providers.
      }

      const serverData = new FormData();
      for (const [key, value] of Object.entries(fields)) {
        serverData.set(key, value);
      }
      serverData.set("cv", cv, cv.name);

      const result = await submitCareer(_prev, serverData);
      if (result.status === "success") {
        trackLeadSubmit({ plan: "careers", source: fields.source });
      }
      return result;
    },
    initialState,
  );

  if (state.status === "success") {
    return <SuccessPanel />;
  }

  return (
    <form
      action={formAction}
      encType="multipart/form-data"
      noValidate
      className="relative rounded-2xl border border-line bg-white p-6 shadow-xl shadow-brand/10 sm:p-8"
    >
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

      {state.status === "validation" || fileError ? (
        <p
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          {fileError ||
            state.message ||
            "Please complete the required fields and attach a PDF or Word CV."}
        </p>
      ) : null}
      {state.status === "delivery" ? (
        <p
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
          role="alert"
        >
          We could not send that just now. Email your CV to{" "}
          <a className="font-semibold underline" href={`mailto:${SITE_EMAIL}`}>
            {SITE_EMAIL}
          </a>{" "}
          with subject “Become a tester”.
        </p>
      ) : null}

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Full name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Phone / WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+92 …"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="location" className="mb-1.5 block text-sm font-semibold text-slate-700">
              City / timezone *
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Lahore · PKT"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="experience" className="mb-1.5 block text-sm font-semibold text-slate-700">
              QA experience *
            </label>
            <select
              id="experience"
              name="experience"
              required
              className={fieldClass}
              defaultValue="1-2"
            >
              <option value="0-1">0–1 years</option>
              <option value="1-2">1–2 years</option>
              <option value="2-4">2–4 years</option>
              <option value="4-6">4–6 years</option>
              <option value="6+">6+ years</option>
            </select>
          </div>
          <div>
            <label htmlFor="interest" className="mb-1.5 block text-sm font-semibold text-slate-700">
              Applying for *
            </label>
            <select
              id="interest"
              name="interest"
              required
              className={fieldClass}
              defaultValue="join-team"
            >
              {careerInterests.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-slate-700">
            Strengths (pick what fits)
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {careerSkillOptions.map((skill) => (
              <label
                key={skill}
                className="flex items-center gap-2 rounded-xl border border-line bg-slate-50/70 px-3 py-2.5 text-sm text-slate-700"
              >
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  className="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand"
                />
                {skill}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="linkedin" className="mb-1.5 block text-sm font-semibold text-slate-700">
            LinkedIn or portfolio{" "}
            <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="linkedin"
            name="linkedin"
            type="text"
            inputMode="url"
            placeholder="linkedin.com/in/… or portfolio link"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="note" className="mb-1.5 block text-sm font-semibold text-slate-700">
            Short note{" "}
            <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <textarea
            id="note"
            name="note"
            rows={3}
            placeholder="Tools, products tested, notice period…"
            className={`${fieldClass} resize-y`}
          />
        </div>

        <div>
          <label htmlFor="cv" className="mb-1.5 block text-sm font-semibold text-slate-700">
            CV / resume * (PDF or Word)
          </label>
          <input
            id="cv"
            name="cv"
            type="file"
            required
            accept={CV_ACCEPT}
            className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-brand file:px-4 file:py-2.5 file:text-sm file:font-bold file:text-white hover:file:bg-brand-deep"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (!file) {
                setFileLabel("No file chosen");
                setFileError(null);
                return;
              }
              if (!isAllowedCvFile(file) || file.size > CV_MAX_BYTES) {
                setFileError(
                  file.size === 0
                    ? "That file looks empty. Choose a real PDF or Word CV."
                    : "CV must be PDF or Word (.doc/.docx) and under 10 MB.",
                );
                event.target.value = "";
                setFileLabel("No file chosen");
                return;
              }
              setFileError(null);
              setFileLabel(`${file.name} (${formatMb(file.size)})`);
            }}
          />
          <p className="mt-2 text-xs text-slate-500">
            {fileLabel}. Max {formatMb(CV_MAX_BYTES)}. PDF, DOC, or DOCX only.
          </p>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep hover:shadow-2xl hover:shadow-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Submitting…" : "Submit application"}
        </button>
        <p className="text-center text-xs text-slate-500">
          Process: Apply → Initial call → Final interview → Selected or rejected.
        </p>
      </div>
    </form>
  );
}
