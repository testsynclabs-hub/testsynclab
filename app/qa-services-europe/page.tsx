import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("europe");

export default function QaServicesEuropePage() {
  return (
    <MarketSeoPage
      slug="europe"
      serviceName="European QA services"
      jsonLdServiceName="QA services for European product teams"
    />
  );
}
