import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("los-angeles");

export default function QaServicesLosAngelesPage() {
  return (
    <MarketSeoPage
      slug="los-angeles"
      serviceName="Los Angeles QA services"
      jsonLdServiceName="QA services for Los Angeles product teams"
    />
  );
}
