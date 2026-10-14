import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("qatar");

export default function QaServicesQatarPage() {
  return (
    <MarketSeoPage
      slug="qatar"
      serviceName="Qatar QA services"
      jsonLdServiceName="QA services for Qatar product teams"
    />
  );
}
