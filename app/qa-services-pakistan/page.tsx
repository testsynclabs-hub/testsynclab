import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("pakistan");

export default function QaServicesPakistanPage() {
  return (
    <MarketSeoPage
      slug="pakistan"
      serviceName="Pakistan QA services"
      jsonLdServiceName="QA services for Pakistan product teams"
    />
  );
}
