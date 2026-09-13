import Link from "next/link";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { SITE_EMAIL, SITE_LINKEDIN, SITE_NAME } from "@/lib/site";

const serviceLinks = [
  { href: "/services", label: "All services" },
  { href: "/services/manual-testing", label: "Manual testing" },
  { href: "/services/api-testing", label: "API testing" },
  { href: "/services/playwright-automation", label: "Playwright automation" },
  { href: "/services/performance-testing", label: "Performance testing" },
  { href: "/ai", label: "AI testing" },
] as const;

const companyLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/become-a-tester", label: "Become a tester" },
] as const;

const marketLinks = [
  { href: "/qa-services-usa", label: "QA for US teams" },
  { href: "/qa-services-canada", label: "QA for Canadian teams" },
  { href: "/outsourced-qa", label: "Outsourced QA" },
] as const;

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

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div className="md:col-span-2 lg:col-span-1">
          <p className="font-[family-name:var(--font-display)] text-lg font-bold text-white">
            {SITE_NAME}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Remote QA retainers for SaaS teams — manual, API, Playwright, and AI
            testing from $999/mo.
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-4 inline-block text-sm font-medium text-white transition-colors hover:text-blue-300"
          >
            {SITE_EMAIL}
          </a>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href={auditHref("footer-contact")}
              className="inline-flex rounded-lg bg-brand px-3.5 py-2 text-sm font-bold text-white hover:bg-brand-bright"
            >
              {FREE_QA_AUDIT_LABEL}
            </Link>
            <a
              href={SITE_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition-colors hover:border-blue-400/40 hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <nav aria-label="Services">
          <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
            Services
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
            Company
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Markets">
          <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
            Markets
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {marketLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-sm">
          <p>
            © {year} {SITE_NAME}. Remote QA for product teams worldwide.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              <li>
                <Link href="/privacy" className="hover:text-blue-300">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-300">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-blue-300">
                  Cookies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
