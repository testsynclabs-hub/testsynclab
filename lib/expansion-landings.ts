import type { RankLanding } from "@/lib/rank-landings";

const WORLD = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Singapore",
  "India",
  "Pakistan",
  "Worldwide",
] as const;

const price =
  "Basic $999 · Growth $1,899 · Scale $2,799. About 40 QA hours a week. A free audit maps the next release to a package.";

function page(input: {
  slug: string;
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
  faqs: { question: string; answer: string }[];
  serviceName: string;
}): RankLanding {
  return { ...input, path: `/${input.slug}`, areaServedName: [...WORLD] };
}

/** Extra commercial keywords that did not have their own URL yet. */
export const expansionLandings: RankLanding[] = [
  page({
    slug: "qa-testing-services",
    navLabel: "QA testing services",
    navDescription: "Monthly QA testing services for web, mobile, and API products.",
    eyebrow: "QA testing services",
    h1: "QA testing services for teams that ship every week",
    title: "QA Testing Services | Best Remote QA from $999 | TestSync Lab",
    description:
      "QA testing services for SaaS, ecommerce, and fintech teams in the USA, UK, Canada, Australia, and the Gulf. Manual, API, and Playwright retainers from $999. Free audit.",
    keywords: [
      "QA testing services",
      "QA testing company",
      "quality assurance testing services",
      "software QA testing services",
      "hire QA testing services",
      "best QA testing services",
      "QA testing services for startups",
    ],
    intro:
      "QA testing services should tell you what was tested, what failed, and whether the release can go. TestSync Lab runs that cycle on a monthly retainer: exploratory and regression on Basic, API and Playwright on Growth, release gates on Scale. The same lab covers the USA, UK, Canada, Australia, Europe, and the Gulf.",
    highlights: [
      {
        title: "A written cycle, not a vague test pass",
        detail:
          "Each round names the journeys, the environments, and the bugs with steps, severity, and evidence.",
      },
      {
        title: "Web, mobile, and API in one pod",
        detail:
          "You do not split checkout, the app, and the contract across three vendors.",
      },
      {
        title: "Capacity you can budget",
        detail: price,
      },
    ],
    pains: [
      {
        title: "Testing that starts the night before launch",
        detail: "A named weekly cycle replaces founder clicking.",
      },
      {
        title: "Reports that engineers cannot reproduce",
        detail: "We send environment, steps, and evidence in Slack or Jira.",
      },
      {
        title: "Hourly bills that spike in release week",
        detail: "The retainer holds the hours when the sprint gets busy.",
      },
    ],
    faqs: [
      {
        question: "What is included in QA testing services?",
        answer:
          "Manual exploratory and regression on every package. API checks and Playwright start on Growth. Performance spot checks and a named lead start on Scale. AI product testing is scoped separately on /ai-qa-testing.",
      },
      {
        question: "How is this different from software testing services?",
        answer:
          "Same lab and packages. This page matches people searching for QA testing services. The broader offer is on /software-testing-services.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "QA testing services",
  }),
  page({
    slug: "qa-company",
    navLabel: "QA company",
    navDescription: "A remote QA company for product teams, not a staffing bench.",
    eyebrow: "QA company",
    h1: "A QA company for product teams that need coverage this month",
    title: "QA Company | Remote Software QA from $999 | TestSync Lab",
    description:
      "TestSync Lab is a remote QA company for startups and SaaS teams worldwide. Monthly QA from $999 for manual testing, API checks, Playwright, and release reporting. Free audit.",
    keywords: [
      "QA company",
      "QA companies",
      "software QA company",
      "quality assurance company",
      "best QA company",
      "QA company for startups",
      "remote QA company",
    ],
    intro:
      "A QA company is useful when it owns a release cycle, not when it forwards a pile of junior hours. TestSync Lab is a remote QA company: a named pod, public monthly prices, and bugs your engineers can fix. Compare fit on /best-qa-company and /best-qa-agency.",
    highlights: [
      {
        title: "Named testers, not a rotating bench",
        detail:
          "Context stays on your product from one release to the next.",
      },
      {
        title: "English reporting in your tools",
        detail: "Slack, Jira, Linear, GitHub. No extra portal.",
      },
      {
        title: "Worldwide, with timezone-aware handoffs",
        detail:
          "Follow-the-sun for the USA and Canada. Afternoon overlap for the UK and Europe. Same-day coverage for the Gulf.",
      },
    ],
    pains: [
      {
        title: "Companies that only sell seats",
        detail: "You still do not know what was tested.",
      },
      {
        title: "A logo list with no stage fit",
        detail:
          "Enterprise crowd-testing brands are a poor fit for an early release train.",
      },
      {
        title: "Hiring a QA lead takes a quarter",
        detail: "A retainer covers the critical paths now.",
      },
    ],
    faqs: [
      {
        question: "Are you a QA company or a freelancer network?",
        answer:
          "TestSync Lab is a QA company. You get a small named pod on a retainer, with a free audit before you buy.",
      },
      {
        question: "Which QA company page should I open for my country?",
        answer:
          "USA /qa-services-usa, UK /qa-services-uk, Canada /qa-services-canada, Australia /qa-services-australia, Gulf /qa-services-gulf.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "QA company",
  }),
  page({
    slug: "best-qa-services",
    navLabel: "Best QA services",
    navDescription: "How to judge the best QA services for a weekly release train.",
    eyebrow: "Best QA services",
    h1: "Best QA services for teams that cannot miss the next release",
    title: "Best QA Services | USA, UK, Canada, Australia & Gulf | TestSync Lab",
    description:
      "Best QA services for SaaS and startup teams: risk-ranked journeys, engineer-ready bugs, and monthly retainers from $999. USA, UK, Canada, Australia, Europe, and the Gulf.",
    keywords: [
      "best QA services",
      "best quality assurance services",
      "best software QA services",
      "top QA services",
      "best QA services for startups",
      "best QA services USA",
      "best QA services UK",
    ],
    intro:
      "The best QA services for a shipping team are the ones that protect checkout, auth, and permissions, then say clearly if the build can go. TestSync Lab sells that as a retainer from $999, not as an open hourly meter. Region pages cover the USA, UK, Canada, Australia, and the Gulf.",
    highlights: [
      {
        title: "Judge the bugs, not the pitch",
        detail:
          "Ask for a sample finding with steps and severity. The free audit is that sample, tied to your product.",
      },
      {
        title: "Same weekly capacity on every package",
        detail: price,
      },
      {
        title: "Services that match the search, one lab",
        detail:
          "Manual, API, automation, UAT, ecommerce, fintech, and mobile each have a page. Delivery stays on the same pod.",
      },
    ],
    pains: [
      {
        title: "Best-of lists that ignore your stage",
        detail: "A 500-person vendor is rarely the best QA service for a seed-stage release.",
      },
      {
        title: "Cheap testing that creates eng work",
        detail: "Vague notes cost more than a clear retainer.",
      },
      {
        title: "Services with no owner",
        detail: "We name who tests, where bugs go, and what the week covers.",
      },
    ],
    faqs: [
      {
        question: "What should the best QA services include?",
        answer:
          "A risk order, reproducible bugs, a weekly summary, and a price that does not jump in launch week. Automation comes after the money paths are understood.",
      },
      {
        question: "Do you claim to be ranked number one?",
        answer:
          "No. We are a strong fit when you want remote monthly QA. See /best-qa-agency for how we compare on fit.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Best QA services",
  }),
  page({
    slug: "qa-services-for-startups",
    navLabel: "QA for startups",
    navDescription: "Startup QA retainers that start before a full-time hire.",
    eyebrow: "Startups",
    h1: "QA services for startups that still ship without a QA hire",
    title: "QA Services for Startups | From $999/mo | TestSync Lab",
    description:
      "QA services for startups and early SaaS teams. Remote retainers from $999 cover exploratory testing, regression, and the paths that take payment. Free audit, no annual lock-in.",
    keywords: [
      "QA services for startups",
      "startup QA",
      "QA for startups",
      "best QA company for startups",
      "outsourced QA for startups",
      "QA services for small business",
      "startup software testing",
    ],
    intro:
      "Startups do not need a QA department. They need someone who can break the signup, billing, and invite flows before customers do. TestSync Lab is built for that stage: Basic at $999 a month, month-to-month, with a free audit so you see the risk before you buy.",
    highlights: [
      {
        title: "Basic is enough to start",
        detail:
          "Exploratory and regression on the journeys a new user must finish. Move to Growth when APIs and CI matter.",
      },
      {
        title: "No annual contract",
        detail: "Stay for the launch month or keep the pod as you ship weekly.",
      },
      {
        title: "Founder time back",
        detail: "The release checklist stops living in the founder’s browser history.",
      },
    ],
    pains: [
      {
        title: "The first QA hire is a quarter away",
        detail: "Coverage can start in days after scope.",
      },
      {
        title: "Friends and founders as the only testers",
        detail: "A named cycle catches the repeat bugs.",
      },
      {
        title: "Agencies priced for enterprises",
        detail: "Public packages start at $999, not a custom six-figure SOW.",
      },
    ],
    faqs: [
      {
        question: "Is this only for US startups?",
        answer:
          "No. The same retainer fits startups in the UK, Canada, Australia, Europe, the Gulf, Singapore, India, and Pakistan. Open the market page for timezone notes.",
      },
      {
        question: "What if we only have staging and a rough build?",
        answer:
          "That is enough for an audit. Share the URL, the stack, and the date you want to ship.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "QA services for startups",
  }),
  page({
    slug: "software-testing-outsourcing",
    navLabel: "Software testing outsourcing",
    navDescription: "Outsource software testing without losing the release story.",
    eyebrow: "Outsourcing",
    h1: "Software testing outsourcing that still reports like an in-house pod",
    title: "Software Testing Outsourcing | Remote QA from $999 | TestSync Lab",
    description:
      "Software testing outsourcing for product teams. Monthly remote QA from $999: manual testing, API validation, Playwright, and written release notes. Free audit.",
    keywords: [
      "software testing outsourcing",
      "outsourcing software testing",
      "outsource QA testing",
      "software testing outsourcing company",
      "QA outsourcing services",
      "offshore software testing",
      "outsourced software testing services",
    ],
    intro:
      "Software testing outsourcing fails when the vendor disappears into a ticket queue. It works when a named pod sits in Slack, tests the journeys that make money, and sends bugs with steps. That is the TestSync Lab retainer. See also /qa-outsourcing and /offshore-qa-testing.",
    highlights: [
      {
        title: "You keep the quality bar",
        detail: "We do not replace your accept or reject decision. We bring the evidence.",
      },
      {
        title: "Outsource the cycle, not the context",
        detail: "Regression memory stays on the same product month to month.",
      },
      {
        title: "A price before kickoff",
        detail: price,
      },
    ],
    pains: [
      {
        title: "Outsourcing that hides what was tested",
        detail: "Every cycle has findings, severity, and a weekly note.",
      },
      {
        title: "A body shop billed by the hour",
        detail: "Busy weeks should not create invoice anxiety.",
      },
      {
        title: "Handoffs that miss your morning",
        detail: "USA and Canada get follow-the-sun notes. Gulf and Singapore get same-day overlap.",
      },
    ],
    faqs: [
      {
        question: "Is software testing outsourcing the same as staff augmentation?",
        answer:
          "No. Staff aug adds a person to your standup. This retainer owns a test cycle and a report. You can still talk to the testers in Slack.",
      },
      {
        question: "What do you need from us?",
        answer:
          "Staging or a test build, tickets or acceptance criteria, and Slack, email, or Jira.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Software testing outsourcing",
  }),
  page({
    slug: "shopify-testing-services",
    navLabel: "Shopify testing",
    navDescription: "Shopify and ecommerce journey testing before campaign launches.",
    eyebrow: "Shopify",
    h1: "Shopify testing services for stores that cannot break checkout",
    title: "Shopify Testing Services | Store QA from $999 | TestSync Lab",
    description:
      "Shopify testing services for checkout, discounts, apps, and theme changes. Remote QA retainers from $999 cover shopper journeys and merchant admin. Free audit.",
    keywords: [
      "Shopify testing services",
      "Shopify QA",
      "Shopify testing company",
      "ecommerce QA Shopify",
      "Shopify checkout testing",
      "Shopify app testing",
      "Magento testing services",
    ],
    intro:
      "A Shopify theme push or app install can break checkout, discounts, or the thank-you page the night a campaign starts. TestSync Lab tests those shopper and merchant journeys by hand, including negative cases, on retainers from $999. Magento stores use the same cycle. Broader ecommerce coverage is on /ecommerce-testing-services.",
    highlights: [
      {
        title: "Checkout, discounts, and apps",
        detail:
          "Guest checkout, logged-in checkout, codes, shipping, taxes, and the apps that touch payment.",
      },
      {
        title: "Mobile shoppers included",
        detail: "The paths people finish on a phone, not only desktop Chrome.",
      },
      {
        title: "Campaign week coverage",
        detail: "Basic holds manual depth. Growth adds API checks when the stack goes beyond the theme.",
      },
    ],
    pains: [
      {
        title: "Theme updates shipped untested",
        detail: "A short regression pack covers the money path before the campaign.",
      },
      {
        title: "App conflicts found by customers",
        detail: "We retest checkout after the apps that touch cart or payment.",
      },
      {
        title: "Merchant admin nobody checks",
        detail: "Orders, refunds, and product edits are part of the cycle when you need them.",
      },
    ],
    faqs: [
      {
        question: "Do you test Shopify Plus and custom storefronts?",
        answer:
          "Yes, on staging or a password-protected store. Share the theme, the apps, and the journeys that take payment.",
      },
      {
        question: "Do you also test Magento?",
        answer:
          "Yes. Cart, checkout, promotions, and admin on Magento follow the same retainer. Say so on the audit form.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Shopify testing services",
  }),
  page({
    slug: "sanity-testing-services",
    navLabel: "Sanity testing",
    navDescription: "Sanity and smoke checks after a build, before the deep pass.",
    eyebrow: "Sanity testing",
    h1: "Sanity testing services after every build that might ship",
    title: "Sanity Testing Services | Release Checks from $999 | TestSync Lab",
    description:
      "Sanity testing services for SaaS releases. Narrow checks after a fix or build, plus smoke and regression on monthly retainers from $999. Free audit.",
    keywords: [
      "sanity testing services",
      "sanity testing",
      "smoke vs sanity testing",
      "sanity testing company",
      "release sanity testing",
      "build verification testing",
    ],
    intro:
      "Sanity testing is the narrow pass after a fix: did this change break the area it touched? Smoke asks whether the build is even testable. TestSync Lab runs both, then a deeper regression when the release needs it. Teams that only sanity-check on Friday still miss the old bugs. The retainer keeps a pack.",
    highlights: [
      {
        title: "A short list, owned",
        detail: "Login, the changed flow, and one money path. Failures stop the deeper pass.",
      },
      {
        title: "Tied to regression, not instead of it",
        detail: "Sanity after a hotfix. Regression before a planned release. See /regression-testing-services and /smoke-testing-services.",
      },
      {
        title: "Same-day notes",
        detail: "Pass or fail with evidence, not a chat message that says looks fine.",
      },
    ],
    pains: [
      {
        title: "Sanity and smoke used as the same word",
        detail: "We name which one ran so the release owner knows the depth.",
      },
      {
        title: "Hotfixes with no check at all",
        detail: "A standing pack makes the narrow pass fast.",
      },
      {
        title: "Green CI and a broken checkout",
        detail: "Sanity includes the path a customer must finish, not only unit tests.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between sanity and smoke testing?",
        answer:
          "Smoke is a broad, shallow check that the build is worth testing. Sanity is a narrow check around a specific fix. Most teams need both, plus regression before go-live.",
      },
      {
        question: "Can sanity testing be the whole retainer?",
        answer:
          "It can be the first week. Most weekly shippers add regression and, on Growth, API checks.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Sanity testing services",
  }),
  page({
    slug: "beta-testing-services",
    navLabel: "Beta testing",
    navDescription: "Structured beta and pre-launch testing with real user journeys.",
    eyebrow: "Beta testing",
    h1: "Beta testing services before you call a release public",
    title: "Beta Testing Services | Pre-launch QA from $999 | TestSync Lab",
    description:
      "Beta testing services for app and SaaS launches. Structured pre-release journeys, device checks, and clear defects before you open the product. Retainers from $999.",
    keywords: [
      "beta testing services",
      "beta testing company",
      "pre launch testing",
      "app beta testing",
      "software beta testing",
      "UAT and beta testing",
    ],
    intro:
      "Beta testing is where real journeys meet a build that is almost ready. TestSync Lab runs that as a structured pass: roles, devices, and the failure paths, with bugs your team can fix before the public launch. It sits next to UAT on /uat-testing-services. You still own the final go-live decision.",
    highlights: [
      {
        title: "Journeys, not a feedback form",
        detail: "Each beta scenario has steps, expected results, and evidence when it fails.",
      },
      {
        title: "Web and mobile",
        detail: "iOS and Android notes when the beta is an app. See /ios-app-testing and /android-app-testing.",
      },
      {
        title: "A go / no-go list",
        detail: "Blockers are separated from polish so launch day is a decision, not a surprise.",
      },
    ],
    pains: [
      {
        title: "Beta users who only say it feels off",
        detail: "We turn that into a repro.",
      },
      {
        title: "Launch dates with no exit criteria",
        detail: "The pack says what must pass.",
      },
      {
        title: "Feedback lost in chat",
        detail: "Findings land in Jira or Slack with severity.",
      },
    ],
    faqs: [
      {
        question: "Do you recruit a crowd of beta users?",
        answer:
          "No. Testers on our pod execute the beta journeys you scope. If you already have external beta users, we can turn their notes into reproducible bugs.",
      },
      {
        question: "How long is a beta cycle?",
        answer:
          "A focused pre-launch pass fits inside a retainer month. Tell us the date on the audit form.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Beta testing services",
  }),
  page({
    slug: "black-box-testing-services",
    navLabel: "Black box testing",
    navDescription: "Black-box testing from the outside of the product, like a user.",
    eyebrow: "Black box testing",
    h1: "Black box testing services that follow the user, not the source",
    title: "Black Box Testing Services | Remote QA from $999 | TestSync Lab",
    description:
      "Black box testing services for web and mobile products. Testers work from the outside: requirements, roles, and real journeys. Monthly QA from $999. Free audit.",
    keywords: [
      "black box testing services",
      "black box testing",
      "black box testing company",
      "functional black box testing",
      "specification based testing",
      "behavioral testing services",
    ],
    intro:
      "Black box testing treats the product the way a customer does. Testers do not need your source to find a broken checkout, a bad permission, or a validation gap. TestSync Lab’s manual retainers are black-box first. White-box unit tests stay with your engineers. When you want contracts and CI as well, Growth adds API and Playwright.",
    highlights: [
      {
        title: "Requirements and roles",
        detail: "We test what the user can do, including the cases the ticket forgot.",
      },
      {
        title: "Positive and negative",
        detail: "Happy paths for sign-off. Invalid data, expired sessions, and failed payments so launch is quieter.",
      },
      {
        title: "No source required to start",
        detail: "Staging access and the rules of the feature are enough.",
      },
    ],
    pains: [
      {
        title: "Only the coded path was tested",
        detail: "Black-box passes catch the behavior users hit.",
      },
      {
        title: "Checklists with no judgment",
        detail: "Exploratory time sits beside the script.",
      },
      {
        title: "Automation that never looked at the UI",
        detail: "API green is not a finished checkout.",
      },
    ],
    faqs: [
      {
        question: "Do you do white-box testing?",
        answer:
          "Unit and code-level tests stay with your engineers. We test from the outside, then add API and UI automation where the release needs it.",
      },
      {
        question: "Is black box the same as functional testing?",
        answer:
          "Functional testing is the goal. Black box is the method: no reliance on source. See /functional-testing-services.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Black box testing services",
  }),
  page({
    slug: "qa-consulting",
    navLabel: "QA consulting",
    navDescription: "QA consulting plus the people who execute the cycle.",
    eyebrow: "QA consulting",
    h1: "QA consulting that ends in a test cycle, not a slide deck",
    title: "QA Consulting Services | Test Strategy and Retainers | TestSync Lab",
    description:
      "QA consulting for product teams that need a test strategy and people to run it. Risk maps, release gates, and monthly execution from $999. Free audit.",
    keywords: [
      "QA consulting",
      "QA consulting services",
      "software testing consulting",
      "QA strategy consulting",
      "test process consulting",
      "QA advisory services",
    ],
    intro:
      "QA consulting is useful when it changes the next release, not when it ends as a PDF. TestSync Lab starts with a free audit: a risk map, what to test this month, and which package fits. Then the same lab executes. Strategy without testers is a workshop. Testers without a risk order click at random.",
    highlights: [
      {
        title: "Audit before a retainer",
        detail: "You see the journeys ranked by blast radius before you buy hours.",
      },
      {
        title: "A process your team can keep",
        detail: "Smoke, sanity, regression, and a go / no-go list written in your tools.",
      },
      {
        title: "Execution included",
        detail: "Consulting is not a separate retainer. The pod does the testing.",
      },
    ],
    pains: [
      {
        title: "Strategy decks nobody opens",
        detail: "The audit is a working artifact for the next release.",
      },
      {
        title: "Process with no testers",
        detail: "We run the cycle we recommend.",
      },
      {
        title: "Tools bought before risk is known",
        detail: "Playwright comes after the money paths are clear.",
      },
    ],
    faqs: [
      {
        question: "Can we buy consulting without a monthly retainer?",
        answer:
          "The free audit is the consulting start. Ongoing strategy and execution sit on Basic, Growth, or Scale. A one-off pass can be scoped after the call.",
      },
      {
        question: "Will you set up our QA process from zero?",
        answer:
          "Yes. We start from how you ship today and add the minimum pack that protects the next release.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "QA consulting",
  }),
  page({
    slug: "localization-testing-services",
    navLabel: "Localization testing",
    navDescription: "Locale, RTL, and currency checks on the journeys that ship.",
    eyebrow: "Localization",
    h1: "Localization testing services for products that ship in more than one language",
    title: "Localization Testing Services | RTL and Locale QA | TestSync Lab",
    description:
      "Localization testing services for English, Arabic, and other locales. RTL layout, truncation, currency, and checkout QA on retainers from $999. Free audit.",
    keywords: [
      "localization testing services",
      "localisation testing",
      "RTL testing",
      "Arabic localization testing",
      "internationalization testing",
      "i18n QA",
      "l10n testing services",
    ],
    intro:
      "Localization bugs are product bugs. A truncated button, a broken RTL checkout, or the wrong currency format stops the sale. TestSync Lab tests the locales you actually ship, including Arabic and English side by side for Gulf products, on the same retainer as functional QA.",
    highlights: [
      {
        title: "The journey in each locale",
        detail: "Not a screenshot of the homepage. Signup, pay, and the empty states.",
      },
      {
        title: "RTL layout",
        detail: "Alignment, icons, and overflow on Arabic interfaces.",
      },
      {
        title: "Currency and formats",
        detail: "Prices, dates, and address forms on the markets you charge.",
      },
    ],
    pains: [
      {
        title: "English passed and Arabic broke checkout",
        detail: "Both locales stay in the pack when both ship.",
      },
      {
        title: "Strings that overflow on mobile",
        detail: "We check the small screen, where truncation hides the action.",
      },
      {
        title: "Locale files with no owner",
        detail: "Regressions come back when a new screen ships in one language only.",
      },
    ],
    faqs: [
      {
        question: "Do you translate the product?",
        answer:
          "No. We test the localized build you provide. Translation stays with your team or vendor.",
      },
      {
        question: "Which languages do you cover?",
        answer:
          "We execute the locales you scope. Arabic and English are common for Gulf clients. Name the rest on the audit form.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact. Gulf context: /qa-services-gulf.",
      },
    ],
    serviceName: "Localization testing services",
  }),
  page({
    slug: "payment-testing-services",
    navLabel: "Payment testing",
    navDescription: "Checkout, failure, refund, and reconciliation path testing.",
    eyebrow: "Payments",
    h1: "Payment testing services for checkout, failure, and refund paths",
    title: "Payment Testing Services | Checkout QA from $999 | TestSync Lab",
    description:
      "Payment testing services for checkout, failed payments, refunds, and reconciliation. Remote QA retainers from $999 for SaaS, ecommerce, and fintech teams. Free audit.",
    keywords: [
      "payment testing services",
      "payment gateway testing",
      "checkout testing services",
      "QA for payments",
      "refund testing",
      "billing QA",
      "fintech payment testing",
    ],
    intro:
      "Payment testing is where a green UI still loses money. Failed cards, partial refunds, webhook retries, and the admin view of an order have to match. TestSync Lab tests those journeys on staging, with API checks on Growth when the gateway callbacks matter. We do not replace a card-scheme certification. See /fintech-testing-services and /ecommerce-testing-services.",
    highlights: [
      {
        title: "Success and failure",
        detail: "Approved, declined, timeout, and duplicate-submit paths.",
      },
      {
        title: "Refunds and invoices",
        detail: "What the customer sees and what finance sees after a refund.",
      },
      {
        title: "Evidence for the release owner",
        detail: "Steps, test data, and the expected versus actual result.",
      },
    ],
    pains: [
      {
        title: "Only the happy card was tested",
        detail: "Declines and timeouts are in the pack.",
      },
      {
        title: "Webhooks that fail quietly",
        detail: "Growth adds contract checks so the UI is not the only signal.",
      },
      {
        title: "Reconciliation left for production",
        detail: "We compare the order, the payment, and the invoice on staging.",
      },
    ],
    faqs: [
      {
        question: "Do you certify payment schemes?",
        answer:
          "No. We test your product journeys and APIs. Scheme or bank certification stays with you.",
      },
      {
        question: "Which gateways can you test?",
        answer:
          "Any gateway you can exercise on staging or sandbox. Name it on the audit form.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Payment testing services",
  }),
  page({
    slug: "top-software-testing-companies",
    navLabel: "Top testing companies",
    navDescription: "How to shortlist top software testing companies without a fake ranking.",
    eyebrow: "Buyer guide",
    h1: "How to shortlist top software testing companies for a product team",
    title: "Top Software Testing Companies | How to Choose | TestSync Lab",
    description:
      "Comparing top software testing companies? Use release speed, bug quality, and a clear monthly price. TestSync Lab is a remote QA company from $999 for USA, UK, Canada, Australia, and Gulf teams.",
    keywords: [
      "top software testing companies",
      "top QA companies",
      "best software testing companies",
      "top QA companies in USA",
      "top software testing companies in world",
      "leading QA companies",
      "software testing companies list",
    ],
    intro:
      "Lists of top software testing companies are mostly ads. A useful shortlist asks three things: can they start this month, can engineers act on the bugs, and is the price stable in a busy sprint. TestSync Lab is built for that shortlist: remote retainers from $999, about 40 hours a week, and a free audit. We do not buy a number-one badge.",
    highlights: [
      {
        title: "Questions that sort the list",
        detail:
          "Who owns flakes? What does a bug look like? What is out of scope? If the answers are vague, keep looking.",
      },
      {
        title: "A company you can price",
        detail: price,
      },
      {
        title: "Regions on their own pages",
        detail:
          "USA, UK, Canada, Australia, Gulf, Singapore, India, and Pakistan each have timezone notes.",
      },
    ],
    pains: [
      {
        title: "Award badges with no sample bugs",
        detail: "Ask for a redacted finding before you sign.",
      },
      {
        title: "Global brands that cannot join your standup",
        detail: "Timezone overlap matters more than office count.",
      },
      {
        title: "A list that ignores startups",
        detail: "The top company for a bank is often the wrong company for a seed-stage SaaS.",
      },
    ],
    faqs: [
      {
        question: "Are you one of the top software testing companies?",
        answer:
          "We are a fit when you want a remote monthly QA pod, not a 1,000-person factory. Read /best-qa-agency for the offer, then judge the audit.",
      },
      {
        question: "What should we send before a call?",
        answer: "Staging URL, stack, and the next release date.",
      },
      {
        question: "How do we start?",
        answer: "Book a free QA audit at /contact.",
      },
    ],
    serviceName: "Top software testing companies",
  }),
];
