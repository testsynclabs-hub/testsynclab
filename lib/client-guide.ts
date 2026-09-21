export const qaPlainSpeak = [
  {
    term: "QA",
    meaning: "We try to break the product and write clear bugs before your users do.",
  },
  {
    term: "QC",
    meaning: "A last check before you ship — does this release look safe to go live?",
  },
  {
    term: "SQA",
    meaning: "The habit around testing: what we check every week, what blocks a release.",
  },
  {
    term: "Alpha / beta",
    meaning: "Alpha is internal. Beta is real (or near-real) users. We can cover both.",
  },
  {
    term: "Positive / negative",
    meaning:
      "Happy path (it works as promised) and bad path (wrong password, expired session, empty form).",
  },
  {
    term: "UAT",
    meaning: "Does it match what you promised the business — not just what the ticket said.",
  },
] as const;

export const productNeedOptions = [
  { id: "not-sure", label: "Not sure — I will describe it" },
  { id: "ecommerce", label: "Shopify / Magento / custom store" },
  { id: "saas", label: "Web / SaaS app" },
  { id: "mobile", label: "Mobile app" },
  { id: "desktop", label: "Desktop application" },
  { id: "game", label: "Game" },
  { id: "api", label: "API / backend" },
  { id: "automation", label: "Automation (Cypress, Playwright, Selenium)" },
  { id: "ai", label: "AI chatbot / LLM feature" },
] as const;

export const toolOptions = [
  { id: "not-sure", label: "Not sure / manual only" },
  { id: "playwright", label: "Playwright" },
  { id: "cypress", label: "Cypress" },
  { id: "selenium", label: "Selenium" },
  { id: "postman", label: "Postman" },
  { id: "jmeter", label: "JMeter" },
  { id: "shopify", label: "Shopify" },
  { id: "magento", label: "Magento" },
] as const;

export type ClientNeed = {
  id: string;
  title: string;
  plain: string;
  fit: string;
  plan: string;
  cta: string;
};

export const clientNeeds: ClientNeed[] = [
  {
    id: "ecommerce",
    title: "Shopify / Magento / store",
    plain:
      "Shoppers can add to cart, check out, pay, use a discount, refund, and you can run admin — on Shopify, Magento, or a custom store.",
    fit: "A shopper-style test cycle on Basic ($999). Growth if you also want Cypress / Playwright on checkout.",
    plan: "basic",
    cta: "Talk to an expert",
  },
  {
    id: "saas",
    title: "Web / SaaS app",
    plain: "People can sign in, use the right role, pay you, and finish the journey that makes revenue.",
    fit: "Manual coverage on Basic ($999). Growth when APIs and weekly automation start.",
    plan: "basic",
    cta: "Talk to an expert",
  },
  {
    id: "mobile",
    title: "Mobile app",
    plain: "iOS / Android install, onboarding, and the taps that matter before a store release.",
    fit: "A device smoke + regression cycle on Basic ($999). Name the devices in the form.",
    plan: "basic",
    cta: "Talk to an expert",
  },
  {
    id: "desktop",
    title: "Desktop application",
    plain: "Windows or Mac install, update, and the core workflows your users live in.",
    fit: "A scoped plan after the free audit — not a forced Basic card.",
    plan: "audit",
    cta: "Talk to an expert",
  },
  {
    id: "game",
    title: "Game",
    plain: "A build that launches, a play-through that progresses, and crashes caught on the devices you ship.",
    fit: "A short scope after the free audit. Games are not a $999 guess.",
    plan: "audit",
    cta: "Talk to an expert",
  },
  {
    id: "api",
    title: "API / backend",
    plain: "Auth, contracts, webhooks, and error shapes stay true when the UI is not the product.",
    fit: "API checks on Growth ($1,899), with notes your engineers can action.",
    plan: "growth",
    cta: "Talk to an expert",
  },
  {
    id: "automation",
    title: "Cypress, Playwright, or Selenium",
    plain: "A suite on the tool you already picked — new coverage or less flake, not a rewrite speech.",
    fit: "Automation start on Growth ($1,899). We work in Cypress, Playwright, or Selenium.",
    plan: "growth",
    cta: "Talk to an expert",
  },
  {
    id: "not-sure",
    title: "Not sure — I will describe it",
    plain: "You tell us the product in your words. No QA vocabulary required.",
    fit: "A free QA audit that maps the need to a package. No retainer to start.",
    plan: "audit",
    cta: "Talk to an expert",
  },
];

const PLAN_PICK: Record<string, string> = {
  basic: "Basic — $999/mo",
  growth: "Growth — $1,899/mo",
  scale: "Scale — $2,799/mo",
  audit: "Talk to an expert",
  enterprise: "Talk to an expert",
  ai: "Talk about AI testing",
};

const aiNeed: ClientNeed = {
  id: "ai",
  title: "AI chatbot / LLM feature",
  plain: "The bot answers from your data, does not leak, and fails loudly when it is wrong.",
  fit: "A scoped AI testing sprint — not buried inside Basic.",
  plan: "ai",
  cta: "Talk to an expert",
};

export function explainNeed(id: string): ClientNeed {
  return (
    clientNeeds.find((item) => item.id === id) ||
    (id === "ai" ? aiNeed : clientNeeds.find((item) => item.id === "not-sure")!)
  );
}

const NEED_IDS = new Set(productNeedOptions.map((item) => item.id));
const TOOL_IDS = new Set(toolOptions.map((item) => item.id));

export function sanitizeNeed(value: string) {
  const id = value.trim().toLowerCase();
  return NEED_IDS.has(id as (typeof productNeedOptions)[number]["id"])
    ? id
    : "not-sure";
}

export function sanitizeTool(value: string) {
  const id = value.trim().toLowerCase();
  return TOOL_IDS.has(id as (typeof toolOptions)[number]["id"])
    ? id
    : "not-sure";
}

export function needContactHref(need: ClientNeed, source: string) {
  const params = new URLSearchParams({
    plan: need.plan,
    need: need.id,
    source,
  });
  return `/contact?${params.toString()}`;
}

export const packageNeedMap = clientNeeds
  .filter((item) => item.id !== "not-sure")
  .map((item) => ({
    id: item.id,
    youWant: item.title,
    youGet: item.fit,
    pick: PLAN_PICK[item.plan] || "Talk to an expert",
    href: needContactHref(item, "pricing-map"),
  }));
