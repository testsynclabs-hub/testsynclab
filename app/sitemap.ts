import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const highPriority = new Set([
    "/blog",
    "/contact",
    "/pricing",
    "/ai",
    "/qa-services-usa",
    "/qa-services-canada",
    "/outsourced-qa",
    "/best-qa-company",
    "/hire-qa-testers",
    "/qa-agency",
    "/software-testing-company",
    "/qa-agency-lahore",
  ]);

  const staticRoutes = [
    "",
    "/services",
    "/services/manual-testing",
    "/services/api-testing",
    "/services/playwright-automation",
    "/services/performance-testing",
    "/ai",
    "/qa-services-usa",
    "/qa-services-canada",
    "/outsourced-qa",
    "/best-qa-company",
    "/hire-qa-testers",
    "/qa-agency",
    "/software-testing-company",
    "/qa-agency-lahore",
    "/pricing",
    "/about",
    "/contact",
    "/become-a-tester",
    "/blog",
    "/faq",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency:
      path === "" || path === "/blog" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === ""
        ? 1
        : highPriority.has(path) || path.startsWith("/services/")
          ? 0.9
          : path === "/services"
            ? 0.85
            : path === "/privacy" || path === "/terms" || path === "/cookies"
              ? 0.3
              : 0.7,
  }));

  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...posts];
}
