import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("gulf");

export default function QaServicesGulfPage() {
  return (
    <MarketSeoPage
      slug="gulf"
      serviceName="Gulf QA services"
      jsonLdServiceName="QA services for Gulf product teams"
    />
  );
}
