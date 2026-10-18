import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("london");

export default function QaServicesLondonPage() {
  return (
    <MarketSeoPage
      slug="london"
      serviceName="London QA services"
      jsonLdServiceName="QA services for London product teams"
    />
  );
}
