import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("doha");

export default function QaServicesDohaPage() {
  return (
    <MarketSeoPage
      slug="doha"
      serviceName="Doha QA services"
      jsonLdServiceName="QA services for Doha product teams"
    />
  );
}
