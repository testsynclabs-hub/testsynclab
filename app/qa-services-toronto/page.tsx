import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("toronto");

export default function QaServicesTorontoPage() {
  return (
    <MarketSeoPage
      slug="toronto"
      serviceName="Toronto QA services"
      jsonLdServiceName="QA services for Toronto product teams"
    />
  );
}
