export type PackageId = "basic" | "growth" | "scale" | "enterprise";

export type PackagePlan = {
  id: PackageId;
  name: string;
  priceLabel: string;
  priceNote: string;
  description: string;
  capacity: string;
  notIncluded: string;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
};

/** Shared across Basic / Growth / Scale — price buys depth, not a thinner clock. */
export const WEEKLY_QA_CAPACITY =
  "~40 QA hours / week · US business calendar" as const;

export const packages: PackagePlan[] = [
  {
    id: "basic",
    name: "Basic",
    priceLabel: "$999",
    priceNote: "per month",
    description:
      "Hands-on manual QA with full weekly capacity — reliable coverage without building an in-house test function yet.",
    capacity: WEEKLY_QA_CAPACITY,
    notIncluded: "Heavy automation builds, load campaigns, or multi-app pods",
    ctaLabel: "Start with Basic",
    ctaHref: "/contact?plan=basic&source=pricing-card",
    features: [
      "~40 QA hours every week (same capacity as higher plans)",
      "Manual exploratory & regression testing",
      "Clear bug reports and test notes",
      "Weekly status summary",
      "US weekends & holidays observed",
      "Email / Slack support window",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    priceLabel: "$1,899",
    priceNote: "per month",
    description:
      "Same ~40 hours a week — plus API checks and automation so releases move faster with fewer surprises.",
    capacity: WEEKLY_QA_CAPACITY,
    notIncluded: "Dedicated full-time pod or multi-brand portfolios",
    featured: true,
    ctaLabel: "Choose Growth",
    ctaHref: "/contact?plan=growth&source=pricing-card",
    features: [
      "~40 QA hours every week (same capacity as Basic & Scale)",
      "Everything in Basic",
      "API / contract validation",
      "Playwright or Selenium automation start",
      "Regression suites ready for CI",
      "Priority bug triage support",
      "Optional AI testing add-on (scoped separately)",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    priceLabel: "$2,799",
    priceNote: "per month",
    description:
      "Same weekly capacity, deeper stack — gates, reporting, performance spot checks, and a named lead cadence.",
    capacity: WEEKLY_QA_CAPACITY,
    notIncluded: "24/7 follow-the-sun staffing (available as Enterprise)",
    ctaLabel: "Choose Scale",
    ctaHref: "/contact?plan=scale&source=pricing-card",
    features: [
      "~40 QA hours every week (same capacity as Basic & Growth)",
      "Everything in Growth",
      "Performance spot checks (JMeter)",
      "Release-gate checklist & sign-off support",
      "Named lead cadence",
      "Priority turnaround on critical paths",
      "Optional AI testing add-on (scoped separately)",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceLabel: "Custom",
    priceNote: "let’s discuss",
    description:
      "Need more than one pod, multi-product coverage, SLAs, or compliance-minded delivery? We’ll scope it with you.",
    capacity: "Dedicated pods · custom SLA · US business calendar",
    notIncluded: "Scoped only after discovery — no surprise line items",
    ctaLabel: "Talk to us",
    ctaHref: "/contact?plan=enterprise&source=pricing-card",
    features: [
      "Multi-app / multi-squad capacity",
      "Custom SLAs and reporting",
      "Dedicated QA pod options",
      "US weekends & holidays observed by default",
      "Compliance-minded workflows",
      "Strategic quality roadmap",
      "AI testing pods available on request",
    ],
  },
];

export const pricingComparePoints = [
  {
    title: "Same ~40 hours every week",
    detail:
      "Package price is not linked to hour caps. You choose depth of service; weekly capacity stays ~40 hours across Basic, Growth, and Scale.",
  },
  {
    title: "US business calendar",
    detail:
      "We observe US weekends and US holidays so your planning stays predictable — not a surprise offline day on a different regional calendar.",
  },
  {
    title: "vs hiring full-time QA",
    detail:
      "A mid-level US hire often lands $90k–$130k+ fully loaded before tools and ramp. A retainer starts coverage this month.",
  },
] as const;
