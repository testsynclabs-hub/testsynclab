import Link from "next/link";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import {
  navLinks,
  SITE_EMAIL,
  SITE_LINKEDIN,
  SITE_NAME,
  futureRoadmap,
} from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-line bg-slate-950 text-slate-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Company information
      </h2>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-2">
          <p className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
            {SITE_NAME}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {SITE_NAME} is a software quality assurance partner for product
            teams worldwide. Two QA founders plus in-house AI expertise.
            Affordable monthly retainers — and practical AI testing for
            chatbots and LLM products.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Later: {futureRoadmap.map((item) => item.title).join(" · ")}
          </p>
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
            Explore
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services/manual-testing"
                className="transition-colors hover:text-blue-300"
              >
                Manual testing
              </Link>
            </li>
            <li>
              <Link
                href="/services/api-testing"
                className="transition-colors hover:text-blue-300"
              >
                API testing
              </Link>
            </li>
            <li>
              <Link
                href="/services/playwright-automation"
                className="transition-colors hover:text-blue-300"
              >
                Playwright automation
              </Link>
            </li>
            <li>
              <Link
                href="/services/performance-testing"
                className="transition-colors hover:text-blue-300"
              >
                Performance testing
              </Link>
            </li>
            <li>
              <Link
                href="/qa-services-usa"
                className="transition-colors hover:text-blue-300"
              >
                QA for US teams
              </Link>
            </li>
            <li>
              <Link
                href="/qa-services-canada"
                className="transition-colors hover:text-blue-300"
              >
                QA for Canadian teams
              </Link>
            </li>
            <li>
              <Link
                href="/outsourced-qa"
                className="transition-colors hover:text-blue-300"
              >
                Outsourced QA
              </Link>
            </li>
            <li>
              <Link
                href={auditHref("footer-nav")}
                className="transition-colors hover:text-blue-300"
              >
                {FREE_QA_AUDIT_LABEL}
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              Contact
            </h3>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-3 inline-block text-base font-medium text-white transition-colors hover:text-blue-300"
            >
              {SITE_EMAIL}
            </a>
            <Link
              href={auditHref("footer-contact")}
              className="mt-4 inline-flex rounded-lg bg-brand px-3.5 py-2 text-sm font-bold text-white hover:bg-brand-bright"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              Follow Us
            </h3>
            <a
              href={SITE_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {SITE_NAME}. All rights reserved. Serving US, Canadian, and
            worldwide product teams.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li>
                <Link href="/privacy" className="hover:text-blue-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
