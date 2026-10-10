import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("dallas");

export default function QaServicesDallasPage() {
  return (
    <MarketSeoPage
      slug="dallas"
      serviceName="Dallas QA services"
      jsonLdServiceName="QA services for Dallas product teams"
    />
  );
}
