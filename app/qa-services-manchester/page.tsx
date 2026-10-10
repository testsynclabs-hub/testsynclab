import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("manchester");

export default function QaServicesManchesterPage() {
  return (
    <MarketSeoPage
      slug="manchester"
      serviceName="Manchester QA services"
      jsonLdServiceName="QA services for Manchester product teams"
    />
  );
}
