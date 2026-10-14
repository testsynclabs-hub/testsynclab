import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("france");

export default function QaServicesFrancePage() {
  return (
    <MarketSeoPage
      slug="france"
      serviceName="France QA services"
      jsonLdServiceName="QA services for French product teams"
    />
  );
}
