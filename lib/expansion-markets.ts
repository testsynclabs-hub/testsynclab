import type { MarketPage } from "@/lib/markets";

function geo(input: {
  slug: string;
  tier: "country" | "city";
  navLabel: string;
  navDescription: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  intro: string;
  localTitle: string;
  localDetail: string;
  painTitle: string;
  painDetail: string;
  faqQuestion: string;
  faqAnswer: string;
  countryName: string;
  ogLocale: string;
  hreflang: string;
  parent: string;
}): MarketPage {
  return {
    slug: input.slug,
    path: `/qa-services-${input.slug}`,
    navLabel: input.navLabel,
    navDescription: input.navDescription,
    tier: input.tier,
    eyebrow: input.eyebrow,
    h1: input.h1,
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    intro: input.intro,
    highlights: [
      {
        title: input.localTitle,
        detail: input.localDetail,
      },
      {
        title: "Public monthly packages",
        detail:
          "Basic $999 · Growth $1,899 · Scale $2,799. About 40 QA hours a week. Manual first, API and Playwright on Growth.",
      },
      {
        title: "Bugs engineers can fix",
        detail:
          "Steps, severity, environment, and evidence in Slack, Jira, Linear, or GitHub.",
      },
    ],
    pains: [
      {
        title: input.painTitle,
        detail: input.painDetail,
      },
      {
        title: "A full-time hire that misses the launch",
        detail: "Remote coverage starts in days after a free audit at /contact.",
      },
      {
        title: "Notes that say please check",
        detail: "We write the repro so the first pass at a fix is the right one.",
      },
    ],
    faqs: [
      {
        question: input.faqQuestion,
        answer: input.faqAnswer,
      },
      {
        question: "Do you have a local office here?",
        answer:
          "No. Coverage is remote, in English, invoiced in USD. We work in your tools and overlap the hours named on this page.",
      },
      {
        question: "How do we start?",
        answer: `Book a free QA audit at /contact. Regional context: ${input.parent}.`,
      },
    ],
    countryName: input.countryName,
    ogLocale: input.ogLocale,
    hreflang: input.hreflang,
  };
}

