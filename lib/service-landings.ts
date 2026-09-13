export type ServiceLanding = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  headline: string;
  summary: string;
  outcomes: { title: string; detail: string }[];
  includes: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceLandings: ServiceLanding[] = [
  {
    slug: "manual-testing",
    path: "/services/manual-testing",
    title: "Manual Testing Services",
    metaTitle: "Manual Testing Services for SaaS | Remote QA Retainers",
    metaDescription:
      "Hire remote manual testing services for US SaaS teams. Exploratory QA, regression, and release smoke from $999/mo — free QA audit.",
    keywords: [
      "manual testing services",
      "exploratory testing company",
      "regression testing services",
      "hire manual QA testers",
      "outsourced manual QA",
    ],
    eyebrow: "Core QA lane",
    headline: "Manual testing that protects real user journeys",
    summary:
      "Senior exploratory and structured manual QA for web and mobile SaaS — clear bugs, release smoke, and regression memory without waiting on a full-time hire.",
    outcomes: [
      {
        title: "Release confidence",
        detail: "Smoke and regression on the flows that make or lose revenue.",
      },
      {
        title: "Engineer-ready bugs",
        detail: "Repro steps, severity, environment, and evidence in your tracker.",
      },
      {
        title: "Predictable capacity",
        detail: "Monthly retainer scope — not hourly surprise invoices.",
      },
    ],
    includes: [
      "Exploratory sessions on new features",
      "Regression and smoke for releases",
      "Cross-browser / device spot checks",
      "Weekly status and critical escalations",
      "Optional handoff into automation later",
    ],
    faqs: [
      {
        question: "Is manual testing still worth buying?",
        answer:
          "Yes for new features, UX judgment, and messy edge cases. Automation protects what is already stable — manual QA finds what scripts miss.",
      },
      {
        question: "Can manual QA sit inside a monthly retainer?",
        answer:
          "Yes. Basic, Growth, and Scale all include manual coverage. Growth and Scale add API and automation depth beside it.",
      },
    ],
  },
  {
    slug: "api-testing",
    path: "/services/api-testing",
    title: "API Testing Services",
    metaTitle: "API Testing Services | REST & GraphQL QA Retainers",
    metaDescription:
      "Remote API testing services for SaaS: contract checks, auth, error handling, and CI-ready suites. Monthly QA from $999 — free audit.",
    keywords: [
      "API testing services",
      "REST API QA",
      "GraphQL testing company",
      "API automation testing",
      "outsourced API testing",
    ],
    eyebrow: "Backend quality",
    headline: "API testing that keeps integrations trustworthy",
    summary:
      "Contract, auth, and failure-path QA for REST and GraphQL so UI and partners do not inherit silent backend breaks.",
    outcomes: [
      {
        title: "Fewer production API breaks",
        detail: "Status codes, payloads, and auth rules checked before merge week.",
      },
      {
        title: "CI-ready collections",
        detail: "Suites you can run in pipelines — not one-off Postman clicks.",
      },
      {
        title: "Clear ownership",
        detail: "Findings map to endpoints and contracts engineers already know.",
      },
    ],
    includes: [
      "REST / GraphQL contract validation",
      "Auth, permissions, and error contracts",
      "Negative and edge payload cases",
      "Regression pack for critical APIs",
      "Growth+ retainer automation handoff",
    ],
    faqs: [
      {
        question: "Do you test APIs without a full UI suite?",
        answer:
          "Yes. Many teams start API QA before heavy UI automation because it catches cheaper defects faster.",
      },
      {
        question: "Which package includes API testing?",
        answer:
          "Growth and Scale include API validation. Basic is manual-first; we can still spot-check critical APIs when risk is high.",
      },
    ],
  },
  {
    slug: "playwright-automation",
    path: "/services/playwright-automation",
    title: "Playwright Automation Services",
    metaTitle: "Playwright Automation Services | CI QA for SaaS",
    metaDescription:
      "Playwright test automation services for startups: critical-path suites, flake control, and CI gates. Remote retainers from $999 — free QA audit.",
    keywords: [
      "Playwright automation services",
      "Playwright testing company",
      "hire Playwright QA",
      "test automation agency",
      "CI test automation services",
    ],
    eyebrow: "Automation lane",
    headline: "Playwright automation that stays green in CI",
    summary:
      "We build and maintain critical-path Playwright suites — stable selectors, sensible waits, and release gates your team can trust.",
    outcomes: [
      {
        title: "Faster regression",
        detail: "Nightly and PR checks on money paths without a giant brittle suite.",
      },
      {
        title: "Less flake drama",
        detail: "We prioritize maintainability over vanity coverage numbers.",
      },
      {
        title: "Human + machine",
        detail: "Automation beside senior manual QA — not scripts instead of thinking.",
      },
    ],
    includes: [
      "Critical-path Playwright coverage",
      "CI wiring and flake reduction",
      "Page objects / fixtures your team can own",
      "Release smoke automation",
      "Optional Selenium support when required",
    ],
    faqs: [
      {
        question: "Playwright or Selenium?",
        answer:
          "Playwright is our default for modern web apps. We support Selenium when you already have a suite worth stabilizing instead of rewriting.",
      },
      {
        question: "When should we automate?",
        answer:
          "After flows stabilize. We automate high-value, repetitive checks — not brand-new screens that change every sprint.",
      },
    ],
  },
  {
    slug: "performance-testing",
    path: "/services/performance-testing",
    title: "Performance Testing Services",
    metaTitle: "Performance Testing Services | Load & p95 QA",
    metaDescription:
      "Performance and load testing services for SaaS: spot checks, p95 budgets, and release gates. Remote QA retainers — free audit available.",
    keywords: [
      "performance testing services",
      "load testing company",
      "p95 latency testing",
      "stress testing services",
      "SaaS performance QA",
    ],
    eyebrow: "Scale lane",
    headline: "Performance testing before traffic becomes a fire drill",
    summary:
      "Practical load and stress spot checks that prove your release can handle real peaks — with clear bottlenecks for engineering.",
    outcomes: [
      {
        title: "Release gates that mean something",
        detail: "p95 and error-rate thresholds tied to go/no-go decisions.",
      },
      {
        title: "Actionable findings",
        detail: "Not vanity charts — notes engineers can use to fix hotspots.",
      },
      {
        title: "Right-sized effort",
        detail: "Spot checks on Scale retainers; deeper load programs scoped when needed.",
      },
    ],
    includes: [
      "Load profiles for critical APIs and journeys",
      "Stress and spike spot checks",
      "p95 / error-rate observations",
      "Bottleneck notes for engineering",
      "Optional deeper engagement after audit",
    ],
    faqs: [
      {
        question: "Is this full-time performance engineering?",
        answer:
          "Default retainers include pragmatic spot checks. Large capacity programs or chaos testing are scoped separately after discovery.",
      },
      {
        question: "Which package includes performance?",
        answer:
          "Scale includes performance spot checks. Growth focuses on functional, API, and automation first.",
      },
    ],
  },
];

export function getServiceLanding(slug: string) {
  return serviceLandings.find((item) => item.slug === slug);
}
