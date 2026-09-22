import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("canada");

export default function QaServicesCanadaPage() {
  return (
    <MarketSeoPage
      slug="canada"
      serviceName="Canadian QA services"
      jsonLdServiceName="QA services for Canadian product teams"
    />
  );
}
