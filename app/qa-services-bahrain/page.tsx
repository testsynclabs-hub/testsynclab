import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("bahrain");

export default function QaServicesBahrainPage() {
  return (
    <MarketSeoPage
      slug="bahrain"
      serviceName="Bahrain QA services"
      jsonLdServiceName="QA services for Bahrain product teams"
    />
  );
}
