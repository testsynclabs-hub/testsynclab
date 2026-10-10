import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("denver");

export default function QaServicesDenverPage() {
  return (
    <MarketSeoPage
      slug="denver"
      serviceName="Denver QA services"
      jsonLdServiceName="QA services for Denver product teams"
    />
  );
}
