import type { MarketFaq } from "@/lib/markets";

export type RankLanding = {
  slug: string;
  path: string;
  navLabel: string;
  navDescription: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  highlights: { title: string; detail: string }[];
  pains: { title: string; detail: string }[];
  faqs: MarketFaq[];
  areaServedName: string | string[];
  serviceName: string;
};

/**
 * High-intent commercial landings for competitive queries.
 * Honest positioning — criteria + offer, not fake “#1” claims.
 */
export const rankLandings: RankLanding[] = [
  {
    slug: "best-qa-company",
    path: "/best-qa-company",
    navLabel: "Best QA company",
    navDescription: "How to judge a QA partner — and when TestSync Lab fits.",
    eyebrow: "Buyer guide",
    h1: "Best QA company for SaaS — especially US product teams",
    title: "Best QA Company USA & Worldwide | Remote Retainers from $999 | TestSync Lab",
    description:
      "Looking for the best QA company for US SaaS startups? Compare fit signals: release speed, bug quality, retainer clarity. TestSync Lab offers remote QA from $999/mo with a free audit — also serving Canada, UK, AU, and worldwide.",
    keywords: [
      "best QA company",
      "best QA company USA",
      "best QA testing company",
      "best software testing company",
      "top QA company",
      "best QA agency",
      "best QA company for startups",
      "best QA company for US startups",
      "TestSync Lab",
    ],
    intro:
      "“Best QA company” is not one logo — especially for US and global SaaS teams shipping weekly. It means a partner who protects revenue journeys, ships engineer-ready bugs, and keeps coverage predictable without a six-month hiring cycle. TestSync Lab is built for that job: monthly retainers from $999, ~40 QA hours/week, senior exploratory + API + Playwright depth, and a free QA audit before you buy. US product teams are a primary fit; we also serve Canada, UK, Australia, and worldwide.",
    highlights: [
      {
        title: "Judge on outcomes, not slide decks",
        detail:
          "Ask for sample bugs, a risk-ranked pack, and how flakes get owned. The best QA companies show product judgment — not vanity case counts.",
      },
      {
        title: "Predictable weekly capacity",
        detail:
          "Basic $999 · Growth $1,899 · Scale $2,799 — each with ~40 QA hours/week. Clear retainers beat open-ended hourly quotes when you ship every week.",
      },
      {
        title: "Built for US release trains (and global)",
        detail:
          "Overnight verification handoffs, Slack/Jira-ready bugs, and English reporting. See also QA for US teams and hire QA testers if you are comparing headcount vs a retainer.",
      },
    ],
    pains: [
      {
        title: "Listicles that ignore your stage",
        detail:
          "Enterprise crowd-testing brands are rarely the best QA company for an early SaaS release train. Fit beats brand size.",
      },
      {
        title: "Cheap benches that burn eng time",
        detail:
          "Low rates with vague bugs are expensive. The best partners write severity, steps, and evidence your engineers reopen and fix.",
      },
      {
        title: "Automation theater before risk mapping",
        detail:
          "Rewriting every UI test before understanding money paths is a common miss. We start with risk, then automate what stays stable.",
      },
    ],
    faqs: [
      {
        question: "What makes a QA company the best for SaaS?",
        answer:
          "Clear ownership of smoke and regression on revenue paths, engineer-ready bugs, timezone-aware communication, and honest scope. Size of the vendor list matters less than whether they can join mid-sprint.",
      },
      {
        question: "Is TestSync Lab the best QA company overall?",
        answer:
          "We do not claim a universal #1. We are a strong fit when you want remote monthly QA retainers for SaaS — manual, API, Playwright, and optional AI testing — without building an in-house QA org first.",
      },
      {
        question: "How fast can we start?",
        answer:
          "Usually within 3–5 business days after scope confirmation. Start with a free QA audit on the contact page.",
      },
    ],
    areaServedName: ["United States", "Canada", "United Kingdom", "Australia", "Pakistan"],
    serviceName: "Best-fit remote QA company for SaaS",
  },
  {
    slug: "qa-agency",
    path: "/qa-agency",
    navLabel: "QA agency",
    navDescription: "Hire a remote QA agency on a monthly retainer.",
    eyebrow: "TestSync Lab QA agency",
    h1: "TestSync Lab is a remote QA agency for SaaS product teams",
    title: "TestSync Lab QA Agency | Hire Remote Software Testers from $999/mo",
    description:
      "TestSync Lab is a remote QA agency for SaaS and startups. Monthly software testing retainers from $999 cover manual QA, API testing, Playwright automation, and release gates. Free audit.",
    keywords: [
      "TestSync Lab",
      "TestSync Lab QA agency",
      "QA agency",
      "hire QA agency",
      "software testing agency",
      "QA testing agency",
      "outsourced QA agency",
      "remote QA agency",
    ],
    intro:
      "TestSync Lab is a remote QA agency — not a generic IT shop. You get named capacity, USD monthly retainers, and practical release gates for web and mobile SaaS. Coverage you can budget, without a rotating staff-aug queue.",
    highlights: [
      {
        title: "Agency model, product mindset",
        detail:
          "We brief like a partner: critical journeys, severity rules, and weekly status — not anonymous ticket farms.",
      },
      {
        title: "Full stack of QA services",
        detail:
          "Manual exploratory, API contracts, Playwright in CI, performance spot checks, plus a separate AI testing lane when you ship chatbots or LLMs.",
      },
      {
        title: "Transparent pricing",
        detail:
          "Published packages from $999. Upgrade when automation needs grow. Pause or adjust with notice — no mystery SOWs.",
      },
    ],
    pains: [
      {
        title: "Agencies that sell seniors, deliver juniors",
        detail:
          "Ask who does the work. Delivery stays close to strategy so execution does not drift apart.",
      },
      {
        title: "Hourly drift on busy weeks",
        detail:
          "Retainers reserve capacity for release weeks so quality does not become the most expensive surprise invoice.",
      },
      {
        title: "No ownership of release gates",
        detail:
          "A useful QA agency owns smoke, regression memory, and escalation — not just a spreadsheet of passed cases.",
      },
    ],
    faqs: [
      {
        question: "What does a QA agency typically cost?",
        answer:
          "Depends on model. TestSync Lab monthly retainers start at $999 for focused manual coverage and scale to Growth and Scale packages when API and automation depth are required.",
      },
      {
        question: "QA agency vs hiring in-house?",
        answer:
          "Hire when you need full-time internal ownership. Use a QA agency retainer when you need senior coverage this month and cannot wait on recruiting.",
      },
      {
        question: "Do you only serve US companies?",
        answer:
          "No. We deliver worldwide. Dedicated pages also exist for US and Canadian teams, plus outsourced QA framing for global buyers.",
      },
    ],
    areaServedName: "Worldwide",
    serviceName: "Remote QA agency retainers",
  },
  {
    slug: "software-testing-company",
    path: "/software-testing-company",
    navLabel: "Testing company",
    navDescription: "Software testing company for web, API, and automation.",
    eyebrow: "Software testing company",
    h1: "Software testing company for SaaS — manual, API, and automation",
    title:
      "Software Testing Company | Remote QA from $999/mo | TestSync Lab",
    description:
      "TestSync Lab is a software testing company for SaaS teams. Remote monthly QA for manual testing, API testing, Playwright automation, and performance checks. Free QA audit — from $999/mo.",
    keywords: [
      "software testing company",
      "testing company",
      "software testing services company",
      "QA testing company",
      "hire software testing company",
      "TestSync Lab testing company",
    ],
    intro:
      "If you searched “testing company” or “software testing company,” you need someone who can validate real product risk — not a generic IT services brochure. TestSync Lab focuses on SaaS release quality: exploratory testing, API checks, Playwright automation, and clear bugs.",
    highlights: [
      {
        title: "Built for product releases",
        detail:
          "Smoke, regression, and exploratory on the journeys that make or lose revenue — auth, billing, permissions, core workflows.",
      },
      {
        title: "Automation that stays maintainable",
        detail:
          "Thin Playwright suites on stable paths, API checks for business rules, and flake ownership so CI stays trustworthy.",
      },
      {
        title: "One lab for classic QA + AI",
        detail:
          "Core product QA on retainers. Chatbot and LLM testing scoped separately so budgets stay honest.",
      },
    ],
    pains: [
      {
        title: "Generic testing companies miss SaaS risk",
        detail:
          "Multi-tenant permissions and billing edge cases need product context. We map those journeys first.",
      },
      {
        title: "Tooling without ownership",
        detail:
          "Buying Selenium or Playwright licenses is not a testing company. Ownership of packs and gates is.",
      },
      {
        title: "Slow kickoff",
        detail:
          "We start from a free audit: staging access, top risks, and a recommended package — usually live within days, not months.",
      },
    ],
    faqs: [
      {
        question: "What services does your testing company offer?",
        answer:
          "Manual and exploratory QA, API testing, Playwright automation, performance spot checks, release-gate support, and optional AI/chatbot testing.",
      },
      {
        question: "Do you test mobile apps?",
        answer:
          "Yes — mobile web and app QA within retainer scope, including device spot checks where needed.",
      },
      {
        question: "How do we engage?",
        answer:
          "Book a free QA audit via contact. We recommend Basic, Growth, Scale, or tell you a short sprint is enough.",
      },
    ],
    areaServedName: "Worldwide",
    serviceName: "Software testing company services",
  },
  {
    slug: "qa-agency-lahore",
    path: "/qa-agency-lahore",
    navLabel: "QA agency Lahore",
    navDescription: "Lahore-based QA agency serving local and global clients.",
    eyebrow: "Lahore · Pakistan",
    h1: "QA agency in Lahore — remote software testing for local & global teams",
    title:
      "QA Agency in Lahore | Software Testing Company Pakistan | TestSync Lab",
    description:
      "Looking for a QA agency in Lahore? TestSync Lab is a Lahore-based software testing company serving Pakistan and worldwide SaaS teams. Manual, API, Playwright QA from $999/mo. Free audit.",
    keywords: [
      "QA agency Lahore",
      "QA company Lahore",
      "software testing company Lahore",
      "testing company Lahore",
      "QA agency Pakistan",
      "software testing company Pakistan",
      "best QA company Lahore",
      "TestSync Lab Lahore",
    ],
    intro:
      "TestSync Lab operates from Lahore while delivering remote QA retainers to product teams worldwide. If you need a QA agency in Lahore for a local product — or a Pakistan-based testing partner for a US/UK/AU/CA SaaS team — you get English reporting, Slack/Jira handoffs, and clear monthly packages.",
    highlights: [
      {
        title: "Lahore base, global delivery",
        detail:
          "Founders and delivery operate with PKT overlap for local teams and follow-the-sun coverage for overseas product hours.",
      },
      {
        title: "Same retainers as our global offer",
        detail:
          "Basic $999 · Growth $1,899 · Scale $2,799 in USD. Local buyers and international buyers get the same clarity.",
      },
      {
        title: "Practical Lahore QA talent path",
        detail:
          "Hiring or CV review via Become a Tester when we expand capacity — services remain the primary offer.",
      },
    ],
    pains: [
      {
        title: "Local agencies with unclear scope",
        detail:
          "We publish packages and deliver engineer-ready bugs so Lahore startups and exporters are not guessing what “unlimited testing” means.",
      },
      {
        title: "Global buyers worried about communication",
        detail:
          "English-first updates, severity rules, and async status keep US/UK/AU/CA teams confident with a Lahore-based partner.",
      },
      {
        title: "Only local device labs, no product QA strategy",
        detail:
          "We combine exploratory judgment with API and Playwright depth — not just device farm hours.",
      },
    ],
    faqs: [
      {
        question: "Is TestSync Lab a QA agency in Lahore?",
        answer:
          "Yes. We are based in Lahore, Pakistan, and deliver remote software QA retainers to local and international product teams.",
      },
      {
        question: "Do you only work with Pakistani companies?",
        answer:
          "No. Lahore is our base; clients include SaaS teams worldwide. We also publish dedicated pages for US and Canadian buyers.",
      },
      {
        question: "How do I hire or get a CV review in Lahore?",
        answer:
          "Use the Become a Tester page for applications and CV review. For product QA services, book a free audit on Contact.",
      },
    ],
    areaServedName: ["Pakistan", "United States", "Canada", "United Kingdom", "Australia"],
    serviceName: "QA agency services in Lahore",
  },
  {
    slug: "hire-qa-testers",
    path: "/hire-qa-testers",
    navLabel: "Hire QA testers",
    navDescription: "Retainer vs full-time hire — when a remote QA team wins.",
    eyebrow: "Hire QA · Retainer alternative",
    h1: "Hire QA testers for SaaS — without a six-month recruiting cycle",
    title: "Hire QA Testers for SaaS | Remote Retainers from $999 | TestSync Lab",
    description:
      "Need to hire QA testers for a US or global SaaS team? Compare full-time hiring vs a remote QA retainer. TestSync Lab delivers ~40 QA hours/week from $999/mo — manual, API, Playwright. Free audit.",
    keywords: [
      "hire QA testers",
      "hire QA testers USA",
      "hire software testers",
      "hire QA engineer",
      "outsourced QA testers",
      "remote QA testers",
      "hire QA team for startup",
      "TestSync Lab",
    ],
    intro:
      "Hiring a full-time QA engineer in the US often means $90k–$130k+ fully loaded, plus months of recruiting. If you need coverage this month — not a headcount bet — TestSync Lab is how product teams hire QA capacity: clear monthly packages, ~40 focused hours every week, and engineer-ready bugs overnight. Start with a free audit; upgrade depth (manual → API/automation → release gates) without shrinking the clock.",
    highlights: [
      {
        title: "Capacity this month, not next quarter",
        detail:
          "Retainers start after a short audit. You get reserved weekly hours instead of waiting on job posts and notice periods.",
      },
      {
        title: "Same weekly hours — choose depth",
        detail:
          "Basic, Growth, and Scale each include ~40 QA hours/week. Price buys manual depth, API/automation, or named lead cadence — not a thinner week.",
      },
      {
        title: "Built for how US teams ship",
        detail:
          "You close with a build; we verify on our morning. Bugs arrive with steps, severity, and evidence — ready for Jira or Linear.",
      },
    ],
    pains: [
      {
        title: "Job posts that never fill on time",
        detail:
          "Good mid-level QA talent is slow to hire. A retainer covers release weeks while you decide whether to open a permanent seat.",
      },
      {
        title: "Contractors with no product memory",
        detail:
          "Staff-aug churn burns eng time. We keep context warm across sprints under one retainer.",
      },
      {
        title: "Confusing “hire QA” vs agency quotes",
        detail:
          "We publish USD packages and scope. No mystery SOWs when you only asked for regression help.",
      },
    ],
    faqs: [
      {
        question: "Should I hire QA testers in-house or use a retainer?",
        answer:
          "Hire in-house when you need full-time ownership embedded in your culture long-term. Use a retainer when you need senior coverage this month, cannot wait on recruiting, or want to validate QA process before a full-time seat.",
      },
      {
        question: "Can TestSync Lab replace a full-time QA hire?",
        answer:
          "For many early and growth SaaS teams, yes for coverage — smoke, regression, API, and automation start. Some later add an internal lead and keep us as surge capacity.",
      },
      {
        question: "Do you hire only for US companies?",
        answer:
          "US SaaS is a primary market. We also support Canada, UK, Australia, and teams worldwide, with offs aligned to your region’s calendar.",
      },
      {
        question: "How do we start?",
        answer:
          "Book a free QA audit. We map risks and recommend Basic, Growth, or Scale — usually live within days after scope confirmation.",
      },
    ],
    areaServedName: ["United States", "Canada", "United Kingdom", "Australia", "Pakistan"],
    serviceName: "Hire remote QA testers on monthly retainers",
  },
];

export function getRankLanding(slug: string) {
  return rankLandings.find((item) => item.slug === slug);
}

export const rankNavChildren = rankLandings.map((item) => ({
  href: item.path,
  label: item.navLabel,
  description: item.navDescription,
}));
