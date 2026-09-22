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
  { path: "/qa-services-usa", label: "QA for US teams" },
  { path: "/qa-services-canada", label: "QA for Canadian teams" },
  { path: "/outsourced-qa", label: "outsourced QA" },
  { path: "/services/playwright-automation", label: "Playwright automation" },
  { path: "/services/api-testing", label: "API testing" },
  { path: "/services/manual-testing", label: "manual testing" },
  { path: "/services", label: "QA services" },
  { path: "/ai", label: "AI testing" },
  { path: "/become-a-tester", label: "Become a Tester" },
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
  { href: "/hire-qa-testers", label: "Hire QA testers" },
  { href: "/qa-retainer-vs-hiring", label: "Retainer vs hiring" },
  { href: "/qa-agency", label: "QA agency" },
  { href: "/qa-services-usa", label: "QA for US teams" },
  { href: "/outsourced-qa", label: "Outsourced QA" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "All QA services" },
  { href: "/ai", label: "AI testing" },
] as const;
