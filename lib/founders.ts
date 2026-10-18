export type Founder = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  focus: string[];
  linkedIn: string;
};

/**
 * Public people cards — only ship when a personal LinkedIn is ready.
 * Keep empty so the site stays brand-first (no personal names).
 */
export const founders: Founder[] = [];

export const trustSignals = [
  {
    title: "24h audit reply",
    detail: "Business-day response with a practical risk map — not a sales deck.",
  },
  {
    title: "Month-to-month",
    detail: "Pause or adjust when roadmap changes. No annual lock-in required.",
  },
  {
    title: "NDA-ready access",
    detail: "Least-privilege staging access and clear handling of your product data.",
  },
  {
    title: "Global-ready handoffs",
    detail:
      "English reporting, Slack/Jira workflows, and timezone-aware delivery for teams worldwide.",
  },
] as const;
