import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("middle-east");

export default function QaServicesMiddleEastPage() {
  return (
    <MarketSeoPage
      slug="middle-east"
      serviceName="Middle East QA services"
      jsonLdServiceName="QA services for Middle East product teams"
    />
  );
}
