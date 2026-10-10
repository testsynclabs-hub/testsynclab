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
      "Playwright, Cypress, or Selenium suites that protect high-value paths without flaky noise.",
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
  { name: "Cypress", mark: "Cy" },
  { name: "Postman", mark: "Pm" },
] as const;

/** QA tools we actually run — not a staffing logo wall. */
export const qaToolStack = [
  {
    name: "Playwright",
    group: "Automation",
    summary:
      "Critical-path UI automation that stays stable in CI — traces, retries, and less flake theater.",
    deliver:
      "Smoke + regression suites on money paths, wired to your pipeline with engineer-ready failures.",
  },
  {
    name: "Cypress",
    group: "Automation",
    summary:
      "If your repo already runs Cypress, we deepen coverage there — we do not force a rewrite speech.",
    deliver:
      "New specs on durable journeys, flake triage, and a suite your team can own after handoff.",
  },
  {
    name: "Selenium",
    group: "Automation",
    summary:
      "Legacy or multi-browser suites that still need senior ownership — stabilize before you expand.",
    deliver:
      "Flake reduction, grid hygiene, and selective growth on paths that actually repay the cost.",
  },
  {
    name: "Postman",
    group: "API",
    summary:
      "Contract and integration checks when the UI is fine but the backend is lying.",
    deliver:
      "Auth, webhooks, error shapes, and collections ready for CI — payloads, not screenshots.",
  },
  {
    name: "JMeter",
    group: "Performance",
    summary:
      "Spot-check load before a launch spike — p95 and error rates inside a release gate.",
    deliver:
      "Focused scenarios on hot endpoints, not a six-week performance science project.",
  },
  {
    name: "Shopify",
    group: "Ecommerce",
    summary:
      "Theme + checkout + admin flows that break revenue when they fail on a Friday.",
    deliver:
      "Cart, discounts, payments, refunds, and merchant admin — shopper-style bug reports.",
  },
  {
    name: "Magento",
    group: "Ecommerce",
    summary:
      "Heavier catalog, pricing, and checkout edges that need more than a click-script.",
    deliver:
      "Storefront + admin regression with severity on money and inventory paths.",
  },
  {
    name: "Jira",
    group: "Workflow",
    summary:
      "Bugs land where engineers already work — severity, steps, evidence, ready to reopen.",
    deliver:
      "Tickets your eng lead can action without a clarifying call the next morning.",
  },
] as const;

export const productDomains = [
  {
    name: "SaaS & B2B",
    summary:
      "Multi-tenant products where roles, billing, and invites are the blast radius.",
    deliver:
      "Auth, permissions, seats, billing, and the journeys that define your revenue.",
  },
  {
    name: "Ecommerce",
    summary:
      "Stores that cannot afford silent checkout or refund failures.",
    deliver:
      "Browse → cart → pay → fulfill → refund coverage on Shopify, Magento, or custom.",
  },
  {
    name: "Mobile & web",
    summary:
      "Cross-device releases where install, onboarding, and parity bugs hide until store day.",
    deliver:
      "Device smoke, exploratory depth, and regression notes for iOS, Android, and web.",
  },
  {
    name: "Desktop apps",
    summary:
      "Installers, updates, and workflows that live outside the browser.",
    deliver:
      "Scoped Windows/Mac cycles after a free audit — not a forced $999 guess.",
  },
  {
    name: "Games",
    summary:
      "Builds that must launch, progress, and survive the devices you ship.",
    deliver:
      "Play-through + crash focus scoped after discovery — games are not a template pack.",
  },
  {
    name: "AI products",
    summary:
      "Chatbots, RAG, and LLM features that need golden sets — not buried in Basic.",
    deliver:
      "Prompt regression, jailbreak checks, and failure modes that fail loudly.",
  },
] as const;

export const engagementModels = [
  {
    title: "Monthly retainer",
    detail:
      "Basic, Growth, or Scale — ~40 QA hours every week, month-to-month. The default for teams that ship weekly.",
    href: "/pricing",
    cta: "See packages",
  },
  {
    title: "AI testing sprint",
    detail:
      "Scoped QA for chatbots, RAG, and LLM features — golden set, jailbreak checks, then optional add-on.",
    href: "/ai",
    cta: "AI testing lane",
  },
  {
    title: "Enterprise pod",
    detail:
      "Multi-app coverage, custom SLAs, extra capacity. Scoped after the free audit — no surprise line items.",
    href: "/contact?plan=enterprise&source=home-engagement",
    cta: "Talk scope",
  },
] as const;

export const serviceTiles = [
  {
    title: "Exploratory testing",
    href: "/services/manual-testing",
    icon: "search",
  },
  {
    title: "Test automation",
    href: "/services/playwright-automation",
    icon: "automation",
  },
  {
    title: "API testing",
    href: "/services/api-testing",
    icon: "api",
  },
  {
    title: "Mobile & web",
    href: "/services/manual-testing",
    icon: "devices",
  },
  {
    title: "AI testing",
    href: "/ai",
    icon: "spark",
  },
  {
    title: "Performance / load",
    href: "/services/performance-testing",
    icon: "gauge",
  },
  {
    title: "Release / UAT",
    href: "/services",
    icon: "release",
  },
  {
    title: "Accessibility basics",
    href: "/services",
    icon: "a11y",
  },
] as const;

export const industries = [
  {
    title: "SaaS & B2B products",
    detail: "Multi-role flows, permissions, billing edges, and release trains.",
  },
  {
    title: "Ecommerce stores",
    detail:
      "Shopify, Magento, and custom checkout — cart, pay, refunds, coupons.",
  },
  {
    title: "Mobile, desktop, and games",
    detail:
      "Cross-device smoke, installers, play-throughs, and store-release checks.",
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
