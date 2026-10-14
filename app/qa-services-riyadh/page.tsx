import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("riyadh");

export default function QaServicesRiyadhPage() {
  return (
    <MarketSeoPage
      slug="riyadh"
      serviceName="Riyadh QA services"
      jsonLdServiceName="QA services for Riyadh product teams"
    />
  );
}
