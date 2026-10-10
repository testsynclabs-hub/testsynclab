import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";
import { ProductGrid } from "@/components/product-grid";
import { getCategories, getCategoryBySlug, getProductsByCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category not found" };

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
    openGraph: {
      title: category.name,
      description: category.description,
      url: `/categories/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.name);

  return (
    <Container className="py-12 sm:py-16">
      <PageHeader kicker="Category" title={category.name} description={category.description} />
      <p className="mt-6 text-sm">
        <Link href="/categories" className="font-semibold text-binding hover:underline">
          All categories
        </Link>
      </p>
      <div className="mt-8">
        {products.length === 0 ? (
          <EmptyState
            title="No products in this category yet."
            href="/products"
            action="Browse products"
          />
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
    </Container>
  );
}
