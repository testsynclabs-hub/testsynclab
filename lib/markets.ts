export type MarketFaq = {
  question: string;
  answer: string;
};

export type MarketPage = {
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
  countryName: string;
};

export const markets: MarketPage[] = [
  {
    slug: "usa",
    path: "/qa-services-usa",
    navLabel: "QA for US teams",
    navDescription: "Remote retainers with follow-the-sun coverage for US product teams.",
    eyebrow: "United States",
    h1: "Remote QA services for US product teams",
    title: "QA Services for US Startups | Remote Retainers from $999",
    description:
      "Hire a remote software QA partner for US startups and SaaS teams. Monthly retainers from $999 for manual testing, API checks, and Playwright automation — USD pricing, Slack/Jira, 24h audit.",
    keywords: [
      "QA services USA",
      "outsourced QA United States",
      "hire QA testers US startup",
      "remote QA team USA",
      "software testing company for US startups",
      "Playwright testing services USA",
    ],
    intro:
      "US product teams do not need a six-week hiring cycle to stop shipping bugs. TestSync Lab is a remote QA lab: senior testers, USD monthly retainers, and a follow-the-sun cadence so an evening deploy in New York or San Francisco can be verified before your next standup.",
    highlights: [
      {
        title: "USD retainers, not hourly drift",
        detail:
          "Basic $999 · Growth $1,899 · Scale $2,799. Finance can budget quality like any other vendor — no surprise test-hour invoices after a busy sprint.",
      },
      {
        title: "Follow-the-sun on your release",
        detail:
          "You close the day with a build. We start verification on our morning and drop reproducible bugs in Slack or Jira before your next working block.",
      },
      {
        title: "Fits US engineering tools",
        detail:
          "GitHub, Linear, Jira, Slack, Playwright CI — we work in the same channels your team already uses. No extra portal to log into.",
      },
    ],
    pains: [
      {
        title: "Founders still doing Friday QA",
        detail:
          "Common in seed and Series A SaaS. A retainer replaces heroics with a named cycle so launches are not gated on whoever is awake.",
      },
      {
        title: "In-house hire is too slow or too expensive",
        detail:
          "A Bay Area or NYC QA salary plus recruiting is a quarter of runway. A remote pod covers the same critical paths this month.",
      },
      {
        title: "Automation exists but is flaky",
        detail:
          "We stabilize Playwright or Selenium on high-value paths instead of rewriting everything. Growth and Scale packages include that start.",
      },
    ],
    faqs: [
      {
        question: "Do you work with US companies if the team is remote?",
        answer:
          "Yes. Most of our QA retainers are built for US product and engineering teams. We invoice in USD, report in English, and use Slack/Jira. We do not pretend to sit in a US office — coverage is remote and follow-the-sun.",
      },
      {
        question: "What time of day will you test for an EST or PST team?",
        answer:
          "We structure handoffs so US evening deploys are verified on our next working morning. Critical bugs are written up with repro steps the same cycle. Live overlap for standups can be arranged; most clients prefer async notes they can read at 9am local.",
      },
      {
        question: "Is $999 enough coverage for a US SaaS release train?",
        answer:
          "Basic is manual exploratory and regression for early products. If you ship weekly with APIs and CI, Growth ($1,899) or Scale ($2,799) is the usual fit. Start with a free QA audit and we will say which package matches the risk — or if you need Enterprise.",
      },
    ],
    countryName: "United States",
  },
  {
    slug: "canada",
    path: "/qa-services-canada",
    navLabel: "QA for Canadian teams",
    navDescription: "Remote QA retainers for Canadian SaaS — USD pricing, ET-friendly handoffs.",
    eyebrow: "Canada",
    h1: "Remote QA services for Canadian product teams",
    title: "QA Services for Canadian Startups | Remote Testing from $999",
    description:
      "Hire a remote software QA partner for Canadian startups and SaaS teams. Monthly retainers from $999 USD for manual, API, and Playwright testing — Slack/Jira cadence and a free audit in 24 hours.",
    keywords: [
      "QA services Canada",
      "outsourced QA Canada",
      "hire QA testers Toronto",
      "software testing company Canada",
      "remote QA for Canadian startups",
      "Playwright testing Canada",
    ],
    intro:
      "Canadian SaaS teams in Toronto, Vancouver, Montreal, and Waterloo face the same release pressure as US peers — with smaller hiring pools. TestSync Lab gives you senior QA on a monthly retainer, invoiced in USD, without standing up a local test department first.",
    highlights: [
      {
        title: "Clear USD packages",
        detail:
          "Same public pricing as our US retainers: $999 / $1,899 / $2,799. No hidden FX games on the quote — you see the number before you start.",
      },
      {
        title: "ET and PT handoffs",
        detail:
          "Your day ends with a candidate build. Our morning is verification: bugs, severity, and evidence in Slack or Jira when your team is back online.",
      },
      {
        title: "Privacy-minded access",
        detail:
          "Least-privilege staging access, no unnecessary production data, confidentiality confirmed before kickoff — the bar Canadian B2B buyers actually ask for.",
      },
    ],
    pains: [
      {
        title: "QA talent is scarce outside the biggest cities",
        detail:
          "Waiting on a Toronto or Vancouver full-time hire delays the next launch. A remote retainer starts in days, not hiring cycles.",
      },
      {
        title: "You need US-quality process, not a body shop",
        detail:
          "We write bugs engineers can fix: repro, severity, environment, evidence. Weekly summaries, not a black-box offshore dump.",
      },
      {
        title: "Compliance questions before you share staging",
        detail:
          "We confirm access, data handling, and NDA/terms up front. Share a staging URL in the audit form — that is enough to start the conversation.",
      },
    ],
    faqs: [
      {
        question: "Can Canadian companies pay in USD?",
        answer:
          "Yes. Public retainers are priced in USD. If your finance team needs a custom invoice format, say so on the audit form and we will confirm before kickoff.",
      },
      {
        question: "Do you overlap with Eastern Time standups?",
        answer:
          "Most Canadian clients use async Slack plus a weekly cadence. Short live overlap can be scheduled. The default model is follow-the-sun: you ship in your afternoon, we verify on our morning.",
      },
      {
        question: "Is this only for Toronto SaaS, or also earlier-stage teams?",
        answer:
          "Both. Basic ($999) fits early products that still need exploratory coverage. Growth and Scale fit teams with APIs, CI, and a weekly release train anywhere in Canada.",
      },
    ],
    countryName: "Canada",
  },
];

