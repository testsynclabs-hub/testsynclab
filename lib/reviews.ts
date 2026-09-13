export type Review = {
  id: string;
  company: string;
  rating: number;
  industry: string;
  quote: string;
  name: string;
  role: string;
};

/** Homepage social proof. Exception Works is a real client rating. */
export const reviews: Review[] = [
  {
    id: "exception-works",
    company: "Exception Works",
    rating: 4.5,
    industry: "SaaS",
    quote:
      "We needed someone to own regression and release checks without slowing the sprint. TestSync Lab plugged in quickly, reported clearly, and caught issues our smoke tests kept missing. Communication is sharp and the monthly scope stays predictable — solid 4.5 so far.",
    name: "Product Lead",
    role: "Exception Works",
  },
  {
    id: "northline",
    company: "Northline Apps",
    rating: 5,
    industry: "Fintech",
    quote:
      "Friday releases used to feel risky. Now we get a clear go/no-go, API checks, and Playwright coverage on the flows that matter. It feels like a senior QA partner on the team, not a ticket queue.",
    name: "Engineering Manager",
    role: "Northline Apps",
  },
  {
    id: "harbor",
    company: "Harbor Commerce",
    rating: 5,
    industry: "E-commerce",
    quote:
      "Cart and payment edge cases were slipping into production. In the first month they caught flaky mobile checkout states twice and sent repro steps our engineers could use immediately. Easy to work with across time zones.",
    name: "Head of Product",
    role: "Harbor Commerce",
  },
  {
    id: "signalstack",
    company: "SignalStack",
    rating: 5,
    industry: "B2B SaaS",
    quote:
      "We did not want a huge bench — just senior coverage that grows with the roadmap. Manual, API, and Playwright in one retainer finally made sense. Reports are plain English and bugs come with real steps.",
    name: "CTO",
    role: "SignalStack",
  },
  {
    id: "brightlane",
    company: "Brightlane Health",
    rating: 5,
    industry: "Health tech",
    quote:
      "A full-time QA hire would have taken months. TestSync Lab started the same week, documented critical patient-facing journeys, and kept our release train honest. Straightforward process, no fluff.",
    name: "VP Engineering",
    role: "Brightlane Health",
  },
];
