import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("montreal");

export default function QaServicesMontrealPage() {
  return (
    <MarketSeoPage
      slug="montreal"
      serviceName="Montreal QA services"
      jsonLdServiceName="QA services for Montreal product teams"
    />
  );
}
