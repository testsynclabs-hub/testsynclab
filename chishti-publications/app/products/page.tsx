import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProductBrowser } from "@/components/product-browser";
import { getCategories, getProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Products",
  description: "Search books, copies, notebooks, and educational products, then inquire on WhatsApp.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();

  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        kicker="Catalog"
        title="Products"
        description="Search by product name or category, then open an item or send a WhatsApp inquiry."
      />
      <Suspense fallback={<p className="mt-8 text-muted">Loading products…</p>}>
        <ProductBrowser products={products} categories={categories} />
      </Suspense>
    </Container>
  );
}
