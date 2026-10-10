import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("uk");

export default function QaServicesUkPage() {
  return (
    <MarketSeoPage
      slug="uk"
      serviceName="UK QA services"
      jsonLdServiceName="QA services for UK product teams"
    />
  );
}
