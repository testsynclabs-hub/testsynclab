import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("sydney");

export default function QaServicesSydneyPage() {
  return (
    <MarketSeoPage
      slug="sydney"
      serviceName="Sydney QA services"
      jsonLdServiceName="QA services for Sydney product teams"
    />
  );
}
