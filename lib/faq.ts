export type FaqItem = {
  question: string;
  answer: string;
  category: "Pricing" | "Process" | "Coverage" | "Getting Started" | "AI";
};

export const faqs: FaqItem[] = [
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
      "Basic ($999) focuses on manual exploratory and regression QA. Growth ($1,899) adds API validation and automation start. Scale ($2,799) adds performance spot checks, release-gate support, and a named lead cadence. Enterprise is custom for multi-pod needs.",
  },
  {
    category: "Pricing",
    question: "Can we pause or change packages?",
    answer:
      "Yes. Most clients start month-to-month. You can upgrade when automation needs grow, or adjust scope with notice before the next cycle.",
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
      "Playwright is our default for modern web automation, but we also work with Selenium, Postman/API suites, and JMeter for performance spot checks when needed.",
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
    question: "Do you only do QA, or can you also build AI features?",
    answer:
      "QA retainers are the core offer. We also ship practical AI features now — copilots, RAG, and workflow automation — with an in-house AI engineer. Custom software and BPO stay on the later roadmap so we do not pretend to be a full agency yet.",
  },
  {
    category: "AI",
    question: "How is AI work priced compared with monthly QA retainers?",
    answer:
      "QA stays on clear monthly packages ($999 / $1,899 / $2,799). AI is scoped as a fixed-quote feature sprint or a custom AI + QA pod. You get a written scope before we start — not an open-ended experiment billed by the hour.",
  },
  {
    category: "AI",
    question: "Why buy AI from a QA lab instead of a specialist AI studio?",
    answer:
      "Because the feature has to survive a release. We build the slice and test the happy path, failure path, and obvious jailbreaks in the same engagement. Most AI demos skip that. If you only need testing, start with a free QA audit instead.",
  },
];
