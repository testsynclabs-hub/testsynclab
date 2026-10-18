import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("boston");

export default function QaServicesBostonPage() {
  return (
    <MarketSeoPage
      slug="boston"
      serviceName="Boston QA services"
      jsonLdServiceName="QA services for Boston product teams"
    />
  );
}
