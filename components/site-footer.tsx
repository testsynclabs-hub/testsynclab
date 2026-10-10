import Link from "next/link";
import { FooterColumns } from "@/components/footer-link-group";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { SITE_EMAIL, SITE_LINKEDIN, SITE_NAME } from "@/lib/site";

/** Top 10 shown first; remainder behind “Show more”. */
const serviceLinks = [
  { href: "/services", label: "All services" },
  { href: "/saas-testing-services", label: "SaaS testing" },
  { href: "/manual-testing-services", label: "Manual testing services" },
  { href: "/automation-testing-services", label: "Automation testing" },
  { href: "/ai-qa-testing", label: "AI QA / AI SQA" },
  { href: "/qa-as-a-service", label: "QA as a service" },
  { href: "/api-testing-services", label: "API testing services" },
  { href: "/mobile-app-testing", label: "Mobile app testing" },
  { href: "/software-quality-assurance", label: "Software quality assurance" },
  { href: "/test-automation-company", label: "Test automation company" },
  // More
  { href: "/services/manual-testing", label: "Manual testing" },
  { href: "/services/api-testing", label: "API testing" },
  { href: "/services/playwright-automation", label: "Playwright automation" },
  { href: "/services/performance-testing", label: "Performance testing" },
  { href: "/ai", label: "AI testing" },
  { href: "/quality-assurance-services", label: "Quality assurance services" },
  { href: "/sqa-services", label: "SQA services" },
  { href: "/qa-qc-services", label: "QA QC services" },
  { href: "/regression-testing-services", label: "Regression testing" },
  { href: "/ecommerce-testing-services", label: "Ecommerce testing" },
  { href: "/functional-testing-services", label: "Functional testing" },
  { href: "/end-to-end-testing", label: "End-to-end testing" },
  { href: "/continuous-testing-services", label: "Continuous testing" },
  { href: "/web-application-testing", label: "Web application testing" },
  { href: "/fintech-testing-services", label: "Fintech testing" },
  { href: "/exploratory-testing-services", label: "Exploratory testing" },
  { href: "/cross-browser-testing", label: "Cross-browser testing" },
  { href: "/dedicated-qa-team", label: "Dedicated QA team" },
  { href: "/offshore-qa-testing", label: "Offshore QA" },
  { href: "/chatbot-testing-services", label: "Chatbot testing" },
  { href: "/ios-app-testing", label: "iOS app testing" },
  { href: "/android-app-testing", label: "Android app testing" },
] as const;

const companyLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/become-a-tester", label: "Become a tester" },
] as const;

/** Top 10 shown first; remainder behind “Show more”. */
const marketLinks = [
  { href: "/qa-services-usa", label: "QA for US teams" },
  { href: "/best-qa-company", label: "Best QA company" },
  { href: "/hire-qa-testers", label: "Hire QA testers" },
  { href: "/remote-qa-services", label: "Remote QA services" },
  { href: "/qa-services-uk", label: "QA for UK teams" },
  { href: "/qa-services-canada", label: "QA for Canadian teams" },
  { href: "/qa-services-australia", label: "QA for Australian teams" },
  { href: "/qa-services-europe", label: "QA for European teams" },
  { href: "/outsourced-qa", label: "Outsourced QA" },
  { href: "/qa-agency", label: "QA agency" },
  // More
  { href: "/qa-retainer-vs-hiring", label: "Retainer vs hiring" },
  { href: "/software-testing-company", label: "Testing company" },
  { href: "/software-testing-services", label: "Software testing services" },
  { href: "/qa-outsourcing", label: "QA outsourcing" },
  { href: "/playwright-testing-company", label: "Playwright testing company" },
  { href: "/qa-agency-lahore", label: "QA agency Lahore" },
  { href: "/qa-services-new-york", label: "QA for New York" },
  { href: "/qa-services-san-francisco", label: "QA for San Francisco" },
  { href: "/qa-services-toronto", label: "QA for Toronto" },
  { href: "/qa-services-london", label: "QA for London" },
  { href: "/qa-services-germany", label: "QA for German teams" },
  { href: "/qa-services-austin", label: "QA for Austin" },
  { href: "/qa-services-seattle", label: "QA for Seattle" },
  { href: "/qa-services-chicago", label: "QA for Chicago" },
  { href: "/qa-services-los-angeles", label: "QA for Los Angeles" },
  { href: "/qa-services-boston", label: "QA for Boston" },
  { href: "/qa-services-dallas", label: "QA for Dallas" },
  { href: "/qa-services-denver", label: "QA for Denver" },
  { href: "/qa-services-miami", label: "QA for Miami" },
  { href: "/qa-services-vancouver", label: "QA for Vancouver" },
  { href: "/qa-services-sydney", label: "QA for Sydney" },
  { href: "/qa-services-melbourne", label: "QA for Melbourne" },
  { href: "/qa-services-manchester", label: "QA for Manchester" },
  { href: "/qa-services-berlin", label: "QA for Berlin" },
  { href: "/qa-services-amsterdam", label: "QA for Amsterdam" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  const brand = (
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
  );

  const company = (
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
  );

  return (
    <footer
      className="border-t border-line bg-slate-950 text-slate-300"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Company information
      </h2>

      <FooterColumns
        brand={brand}
        company={company}
        serviceLinks={serviceLinks}
        marketLinks={marketLinks}
      />

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
