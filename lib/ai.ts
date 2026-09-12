/** AI Testing is the client-facing AI lane. Build sprints stay optional/secondary. */

export const aiOffer = {
  eyebrow: "QA lane — live now",
  title: "AI testing for chatbots & LLM products",
  summary:
    "Senior QA for AI features US and Canadian product teams are already shipping: chatbots, copilots, RAG search, and AI workflows. We catch hallucinations, broken tools, weak retrieval, and release regressions — before your users do.",
  differentiator:
    "Most vendors demo prompts. We test AI like a release: happy path, failure path, jailbreaks, and a golden set you can re-run when the model changes.",
} as const;

export const aiLanes = [
  {
    slug: "chatbot-testing",
    title: "Chatbot & copilot QA",
    summary:
      "Conversation quality, guardrails, and tool actions — not just “does the widget open?”",
    points: [
      "Intent coverage across real user journeys",
      "Tone, refusal, and escalation checks",
      "Tool/function-calling failures and side effects",
    ],
  },
  {
    slug: "rag-testing",
    title: "RAG & knowledge QA",
    summary:
      "Grounded answers from your docs and tickets — with clear failure when retrieval is weak.",
    points: [
      "Citation / source faithfulness spot-checks",
      "Stale, missing, and conflicting document cases",
      "“I don’t know” behavior when context is thin",
    ],
  },
  {
    slug: "llm-evals",
    title: "LLM evals & prompt regression",
    summary:
      "Repeatable eval sets so a model or prompt swap does not silently break production.",
    points: [
      "Golden-set scoring before you change models",
      "Prompt and system-instruction regression",
      "Release gates you can plug into CI",
    ],
  },
  {
    slug: "ai-product-qa",
    title: "AI product & workflow QA",
    summary:
      "End-to-end quality for AI-built features: triage, summaries, classification, draft replies.",
    points: [
      "Human-in-the-loop paths and override behavior",
      "Structured output contract checks",
      "Privacy, PII leak, and abuse scenarios",
    ],
  },
] as const;

export const aiEngagementSteps = [
  {
    step: "01",
    title: "Map AI risk on your product",
    detail:
      "We list the AI surfaces (chat, search, agents), failure modes that hurt revenue or trust, and the thinnest useful test plan for the next release.",
  },
  {
    step: "02",
    title: "Build a golden set you own",
    detail:
      "Real prompts, expected behaviors, and severity. This becomes the regression memory every time you swap a model or tweak a prompt.",
  },
  {
    step: "03",
    title: "Run release gates with QA retainers",
    detail:
      "Findings go to Slack/Jira like the rest of your QA. Add AI coverage to Basic/Growth/Scale — or run a focused AI testing sprint before a launch.",
  },
] as const;

export const aiPackages = [
  {
    id: "ai-test-sprint",
    name: "AI Testing Sprint",
    priceLabel: "Scoped",
    priceNote: "fixed quote",
    description:
      "Time-boxed QA for one AI surface — chatbot, RAG, or workflow — with a written risk map and golden-set starter.",
    ctaLabel: "Scope AI testing",
    ctaHref: "/contact?plan=ai-test-sprint&source=ai-pricing",
    features: [
      "AI surface + risk discovery",
      "Golden-set starter (prompts + expected behavior)",
      "Happy path, failure path, jailbreak / abuse checks",
      "Written findings with severity and repro",
      "Fixed quote before we start",
    ],
  },
  {
    id: "ai-qa-retainer",
    name: "AI + QA retainer add-on",
    priceLabel: "Custom",
    priceNote: "monthly",
    description:
      "Ongoing AI regression beside your monthly QA package — so model and prompt changes do not surprise production.",
    ctaLabel: "Add AI to QA",
    ctaHref: "/contact?plan=ai-qa-retainer&source=ai-pricing",
    features: [
      "Fits beside Basic / Growth / Scale",
      "Prompt & retrieval regression each cycle",
      "Chatbot / RAG release smoke",
      "Shared Slack and weekly status",
      "Scoped month to month",
    ],
  },
] as const;

/** Optional secondary lane — not the hero offer */
export const aiBuildNote = {
  title: "Need the feature built too?",
  detail:
    "We can scope a small AI feature sprint when you need build + test together. Most inbound buyers start with AI testing on what they already shipped.",
  href: "/contact?plan=ai-sprint&source=ai-build-note",
  label: "Ask about build + test",
} as const;
