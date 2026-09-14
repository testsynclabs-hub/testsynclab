export const coverageStats = [
  {
    value: "24h",
    label: "Audit response",
    detail: "Practical risk map on business days — not a sales deck.",
  },
  {
    value: "4",
    label: "Core QA lanes",
    detail: "Manual, API, automation, and performance under one retainer.",
  },
  {
    value: "~40h",
    label: "Every week",
    detail: "Same weekly capacity on Basic, Growth, and Scale — price buys depth.",
  },
  {
    value: "Global",
    label: "Remote delivery",
    detail: "Timezone-friendly pods for product teams worldwide.",
  },
] as const;

export const engagementSteps = [
  {
    step: "01",
    title: "Discover & audit",
    detail:
      "We map product risk, release gates, and the thinnest useful test plan for your next sprint.",
  },
  {
    step: "02",
    title: "Embed into your cadence",
    detail:
      "Daily/weekly cycles plug into Slack, Jira, and CI — same channels your engineers already live in.",
  },
  {
    step: "03",
    title: "Execute & report",
    detail:
      "Structured findings, reproducible steps, severity, and evidence — ready for triage the same day.",
  },
  {
    step: "04",
    title: "Improve every release",
    detail:
      "Regression memory, automation growth, and tighter gates so quality compounds month over month.",
  },
] as const;

export const capabilityAreas = [
  {
    id: "functional",
    title: "Functional & exploratory",
    summary:
      "Core flows, edge cases, and business-logic defects caught before customers do.",
    points: [
      "Smoke, regression, and release charters",
      "Exploratory sessions on new features",
      "Clear bugs with repro steps and severity",
    ],
  },
  {
    id: "api",
    title: "API & integrations",
    summary:
      "Contract and integration checks so backends stay trustworthy under rapid change.",
    points: [
      "REST / GraphQL validation",
      "Auth, permissions, and error contracts",
      "Postman suites ready for CI",
    ],
  },
  {
    id: "automation",
    title: "Automation & CI gates",
    summary:
      "Playwright and Selenium suites that protect high-value paths without flaky noise.",
    points: [
      "Stable critical-path coverage",
      "CI wiring and flake reduction",
      "Maintainable suites you can own",
    ],
  },
  {
    id: "performance",
    title: "Performance spot-checks",
    summary:
      "Load and stress signals that prove your release can handle real traffic spikes.",
    points: [
      "JMeter-based load profiles",
      "p95 / error-rate release gates",
      "Bottleneck notes for engineering",
    ],
  },
  {
    id: "release",
    title: "Release readiness",
    summary:
      "Go / no-go clarity for launches — checklists, risk callouts, and handoff notes.",
    points: [
      "Pre-launch QA checklists",
      "Cross-browser and device smoke",
      "Handoff packs for stakeholders",
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility basics",
    summary:
      "Practical a11y checks that catch keyboard, contrast, and labeling issues early.",
    points: [
      "Keyboard and focus traversal",
      "Label / contrast spot checks",
      "Actionable fixes, not audit theater",
    ],
  },
] as const;

export const workflowTools = [
  { name: "Jira", mark: "Ji" },
  { name: "GitHub", mark: "Gh" },
  { name: "GitLab", mark: "Gl" },
  { name: "Slack", mark: "Sl" },
  { name: "Linear", mark: "Ln" },
  { name: "Azure DevOps", mark: "Az" },
  { name: "Playwright", mark: "Pw" },
  { name: "Postman", mark: "Pm" },
] as const;

export const industries = [
  {
    title: "SaaS & B2B products",
    detail: "Multi-role flows, permissions, billing edges, and release trains.",
  },
  {
    title: "Marketplaces & fintech-lite",
    detail: "Checkout, payouts, KYC-adjacent flows, and partner integrations.",
  },
  {
    title: "Mobile & web apps",
    detail: "Cross-device smoke, regression depth, and store-release confidence.",
  },
  {
    title: "Startups scaling QA",
    detail: "Senior coverage now — without a six-week hiring cycle.",
  },
] as const;

export const outcomePillars = [
  {
    title: "Ship without second-guessing",
    detail:
      "Release gates and evidence packs replace “hope it works” Friday deploys.",
  },
  {
    title: "Scale coverage, not headcount",
    detail:
      "Monthly retainers flex with your roadmap — grow or pause without recruiting drama.",
  },
  {
    title: "Stay in the loop",
    detail:
      "Transparent cycles, written findings, and timezone overlap so you always know status.",
  },
  {
    title: "Protect what users feel",
    detail:
      "We prioritize journeys that drive revenue and retention — not vanity checklist volume.",
  },
] as const;

export const auditSteps = [
  {
    step: "1",
    title: "Share context",
    detail: "Product, stack, release date, and current quality risks.",
  },
  {
    step: "2",
    title: "Get risk map",
    detail: "We return a practical audit: gaps, priorities, and package fit.",
  },
  {
    step: "3",
    title: "Start testing",
    detail: "Begin with Basic, Growth, or Scale — cancel-friendly monthly.",
  },
] as const;
