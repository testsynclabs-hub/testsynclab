import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("vancouver");

export default function QaServicesVancouverPage() {
  return (
    <MarketSeoPage
      slug="vancouver"
      serviceName="Vancouver QA services"
      jsonLdServiceName="QA services for Vancouver product teams"
    />
  );
}
