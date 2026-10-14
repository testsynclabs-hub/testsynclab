import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("new-zealand");

export default function QaServicesNewZealandPage() {
  return (
    <MarketSeoPage
      slug="new-zealand"
      serviceName="New Zealand QA services"
      jsonLdServiceName="QA services for New Zealand product teams"
    />
  );
}
