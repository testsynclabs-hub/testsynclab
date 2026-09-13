import { SITE_LINKEDIN } from "@/lib/site";

export type Founder = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  focus: string[];
  linkedIn: string;
};

/**
 * Update names / personal LinkedIn URLs when ready.
 * Company page is the default profile link until personal URLs are set.
 */
export const founders: Founder[] = [
  {
    name: "Abid",
    initials: "AB",
    role: "Founding QA Partner",
    bio: "Hands-on exploratory and release QA. Owns risk mapping, bug clarity, and the weekly quality cadence with your team.",
    focus: ["Manual & exploratory", "Release gates", "Client communication"],
    linkedIn: SITE_LINKEDIN,
  },
  {
    name: "Co-founder",
    initials: "QA",
    role: "Founding QA Partner",
    bio: "Automation, API, and performance depth so coverage compounds every month — without a brittle script pile.",
    focus: ["Playwright / API", "CI regression", "Performance spot-checks"],
    linkedIn: SITE_LINKEDIN,
  },
];

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
    title: "US / CA friendly",
    detail: "English reporting, Slack/Jira handoffs, timezone-aware delivery.",
  },
] as const;
