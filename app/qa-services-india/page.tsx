import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("india");

export default function QaServicesIndiaPage() {
  return (
    <MarketSeoPage
      slug="india"
      serviceName="India QA services"
      jsonLdServiceName="QA services for Indian product teams"
    />
  );
}
