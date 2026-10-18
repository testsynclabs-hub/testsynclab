import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";
import type { Category, Product, Specification } from "@/lib/types";

/**
 * Products live in data/products.json.
 * Categories live in data/categories.json.
 * Photos live in public/products/.
 * See README.md for how to add, edit, or remove an item.
 */

function fail(message: string): never {
  throw new Error(`Catalog: ${message}`);
}

function isSpecification(value: unknown): value is Specification {
  if (!value || typeof value !== "object") return false;
  const spec = value as Specification;
  return typeof spec.label === "string" && typeof spec.value === "string";
}

function validate(products: Product[], categories: Category[]) {
  const categoryNames = new Set<string>();
  const categorySlugs = new Set<string>();

  for (const category of categories) {
    if (!category.name || !category.slug) {
      fail("Every category needs a name and a slug.");
    }
    if (categoryNames.has(category.name)) fail(`Duplicate category name: ${category.name}`);
    if (categorySlugs.has(category.slug)) fail(`Duplicate category slug: ${category.slug}`);
    categoryNames.add(category.name);
    categorySlugs.add(category.slug);
  }

  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const product of products) {
    if (!product.id || !product.name || !product.slug || !product.description) {
      fail("Every product needs an id, name, slug, and description.");
    }
    if (ids.has(product.id)) fail(`Duplicate product id: ${product.id}`);
    if (slugs.has(product.slug)) fail(`Duplicate product slug: ${product.slug}`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug)) {
      fail(`Slug "${product.slug}" should use lowercase words separated by hyphens.`);
    }
    if (!categoryNames.has(product.category)) {
      fail(`"${product.name}" uses unknown category "${product.category}".`);
    }
    if (product.price !== null && typeof product.price !== "number") {
      fail(`"${product.name}" price must be a number or null.`);
    }
    if (product.image !== undefined && typeof product.image !== "string") {
      fail(`"${product.name}" image must be a string.`);
    }
    if (product.specifications && !product.specifications.every(isSpecification)) {
      fail(`"${product.name}" has a specification without a label and value.`);
    }
    ids.add(product.id);
    slugs.add(product.slug);
  }
}

const categories = categoriesData as Category[];
const products = productsData as Product[];

validate(products, categories);

export function getCategories() {
  return categories;
}

export function getProducts() {
  return products;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryByName(name: string) {
  return categories.find((category) => category.name === name);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(name: string) {
  return products.filter((product) => product.category === name);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, limit);
}

export function specsOf(product: Product) {
  return (product.specifications ?? []).filter((spec) => spec.label && spec.value);
}
