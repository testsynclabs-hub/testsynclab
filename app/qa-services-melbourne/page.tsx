import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("melbourne");

export default function QaServicesMelbournePage() {
  return (
    <MarketSeoPage
      slug="melbourne"
      serviceName="Melbourne QA services"
      jsonLdServiceName="QA services for Melbourne product teams"
    />
  );
}
