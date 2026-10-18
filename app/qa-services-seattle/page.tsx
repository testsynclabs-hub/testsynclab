import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("seattle");

export default function QaServicesSeattlePage() {
  return (
    <MarketSeoPage
      slug="seattle"
      serviceName="Seattle QA services"
      jsonLdServiceName="QA services for Seattle product teams"
    />
  );
}
