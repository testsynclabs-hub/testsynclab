import type { Metadata } from "next";
import { MarketLanding, marketJsonLd } from "@/components/market-landing";
import { getRankLanding } from "@/lib/rank-landings";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const landing = getRankLanding("qa-agency-lahore")!;

export const metadata: Metadata = {
  title: { absolute: landing.title },
  description: landing.description,
  keywords: [...landing.keywords],
  alternates: { canonical: landing.path },
  openGraph: {
    title: landing.title,
    description: landing.description,
    url: landing.path,
  },
};

export default function QaAgencyLahorePage() {
  const jsonLd = marketJsonLd({
    path: landing.path,
    serviceName: landing.serviceName,
    description: landing.description,
    areaServedName: landing.areaServedName,
    faqs: landing.faqs,
  });

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: `${SITE_URL}${landing.path}`,
    email: SITE_EMAIL,
    description: landing.description,
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    priceRange: "$$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <MarketLanding
        path={landing.path}
        eyebrow={landing.eyebrow}
        h1={landing.h1}
        intro={landing.intro}
        highlights={landing.highlights}
        pains={landing.pains}
        faqs={landing.faqs}
        areaServedName="Lahore"
        serviceName={landing.serviceName}
      />
    </>
  );
}
