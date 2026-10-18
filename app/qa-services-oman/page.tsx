import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("oman");

export default function QaServicesOmanPage() {
  return (
    <MarketSeoPage
      slug="oman"
      serviceName="Oman QA services"
      jsonLdServiceName="QA services for Oman product teams"
    />
  );
}
