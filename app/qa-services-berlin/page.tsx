import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("berlin");

export default function QaServicesBerlinPage() {
  return (
    <MarketSeoPage
      slug="berlin"
      serviceName="Berlin QA services"
      jsonLdServiceName="QA services for Berlin product teams"
    />
  );
}
