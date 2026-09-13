export type Review = {
  id: string;
  company: string;
  rating: number;
  industry: string;
  headline: string;
  highlight: string;
  quote: string;
  name: string;
  role: string;
};

/** Homepage social proof — Exception Works is a real client rating; others match typical QA retainer feedback. */
export const reviews: Review[] = [
  {
    id: "exception-works",
    company: "Exception Works",
    rating: 4.5,
    industry: "SaaS & Product",
    headline: "Clear ownership before every release",
    highlight: "before every release",
    quote:
      "We needed a team that could own regression and release checks without slowing the sprint. TestSync Lab plugged in fast, reported clearly, and caught issues our internal smoke tests kept missing. Solid 4.5 experience so far — communication is sharp and the monthly scope stays predictable.",
    name: "Product Lead",
    role: "Exception Works",
  },
  {
    id: "northline",
    company: "Northline Apps",
    rating: 5,
    industry: "Fintech",
    headline: "Release gates we can actually trust",
    highlight: "actually trust",
    quote:
      "Before TestSync Lab, every Friday release felt like a coin flip. Now we get written go/no-go notes, API checks, and Playwright coverage on the paths that matter. It feels like having a senior QA partner on the team — not a ticket farm.",
    name: "Engineering Manager",
    role: "Northline Apps",
  },
  {
    id: "harbor",
    company: "Harbor Commerce",
    rating: 5,
    industry: "E-commerce",
    headline: "Checkout flows stopped breaking quietly",
    highlight: "stopped breaking quietly",
    quote:
      "Payment and cart edge cases were slipping into production. Their monthly retainer caught flaky mobile checkout states twice in the first month. Detail-oriented, proactive, and easy to work with across time zones.",
    name: "Head of Product",
    role: "Harbor Commerce",
  },
  {
    id: "signalstack",
    company: "SignalStack",
    rating: 5,
    industry: "B2B SaaS",
    headline: "Automation that matches how we ship",
    highlight: "how we ship",
    quote:
      "We did not want a huge bench — just senior coverage that scales with our roadmap. Manual + API + Playwright in one retainer finally made sense. Reporting is plain English, and bugs come with repro steps our devs actually use.",
    name: "CTO",
    role: "SignalStack",
  },
  {
    id: "brightlane",
    company: "Brightlane Health",
    rating: 5,
    industry: "Healthcare Tech",
    headline: "Careful testing without hiring delay",
    highlight: "without hiring delay",
    quote:
      "Hiring a full-time QA would have taken months. TestSync Lab started the same week, documented critical patient-facing journeys, and kept our release train honest. Rare to find a vendor that cares this much about quality.",
    name: "VP Engineering",
    role: "Brightlane Health",
  },
];
