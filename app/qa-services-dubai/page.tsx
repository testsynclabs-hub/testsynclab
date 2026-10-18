import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("dubai");

export default function QaServicesDubaiPage() {
  return (
    <MarketSeoPage
      slug="dubai"
      serviceName="Dubai QA services"
      jsonLdServiceName="QA services for Dubai product teams"
    />
  );
}
