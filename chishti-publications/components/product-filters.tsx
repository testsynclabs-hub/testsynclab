import type { Category } from "@/lib/types";

export function ProductFilters({
  categories,
  selected,
  onChange,
}: {
  categories: Category[];
  selected: string;
  onChange: (slug: string) => void;
}) {
  const options = [{ name: "All", slug: "all" }, ...categories];

  return (
    <div>
      <p id="category-filter-label" className="text-sm font-semibold text-ink">
        Category
      </p>
      <div role="group" aria-labelledby="category-filter-label" className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected === option.slug;
          return (
            <button
              key={option.slug}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option.slug)}
              className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold ${
                active
                  ? "bg-binding text-paper"
                  : "border border-line bg-card text-ink hover:border-binding"
              }`}
            >
              {option.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
