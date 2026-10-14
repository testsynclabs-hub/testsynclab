import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("saudi-arabia");

export default function QaServicesSaudiArabiaPage() {
  return (
    <MarketSeoPage
      slug="saudi-arabia"
      serviceName="Saudi Arabia QA services"
      jsonLdServiceName="QA services for Saudi product teams"
    />
  );
}
