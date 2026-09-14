import type { Metadata } from "next";
import { MarketLanding, marketJsonLd } from "@/components/market-landing";
import { getRankLanding } from "@/lib/rank-landings";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const landing = getRankLanding("qa-agency")!;

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

export default function QaAgencyPage() {
  const jsonLd = marketJsonLd({
    path: landing.path,
    serviceName: landing.serviceName,
    description: landing.description,
    areaServedName: landing.areaServedName,
    faqs: landing.faqs,
  });

  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: landing.h1,
    url: `${SITE_URL}${landing.path}`,
    description: landing.description,
    mainEntity: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      description: landing.description,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutLd) }}
      />
      <MarketLanding
        path={landing.path}
        eyebrow={landing.eyebrow}
        h1={landing.h1}
        intro={landing.intro}
        highlights={landing.highlights}
        pains={landing.pains}
        faqs={landing.faqs}
        areaServedName="product"
        serviceName={landing.serviceName}
      />
    </>
  );
}
