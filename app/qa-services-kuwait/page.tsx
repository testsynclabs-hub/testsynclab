import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("kuwait");

export default function QaServicesKuwaitPage() {
  return (
    <MarketSeoPage
      slug="kuwait"
      serviceName="Kuwait QA services"
      jsonLdServiceName="QA services for Kuwait product teams"
    />
  );
}
