import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("ireland");

export default function QaServicesIrelandPage() {
  return (
    <MarketSeoPage
      slug="ireland"
      serviceName="Ireland QA services"
      jsonLdServiceName="QA services for Irish product teams"
    />
  );
}
