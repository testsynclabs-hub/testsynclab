import type { Metadata } from "next";
import Link from "next/link";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: `Opt out of ${SITE_NAME} outreach emails.`,
  alternates: { canonical: "/unsubscribe" },
  robots: { index: false, follow: false },
};

export default function UnsubscribePage() {
  const mailto = `mailto:${SITE_EMAIL}?subject=${encodeURIComponent("Unsubscribe / stop")}&body=${encodeURIComponent("Please remove me from TestSync Lab outreach emails.")}`;

  return (
    <main className="mx-auto max-w-xl flex-1 px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">
        Email preferences
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
        Unsubscribe from {SITE_NAME} emails
      </h1>
      <p className="mt-4 leading-relaxed text-muted">
        If you no longer wish to receive outreach from {SITE_NAME}, use one of
        the options below. We honor opt-outs promptly.
      </p>

      <div className="mt-8 space-y-4 rounded-2xl border border-line bg-white p-6 shadow-sm">
        <a
          href={mailto}
          className="flex w-full items-center justify-center rounded-xl bg-brand px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-deep"
        >
          Email us to unsubscribe
        </a>
        <p className="text-center text-sm text-muted">
          Or reply <strong>stop</strong> to any message from {SITE_EMAIL}.
        </p>
      </div>

      <ul className="mt-8 space-y-2 text-sm text-muted">
        <li>
          Privacy:{" "}
          <Link href="/privacy" className="font-semibold text-brand hover:text-brand-deep">
            {SITE_URL.replace("https://", "")}/privacy
          </Link>
        </li>
        <li>
          Terms:{" "}
          <Link href="/terms" className="font-semibold text-brand hover:text-brand-deep">
            {SITE_URL.replace("https://", "")}/terms
          </Link>
        </li>
      </ul>
    </main>
  );
}
