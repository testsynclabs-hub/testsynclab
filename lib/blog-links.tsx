import Link from "next/link";
import type { ReactNode } from "react";

/** Money / commercial paths we linkify inside blog body copy. */
const BLOG_PATH_LINKS: { path: string; label: string }[] = [
  { path: "/contact", label: "contact" },
  { path: "/pricing", label: "pricing" },
  { path: "/best-qa-company", label: "best QA company" },
  { path: "/hire-qa-testers", label: "hire QA testers" },
  { path: "/qa-retainer-vs-hiring", label: "QA retainer vs hiring" },
  { path: "/qa-agency", label: "QA agency" },
  { path: "/qa-agency-lahore", label: "QA agency Lahore" },
  { path: "/software-testing-company", label: "software testing company" },
  { path: "/software-testing-services", label: "software testing services" },
  { path: "/software-quality-assurance", label: "software quality assurance" },
  { path: "/software-qa-services", label: "software QA services" },
  { path: "/quality-assurance-services", label: "quality assurance services" },
  { path: "/sqa-services", label: "SQA services" },
  { path: "/qa-qc-services", label: "QA QC services" },
  { path: "/quality-control-testing", label: "quality control testing" },
  { path: "/qa-services-usa", label: "QA for US teams" },
  { path: "/qa-services-canada", label: "QA for Canadian teams" },
  { path: "/qa-services-uk", label: "QA for UK teams" },
  { path: "/qa-services-london", label: "QA for London" },
  { path: "/qa-services-new-york", label: "QA for New York" },
  { path: "/qa-services-toronto", label: "QA for Toronto" },
  { path: "/outsourced-qa", label: "outsourced QA" },
  { path: "/remote-qa-services", label: "remote QA services" },
  { path: "/qa-outsourcing", label: "QA outsourcing" },
  { path: "/saas-testing-services", label: "SaaS testing services" },
  { path: "/ecommerce-testing-services", label: "ecommerce testing services" },
  { path: "/functional-testing-services", label: "functional testing services" },
  { path: "/end-to-end-testing", label: "end-to-end testing" },
  { path: "/smoke-testing-services", label: "smoke testing services" },
  { path: "/uat-testing-services", label: "UAT testing services" },
  { path: "/api-testing-services", label: "API testing services" },
  { path: "/regression-testing-services", label: "regression testing services" },
  { path: "/automation-testing-services", label: "automation testing services" },
  { path: "/continuous-testing-services", label: "continuous testing services" },
  { path: "/performance-testing-services", label: "performance testing services" },
  { path: "/load-testing-services", label: "load testing services" },
  { path: "/playwright-testing-company", label: "Playwright testing company" },
  { path: "/cypress-testing-services", label: "Cypress testing services" },
  { path: "/selenium-testing-services", label: "Selenium testing services" },
  { path: "/mobile-app-testing", label: "mobile app testing" },
  { path: "/ai-qa-testing", label: "AI QA testing" },
  { path: "/services/playwright-automation", label: "Playwright automation" },
  { path: "/services/api-testing", label: "API testing" },
  { path: "/services/manual-testing", label: "manual testing" },
  { path: "/services/performance-testing", label: "performance testing" },
  { path: "/services", label: "QA services" },
  { path: "/ai", label: "AI testing" },
  { path: "/become-a-tester", label: "Become a Tester" },
  { path: "/manual-testing-services", label: "manual testing services" },
  { path: "/web-application-testing", label: "web application testing" },
  { path: "/website-testing-services", label: "website testing services" },
  { path: "/exploratory-testing-services", label: "exploratory testing services" },
  { path: "/integration-testing-services", label: "integration testing services" },
  { path: "/cross-browser-testing", label: "cross browser testing" },
  { path: "/qa-as-a-service", label: "QA as a service" },
  { path: "/dedicated-qa-team", label: "dedicated QA team" },
  { path: "/offshore-qa-testing", label: "offshore QA testing" },
  { path: "/agile-testing-services", label: "agile testing services" },
  { path: "/fintech-testing-services", label: "fintech testing services" },
  { path: "/test-automation-company", label: "test automation company" },
  { path: "/independent-software-testing", label: "independent software testing" },
  { path: "/compatibility-testing-services", label: "compatibility testing services" },
  { path: "/usability-testing-services", label: "usability testing services" },
  { path: "/chatbot-testing-services", label: "chatbot testing services" },
  { path: "/ios-app-testing", label: "iOS app testing" },
  { path: "/android-app-testing", label: "Android app testing" },
  { path: "/accessibility-testing-services", label: "accessibility testing services" },
  { path: "/qa-services-austin", label: "QA for Austin" },
  { path: "/qa-services-seattle", label: "QA for Seattle" },
  { path: "/qa-services-chicago", label: "QA for Chicago" },
  { path: "/qa-services-los-angeles", label: "QA for Los Angeles" },
  { path: "/qa-services-boston", label: "QA for Boston" },
  { path: "/qa-services-dallas", label: "QA for Dallas" },
  { path: "/qa-services-denver", label: "QA for Denver" },
  { path: "/qa-services-miami", label: "QA for Miami" },
  { path: "/qa-services-vancouver", label: "QA for Vancouver" },
  { path: "/qa-services-sydney", label: "QA for Sydney" },
  { path: "/qa-services-melbourne", label: "QA for Melbourne" },
  { path: "/qa-services-manchester", label: "QA for Manchester" },
  { path: "/qa-services-berlin", label: "QA for Berlin" },
  { path: "/qa-services-amsterdam", label: "QA for Amsterdam" },
  { path: "/faq", label: "FAQ" },
];

/** Longer paths first so /services/api-testing wins over /services. */
const SORTED_PATHS = [...BLOG_PATH_LINKS].sort(
  (a, b) => b.path.length - a.path.length,
);

/**
 * Turn bare `/contact`-style paths in blog paragraphs into internal Links.
 */
export function linkifyBlogParagraph(text: string): ReactNode[] {
  const pattern = new RegExp(
    `(${SORTED_PATHS.map((item) => item.path.replace(/\//g, "\\/")).join("|")})`,
    "g",
  );
  const parts = text.split(pattern);
  return parts.map((part, index) => {
    const match = SORTED_PATHS.find((item) => item.path === part);
    if (match) {
      return (
        <Link
          key={`${match.path}-${index}`}
          href={match.path}
          className="font-semibold text-brand hover:text-brand-deep"
        >
          {match.path}
        </Link>
      );
    }
    return <span key={`t-${index}`}>{part}</span>;
  });
}

export const blogRelatedServiceLinks = [
  { href: "/best-qa-company", label: "Best QA company" },
  { href: "/saas-testing-services", label: "SaaS testing services" },
  { href: "/software-quality-assurance", label: "Software quality assurance" },
  { href: "/ai-qa-testing", label: "AI QA testing" },
  { href: "/hire-qa-testers", label: "Hire QA testers" },
  { href: "/qa-retainer-vs-hiring", label: "Retainer vs hiring" },
  { href: "/qa-agency", label: "QA agency" },
  { href: "/qa-services-usa", label: "QA for US teams" },
  { href: "/outsourced-qa", label: "Outsourced QA" },
  { href: "/automation-testing-services", label: "Automation testing" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "All QA services" },
  { href: "/ai", label: "AI testing" },
] as const;
