import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("usa");

export default function QaServicesUsaPage() {
  return (
    <MarketSeoPage
      slug="usa"
      serviceName="US QA services"
      jsonLdServiceName="QA services for US product teams"
    />
  );
}
