import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("germany");

export default function QaServicesGermanyPage() {
  return (
    <MarketSeoPage
      slug="germany"
      serviceName="German QA services"
      jsonLdServiceName="QA services for German product teams"
    />
  );
}
