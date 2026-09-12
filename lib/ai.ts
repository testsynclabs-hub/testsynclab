export const aiOffer = {
  eyebrow: "Live now — not a roadmap item",
  title: "Practical AI development",
  summary:
    "In-house AI engineering for product teams that need a useful feature, not a demo. Copilots, RAG, and workflow automation — shipped with the same QA bar as the rest of TestSync Lab.",
  differentiator:
    "Most AI shops ship a prompt. We ship a product slice you can test, regress, and release.",
} as const;

export const aiLanes = [
  {
    slug: "copilots",
    title: "Product copilots & chat",
    summary:
      "In-app assistants that answer from your product context — not a generic chatbot bolted onto a help page.",
    points: [
      "Scoped user journeys and guardrails",
      "Tool/function calling when the product needs actions, not only answers",
      "Tone, citations, and fallbacks that match your brand",
    ],
  },
  {
    slug: "rag",
    title: "RAG & knowledge search",
    summary:
      "Retrieval over docs, tickets, or internal knowledge so answers stay grounded in your data.",
    points: [
      "Chunking, indexing, and source freshness",
      "Cited answers with “I don’t know” when retrieval is weak",
      "Evaluation set so quality does not drift after launch",
    ],
  },
  {
    slug: "automation",
    title: "AI workflow automation",
    summary:
      "Practical LLM steps inside existing ops: triage, summaries, classification, and draft replies.",
    points: [
      "Human-in-the-loop where mistakes are expensive",
      "Structured outputs your systems can actually consume",
      "Logging so you can debug a bad answer next week",
    ],
  },
  {
    slug: "ai-quality",
    title: "AI quality & evals",
    summary:
      "The QA-native lane: hallucination checks, prompt regression, and release gates for model changes.",
    points: [
      "Golden-set evals before you swap a model",
      "Regression for prompts, tools, and retrieval",
      "Same reporting cadence as our QA retainers",
    ],
  },
] as const;

export const aiEngagementSteps = [
  {
    step: "01",
    title: "Scope the smallest useful feature",
    detail:
      "We pick one job-to-be-done, the data you already have, and what “done” looks like — not a 40-page AI strategy deck.",
  },
  {
    step: "02",
    title: "Build in a time-boxed sprint",
    detail:
      "Your AI engineer ships against a written spec. QA partners test the happy path, failure path, and obvious jailbreaks.",
  },
  {
    step: "03",
    title: "Release with a quality bar",
    detail:
      "You get the feature, the eval notes, and a maintainable handoff — so it does not rot the week after go-live.",
  },
] as const;

export const aiPackages = [
  {
    id: "ai-sprint",
    name: "AI Feature Sprint",
    priceLabel: "Scoped",
    priceNote: "fixed quote",
    description:
      "One practical AI feature — copilot, RAG, or workflow — with QA baked into the sprint, not added after launch.",
    ctaLabel: "Scope a sprint",
    ctaHref: "/contact?plan=ai-sprint&source=ai-pricing",
    features: [
      "Discovery call and written scope",
      "Build against one job-to-be-done",
      "QA on happy path, edges, and failure modes",
      "Eval notes and handoff docs",
      "Fixed quote before we start",
    ],
  },
  {
    id: "ai-pod",
    name: "AI + QA pod",
    priceLabel: "Custom",
    priceNote: "monthly",
    description:
      "Ongoing AI iteration plus the same monthly quality cadence that already protects your releases.",
    ctaLabel: "Talk about a pod",
    ctaHref: "/contact?plan=ai-pod&source=ai-pricing",
    features: [
      "In-house AI engineer capacity",
      "QA coverage on AI and product paths",
      "Prompt / retrieval regression as models change",
      "Shared Slack and weekly status",
      "Scoped month to month",
    ],
  },
] as const;
