import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/about",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency:
      path === "" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === "" ? 1 : path === "/blog" || path === "/contact" ? 0.9 : path === "/pricing" ? 0.9 : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...posts];
}
