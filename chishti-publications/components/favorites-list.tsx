"use client";

import Link from "next/link";
import { EmptyState } from "@/components/empty-state";
import { useFavorites } from "@/components/favorites-provider";
import { ProductGrid } from "@/components/product-grid";
import type { Product } from "@/lib/types";

export function FavoritesList({ products }: { products: Product[] }) {
  const { ids } = useFavorites();
  const saved = products.filter((product) => ids.includes(product.id));

  if (saved.length === 0) {
    return (
      <div className="mt-8">
        <EmptyState
          title="You haven't added any favorites yet."
          description="Save a product from the catalog and it will stay in this browser."
          href="/products"
          action="Browse products"
        />
      </div>
    );
  }

  return (
    <div className="mt-8">
      <p className="mb-4 text-sm text-muted">
        {saved.length} saved in this browser.{" "}
        <Link href="/products" className="font-semibold text-binding underline-offset-4 hover:underline">
          Browse products
        </Link>
      </p>
      <ProductGrid products={saved} />
    </div>
  );
}
