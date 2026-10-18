import type { Metadata } from "next";
import { MarketSeoPage, marketPageMetadata } from "@/components/market-seo-page";

export const metadata: Metadata = marketPageMetadata("abu-dhabi");

export default function QaServicesAbuDhabiPage() {
  return (
    <MarketSeoPage
      slug="abu-dhabi"
      serviceName="Abu Dhabi QA services"
      jsonLdServiceName="QA services for Abu Dhabi product teams"
    />
  );
}
