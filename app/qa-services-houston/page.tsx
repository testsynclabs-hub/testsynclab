import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("houston");

export default function QaServicesHoustonPage() {
  return (
    <MarketSeoPage
      slug="houston"
      serviceName="Houston QA services"
      jsonLdServiceName="QA services for Houston product teams"
    />
  );
}
