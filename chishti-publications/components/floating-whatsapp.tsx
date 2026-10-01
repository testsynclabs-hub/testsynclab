import { WhatsAppIcon } from "@/components/icons";
import { generalInquiryMessage, whatsappHref } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref(generalInquiryMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chishti Publications"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(7,94,84,0.35)] hover:bg-[#064e46]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
