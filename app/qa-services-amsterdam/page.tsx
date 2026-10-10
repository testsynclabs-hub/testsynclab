import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("amsterdam");

export default function QaServicesAmsterdamPage() {
  return (
    <MarketSeoPage
      slug="amsterdam"
      serviceName="Amsterdam QA services"
      jsonLdServiceName="QA services for Amsterdam product teams"
    />
  );
}
