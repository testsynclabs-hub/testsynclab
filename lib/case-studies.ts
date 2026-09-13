export type CaseStudy = {
  id: string;
  industry: string;
  title: string;
  problem: string;
  work: string;
  outcome: string;
};

/** Anonymized delivery snapshots — real patterns, no invented logos. */
export const caseStudies: CaseStudy[] = [
  {
    id: "saas-checkout",
    industry: "B2B SaaS",
    title: "Checkout & billing before a pricing launch",
    problem:
      "Founders were still click-testing checkout the night before go-live. Same payment edge cases kept returning.",
    work: "Mapped critical journeys, ran exploratory + regression on billing, seats, and failed-payment paths.",
    outcome:
      "14 high-severity issues caught pre-release — including a seat-upgrade path that silently under-charged.",
  },
  {
    id: "mobile-onboarding",
    industry: "Consumer mobile",
    title: "Onboarding funnel before a store release",
    problem:
      "Install → signup → first value was leaking users. No shared test notes across iOS and Android.",
    work: "Device-matrix smoke plus deep exploratory on auth, permissions, and first-session journeys.",
    outcome:
      "Blocked a release with a login-loop on Android 14 and shipped a tighter go/no-go checklist.",
  },
  {
    id: "api-regression",
    industry: "Fintech-adjacent SaaS",
    title: "API regressions during a weekly ship cadence",
    problem:
      "UI looked fine while contract breaks in partner webhooks reached production twice in a month.",
    work: "API/contract checks on auth, webhooks, and error shapes — wired into the release gate.",
    outcome:
      "Zero webhook-class escapes in the next four releases; eng got reproducible payloads, not screenshots.",
  },
];

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
      "Clear Basic / Growth / Scale recommendation with hours-style capacity and what’s out of scope.",
  },
] as const;
