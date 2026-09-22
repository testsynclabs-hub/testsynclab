/**
 * Optional Calendly / Cal.com (or similar) URL.
 * Set NEXT_PUBLIC_BOOKING_URL on Vercel, then redeploy.
 * When empty, “Book a call” CTAs are hidden — contact form + email remain.
 */
export function getBookingUrl(source = "site") {
  const base = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();
  if (!base) return null;

  try {
    const url = new URL(base);
    if (!url.searchParams.has("source")) {
      url.searchParams.set("source", source);
    }
    return url.toString();
  } catch {
    return base;
  }
}
