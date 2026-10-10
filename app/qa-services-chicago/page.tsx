import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("chicago");

export default function QaServicesChicagoPage() {
  return (
    <MarketSeoPage
      slug="chicago"
      serviceName="Chicago QA services"
      jsonLdServiceName="QA services for Chicago product teams"
    />
  );
}
