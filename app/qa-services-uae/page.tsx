import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("uae");

export default function QaServicesUaePage() {
  return (
    <MarketSeoPage
      slug="uae"
      serviceName="UAE QA services"
      jsonLdServiceName="QA services for UAE product teams"
    />
  );
}
