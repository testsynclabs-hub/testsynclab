import type { Metadata } from "next";
import { MarketLanding, marketJsonLd } from "@/components/market-landing";
import { getRankLanding } from "@/lib/rank-landings";

const landing = getRankLanding("software-testing-company")!;

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

export default function RankLandingPage() {
  const jsonLd = marketJsonLd({
    path: landing.path,
    serviceName: landing.serviceName,
    description: landing.description,
    areaServedName: landing.areaServedName,
    faqs: landing.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
