import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("san-francisco");

export default function QaServicesSanFranciscoPage() {
  return (
    <MarketSeoPage
      slug="san-francisco"
      serviceName="San Francisco Bay Area QA services"
      jsonLdServiceName="QA services for San Francisco and Bay Area product teams"
    />
  );
}
