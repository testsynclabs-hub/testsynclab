/** Google Ads tag IDs. Empty until the live AW conversion is pasted in env. */

export function googleAdsId() {
  const raw = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim();
  if (!raw) return null;
  if (!/^AW-[0-9]+$/i.test(raw)) return null;
  return raw.toUpperCase();
}

export function googleAdsConversionLabel() {
  const raw = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL?.trim();
  if (!raw) return null;
  if (!/^[A-Za-z0-9_-]{4,64}$/.test(raw)) return null;
  return raw;
}
