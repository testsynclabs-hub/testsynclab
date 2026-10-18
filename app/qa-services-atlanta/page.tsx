import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("atlanta");

export default function QaServicesAtlantaPage() {
  return (
    <MarketSeoPage
      slug="atlanta"
      serviceName="Atlanta QA services"
      jsonLdServiceName="QA services for Atlanta product teams"
    />
  );
}
