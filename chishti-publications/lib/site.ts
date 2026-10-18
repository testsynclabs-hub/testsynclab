import siteData from "@/data/site.json";

export const site = {
  name: siteData.name,
  url: siteData.url.replace(/\/$/, ""),
  tagline: siteData.tagline,
  whatsappNumber: siteData.whatsappNumber,
  email: siteData.email.trim(),
  address: siteData.address.trim(),
};

export const siteDescription =
  "Browse books, copies, notebooks, and educational products from Chishti Publications. Inquire about any item on WhatsApp.";
