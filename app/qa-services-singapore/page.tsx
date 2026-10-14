import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("singapore");

export default function QaServicesSingaporePage() {
  return (
    <MarketSeoPage
      slug="singapore"
      serviceName="Singapore QA services"
      jsonLdServiceName="QA services for Singapore product teams"
    />
  );
}
