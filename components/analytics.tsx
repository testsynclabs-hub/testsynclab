import { GoogleAnalytics } from "@next/third-parties/google";

function resolveGaId() {
  const raw = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  if (!raw) return null;
  // Accept only GA4 Measurement IDs (G-XXXXXXXX).
  if (!/^G-[A-Z0-9]+$/i.test(raw)) return null;
  return raw;
}

const gaId = resolveGaId();

export function Analytics() {
  if (!gaId) return null;
  return <GoogleAnalytics gaId={gaId} />;
}
