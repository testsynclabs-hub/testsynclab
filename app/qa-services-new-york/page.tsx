import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("new-york");

export default function QaServicesNewYorkPage() {
  return (
    <MarketSeoPage
      slug="new-york"
      serviceName="New York QA services"
      jsonLdServiceName="QA services for New York product teams"
    />
  );
}
