import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("edinburgh");

export default function QaServicesEdinburghPage() {
  return (
    <MarketSeoPage
      slug="edinburgh"
      serviceName="Edinburgh QA services"
      jsonLdServiceName="QA services for Edinburgh product teams"
    />
  );
}
