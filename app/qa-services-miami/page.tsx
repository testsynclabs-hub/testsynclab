import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("miami");

export default function QaServicesMiamiPage() {
  return (
    <MarketSeoPage
      slug="miami"
      serviceName="Miami QA services"
      jsonLdServiceName="QA services for Miami product teams"
    />
  );
}