export const outsourcedQa = {
  path: "/outsourced-qa",
  navLabel: "Outsourced QA",
  navDescription: "Senior coverage this month — without a six-week hiring cycle.",
  eyebrow: "Outsourced QA",
  h1: "Outsourced QA that product teams can actually run with",
  title: "Outsourced QA for Startups | Monthly Testing Retainers from $999",
  description:
    "Outsource software QA without losing visibility. TestSync Lab monthly retainers cover manual testing, API validation, and Playwright automation for US and Canadian product teams from $999.",
  keywords: [
    "outsourced QA",
    "outsource software testing",
    "QA as a service",
    "hire QA agency",
    "outsourced QA for startups",
    "remote software testing services",
  ],
  intro:
    "Outsourced QA fails when the vendor hides in a ticket pile. It works when a named pod sits in your Slack, tests the journeys that make revenue, and reports like an in-house teammate. That is the TestSync Lab retainer.",
  highlights: [
    {
      title: "Capacity this month, not next quarter",
      detail:
        "Typical start is 3–5 business days after scope. Urgent releases can get a focused smoke + regression cycle sooner — tell us the date on the audit form.",
    },
    {
      title: "You keep the quality bar",
      detail:
        "We do not throw 40 junior testers at a checklist. Senior exploratory work, then automation on paths that matter, with a package you can upgrade.",
    },
    {
      title: "Built for US and Canadian buyers",
      detail:
        "USD pricing, English reporting, GitHub/Jira/Slack, follow-the-sun verification. Read the US and Canada pages if you want market-specific detail.",
    },
  ],
  pains: [
    {
      title: "Agencies that sell hours, not outcomes",
      detail:
        "Hourly billing punishes busy release weeks. A retainer reserves capacity so quality does not stop when the invoice anxiety starts.",
    },
    {
      title: "You still do not know what was tested",
      detail:
        "Every cycle includes written findings, severity, and evidence. Weekly summaries go to the person who owns the release — not a buried PDF.",
    },
    {
      title: "Offshore dump vs. a partner you can brief",
      detail:
        "Share tickets, staging, and the next date. We keep meetings light so engineers are not translating for a 20-person test factory.",
    },
  ],
  faqs: [
    {
      question: "How is outsourced QA different from hiring in-house?",
      answer:
        "Hiring is right when quality ownership must sit inside the company every day. Outsourcing a retainer is right when you need senior coverage before the next launch and cannot wait on recruiting. Many teams do both over a year — retainer now, hire later.",
    },
    {
      question: "Will we lose context if testers rotate?",
      answer:
        "Retainers keep context warm on purpose. You get a small named pod, not a random bench. Regression memory and automation grow month over month on the same product.",
    },
    {
      question: "What do you need from us to start?",
      answer:
        "Staging or test builds, acceptance criteria or tickets, and a shared Slack or email channel. A free QA audit maps risk to Basic, Growth, Scale, or Enterprise before you buy.",
    },
  ],
} as const;

