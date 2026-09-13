export type Review = {
  id: string;
  company: string;
  rating: number;
  industry: string;
  quote: string;
  name: string;
  role: string;
};

/**
 * Homepage social proof — only real client feedback.
 * Do not invent personal names or fictional companies for SEO/social proof.
 */
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
];
