import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketLanding, marketJsonLd } from "@/components/market-landing";
import {
  getMarket,
  marketLanguageAlternates,
} from "@/lib/markets";

export function marketPageMetadata(slug: string): Metadata {
  const market = getMarket(slug);
  if (!market) return {};
  return {
    title: { absolute: market.title },
    description: market.description,
    keywords: [...market.keywords],
    alternates: {
      canonical: market.path,
      languages: { ...marketLanguageAlternates },
    },
    openGraph: {
      title: market.title,
      description: market.description,
      url: market.path,
      locale: market.ogLocale,
    },
  };
}

export function MarketSeoPage({
  slug,
  serviceName,
  jsonLdServiceName,
}: {
  slug: string;
  serviceName: string;
  jsonLdServiceName: string;
}) {
  const market = getMarket(slug);
  if (!market) notFound();

  const jsonLd = marketJsonLd({
    path: market.path,
    serviceName: jsonLdServiceName,
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
        serviceName={serviceName}
      />
    </>
  );
}
