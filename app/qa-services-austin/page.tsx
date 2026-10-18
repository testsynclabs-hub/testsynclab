import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("austin");

export default function QaServicesAustinPage() {
  return (
    <MarketSeoPage
      slug="austin"
      serviceName="Austin QA services"
      jsonLdServiceName="QA services for Austin product teams"
    />
  );
}
