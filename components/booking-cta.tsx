import Link from "next/link";
import { getBookingUrl } from "@/lib/booking";

/**
 * Renders only when NEXT_PUBLIC_BOOKING_URL is set (Calendly / Cal.com / etc.).
 * Avoids a fake “Book a call” button that just reloads /contact.
 */
export function BookingCta({
  source,
  className = "",
  label = "Book a 20-min audit call",
}: {
  source: string;
  className?: string;
  label?: string;
}) {
  const bookingUrl = getBookingUrl(source);
  if (!bookingUrl) return null;

  return (
    <Link
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "inline-flex items-center justify-center rounded-xl border border-brand/30 bg-white px-5 py-3 text-sm font-bold text-brand-deep transition hover:bg-brand-soft"
      }
    >
      {label}
    </Link>
  );
}
