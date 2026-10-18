"use client";

import { useEffect } from "react";

const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "gclid",
] as const;

const STORAGE_KEY = "tsl_ads";

/** Persist ad click params so /contact still attributes the lead after CTA hops. */
export function AdsUtmCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const parts: string[] = [];
    for (const key of KEYS) {
      const value = params.get(key)?.trim();
      if (!value) continue;
      const clean = value
        .toLowerCase()
        .replace(/[^a-z0-9_.:-]/g, "")
        .slice(0, 40);
      if (clean) parts.push(clean);
    }
    if (parts.length === 0) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, parts.join("/").slice(0, 100));
    } catch {
      // Private mode / blocked storage — ads conversion URL still works.
    }
  }, []);

  return null;
}

export function readAdsAttribution() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
}
