export type PackageId = "basic" | "growth" | "qa-lead" | "enterprise";

export type PackagePlan = {
  id: PackageId;
  name: string;
  priceLabel: string;
  priceNote: string;
  description: string;
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
    ctaLabel: "Start with Basic",
    ctaHref: "/contact?plan=basic&source=pricing-card",
    features: [
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
    featured: true,
    ctaLabel: "Choose Growth",
    ctaHref: "/contact?plan=growth&source=pricing-card",
    features: [
      "Everything in Basic",
      "API / contract validation",
      "Playwright or Selenium automation start",
      "Regression suites ready for CI",
      "Priority bug triage support",
    ],
  },
  {
    id: "qa-lead",
    name: "QA Lead",
    priceLabel: "$2,799",
    priceNote: "per month",
    description:
      "Full-stack QA with a named lead cadence — release gates, reporting, and performance spot checks included.",
    ctaLabel: "Get QA Lead",
    ctaHref: "/contact?plan=qa-lead&source=pricing-card",
    features: [
      "Everything in Growth",
      "Performance spot checks (JMeter)",
      "Release-gate checklist & sign-off support",
      "Named QA lead cadence",
      "Priority turnaround on critical paths",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceLabel: "Custom",
    priceNote: "let’s discuss",
    description:
      "Need more than one pod, multi-product coverage, SLAs, or compliance-minded delivery? We’ll scope it with you.",
    ctaLabel: "Talk to us",
    ctaHref: "/contact?plan=enterprise&source=pricing-card",
    features: [
      "Multi-app / multi-squad capacity",
      "Custom SLAs and reporting",
      "Dedicated QA pod options",
      "Compliance-minded workflows",
      "Strategic quality roadmap",
    ],
  },
];
