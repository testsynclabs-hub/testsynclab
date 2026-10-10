import { site } from "@/lib/site";

export const generalInquiryMessage =
  "Hello Chishti Publications, I would like to know more about your products.";

export function productInquiryMessage(product: { name: string; slug: string }) {
  const link = `${site.url}/products/${product.slug}`;

  return [
    "Hello Chishti Publications,",
    "",
    "I am interested in this product:",
    "",
    `Product: ${product.name}`,
    "",
    "Product Link:",
    link,
    "",
    "Please share more details.",
    "",
    "Thank you.",
  ].join("\n");
}

export function whatsappDigits() {
  return site.whatsappNumber.replace(/\D/g, "");
}

/** One place builds every WhatsApp link. The number lives in data/site.json. */
export function whatsappHref(message: string) {
  const text = encodeURIComponent(message);
  const digits = whatsappDigits();

  if (!digits) return `https://wa.me/?text=${text}`;
  return `https://wa.me/${digits}?text=${text}`;
}

export function displayWhatsappNumber() {
  const digits = whatsappDigits();
  return digits ? `+${digits}` : null;
}
