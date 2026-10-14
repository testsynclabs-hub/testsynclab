import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("jeddah");

export default function QaServicesJeddahPage() {
  return (
    <MarketSeoPage
      slug="jeddah"
      serviceName="Jeddah QA services"
      jsonLdServiceName="QA services for Jeddah product teams"
    />
  );
}
