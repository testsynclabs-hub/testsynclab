import Link from "next/link";
import { BOOKING_FALLBACK_HREF, getBookingUrl } from "@/lib/booking";

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
  const href = bookingUrl ?? BOOKING_FALLBACK_HREF;
  const external = Boolean(bookingUrl);

  return (
    <Link
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={
        className ||
        "inline-flex items-center justify-center rounded-xl border border-brand/30 bg-white px-5 py-3 text-sm font-bold text-brand-deep transition hover:bg-brand-soft"
      }
    >
      {label}
    </Link>
  );
}
