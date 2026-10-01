import Link from "next/link";
import { FavoriteButton } from "@/components/favorite-button";
import { ProductImage } from "@/components/product-image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { priceLabel } from "@/lib/seo";
import type { Product } from "@/lib/types";
import { productInquiryMessage } from "@/lib/whatsapp";

const cardSizes = "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

export function ProductCard({
  product,
  preload = false,
  headingLevel = 2,
}: {
  product: Product;
  preload?: boolean;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 3 ? "h3" : "h2";
  const price = priceLabel(product);

  return (
    <article className="flex h-full flex-col border border-line bg-card">
      <div className="relative">
        <Link href={`/products/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-paper-deep">
          <ProductImage
            src={product.image}
            name={product.name}
            category={product.category}
            preload={preload}
            sizes={cardSizes}
          />
        </Link>
        <div className="absolute top-3 right-3">
          <FavoriteButton productId={product.id} productName={product.name} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold tracking-[0.16em] text-gilt uppercase">{product.category}</p>
        <Heading className="font-display mt-2 text-xl leading-snug text-ink">
          <Link href={`/products/${product.slug}`} className="hover:text-binding">
            {product.name}
          </Link>
        </Heading>
        {price ? <p className="mt-2 text-sm font-semibold text-ink">{price}</p> : null}
        <div className="mt-auto flex flex-col gap-3 pt-4">
          <WhatsAppButton
            message={productInquiryMessage(product)}
            label="WhatsApp"
            ariaLabel={`Inquire about ${product.name} on WhatsApp`}
          />
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex min-h-11 items-center justify-center text-sm font-semibold text-binding underline-offset-4 hover:underline"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