export const expansionMarkets: MarketPage[] = [
  geo({
    slug: "middle-east",
    tier: "country",
    navLabel: "QA for Middle East teams",
    navDescription: "Remote QA for Gulf, Levant, and wider Middle East product teams.",
    eyebrow: "Middle East",
    h1: "Best QA agency for Middle East product teams",
    title: "Best QA Agency Middle East | QA Services from $999 | TestSync Lab",
    description:
      "Best QA agency for Middle East product teams. Remote QA from $999 with same-day overlap for GST and AST, English reporting, and Arabic locale testing. Free audit.",
    keywords: [
      "best QA agency Middle East",
      "QA services Middle East",
      "software testing company Middle East",
      "QA company MENA",
      "outsourced QA Middle East",
      "hire QA testers Middle East",
    ],
    intro:
      "Middle East product teams ship fintech, marketplaces, and bilingual apps on GST and AST calendars. Local senior QA is scarce and expensive. TestSync Lab covers that from a lab one to two hours ahead, so your morning questions get answers the same day. Gulf detail lives on /qa-services-gulf.",
    localTitle: "GST and AST overlap",
    localDetail:
      "UAE and Oman are one hour away. Saudi Arabia, Qatar, Kuwait, and Bahrain are two. That is a working-day overlap, not a night shift.",
    painTitle: "English passed, Arabic checkout failed",
    painDetail:
      "When both locales ship, both stay in the cycle, including RTL layout. See /localization-testing-services.",
    faqQuestion: "Which Middle East countries do you cover?",
    faqAnswer:
      "UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and remote-first teams elsewhere in the region. Country pages start at /qa-services-gulf.",
    countryName: "Middle East",
    ogLocale: "en_AE",
    hreflang: "en-AE",
    parent: "/qa-services-gulf",
  }),
  geo({
    slug: "singapore",
    tier: "country",
    navLabel: "QA for Singapore teams",
    navDescription: "Remote QA for Singapore SaaS and fintech teams.",
    eyebrow: "Singapore",
    h1: "Best QA agency for Singapore product teams",
    title: "Best QA Agency Singapore | QA Services from $999 | TestSync Lab",
    description:
      "Best QA agency in Singapore for SaaS and fintech teams. Remote QA retainers from $999 USD with SGT overlap, English bug reports, and a free audit.",
    keywords: [
      "best QA agency Singapore",
      "QA services Singapore",
      "software testing company Singapore",
      "outsourced QA Singapore",
      "hire QA testers Singapore",
      "QA company Singapore",
    ],
    intro:
      "Singapore product teams run a tight, expensive hiring market and still ship weekly. TestSync Lab is the remote QA agency for that calendar. Singapore is UTC+8, three hours ahead of our lab, so your morning lines up with our afternoon for Slack and short calls.",
    localTitle: "SGT afternoon overlap",
    localDetail:
      "Questions during the Singapore morning land while our team is still online. Written bugs follow in Slack or Jira.",
    painTitle: "Fintech and marketplace launches with no spare QA",
    painDetail:
      "Checkout, permissions, and API failures are named in the cycle. Payment journeys: /payment-testing-services.",
    faqQuestion: "Do you work with Singapore companies?",
    faqAnswer:
      "Yes. Remote coverage, USD invoices, English reporting, and overlap into Singapore morning.",
    countryName: "Singapore",
    ogLocale: "en_SG",
    hreflang: "en-SG",
    parent: "/best-qa-agency",
  }),
  geo({
    slug: "india",
    tier: "country",
    navLabel: "QA for India teams",
    navDescription: "Remote QA for Indian product teams that need senior release coverage.",
    eyebrow: "India",
    h1: "Best QA agency for Indian product teams",
    title: "Best QA Agency India | QA Services from $999 | TestSync Lab",
    description:
      "QA services for Indian product and SaaS teams. Remote retainers from $999 USD with IST overlap, English reporting, and a free audit. Not a junior bench.",
    keywords: [
      "best QA agency India",
      "QA services India",
      "software testing company India",
      "QA company for Indian startups",
      "outsourced QA India",
      "hire QA testers Bangalore",
      "QA services Mumbai",
    ],
    intro:
      "Indian product teams in Bangalore, Mumbai, Hyderabad, and Delhi already know junior testing benches. The gap is senior release judgment: which journey can lose money, and a bug an engineer can fix. TestSync Lab sells that on a USD retainer. India Standard Time is 30 minutes behind our lab, so the workday overlaps almost fully.",
    localTitle: "Nearly the same workday as IST",
    localDetail:
      "Standups and bug questions happen while both sides are online. You are not buying a night-shift handoff.",
    painTitle: "Volume testing with no product judgment",
    painDetail:
      "We test fewer journeys more carefully: auth, billing, permissions, and the failure paths.",
    faqQuestion: "Is this a body shop for Indian enterprises?",
    faqAnswer:
      "No. It is a small named pod for product teams. If you need hundreds of junior testers, we are the wrong vendor.",
    countryName: "India",
    ogLocale: "en_IN",
    hreflang: "en-IN",
    parent: "/best-qa-agency",
  }),
  geo({
    slug: "pakistan",
    tier: "country",
    navLabel: "QA for Pakistan teams",
    navDescription: "QA services for Pakistani product teams, from the Lahore lab.",
    eyebrow: "Pakistan",
    h1: "QA services for Pakistan product teams",
    title: "QA Services Pakistan | Software Testing Company | TestSync Lab",
    description:
      "QA services in Pakistan for product teams in Lahore, Karachi, and Islamabad. Manual, API, and Playwright testing on monthly retainers from $999. Free audit.",
    keywords: [
      "QA services Pakistan",
      "software testing company Pakistan",
      "QA company Lahore",
      "QA company Karachi",
      "software testing company Islamabad",
      "best QA agency Pakistan",
      "SQA services Pakistan",
    ],
    intro:
      "TestSync Lab is a Pakistan-based QA company serving local product teams and clients worldwide. For teams in Lahore, Karachi, and Islamabad, the timezone is the same as ours, so calls and bug triage sit inside the workday. The Lahore page is /qa-agency-lahore. Global buyers start at /best-qa-agency.",
    localTitle: "Same hours as Lahore, Karachi, and Islamabad",
    localDetail:
      "No overnight handoff for Pakistani teams. English reporting, Slack or WhatsApp for scheduling, Jira for bugs.",
    painTitle: "Local freelancers with no regression memory",
    painDetail:
      "A retainer keeps the same pod on the product, so last month’s bugs do not return unnamed.",
    faqQuestion: "Do you only serve overseas clients?",
    faqAnswer:
      "No. Pakistani product teams can buy the same packages. Pricing is listed in USD. Ask on the audit form if you need a local invoice note.",
    countryName: "Pakistan",
    ogLocale: "en_PK",
    hreflang: "en-PK",
    parent: "/qa-agency-lahore",
  }),
  geo({
    slug: "ireland",
    tier: "city",
    navLabel: "QA for Ireland teams",
    navDescription: "Remote QA for Dublin and Irish product teams.",
    eyebrow: "Ireland",
    h1: "Best QA agency for Irish product teams",
    title: "Best QA Agency Ireland | Dublin QA Services from $999 | TestSync Lab",
    description:
      "Best QA agency in Ireland for Dublin SaaS teams. Remote retainers from $999 with UK-hour overlap, English reporting, and a free audit.",
    keywords: [
      "best QA agency Ireland",
      "QA services Ireland",
      "QA services Dublin",
      "software testing company Ireland",
      "outsourced QA Dublin",
      "hire QA testers Ireland",
    ],
    intro:
      "Irish product teams in Dublin share a calendar with the UK and a hiring market that cannot fill QA seats quickly. TestSync Lab covers releases on USD retainers, with afternoon overlap into Irish hours and follow-the-sun notes on evening deploys. UK context: /qa-services-uk.",
    localTitle: "Overlap with Dublin office hours",
    localDetail:
      "Ireland tracks UK time. Our afternoon lines up with your morning and midday for Slack or a short call.",
    painTitle: "EU hiring rules and an empty QA seat",
    painDetail: "A retainer covers the next release while a full-time search runs.",
    faqQuestion: "Do you work with Dublin companies?",
    faqAnswer: "Yes. Remote, USD invoices, English, and the same cadence as our UK clients.",
    countryName: "Ireland",
    ogLocale: "en_IE",
    hreflang: "en-IE",
    parent: "/qa-services-uk",
  }),
  geo({
    slug: "new-zealand",
    tier: "city",
    navLabel: "QA for New Zealand teams",
    navDescription: "Remote QA for Auckland and New Zealand product teams.",
    eyebrow: "New Zealand",
    h1: "Best QA agency for New Zealand product teams",
    title: "Best QA Agency New Zealand | QA Services from $999 | TestSync Lab",
    description:
      "Best QA agency in New Zealand for Auckland and remote-first teams. USD QA retainers from $999 with timezone-aware handoffs and a free audit.",
    keywords: [
      "best QA agency New Zealand",
      "QA services New Zealand",
      "QA services Auckland",
      "software testing company New Zealand",
      "outsourced QA NZ",
      "hire QA testers Auckland",
    ],
    intro:
      "New Zealand product teams ship on a small local QA pool and a calendar close to Australia’s east coast. TestSync Lab runs remote QA from $999, with async notes ready for the Auckland morning and the same packages as our Australian clients. Australia page: /qa-services-australia.",
    localTitle: "Notes ready for the NZ morning",
    localDetail:
      "You close the day with a build. Verification lands before the next New Zealand working block.",
    painTitle: "One hire covering web, mobile, and API",
    painDetail: "The retainer splits depth by package instead of asking one person to do every layer.",
    faqQuestion: "Do you work with Auckland teams?",
    faqAnswer: "Yes. Remote coverage for Auckland, Wellington, and remote-first NZ companies.",
    countryName: "New Zealand",
    ogLocale: "en_NZ",
    hreflang: "en-NZ",
    parent: "/qa-services-australia",
  }),
  geo({
    slug: "france",
    tier: "city",
    navLabel: "QA for France teams",
    navDescription: "Remote English-language QA for French product teams.",
    eyebrow: "France",
    h1: "Best QA agency for French product teams",
    title: "Best QA Agency France | QA Services from $999 | TestSync Lab",
    description:
      "QA services for French product teams in Paris and remote-first companies. English delivery, CET overlap, USD retainers from $999. Free audit.",
    keywords: [
      "best QA agency France",
      "QA services France",
      "QA services Paris",
      "software testing company France",
      "outsourced QA Paris",
      "hire QA testers France",
    ],
    intro:
      "French product teams that work in English still struggle to hire QA in Paris on a startup timeline. TestSync Lab delivers in English, with Central European overlap and USD retainers from $999. Europe-wide notes are on /qa-services-europe.",
    localTitle: "CET overlap for Paris",
    localDetail:
      "Paris morning lines up with our afternoon. Evening deploys are verified on our next working morning.",
    painTitle: "Bilingual products tested in one language",
    painDetail:
      "Name French and English on the audit if both ship. Locale checks: /localization-testing-services.",
    faqQuestion: "Do you report in French?",
    faqAnswer:
      "Delivery and bug reports are in English. That matches the engineering teams we work with. Say so if your stakeholders need a French summary and we will confirm before kickoff.",
    countryName: "France",
    ogLocale: "en_GB",
    hreflang: "en-FR",
    parent: "/qa-services-europe",
  }),
  geo({
    slug: "jeddah",
    tier: "city",
    navLabel: "QA for Jeddah teams",
    navDescription: "Remote QA for Jeddah commerce and product teams.",
    eyebrow: "Jeddah",
    h1: "Best QA agency for Jeddah product teams",
    title: "Best QA Agency Jeddah | Saudi QA Services from $999 | TestSync Lab",
    description:
      "Best QA agency in Jeddah for Saudi commerce and product teams. Remote QA from $999 with AST overlap and English reporting. Free audit.",
    keywords: [
      "best QA agency Jeddah",
      "QA services Jeddah",
      "software testing company Jeddah",
      "outsourced QA Jeddah",
      "hire QA testers Jeddah",
    ],
    intro:
      "Jeddah commerce and product teams ship on AST hours, often in Arabic and English. TestSync Lab tests those journeys remotely, two hours ahead, on USD retainers from $999. Saudi overview: /qa-services-saudi-arabia. Riyadh: /qa-services-riyadh.",
    localTitle: "AST overlap for Jeddah",
    localDetail: "Same-day Slack while your engineers are still in the office.",
    painTitle: "Marketplace launches tested only in English",
    painDetail: "Arabic RTL and checkout stay in scope when they ship.",
    faqQuestion: "How is Jeddah different from the Riyadh page?",
    faqAnswer: "Same lab and packages. This page is for Jeddah search intent.",
    countryName: "Saudi Arabia",
    ogLocale: "en_AE",
    hreflang: "en-SA",
    parent: "/qa-services-saudi-arabia",
  }),
  geo({
    slug: "sharjah",
    tier: "city",
    navLabel: "QA for Sharjah teams",
    navDescription: "Remote QA for Sharjah and northern UAE product teams.",
    eyebrow: "Sharjah",
    h1: "Best QA agency for Sharjah product teams",
    title: "Best QA Agency Sharjah | UAE QA Services from $999 | TestSync Lab",
    description:
      "QA services for Sharjah and northern UAE product teams. Remote retainers from $999 with GST overlap. Free audit.",
    keywords: [
      "best QA agency Sharjah",
      "QA services Sharjah",
      "software testing company Sharjah",
      "QA company UAE",
      "outsourced QA Sharjah",
    ],
    intro:
      "Sharjah teams ship on the same GST calendar as Dubai, often with smaller crews and the same checkout risk. TestSync Lab covers that remotely, one hour ahead. UAE overview: /qa-services-uae. Dubai: /qa-services-dubai.",
    localTitle: "Same GST day as Dubai",
    localDetail: "One hour from our lab. Morning questions get same-day answers.",
    painTitle: "A Dubai agency quote that does not fit the stage",
    painDetail: "Public packages start at $999, sized for the release in front of you.",
    faqQuestion: "Do you cover Sharjah and Ajman?",
    faqAnswer: "Yes. Remote coverage for northern UAE teams on the UAE retainer.",
    countryName: "United Arab Emirates",
    ogLocale: "en_AE",
    hreflang: "en-AE",
    parent: "/qa-services-uae",
  }),
  geo({
    slug: "brisbane",
    tier: "city",
    navLabel: "QA for Brisbane teams",
    navDescription: "Remote QA for Brisbane and Queensland product teams.",
    eyebrow: "Brisbane",
    h1: "Best QA agency for Brisbane product teams",
    title: "Best QA Agency Brisbane | Australia QA from $999 | TestSync Lab",
    description:
      "Best QA agency in Brisbane for Queensland SaaS teams. Remote QA from $999 with AEST-friendly handoffs. Free audit.",
    keywords: [
      "best QA agency Brisbane",
      "QA services Brisbane",
      "software testing company Brisbane",
      "outsourced QA Queensland",
      "hire QA testers Brisbane",
    ],
    intro:
      "Brisbane product teams face the same release pressure as Sydney with a smaller QA pool. TestSync Lab verifies overnight deploys and leaves engineer-ready bugs for the next AEST morning. Australia page: /qa-services-australia.",
    localTitle: "AEST handoff for Queensland",
    localDetail: "You ship at the end of the Brisbane day. Notes are waiting for the next working block.",
    painTitle: "Sydney hires that will not move",
    painDetail: "Remote coverage does not depend on someone relocating.",
    faqQuestion: "Is Brisbane on the same package as Sydney?",
    faqAnswer: "Yes. Same lab, same USD prices. Sydney page: /qa-services-sydney.",
    countryName: "Australia",
    ogLocale: "en_AU",
    hreflang: "en-AU",
    parent: "/qa-services-australia",
  }),
  geo({
    slug: "perth",
    tier: "city",
    navLabel: "QA for Perth teams",
    navDescription: "Remote QA for Perth and Western Australia product teams.",
    eyebrow: "Perth",
    h1: "Best QA agency for Perth product teams",
    title: "Best QA Agency Perth | Australia QA from $999 | TestSync Lab",
    description:
      "QA services for Perth and Western Australia product teams. Remote retainers from $999 with AWST-friendly notes. Free audit.",
    keywords: [
      "best QA agency Perth",
      "QA services Perth",
      "software testing company Perth",
      "outsourced QA Western Australia",
      "hire QA testers Perth",
    ],
    intro:
      "Perth runs on AWST, two or three hours behind Sydney, and local QA hiring is thin. TestSync Lab still fits: async notes for the Perth morning, USD retainers from $999, and the same bug standard as the rest of Australia.",
    localTitle: "Notes for the Perth morning",
    localDetail: "AWST is later than Sydney. We time the written handoff so it is waiting when Perth starts.",
    painTitle: "A national hire based in another city",
    painDetail: "Remote delivery does not require a Sydney or Melbourne seat.",
    faqQuestion: "Do you overlap live with AWST?",
    faqAnswer: "Short calls can be scheduled. The default is async Slack plus a weekly cadence.",
    countryName: "Australia",
    ogLocale: "en_AU",
    hreflang: "en-AU",
    parent: "/qa-services-australia",
  }),
  geo({
    slug: "edinburgh",
    tier: "city",
    navLabel: "QA for Edinburgh teams",
    navDescription: "Remote QA for Edinburgh and Scottish product teams.",
    eyebrow: "Edinburgh",
    h1: "Best QA agency for Edinburgh product teams",
    title: "Best QA Agency Edinburgh | UK QA Services from $999 | TestSync Lab",
    description:
      "QA services for Edinburgh and Scottish product teams. Remote retainers from $999 with UK-hour overlap. Free audit.",
    keywords: [
      "best QA agency Edinburgh",
      "QA services Edinburgh",
      "QA services Scotland",
      "software testing company Edinburgh",
      "outsourced QA Scotland",
    ],
    intro:
      "Edinburgh product teams hire on the same UK calendar as London and still wait months for a QA seat. TestSync Lab covers the release on a USD retainer with afternoon overlap into UK hours. UK page: /qa-services-uk.",
    localTitle: "UK-hour overlap",
    localDetail: "Edinburgh morning is a live window for Slack. Evening deploys are verified on our next morning.",
    painTitle: "London agencies priced like a bank",
    painDetail: "The public packages are the same wherever you sit in the UK.",
    faqQuestion: "Do you cover Glasgow as well?",
    faqAnswer: "Yes. Same UK retainer. This page targets Edinburgh and Scotland searches.",
    countryName: "United Kingdom",
    ogLocale: "en_GB",
    hreflang: "en-GB",
    parent: "/qa-services-uk",
  }),
  geo({
    slug: "montreal",
    tier: "city",
    navLabel: "QA for Montreal teams",
    navDescription: "Remote QA for Montreal product teams.",
    eyebrow: "Montreal",
    h1: "Best QA agency for Montreal product teams",
    title: "Best QA Agency Montreal | Canada QA from $999 | TestSync Lab",
    description:
      "QA services for Montreal SaaS teams. Remote USD retainers from $999 with Eastern Time handoffs and English bug reports. Free audit.",
    keywords: [
      "best QA agency Montreal",
      "QA services Montreal",
      "software testing company Montreal",
      "outsourced QA Montreal",
      "QA services Quebec",
    ],
    intro:
      "Montreal product teams ship on Eastern Time with a bilingual market and a competitive hiring pool. TestSync Lab reports in English and verifies evening deploys before the next ET morning. Canada page: /qa-services-canada. Toronto: /qa-services-toronto.",
    localTitle: "Eastern Time handoffs",
    localDetail: "Same cadence as Toronto: you ship in the afternoon, bugs are written for the next morning.",
    painTitle: "French and English flows drifting apart",
    painDetail: "Name both locales if both ship. We test the journeys, not a machine translation.",
    faqQuestion: "Do you write bugs in French?",
    faqAnswer: "Bug reports are in English. Tell us on the audit if a stakeholder summary must be French.",
    countryName: "Canada",
    ogLocale: "en_CA",
    hreflang: "en-CA",
    parent: "/qa-services-canada",
  }),
  geo({
    slug: "houston",
    tier: "city",
    navLabel: "QA for Houston teams",
    navDescription: "Remote QA for Houston and Texas Central Time teams.",
    eyebrow: "Houston",
    h1: "Best QA agency for Houston product teams",
    title: "Best QA Agency Houston | USA QA Services from $999 | TestSync Lab",
    description:
      "QA services for Houston product teams. Remote retainers from $999 with Central Time follow-the-sun verification. Free audit.",
    keywords: [
      "best QA agency Houston",
      "QA services Houston",
      "software testing company Houston",
      "outsourced QA Houston",
      "hire QA testers Houston",
    ],
    intro:
      "Houston product teams ship on Central Time, often in energy, logistics, and B2B SaaS, without a deep local QA bench. TestSync Lab verifies evening CT deploys and returns bugs before the next morning standup. USA page: /qa-services-usa.",
    localTitle: "Central Time follow-the-sun",
    localDetail: "Close the Houston day with a build. Engineer-ready bugs are waiting for the next block.",
    painTitle: "Energy and B2B flows with permission bugs",
    painDetail: "Roles and approvals are first-class scenarios, not an afterthought.",
    faqQuestion: "Is Houston on the US retainer?",
    faqAnswer: "Yes. Same packages as the national USA page.",
    countryName: "United States",
    ogLocale: "en_US",
    hreflang: "en-US",
    parent: "/qa-services-usa",
  }),
  geo({
    slug: "atlanta",
    tier: "city",
    navLabel: "QA for Atlanta teams",
    navDescription: "Remote QA for Atlanta product teams.",
    eyebrow: "Atlanta",
    h1: "Best QA agency for Atlanta product teams",
    title: "Best QA Agency Atlanta | USA QA Services from $999 | TestSync Lab",
    description:
      "QA services for Atlanta SaaS and fintech teams. Remote retainers from $999 with Eastern Time handoffs. Free audit.",
    keywords: [
      "best QA agency Atlanta",
      "QA services Atlanta",
      "software testing company Atlanta",
      "outsourced QA Atlanta",
      "hire QA testers Atlanta",
    ],
    intro:
      "Atlanta’s fintech and SaaS teams ship on Eastern Time and still lose evenings to founder QA. TestSync Lab takes that cycle on a retainer from $999, with bugs ready before the next ET standup. USA page: /qa-services-usa.",
    localTitle: "Eastern Time verification",
    localDetail: "Evening Atlanta deploys are checked on our morning and written up for yours.",
    painTitle: "Payments tested only on the success card",
    painDetail: "Declines, timeouts, and refunds belong in the pack. See /payment-testing-services.",
    faqQuestion: "Do you cover other US Southeast cities?",
    faqAnswer: "Yes. The retainer is remote. This page targets Atlanta search intent.",
    countryName: "United States",
    ogLocale: "en_US",
    hreflang: "en-US",
    parent: "/qa-services-usa",
  }),
];
