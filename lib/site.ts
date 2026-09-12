export const SITE_URL = "https://testsynclab.com" as const;
export const SITE_NAME = "TestSync Lab" as const;
export const SITE_EMAIL = "info@testsynclab.com" as const;
export const SITE_LINKEDIN =
  "https://www.linkedin.com/company/testsync-lab/" as const;

export const SITE_TITLE =
  "TestSync Lab | Affordable Monthly QA Retainers from $999" as const;

export const SITE_DESCRIPTION =
  "Hire senior software QA without full-time overhead. Monthly retainers for manual testing, API validation, Playwright automation, and performance checks — serving product teams in the US, Canada, and worldwide." as const;

export const SITE_KEYWORDS = [
  "hire QA agency",
  "monthly QA retainer",
  "software testing services",
  "Playwright testing company",
  "API testing services",
  "outsourced QA for startups",
  "QA automation agency",
  "Free QA Audit",
  "QA Testing Blog",
  "Regression Testing",
  "Remote QA Partner",
  "TestSync Lab",
] as const;

/** Flat links for footer / sitemap-style lists */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavChild = {
  href: string;
  label: string;
  description?: string;
};

export type PrimaryNavItem =
  | { type: "link"; href: string; label: string }
  | { type: "menu"; id: string; label: string; href?: string; children: NavChild[] };

/** Testlio-style primary navigation with dropdowns */
export const primaryNav: PrimaryNavItem[] = [
  { type: "link", href: "/", label: "Home" },
  {
    type: "menu",
    id: "services",
    label: "Services",
    href: "/services",
    children: [
      {
        href: "/services",
        label: "All services",
        description: "Manual, API, automation, and performance under one retainer.",
      },
      {
        href: "/services#manual-testing",
        label: "Manual testing",
        description: "Exploratory and regression coverage before every release.",
      },
      {
        href: "/services#api-testing",
        label: "API testing",
        description: "Contract and integration checks that protect your backend.",
      },
      {
        href: "/services#automation",
        label: "Test automation",
        description: "Playwright / Selenium suites wired into CI.",
      },
      {
        href: "/services#performance",
        label: "Performance testing",
        description: "Load signals and release gates for traffic spikes.",
      },
    ],
  },
  { type: "link", href: "/pricing", label: "Pricing" },
  {
    type: "menu",
    id: "resources",
    label: "Resources",
    children: [
      {
        href: "/blog",
        label: "Blog",
        description: "Practical QA guides for product and engineering teams.",
      },
      {
        href: "/faq",
        label: "FAQ",
        description: "Retainers, timelines, and how engagements work.",
      },
    ],
  },
  {
    type: "menu",
    id: "company",
    label: "Company",
    children: [
      {
        href: "/about",
        label: "About us",
        description: "Two QA partners focused on affordable monthly quality.",
      },
      {
        href: "/contact",
        label: "Contact",
        description: "Book a free QA audit or ask about a retainer.",
      },
    ],
  },
] as const;

export const services = [
  {
    slug: "manual-testing",
    title: "Manual Testing",
    summary:
      "Exploratory and structured cycles that catch usability gaps, edge cases, and business-logic defects before release.",
    details:
      "We design pragmatic test charters, execute regression and smoke suites, and deliver clear bug reports your engineers can act on immediately.",
  },
  {
    slug: "api-testing",
    title: "API Testing",
    summary:
      "Contract, schema, and integration validation across REST and GraphQL so backends stay reliable under change.",
    details:
      "From Postman collections to automated contract checks, we harden the integrations your UI depends on.",
  },
  {
    slug: "automation",
    title: "Test Automation",
    summary:
      "Stable Playwright and Selenium suites wired into CI/CD so every commit is verified without slowing delivery.",
    details:
      "We prioritize high-value paths, reduce flaky tests, and leave you with maintainable automation — not a brittle script pile.",
  },
  {
    slug: "performance",
    title: "Performance Testing",
    summary:
      "Load, stress, and soak testing that surfaces bottlenecks early and proves your product scales with confidence.",
    details:
      "JMeter-based spot checks and performance budgets keep p95 latency and error rates inside release gates.",
  },
] as const;

export const futureRoadmap = [
  {
    title: "BPO Support",
    description:
      "CSR, sales assistance, and chat support pods for teams that need reliable customer operations.",
  },
  {
    title: "AI Development",
    description:
      "Practical AI features and automation for product teams that need more than testing alone.",
  },
  {
    title: "Custom Development",
    description:
      "On-demand engineering capacity when your roadmap needs an extra pair of hands.",
  },
] as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-icon-1024.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  email: SITE_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE_EMAIL,
    availableLanguage: ["English"],
  },
  areaServed: "Worldwide",
  knowsAbout: [...SITE_KEYWORDS],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Monthly QA Retainers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Basic",
        price: "999",
        priceCurrency: "USD",
        description: "Manual testing retainer",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "1899",
        priceCurrency: "USD",
        description: "Manual + API + automation retainer",
      },
      {
        "@type": "Offer",
        name: "QA Lead",
        price: "2799",
        priceCurrency: "USD",
        description: "Full-stack QA with dedicated lead cadence",
      },
    ],
  },
  sameAs: [SITE_LINKEDIN],
} as const;
