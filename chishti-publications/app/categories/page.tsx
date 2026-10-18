import type { Metadata } from "next";
import { CategoryCard } from "@/components/category-card";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { getCategories, getProductsByCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Categories",
  description: "Browse books, copies, notebooks, registers, stationery, and educational products.",
  alternates: { canonical: "/categories" },
};

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        kicker="Catalog"
        title="Categories"
        description="Choose a category to see the products inside it."
      />
      {categories.length === 0 ? (
        <p className="mt-8 text-muted">No categories have been added yet.</p>
      ) : (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} count={getProductsByCategory(category.name).length} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
