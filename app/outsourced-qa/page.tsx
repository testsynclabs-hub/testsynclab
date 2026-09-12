import type { Metadata } from "next";
import { MarketLanding, marketJsonLd } from "@/components/market-landing";
import { outsourcedQa } from "@/lib/markets";

export const metadata: Metadata = {
  title: { absolute: outsourcedQa.title },
  description: outsourcedQa.description,
  keywords: [...outsourcedQa.keywords],
  alternates: { canonical: outsourcedQa.path },
  openGraph: {
    title: outsourcedQa.title,
    description: outsourcedQa.description,
    url: outsourcedQa.path,
  },
};

export default function OutsourcedQaPage() {
  const jsonLd = marketJsonLd({
    path: outsourcedQa.path,
    serviceName: "Outsourced QA retainers",
    description: outsourcedQa.description,
    areaServedName: ["United States", "Canada"],
    faqs: outsourcedQa.faqs,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarketLanding
        path={outsourcedQa.path}
        eyebrow={outsourcedQa.eyebrow}
        h1={outsourcedQa.h1}
        intro={outsourcedQa.intro}
        highlights={outsourcedQa.highlights}
        pains={outsourcedQa.pains}
        faqs={outsourcedQa.faqs}
        areaServedName="US and Canadian"
        serviceName="Outsourced QA"
      />
    </>
  );
}
