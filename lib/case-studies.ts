export type PortfolioLane = "manual" | "api" | "mobile";

export const portfolioLaneFilters = [
  { id: "all", label: "All work" },
  { id: "manual", label: "Manual" },
  { id: "api", label: "API" },
  { id: "mobile", label: "Mobile" },
] as const;

export type PortfolioLaneFilter = (typeof portfolioLaneFilters)[number]["id"];

export type CaseStudy = {
  id: string;
  industry: string;
  title: string;
  summary: string;
  problem: string;
  work: string;
  outcome: string;
  lanes: PortfolioLane[];
  services: { href: string; label: string }[];
  deliverables: string[];
};

/** Anonymized delivery snapshots — real patterns, no invented logos. */
export const caseStudies: CaseStudy[] = [
  {
    id: "saas-checkout",
    industry: "B2B SaaS",
    title: "Checkout & billing before a pricing launch",
    summary:
      "Pre-release coverage for checkout, seats, and failed payments before a pricing go-live.",
    problem:
      "Founders were still click-testing checkout the night before go-live. Same payment edge cases kept returning.",
    work: "Mapped critical journeys, ran exploratory + regression on billing, seats, and failed-payment paths.",
    outcome:
      "14 high-severity issues caught pre-release — including a seat-upgrade path that silently under-charged.",
    lanes: ["manual"],
    services: [
      { href: "/saas-testing-services", label: "SaaS testing" },
      { href: "/services/manual-testing", label: "Manual testing" },
      { href: "/exploratory-testing-services", label: "Exploratory testing" },
      { href: "/regression-testing-services", label: "Regression testing" },
    ],
    deliverables: [
      "Critical-journey map for checkout, seats, and failed payments",
      "Exploratory notes plus a regression pass on billing",
      "Pre-release defects with steps, severity, and evidence",
    ],
  },
  {
    id: "mobile-onboarding",
    industry: "Consumer mobile",
    title: "Onboarding funnel before a store release",
    summary:
      "Shared iOS and Android coverage for install, signup, and the first session before a store release.",
    problem:
      "Install → signup → first value was leaking users. No shared test notes across iOS and Android.",
    work: "Device-matrix smoke plus deep exploratory on auth, permissions, and first-session journeys.",
    outcome:
      "Blocked a release with a login-loop on Android 14 and shipped a tighter go/no-go checklist.",
    lanes: ["mobile", "manual"],
    services: [
      { href: "/mobile-app-testing", label: "Mobile app testing" },
      { href: "/ios-app-testing", label: "iOS app testing" },
      { href: "/android-app-testing", label: "Android app testing" },
      { href: "/smoke-testing-services", label: "Smoke testing" },
    ],
    deliverables: [
      "Shared test notes across iOS and Android",
      "Device-matrix smoke on auth, permissions, and first session",
      "Go/no-go checklist for the store release",
    ],
  },
  {
    id: "api-regression",
    industry: "Fintech-adjacent SaaS",
    title: "API regressions during a weekly ship cadence",
    summary:
      "Contract checks on auth, webhooks, and error shapes, wired into a weekly release gate.",
    problem:
      "UI looked fine while contract breaks in partner webhooks reached production twice in a month.",
    work: "API/contract checks on auth, webhooks, and error shapes — wired into the release gate.",
    outcome:
      "Zero webhook-class escapes in the next four releases; eng got reproducible payloads, not screenshots.",
    lanes: ["api"],
    services: [
      { href: "/services/api-testing", label: "API testing" },
      { href: "/api-testing-services", label: "API testing services" },
      { href: "/continuous-testing-services", label: "Continuous testing" },
      { href: "/fintech-testing-services", label: "Fintech testing" },
    ],
    deliverables: [
      "Contract checks on auth, webhooks, and error shapes",
      "Release-gate checks before each weekly ship",
      "Reproducible payloads for engineering, not screenshot-only bugs",
    ],
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((item) => item.id === id);
}

export const auditSampleSections = [
  {
    title: "Risk map",
    detail:
      "Top product journeys ranked by blast radius — checkout, auth, permissions, money paths.",
  },
  {
    title: "Coverage plan",
    detail:
      "What we would test this sprint vs next month: manual depth, API checks, automation candidates.",
  },
  {
    title: "Package fit",
    detail:
      "Clear Basic / Growth / Scale recommendation — same ~40h/week capacity, depth by package, and what’s out of scope.",
  },
] as const;