export const qaAgency = {
  path: "/qa-agency",
  navLabel: "QA agency",
  navDescription: "Who TestSync Lab is — a remote QA agency for SaaS teams.",
  eyebrow: "TestSync Lab QA agency",
  h1: "TestSync Lab is a remote QA agency for SaaS teams",
  title: "TestSync Lab QA Agency | Remote Software Testing Retainers from $999",
  description:
    "TestSync Lab is a remote software QA agency for SaaS startups and product teams. Monthly testing retainers from $999 cover manual QA, API testing, Playwright automation, and AI product QA worldwide.",
  keywords: [
    "TestSync Lab",
    "TestSync Lab QA agency",
    "QA agency",
    "remote QA agency",
    "software QA agency",
    "hire QA agency for SaaS",
    "software testing agency",
    "QA testing company",
  ],
  intro:
    "TestSync Lab is not a generic IT shop. We are a focused remote QA agency: named testers, month-to-month retainers, and clear release reporting for SaaS teams that ship every week. You get senior exploratory testing, API checks, Playwright automation, and optional AI product QA — without waiting on a full-time hire.",
  highlights: [
    {
      title: "A real QA agency model, not ticket dumping",
      detail:
        "You work with a small named pod. Strategy and execution stay close — risk maps, reproducible bugs, and weekly cadence instead of a black-box bench.",
    },
    {
      title: "Built for SaaS release trains",
      detail:
        "Manual + API + Playwright + performance gates under one retainer. Packages start at $999/mo so finance can budget quality like any other vendor.",
    },
    {
      title: "Global buyers, English delivery",
      detail:
        "USD pricing, Slack/Jira/GitHub workflows, and follow-the-sun verification for US, Canadian, UK, and worldwide product teams.",
    },
  ],
  pains: [
    {
      title: "“Agency” that only sells junior hours",
      detail:
        "Busy sprints should not explode your invoice. Retainers reserve senior capacity so coverage does not stop when the release gets hard.",
    },
    {
      title: "Website looks fine — nobody knows who you are",
      detail:
        "Buyers need a clear entity: who TestSync Lab is, what we test, and how to start. This page + About + LinkedIn are that public footprint.",
    },
    {
      title: "Hiring is too slow for the next launch",
      detail:
        "A free QA audit maps risk this week. Most retainers start in days, not after a three-month recruiting cycle.",
    },
  ],
  faqs: [
    {
      question: "Is TestSync Lab a real QA agency or only a website?",
      answer:
        "TestSync Lab is a remote software QA agency. We deliver monthly retainers for manual testing, API testing, Playwright automation, performance checks, and AI product QA. You can review services, pricing, About, and book a free audit at testsynclab.com.",
    },
    {
      question: "Where does TestSync Lab work from?",
      answer:
        "We deliver remotely for product teams worldwide, with strong focus on US and Canadian SaaS buyers. Engagements run in English over Slack, Jira, and GitHub — not a walk-in storefront model.",
    },
    {
      question: "How do I hire TestSync Lab?",
      answer:
        "Start with a free QA audit. We return a practical risk map and recommend Basic ($999), Growth ($1,899), Scale ($2,799), or a scoped AI testing sprint. Month-to-month — no annual lock-in required.",
    },
  ],
} as const;

export const marketNavChildren = [
  {
    href: "/qa-agency",
    label: "QA agency overview",
    description: "Who TestSync Lab is as a remote QA agency.",
  },
  {
    href: "/qa-services-usa",
    label: "QA for US teams",
    description: "Remote retainers for United States product teams.",
  },
  {
    href: "/qa-services-canada",
    label: "QA for Canadian teams",
    description: "USD packages and ET/PT-friendly handoffs.",
  },
  {
    href: "/outsourced-qa",
    label: "Outsourced QA",
    description: "Senior coverage without a hiring cycle.",
  },
] as const;
