import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("australia");

export default function QaServicesAustraliaPage() {
  return (
    <MarketSeoPage
      slug="australia"
      serviceName="Australian QA services"
      jsonLdServiceName="QA services for Australian product teams"
    />
  );
}
