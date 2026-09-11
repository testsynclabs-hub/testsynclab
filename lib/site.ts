export const SITE_URL = "https://testsynclab.com" as const;

export const SITE_NAME = "TestSync Lab" as const;

export const SITE_TITLE =
  "TestSync Lab | Enterprise Software Quality Assurance & Automation Services" as const;

export const SITE_DESCRIPTION =
  "Top-tier B2B SQA agency specializing in automated testing, API validation, performance testing, and continuous QA integration for web and mobile platforms." as const;

export const SITE_KEYWORDS = [
  "Software Quality Assurance",
  "QA Automation Agency",
  "Playwright Testing",
  "Selenium Automation",
  "API Testing Services",
  "Software Testing Pakistan",
  "TestSync Lab",
] as const;

export const SITE_EMAIL = "info@testsynclab.com" as const;

export const SITE_SERVICES = [
  "Manual Testing",
  "API Testing",
  "Test Automation",
  "Performance Testing",
  "Continuous QA Integration",
] as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  email: SITE_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE_EMAIL,
    availableLanguage: ["English"],
  },
  areaServed: "Worldwide",
  knowsAbout: [...SITE_KEYWORDS],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Quality Assurance Services",
    itemListElement: SITE_SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      },
    })),
  },
  sameAs: [
    "https://www.linkedin.com/",
    "https://twitter.com/",
  ],
} as const;
