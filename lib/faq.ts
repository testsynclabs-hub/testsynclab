export type FaqItem = {
  question: string;
  answer: string;
  category: "Pricing" | "Process" | "Coverage" | "Getting Started" | "AI";
};

export const faqs: FaqItem[] = [
  {
    category: "Getting Started",
    question: "I am not a QA person — can you still help?",
    answer:
      "Yes. Tell us what you built in your own words: Shopify store, game, desktop app, web app, Cypress suite. We map that to a test plan and a package. You do not need to know QA, QC, SQA, alpha, or beta.",
  },
  {
    category: "Getting Started",
    question: "How fast can TestSync Lab start?",
    answer:
      "Usually within 3–5 business days after scope confirmation. If you have an urgent release, tell us the date — we can often prioritize a focused smoke + regression cycle sooner.",
  },
  {
    category: "Getting Started",
    question: "What is included in the free QA audit?",
    answer:
      "A practical risk review of your product context, release timeline, and likely quality gaps — plus a recommended package (Basic, Growth, or Scale). No retainer required to start the conversation.",
  },
  {
    category: "Pricing",
    question: "Why monthly retainers instead of hourly billing?",
    answer:
      "Hourly billing punishes busy release weeks and creates invoice anxiety. Retainers reserve capacity, keep context warm, and make budgeting predictable for founders and finance.",
  },
  {
    category: "Pricing",
    question: "What do $999, $1,899, and $2,799 actually include?",
    answer:
      "All three include ~40 QA hours every week, with weekends and holidays aligned to your region's calendar. Price buys depth, not a thinner clock: Basic is manual exploratory and regression QA; Growth adds API validation and automation start; Scale adds performance spot checks, release-gate support, and a named lead cadence. Enterprise is custom for multi-pod needs.",
  },
  {
    category: "Pricing",
    question: "Is weekly capacity the same on every package?",
    answer:
      "Yes for Basic, Growth, and Scale — about 40 QA hours per week. Package price is not linked to hour caps. You pay for how deep the work goes (manual → API/automation → gates and named lead), not for fewer hours on a cheaper plan.",
  },
  {
    category: "Pricing",
    question: "Which holidays and weekends do you observe?",
    answer:
      "We follow the client's regional calendar. If your team is in Australia, we align to Australian offs; if you are in Dubai or Saudi Arabia, we align to that market's weekends and public holidays. Confirmed at kickoff so planning stays predictable. Live overlap can still be scheduled when a release needs it.",
  },
  {
    category: "Pricing",
    question: "Can we pause or change packages?",
    answer:
      "Yes. Most clients start month-to-month. You can upgrade when automation needs grow, or adjust scope with notice before the next cycle.",
  },
  {
    category: "Coverage",
    question: "Do you test Shopify or Magento stores?",
    answer:
      "Yes — Shopify, Magento, and custom stores. Checkout, cart, pay, refunds, coupons, and admin — including happy-path and negative cases. Most store owners start on Basic ($999). If you also want Cypress or Playwright on checkout, Growth is the usual next step.",
  },
  {
    category: "Coverage",
    question: "Do you test games and desktop applications?",
    answer:
      "Yes. Games and desktop apps need a short scope (build, devices, OS). Use Talk to an expert / free audit — we will not force a Basic card if Enterprise or a custom cycle is the honest fit.",
  },
  {
    category: "Coverage",
    question: "Cypress, Playwright, or Selenium — which do you use?",
    answer:
      "All three. Playwright is our default for modern web. If your team already standardized on Cypress or Selenium, we work in that stack. Growth ($1,899) is the usual automation start.",
  },
  {
    category: "Coverage",
    question: "Do you test web, mobile, and APIs?",
    answer:
      "Yes — web and API are core. Mobile coverage depends on build access and package scope. Share your platforms in the audit form and we will confirm fit.",
  },
  {
    category: "Coverage",
    question: "Do you only use Playwright?",
    answer:
      "Playwright is our default for modern web automation, but we also work with Cypress, Selenium, Postman/API suites, and JMeter for performance spot checks when needed.",
  },
  {
    category: "Process",
    question: "How do you communicate day to day?",
    answer:
      "Slack or email plus a lightweight weekly summary. Critical bugs are raised immediately with reproduction steps, severity, and evidence.",
  },
  {
    category: "Process",
    question: "Do you work with US and Canadian timezones?",
    answer:
      "Yes. We support teams worldwide and structure handoffs so North American teams can end the day with a build and wake up to verification notes.",
  },
  {
    category: "Getting Started",
    question: "What access do you need from our team?",
    answer:
      "Staging or test builds, acceptance criteria or tickets, and a shared channel. We keep process light so engineers are not buried in meetings.",
  },
  {
    category: "Process",
    question: "Is our code and data safe with an external QA partner?",
    answer:
      "We only request least-privilege access to test environments, follow agreed confidentiality terms, and avoid unnecessary production data. Security expectations are confirmed before kickoff.",
  },
  {
    category: "Coverage",
    question: "Do you work with companies in the US and Canada?",
    answer:
      "Yes — US and Canadian product teams are our primary market. Retainers are priced in USD, reporting is in English, and we use Slack, Jira, GitHub, or Linear. Coverage is remote and follow-the-sun: you close with a build, we verify on our morning. See QA for US teams or QA for Canadian teams for market-specific detail.",
  },
  {
    category: "Process",
    question: "Will you overlap with EST, PST, or Eastern Time standups?",
    answer:
      "Most clients prefer async notes they can read at 9am local plus a short weekly cadence. Live overlap can be scheduled. We do not claim a US office — the model is overnight verification and written evidence, not a body in your timezone eight hours a day.",
  },
  {
    category: "Coverage",
    question: "Can you help if we already have some automation?",
    answer:
      "Absolutely. We can stabilize flaky suites, fill coverage gaps, and add API checks around your existing scripts instead of ripping everything out.",
  },
  {
    category: "AI",
    question: "Do you test AI chatbots and LLM products?",
    answer:
      "Yes. AI testing is a live QA lane: chatbots, copilots, RAG search, prompt regression, and AI workflow quality. We build golden sets, check hallucinations and jailbreaks, and gate releases the same way we gate the rest of your product.",
  },
  {
    category: "AI",
    question: "How is AI testing priced compared with monthly QA retainers?",
    answer:
      "QA stays on clear monthly packages ($999 / $1,899 / $2,799). AI testing is a scoped sprint (fixed quote) or a monthly add-on beside your retainer. You get a written scope before we start — not an open-ended AI experiment billed by the hour.",
  },
  {
    category: "AI",
    question: "Should AI testing sit inside Basic, Growth, or Scale — or stay separate?",
    answer:
      "Keep it separate. Monthly QA packages stay predictable for product coverage. AI surfaces need discovery before a fair quote, so we sell an AI Testing Sprint or an AI + QA add-on (best beside Growth or Scale). We do not bury open-ended AI work inside Basic.",
  },
  {
    category: "AI",
    question: "Can you also build AI features, or only test them?",
    answer:
      "Testing is the default offer — that is what most buyers need first. If you also need a small feature built, we can scope build + test together. Custom software and BPO stay on the later roadmap.",
  },
];
