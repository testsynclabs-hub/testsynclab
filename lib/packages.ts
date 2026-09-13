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

export const packages: PackagePlan[] = [
  {
    id: "basic",
    name: "Basic",
    priceLabel: "$999",
    priceNote: "per month",
    description:
      "Hands-on manual QA for teams that need reliable coverage without building an in-house test function yet.",
    capacity: "~40 focused QA hours / month · 1–2 release cycles",
    notIncluded: "Heavy automation builds, load campaigns, or multi-app pods",
    ctaLabel: "Start with Basic",
    ctaHref: "/contact?plan=basic&source=pricing-card",
    features: [
      "~40 QA hours reserved each month",
      "Manual exploratory & regression testing",
      "Clear bug reports and test notes",
      "Weekly status summary",
      "Email / Slack support window",
      "Ideal for early product teams",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    priceLabel: "$1,899",
    priceNote: "per month",
    description:
      "Scale quality with API checks and automation so releases move faster with fewer surprises.",
    capacity: "~80 QA hours / month · weekly release support",
    notIncluded: "Dedicated full-time pod or multi-brand portfolios",
    featured: true,
    ctaLabel: "Choose Growth",
    ctaHref: "/contact?plan=growth&source=pricing-card",
    features: [
      "~80 QA hours reserved each month",
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
      "Full-stack QA for faster release trains — gates, reporting, performance spot checks, and a named lead cadence.",
    capacity: "~120 QA hours / month · named lead cadence",
    notIncluded: "24/7 follow-the-sun staffing (available as Enterprise)",
    ctaLabel: "Choose Scale",
    ctaHref: "/contact?plan=scale&source=pricing-card",
    features: [
      "~120 QA hours reserved each month",
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
    capacity: "Dedicated capacity · custom SLA",
    notIncluded: "Scoped only after discovery — no surprise line items",
    ctaLabel: "Talk to us",
    ctaHref: "/contact?plan=enterprise&source=pricing-card",
    features: [
      "Multi-app / multi-squad capacity",
      "Custom SLAs and reporting",
      "Dedicated QA pod options",
      "Compliance-minded workflows",
      "Strategic quality roadmap",
      "AI testing pods available on request",
    ],
  },
];

export const pricingComparePoints = [
  {
    title: "vs hiring full-time QA",
    detail:
      "A mid-level US hire often lands $90k–$130k+ fully loaded before tools and ramp. A retainer starts coverage this month.",
  },
  {
    title: "Month-to-month flexibility",
    detail:
      "Pause or resize when the roadmap shifts. No annual trap while you validate product-market fit.",
  },
  {
    title: "Senior hands, not a ticket farm",
    detail:
      "Founding partners stay close to execution — strategy and bug quality don’t get lost in a bench.",
  },
] as const;
