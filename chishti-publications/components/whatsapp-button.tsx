import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/whatsapp";

export function WhatsAppButton({
  message,
  label = "WhatsApp",
  ariaLabel,
  variant = "solid",
  className = "",
}: {
  message: string;
  label?: string;
  ariaLabel: string;
  variant?: "solid" | "light";
  className?: string;
}) {
  const tone =
    variant === "light"
      ? "bg-paper text-binding hover:bg-white"
      : "bg-whatsapp text-white hover:bg-[#064e46]";

  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ${tone} ${className}`}
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  );
}
