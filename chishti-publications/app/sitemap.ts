import type { MetadataRoute } from "next";
import { getCategories, getProducts } from "@/lib/catalog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = ["", "/categories", "/products", "/about", "/contact", "/privacy", "/terms"];

  const staticRoutes: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" || path === "/products" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/products" || path === "/categories" ? 0.8 : 0.4,
  }));

  const categories: MetadataRoute.Sitemap = getCategories().map((category) => ({
    url: `${site.url}/categories/${category.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const products: MetadataRoute.Sitemap = getProducts().map((product) => ({
    url: `${site.url}/products/${product.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...categories, ...products];
}
