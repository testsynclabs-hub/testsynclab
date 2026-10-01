import Link from "next/link";
import type { Category } from "@/lib/types";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group flex h-full flex-col border border-line bg-card hover:border-binding"
    >
      <span className="h-1.5 w-full" style={{ backgroundColor: category.accent }} />
      <span className="flex flex-1 flex-col p-5">
        <span className="font-display text-2xl text-ink group-hover:text-binding">{category.name}</span>
        <span className="mt-2 text-sm leading-relaxed text-ink-soft">{category.description}</span>
        <span className="mt-5 text-sm font-semibold text-gilt">
          {count} {count === 1 ? "product" : "products"}
        </span>
      </span>
    </Link>
  );
}
