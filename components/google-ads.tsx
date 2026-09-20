"use client";

import Script from "next/script";
import { useEffect } from "react";
import { googleAdsConversionLabel, googleAdsId } from "@/lib/ads";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const adsId = googleAdsId();
const conversionLabel = googleAdsConversionLabel();

/** Site-wide click tracker. Conversion fires only on /contact/thanks. */
export function GoogleAdsTag() {
  if (!adsId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${adsId}');
        `}
      </Script>
    </>
  );
}

type ConversionProps = {
  value?: number;
};

export function GoogleAdsLeadConversion({ value = 999 }: ConversionProps) {
  useEffect(() => {
    if (!adsId || !conversionLabel || typeof window === "undefined") return;
    window.gtag?.("event", "conversion", {
      send_to: `${adsId}/${conversionLabel}`,
      value,
      currency: "USD",
    });
  }, [value]);

  return null;
}
