import { submitContact } from "@/lib/actions/contact";

type ContactFormProps = {
  plan?: string;
  sent?: boolean;
  error?: boolean;
};

export function ContactForm({
  plan = "general",
  sent = false,
  error = false,
}: ContactFormProps) {
  return (
    <form
      action={submitContact}
      className="relative rounded-2xl border border-line bg-white p-6 shadow-xl shadow-brand/10 sm:p-8"
    >
      <input type="hidden" name="plan" value={plan} />
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

      {sent ? (
        <p
          className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
          role="status"
        >
          Thank you — your message was received. We&apos;ll reply at
          info@testsynclab.com shortly.
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

      {plan !== "general" ? (
        <p className="mb-5 rounded-xl border border-brand/20 bg-brand-soft/50 px-4 py-3 text-sm font-medium text-brand-deep">
          Selected plan: <span className="font-bold capitalize">{plan}</span>
        </p>
      ) : null}

      <div className="space-y-5">
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
            Email
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
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-semibold text-slate-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your product, stack, and release timeline..."
            className="w-full resize-y rounded-xl border border-line bg-slate-50/80 px-4 py-3 text-slate-900 shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/20"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-deep hover:shadow-2xl hover:shadow-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}
