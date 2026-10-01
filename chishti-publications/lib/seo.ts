import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import type { Product } from "@/lib/types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
  };
}

export function productJsonLd(product: Product) {
  const url = `${site.url}/products/${product.slug}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    url,
    brand: {
      "@type": "Brand",
      name: site.name,
    },
  };

  if (product.sku) data.sku = product.sku;
  if (product.image) data.image = new URL(product.image, site.url).toString();

  if (typeof product.price === "number") {
    data.offers = {
      "@type": "Offer",
      priceCurrency: "PKR",
      price: product.price,
      url,
    };
  }

  return data;
}

export function priceLabel(product: Product) {
  return formatPrice(product.price);
}
