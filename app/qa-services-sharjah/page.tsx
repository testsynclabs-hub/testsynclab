import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("sharjah");

export default function QaServicesSharjahPage() {
  return (
    <MarketSeoPage
      slug="sharjah"
      serviceName="Sharjah QA services"
      jsonLdServiceName="QA services for Sharjah product teams"
    />
  );
}
