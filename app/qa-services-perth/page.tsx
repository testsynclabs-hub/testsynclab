import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("perth");

export default function QaServicesPerthPage() {
  return (
    <MarketSeoPage
      slug="perth"
      serviceName="Perth QA services"
      jsonLdServiceName="QA services for Perth product teams"
    />
  );
}
