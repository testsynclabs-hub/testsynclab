import type { Metadata } from "next";
import { MarketLanding, marketJsonLd } from "@/components/market-landing";
import { markets } from "@/lib/markets";

const market = markets[0];

export const metadata: Metadata = {
  title: { absolute: `${market.title}` },
  description: market.description,
  keywords: [...market.keywords],
  alternates: { canonical: market.path },
  openGraph: {
    title: market.title,
    description: market.description,
    url: market.path,
  },
};

export default function QaServicesUsaPage() {
  const jsonLd = marketJsonLd({
    path: market.path,
    serviceName: "QA services for US product teams",
    description: market.description,
    areaServedName: market.countryName,
    faqs: market.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketLanding
        path={market.path}
        eyebrow={market.eyebrow}
        h1={market.h1}
        intro={market.intro}
        highlights={market.highlights}
        pains={market.pains}
        faqs={market.faqs}
        areaServedName={market.countryName}
        serviceName="US QA services"
      />
    </>
  );
}
