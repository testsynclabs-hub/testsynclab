"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { EmptyState } from "@/components/empty-state";
import { ProductFilters } from "@/components/product-filters";
import { ProductGrid } from "@/components/product-grid";
import { SearchBar } from "@/components/search-bar";
import type { Category, Product } from "@/lib/types";

export function ProductBrowser({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const requested = params.get("category") ?? "all";
  const known = requested === "all" || categories.some((category) => category.slug === requested);
  const [category, setCategory] = useState(known ? requested : "all");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const selected = categories.find((item) => item.slug === category);

    return products.filter((product) => {
      const categoryMatch = category === "all" || product.category === selected?.name;
      const haystack = `${product.name} ${product.category}`.toLowerCase();
      const queryMatch = needle.length === 0 || haystack.includes(needle);
      return categoryMatch && queryMatch;
    });
  }, [products, categories, query, category]);

  const countLabel = `${filtered.length} ${filtered.length === 1 ? "product" : "products"}`;

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-6">
        <SearchBar value={query} onChange={setQuery} />
        <ProductFilters categories={categories} selected={category} onChange={setCategory} />
      </div>
      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {countLabel}
      </p>
      <div className="mt-4">
        {products.length === 0 ? (
          <EmptyState
            title="No products have been added yet."
            description="New items are added in the catalog file."
          />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No products match your search."
            description="Try another name or category."
            action="Clear search"
            onAction={() => {
              setQuery("");
              setCategory("all");
            }}
          />
        ) : (
          <ProductGrid products={filtered} />
        )}
      </div>
    </div>
  );
}
