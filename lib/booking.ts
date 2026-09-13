/**
 * Optional Cal.com / Calendly (or similar) URL.
 * Set NEXT_PUBLIC_BOOKING_URL on Vercel, then redeploy.
 * When empty, UI falls back to the contact form / mailto.
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

export const BOOKING_FALLBACK_HREF = "/contact?plan=audit&source=book-call";
