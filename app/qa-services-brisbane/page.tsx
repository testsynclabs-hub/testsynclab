import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("brisbane");

export default function QaServicesBrisbanePage() {
  return (
    <MarketSeoPage
      slug="brisbane"
      serviceName="Brisbane QA services"
      jsonLdServiceName="QA services for Brisbane product teams"
    />
  );
}
