import type { RankLanding } from "@/lib/rank-landings";

const NA = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Europe",
] as const;

/** High-intent SQA / QA / QC / AI QA commercial landings. */
export const qaKeywordLandings: RankLanding[] = [
  {
    slug: "software-quality-assurance",
    path: "/software-quality-assurance",
    navLabel: "Software quality assurance",
    navDescription: "SQA retainers for SaaS — process + release testing.",
    eyebrow: "SQA",
    h1: "Software quality assurance (SQA) for SaaS teams that ship weekly",
    title: "Software Quality Assurance SQA Services | Remote Retainers from $999",
    description:
      "Software quality assurance (SQA) for US and global SaaS teams. Monthly SQA retainers from $999 cover process, manual QA, API checks, and Playwright — free audit.",
    keywords: [
      "software quality assurance",
      "SQA services",
      "software quality assurance services",
      "SQA testing",
      "SQA company",
      "hire SQA",
      "SQA for SaaS",
    ],
    intro:
      "Software quality assurance is more than clicking through a build. SQA means risk maps, release gates, reproducible bugs, and a cadence your eng team can trust. TestSync Lab delivers remote SQA retainers from $999/mo — USA-first, also UK, Canada, Australia, and Europe.",
    highlights: [
      {
        title: "SQA that matches how you ship",
        detail:
          "Smoke, regression, API contracts, and optional automation under one retainer — not a binder of unused process.",
      },
      {
        title: "Engineer-ready findings",
        detail:
          "Severity, steps, environment, evidence in Slack or Jira so fixes land on the first pass.",
      },
      {
        title: "Predictable monthly capacity",
        detail:
          "Basic $999 · Growth $1,899 · Scale $2,799 — ~40 QA hours/week. AI SQA stays scoped separately.",
      },
    ],
    pains: [
      {
        title: "SQA confused with QC checklists only",
        detail:
          "We combine preventive judgment (SQA) with execution (QA/QC-style checks) on the journeys that make revenue.",
      },
      {
        title: "Process docs nobody follows",
        detail:
          "You get a living risk pack tied to the next release — not a 40-page methodology PDF.",
      },
      {
        title: "Hiring SQA is too slow",
        detail:
          "A retainer starts coverage in days. Hire later if you want an in-house owner.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between SQA and QA?",
        answer:
          "SQA focuses on the system of quality — risk, gates, and prevention. QA/testing executes checks on the product. We do both inside monthly retainers. See also /quality-assurance-services and /qa-qc-services.",
      },
      {
        question: "Do you offer AI SQA?",
        answer:
          "Yes — chatbot, RAG, and LLM evaluation as a scoped AI testing sprint or add-on. Classic SQA retainers stay on /pricing; AI lane on /ai and /ai-qa-testing.",
      },
      {
        question: "How do US teams start SQA with you?",
        answer:
          "Book a free audit at /contact. Or open /qa-services-usa for timezone-specific delivery notes.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "Software quality assurance (SQA) services",
  },
  {
    slug: "quality-assurance-services",
    path: "/quality-assurance-services",
    navLabel: "Quality assurance services",
    navDescription: "QA services for SaaS — manual, API, automation.",
    eyebrow: "QA services",
    h1: "Quality assurance services for SaaS product teams",
    title: "Quality Assurance Services | Remote QA Retainers from $999",
    description:
      "Quality assurance services for US and global SaaS. Hire remote QA for manual testing, API validation, Playwright automation, and release gates — retainers from $999, free audit.",
    keywords: [
      "quality assurance services",
      "QA services",
      "software QA services",
      "QA testing services",
      "hire QA services",
      "outsourced quality assurance",
      "QA services for startups",
    ],
    intro:
      "Quality assurance services should protect releases — not fill a ticket queue. TestSync Lab provides remote QA services on monthly retainers: exploratory testing, regression, API checks, and Playwright when you are ready. Built for USA buyers; also serving UK, Canada, Australia, and Europe.",
    highlights: [
      {
        title: "Full QA stack under one pod",
        detail:
          "Manual + API + automation depth by package. Same Slack channel as your engineers.",
      },
      {
        title: "Clear pricing",
        detail:
          "From $999/mo with ~40 hours/week. No surprise hourly bills after a busy sprint.",
      },
      {
        title: "Free QA audit first",
        detail:
          "Risk map and package fit before you buy — usually within 24 business hours.",
      },
    ],
    pains: [
      {
        title: "Generic IT vendors “also doing QA”",
        detail:
          "We are a focused QA lab. Strategy stays next to execution.",
      },
      {
        title: "Checklists that miss business logic",
        detail:
          "Senior exploratory work finds broken permissions and bad discounts — not only CSS bugs.",
      },
      {
        title: "No path from manual to automation",
        detail:
          "Growth and Scale grow Playwright on stable paths so coverage compounds.",
      },
    ],
    faqs: [
      {
        question: "What QA services are included?",
        answer:
          "Manual exploratory/regression, API testing, Playwright/Cypress/Selenium automation, performance spot checks on Scale, and optional AI QA. Details on /services.",
      },
      {
        question: "Is this the same as software testing services?",
        answer:
          "Closely related. /software-testing-services is the broader testing hub; this page targets “quality assurance services” search intent with the same retainers.",
      },
      {
        question: "How do we start?",
        answer: "Free audit via /contact. USA teams can also use /qa-services-usa.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "Quality assurance services for SaaS",
  },
  {
    slug: "sqa-services",
    path: "/sqa-services",
    navLabel: "SQA services",
    navDescription: "Hire remote SQA — release gates and senior testing.",
    eyebrow: "SQA services",
    h1: "SQA services: senior software quality assurance on a retainer",
    title: "SQA Services | Hire Remote Software Quality Assurance from $999",
    description:
      "SQA services for SaaS startups. Hire remote software quality assurance for release gates, manual QA, API testing, and Playwright — monthly from $999. Free SQA audit.",
    keywords: [
      "SQA services",
      "SQA testing services",
      "hire SQA engineer",
      "SQA company",
      "remote SQA",
      "SQA outsourcing",
      "SQA for startups",
    ],
    intro:
      "Looking for SQA services without a six-month hire? TestSync Lab staffs senior software quality assurance as a remote retainer. You get risk-ranked testing, clear bugs, and optional automation — primarily for US SaaS, also UK, Canada, Australia, and Europe.",
    highlights: [
      {
        title: "SQA ownership without headcount delay",
        detail:
          "Named pod, weekly cadence, release-gate support on Scale — start in days after scope.",
      },
      {
        title: "From exploratory to automation",
        detail:
          "Basic is manual SQA execution. Growth/Scale add API and Playwright CI depth.",
      },
      {
        title: "AI SQA when you ship copilots",
        detail:
          "Classic SQA packages stay clean. Chatbot/LLM SQA is a separate sprint — see /ai-qa-testing.",
      },
    ],
    pains: [
      {
        title: "Junior SQA benches that burn eng time",
        detail:
          "We write bugs your engineers reopen and fix — severity and evidence included.",
      },
      {
        title: "SQA title, no release judgment",
        detail:
          "We prioritize money paths and failure modes, not vanity case counts.",
      },
      {
        title: "Hourly SQA that vanishes on busy weeks",
        detail:
          "Retainers reserve capacity so quality does not stop when the sprint gets hard.",
      },
    ],
    faqs: [
      {
        question: "SQA services vs hiring an SQA engineer?",
        answer:
          "Hire when you need a daily internal owner and can wait on recruiting. Buy SQA services when the next release needs coverage now. Compare on /qa-retainer-vs-hiring.",
      },
      {
        question: "Do you cover QC as well?",
        answer:
          "Yes — execution checks (QC-style verification) sit inside our QA/SQA retainers. See /quality-control-testing and /qa-qc-services.",
      },
      {
        question: "How do we start?",
        answer: "Request a free audit at /contact.",
      },
    ],
    areaServedName: [...NA, "Pakistan"],
    serviceName: "SQA services for SaaS",
  },
  {
    slug: "quality-control-testing",
    path: "/quality-control-testing",
    navLabel: "Quality control testing",
    navDescription: "QC-style verification before you ship.",
    eyebrow: "QC testing",
    h1: "Quality control testing for software releases",
    title: "Quality Control Testing QC Services | Remote QA from $999",
    description:
      "Quality control testing for SaaS releases. QC-style verification, regression, and release smoke on monthly retainers from $999 — USA, UK, Canada, and worldwide.",
    keywords: [
      "quality control testing",
      "QC testing",
      "software quality control",
      "QC services software",
      "quality control in software testing",
      "QC vs QA testing",
    ],
    intro:
      "Quality control testing answers: “Does this build meet the bar to ship?” TestSync Lab runs QC-style verification — smoke, regression, and acceptance checks — inside remote QA retainers so US and global SaaS teams catch defects before customers do.",
    highlights: [
      {
        title: "Ship / no-ship clarity",
        detail:
          "Release smoke and risk callouts so go/no-go is not a Friday-night guess.",
      },
      {
        title: "QC execution + QA judgment",
        detail:
          "We verify against acceptance criteria and still explore edge cases checklists miss.",
      },
      {
        title: "Evidence your stakeholders trust",
        detail:
          "Screens, steps, severity, and weekly summaries for PMs and eng leads.",
      },
    ],
    pains: [
      {
        title: "QC confused with manufacturing only",
        detail:
          "In software, QC is the verification layer. We speak both QC and QA language for mixed teams.",
      },
      {
        title: "Pass/fail without context",
        detail:
          "Every failed check includes repro and impact so eng can fix fast.",
      },
      {
        title: "No regression memory",
        detail:
          "Retainers keep prior defects and packs warm month over month.",
      },
    ],
    faqs: [
      {
        question: "QC vs QA — which do you sell?",
        answer:
          "Buyers search both. We deliver quality control testing (verification) inside quality assurance retainers. Hub: /qa-qc-services.",
      },
      {
        question: "Can QC be automation-only?",
        answer:
          "Partially — Growth/Scale automate stable checks. New features still need human QC judgment.",
      },
      {
        question: "How do we start?",
        answer: "Free audit at /contact with your next release date.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "Quality control testing services",
  },
  {
    slug: "qa-qc-services",
    path: "/qa-qc-services",
    navLabel: "QA QC services",
    navDescription: "QA and QC together — assurance + verification.",
    eyebrow: "QA + QC",
    h1: "QA and QC services under one remote retainer",
    title: "QA QC Services | Quality Assurance & Quality Control from $999",
    description:
      "QA QC services for SaaS: quality assurance planning plus quality control verification. Remote retainers from $999 for manual, API, and Playwright testing. Free audit.",
    keywords: [
      "QA QC services",
      "QA and QC",
      "QA vs QC",
      "quality assurance and quality control",
      "QA QC testing company",
      "hire QA QC",
    ],
    intro:
      "Teams search “QA QC services” when they want both assurance (risk, process, gates) and control (verify this build). TestSync Lab combines them: risk-ranked plans, exploratory QA, and QC-style release checks on a monthly retainer for USA and global SaaS.",
    highlights: [
      {
        title: "One pod, both languages",
        detail:
          "PMs hear QA outcomes. Ops hears QC verification. Engineers get bugs they can fix.",
      },
      {
        title: "Retainers from $999",
        detail:
          "Depth scales with Growth and Scale — API, automation, performance gates.",
      },
      {
        title: "Optional AI QA/QC",
        detail:
          "LLM and chatbot evaluation when AI features ship — scoped on /ai-qa-testing.",
      },
    ],
    pains: [
      {
        title: "Separate vendors for “QA” and “QC”",
        detail:
          "Fragmented ownership loses the release thread. One retainer keeps context.",
      },
      {
        title: "Theory without execution",
        detail:
          "We write plans that run the same week — not slideware.",
      },
      {
        title: "Execution without judgment",
        detail:
          "Checklists alone miss business logic. Exploratory QA fills that gap.",
      },
    ],
    faqs: [
      {
        question: "Do I need both QA and QC pages?",
        answer:
          "No — start here or on /quality-assurance-services. Same packages. Keyword hubs help Google match how buyers search.",
      },
      {
        question: "Where does SQA fit?",
        answer:
          "SQA is the broader quality system. See /software-quality-assurance and /sqa-services.",
      },
      {
        question: "How do we start?",
        answer: "Free QA audit at /contact.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "QA and QC services",
  },
  {
    slug: "regression-testing-services",
    path: "/regression-testing-services",
    navLabel: "Regression testing services",
    navDescription: "Release regression packs that protect money paths.",
    eyebrow: "Regression testing",
    h1: "Regression testing services for weekly SaaS releases",
    title: "Regression Testing Services | Remote QA Retainers from $999",
    description:
      "Regression testing services for SaaS. Protect checkout, auth, and critical paths every release — manual + Playwright regression on retainers from $999. Free audit.",
    keywords: [
      "regression testing services",
      "regression testing company",
      "software regression testing",
      "hire regression testers",
      "automated regression testing services",
      "regression QA services",
    ],
    intro:
      "Regression testing services keep yesterday’s features alive while you ship today. TestSync Lab builds and runs risk-ranked regression packs — manual first, Playwright where it pays — so US and global SaaS teams do not break checkout or auth on every deploy.",
    highlights: [
      {
        title: "Risk-ranked packs",
        detail:
          "Money paths and high-churn flows first. Expand from escape defects, not vanity counts.",
      },
      {
        title: "Manual + automated regression",
        detail:
          "Humans catch judgment calls; Playwright guards stable contracts in CI on Growth/Scale.",
      },
      {
        title: "Release memory",
        detail:
          "The pack improves every month inside the same retainer.",
      },
    ],
    pains: [
      {
        title: "Full suite that never finishes",
        detail:
          "We keep runtime honest so eng waits for green instead of skipping QA.",
      },
      {
        title: "No ownership of flakes",
        detail:
          "Automated regression without flake triage is theater. We own signal quality.",
      },
      {
        title: "Regression only before “big” releases",
        detail:
          "Weekly shippers need a thin always-on pack — that is the retainer model.",
      },
    ],
    faqs: [
      {
        question: "Manual or automated regression?",
        answer:
          "Both. New/unstable areas stay manual. Stable paths move to Playwright. See /automation-testing-services and /playwright-testing-company.",
      },
      {
        question: "How fast can a pack start?",
        answer:
          "Often within the first retainer week after a free audit maps critical paths.",
      },
      {
        question: "Related reading?",
        answer:
          "Blog: /blog/regression-testing-checklist-before-release and /blog/regression-testing-meaning-and-examples.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "Regression testing services",
  },
  {
    slug: "automation-testing-services",
    path: "/automation-testing-services",
    navLabel: "Automation testing services",
    navDescription: "Playwright, Cypress, Selenium — CI-ready suites.",
    eyebrow: "Test automation",
    h1: "Automation testing services for SaaS CI/CD",
    title: "Automation Testing Services | Playwright Cypress Selenium from $999+",
    description:
      "Automation testing services for SaaS: Playwright, Cypress, or Selenium suites wired into CI. Pair with senior manual QA on retainers — USA, UK, Canada, worldwide.",
    keywords: [
      "automation testing services",
      "test automation services",
      "automated testing company",
      "QA automation services",
      "hire automation testers",
      "Playwright automation services",
      "Selenium testing services",
    ],
    intro:
      "Automation testing services should leave you with suites engineers trust — not a brittle script pile. TestSync Lab builds Playwright (default), Cypress, or Selenium coverage on critical paths, wires CI gates, and still pairs humans for new work. USA-first retainers; also UK, Canada, Australia, Europe.",
    highlights: [
      {
        title: "Critical-path automation",
        detail:
          "Auth, permissions, checkout/billing, core workflows — short runtime, high signal.",
      },
      {
        title: "CI wiring + flake ownership",
        detail:
          "What blocks deploy vs what warns — documented for your pipeline.",
      },
      {
        title: "Inside Growth & Scale",
        detail:
          "Automation depth sits in $1,899+ packages. Basic stays manual-first until you are ready.",
      },
    ],
    pains: [
      {
        title: "Tools installed, nobody owns red builds",
        detail:
          "We triage flakes and shrink noise so CI stays believable.",
      },
      {
        title: "Automating unstable UI too early",
        detail:
          "We automate after paths stabilize; exploratory QA covers the rest.",
      },
      {
        title: "Vendor scripts you cannot maintain",
        detail:
          "Suites follow your repo conventions so your team can own them later.",
      },
    ],
    faqs: [
      {
        question: "Playwright vs Cypress vs Selenium?",
        answer:
          "Playwright is our default for modern web. We use Cypress or Selenium when that is already your standard. See /playwright-testing-company.",
      },
      {
        question: "Is automation sold alone?",
        answer:
          "Usually paired with manual QA. Pure automation pods available after discovery on Growth/Scale/Enterprise.",
      },
      {
        question: "How do we start?",
        answer: "Free audit at /contact — share repo/CI context if you have it.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "Automation testing services",
  },
  {
    slug: "mobile-app-testing",
    path: "/mobile-app-testing",
    navLabel: "Mobile app testing",
    navDescription: "iOS & Android QA on remote retainers.",
    eyebrow: "Mobile QA",
    h1: "Mobile app testing services for iOS and Android SaaS",
    title: "Mobile App Testing Services | iOS & Android QA from $999",
    description:
      "Mobile app testing for iOS and Android. Remote QA retainers for functional, regression, and release testing — USA and global product teams from $999. Free audit.",
    keywords: [
      "mobile app testing",
      "mobile app testing services",
      "iOS testing services",
      "Android testing services",
      "mobile QA testing",
      "hire mobile app testers",
      "mobile application testing company",
    ],
    intro:
      "Mobile app testing needs real device judgment — onboarding, permissions, payments, offline, and store-build risk. TestSync Lab runs remote mobile QA inside monthly retainers for US and global teams, alongside web/API coverage when your product spans both.",
    highlights: [
      {
        title: "Functional + release mobile QA",
        detail:
          "Exploratory sessions, regression on critical mobile journeys, and pre-submit smoke when builds allow.",
      },
      {
        title: "Clear bug reports",
        detail:
          "Device/OS notes, steps, severity, and evidence your mobile eng can act on.",
      },
      {
        title: "Same retainer as web when needed",
        detail:
          "One pod can cover app + API + web admin — scoped in the free audit.",
      },
    ],
    pains: [
      {
        title: "Web-only vendors who “also tap apps”",
        detail:
          "We treat mobile journeys as first-class — not an afterthought checklist.",
      },
      {
        title: "Device matrix theater",
        detail:
          "We prioritize devices your users actually use, then expand from crash/escape data.",
      },
      {
        title: "No access to TestFlight / Play tracks",
        detail:
          "Share builds securely; we confirm access needs before kickoff.",
      },
    ],
    faqs: [
      {
        question: "Do you provide a physical device lab?",
        answer:
          "We cover agreed devices/OS versions in scope. Enterprise can expand matrix needs. Tell us targets on the audit form.",
      },
      {
        question: "Mobile automation too?",
        answer:
          "Available on scoped Growth/Scale/Enterprise when stable. Many teams start manual mobile + API automation first.",
      },
      {
        question: "How do we start?",
        answer: "Free audit at /contact with platform (iOS/Android) and next store release.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "Mobile app testing services",
  },
  {
    slug: "ai-qa-testing",
    path: "/ai-qa-testing",
    navLabel: "AI QA testing",
    navDescription: "AI SQA for chatbots, RAG, and LLM features.",
    eyebrow: "AI QA / AI SQA",
    h1: "AI QA testing & AI SQA for chatbots, RAG, and LLM products",
    title: "AI QA Testing & AI SQA Services | Chatbot LLM RAG Testing",
    description:
      "AI QA testing and AI SQA for chatbots, copilots, RAG, and LLM apps. Golden sets, jailbreak checks, prompt regression — scoped sprints separate from classic $999 QA retainers.",
    keywords: [
      "AI QA testing",
      "AI SQA",
      "AI testing services",
      "chatbot testing services",
      "LLM testing",
      "RAG testing",
      "AI quality assurance",
      "generative AI QA",
    ],
    intro:
      "AI QA testing (AI SQA) is how you keep chatbots, copilots, and RAG features trustworthy when models and prompts change. TestSync Lab runs scoped AI testing sprints — golden sets, failure paths, jailbreaks, retrieval checks — separate from classic product QA retainers so pricing stays honest for USA and global SaaS teams.",
    highlights: [
      {
        title: "AI treated like a release",
        detail:
          "Happy path, failure path, refusals, tool calls, and regression when the model swaps.",
      },
      {
        title: "Golden sets you own",
        detail:
          "Repeatable eval prompts and expected behaviors — not a one-off demo.",
      },
      {
        title: "Clean split from Basic/Growth/Scale",
        detail:
          "Classic QA stays $999–$2,799. AI SQA is sprint or add-on — see /ai and /pricing#ai-testing.",
      },
    ],
    pains: [
      {
        title: "Prompt demos sold as QA",
        detail:
          "We test like production: abuse cases, weak retrieval, and silent regressions.",
      },
      {
        title: "AI stuffed into a cheap retainer",
        detail:
          "Open-ended LLM work needs discovery. We scope first, then quote.",
      },
      {
        title: "No eval memory after model change",
        detail:
          "Your golden set becomes the gate every time the model or system prompt moves.",
      },
    ],
    faqs: [
      {
        question: "Is AI QA the same as our $999 package?",
        answer:
          "No. Basic/Growth/Scale are classic product QA. AI QA testing is a separate sprint or Growth/Scale add-on after a short discovery.",
      },
      {
        question: "What AI surfaces do you test?",
        answer:
          "Chatbots, copilots, RAG/search, agents/tool calling, and AI workflows. Details on /ai.",
      },
      {
        question: "How do we start?",
        answer:
          "Contact with plan “AI Testing Sprint” — share the AI surface, stack, and next release.",
      },
    ],
    areaServedName: [...NA],
    serviceName: "AI QA testing and AI SQA services",
  },
  {
    slug: "software-qa-services",
    path: "/software-qa-services",
    navLabel: "Software QA services",
    navDescription: "End-to-end software QA on monthly retainers.",
    eyebrow: "Software QA",
    h1: "Software QA services for product teams that cannot ship blind",
    title: "Software QA Services | Hire Remote QA from $999/mo | TestSync Lab",
    description:
      "Software QA services for startups and SaaS. Remote manual QA, API testing, automation, and release gates from $999/mo — USA, UK, Canada, Australia, Europe. Free audit.",
    keywords: [
      "software QA services",
      "software QA testing",
      "software QA company",
      "hire software QA",
      "outsourced software QA",
      "software QA for startups",
      "QA software testing services",
    ],
    intro:
      "Software QA services exist to keep releases demoable and customers safe. TestSync Lab is a remote software QA partner: monthly retainers, senior testers, and clear reporting for US product teams first — plus UK, Canada, Australia, and Europe.",
    highlights: [
      {
        title: "End-to-end software QA",
        detail:
          "Exploratory, regression, API, automation, performance spots — packaged clearly.",
      },
      {
        title: "Built for SaaS cadence",
        detail:
          "Weekly shippers get follow-the-sun verification and Slack-native bugs.",
      },
      {
        title: "SQA + QA + QC vocabulary covered",
        detail:
          "Whatever term your stakeholders use, the delivery is risk maps and verified builds.",
      },
    ],
    pains: [
      {
        title: "Staffing firms labeled as QA services",
        detail:
          "You need outcomes on critical paths, not resumes alone.",
      },
      {
        title: "Unclear scope before payment",
        detail:
          "Free audit → written fit → retainer. No mystery SOW.",
      },
      {
        title: "Ignoring AI features",
        detail:
          "Classic software QA here; AI surfaces on /ai-qa-testing when needed.",
      },
    ],
    faqs: [
      {
        question: "Software QA vs software testing services?",
        answer:
          "Same lab and packages. Use this page or /software-testing-services — both route to our retainers.",
      },
      {
        question: "Which markets do you prioritize?",
        answer:
          "USA first (including NYC and Bay Area pages), then UK, Canada, Australia, Europe. Pakistan/India clients welcome too.",
      },
      {
        question: "How do we start?",
        answer: "Free audit at /contact or pick a market page under Company → markets.",
      },
    ],
    areaServedName: [...NA, "Pakistan"],
    serviceName: "Software QA services",
  },
];
