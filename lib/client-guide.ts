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
    meaning: "Happy path (pay with a valid card) and bad path (expired card, empty cart).",
  },
  {
    term: "UAT",
    meaning: "Does it match what you promised the business — not just what the ticket said.",
  },
] as const;

export const productNeedOptions = [
  { id: "not-sure", label: "Not sure — I will describe it" },
  { id: "ecommerce", label: "Ecommerce (Magento, Shopify, custom store)" },
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
  { id: "magento", label: "Magento" },
  { id: "shopify", label: "Shopify" },
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
    title: "Ecommerce — Magento, Shopify, custom",
    plain: "Cart, checkout, pay, refunds, coupons, admin. We click it like a shopper.",
    fit: "Usually Basic ($999). Growth if you also want Cypress / Playwright scripts.",
    plan: "basic",
    cta: "Talk to an expert",
  },
  {
    id: "saas",
    title: "Web / SaaS app",
    plain: "Logins, roles, billing, the journeys that make revenue.",
    fit: "Basic for manual. Growth when APIs and automation start.",
    plan: "basic",
    cta: "Talk to an expert",
  },
  {
    id: "mobile",
    title: "Mobile app",
    plain: "iOS / Android smoke, onboarding, store-release checks.",
    fit: "Usually Basic. Tell us the devices in the form.",
    plan: "basic",
    cta: "Talk to an expert",
  },
  {
    id: "desktop",
    title: "Desktop application",
    plain: "Windows or Mac installers, updates, core workflows.",
    fit: "Talk to us first — we scope the build after a free audit.",
    plan: "audit",
    cta: "Talk to an expert",
  },
  {
    id: "game",
    title: "Game",
    plain: "Builds, devices, play-throughs, crash and progression bugs.",
    fit: "Talk to us first — games need a short scope, not a guess.",
    plan: "audit",
    cta: "Talk to an expert",
  },
  {
    id: "api",
    title: "API / backend",
    plain: "Contracts, auth, webhooks, error shapes.",
    fit: "Usually Growth ($1,899).",
    plan: "growth",
    cta: "Talk to an expert",
  },
  {
    id: "automation",
    title: "Cypress, Playwright, or Selenium",
    plain: "You already picked a tool. We build or stabilize suites on it.",
    fit: "Usually Growth ($1,899).",
    plan: "growth",
    cta: "Talk to an expert",
  },
  {
    id: "not-sure",
    title: "Not sure — I will describe it",
    plain: "Tell us the product in your words. We map it to a test plan.",
    fit: "Free QA audit first — no retainer required.",
    plan: "audit",
    cta: "Talk to an expert",
  },
];

export const packageNeedMap = [
  {
    ifYouHave: "Magento / Shopify / store bugs",
    pick: "Basic — $999/mo",
    href: "/contact?plan=basic&need=ecommerce&source=pricing-map",
  },
  {
    ifYouHave: "Cypress, Playwright, or Selenium work",
    pick: "Growth — $1,899/mo",
    href: "/contact?plan=growth&need=automation&source=pricing-map",
  },
  {
    ifYouHave: "APIs + weekly releases",
    pick: "Growth — $1,899/mo",
    href: "/contact?plan=growth&need=api&source=pricing-map",
  },
  {
    ifYouHave: "Game, desktop, or several products",
    pick: "Talk to an expert",
    href: "/contact?plan=audit&need=desktop&source=pricing-map",
  },
] as const;

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
