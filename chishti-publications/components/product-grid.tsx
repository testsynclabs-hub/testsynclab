import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/types";

export function ProductGrid({
  products,
  preloadCount = 0,
  headingLevel = 2,
}: {
  products: Product[];
  preloadCount?: number;
  headingLevel?: 2 | 3;
}) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard
            product={product}
            preload={index < preloadCount}
            headingLevel={headingLevel}
          />
        </li>
      ))}
    </ul>
  );
}
