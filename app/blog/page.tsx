import type { Metadata } from "next";
import Link from "next/link";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { blogPosts } from "@/lib/blog";
import { auditHref } from "@/lib/cta";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "QA Blog",
  description:
    "SEO-ready QA playbooks for product teams — free QA audits, Playwright, retainers vs hiring, API testing, and release gates. Every article leads to a practical next step.",
  keywords: [
    "QA blog",
    "software testing articles",
    "free QA audit",
    "Playwright testing",
    "QA retainer",
  ],
  alternates: { canonical: "/blog" },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} Blog`,
  url: `${SITE_URL}/blog`,
  description: metadata.description,
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    description: post.description,
  })),
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            QA insights for teams that ship
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Practical quality writing for founders, eng managers, and QA leads.
            Every post ends with a path to a free QA audit or a scoped retainer.
          </p>
          <Link
            href={auditHref("blog-index")}
            className="mt-6 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-deep"
          >
            Free QA Audit
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-deep"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">
                {post.date} · {post.readingTime}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-bold text-brand hover:text-brand-deep"
                >
                  Read article →
                </Link>
                <Link
                  href={auditHref(`blog-card:${post.slug}`)}
                  className="text-sm font-bold text-brand-deep hover:text-brand"
                >
                  Free QA Audit →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FreeQaAuditCta
        source="blog-index-footer"
        heading="Ready to turn reading into a test plan?"
        body="Book a free QA audit. We will map risks on your product and recommend Basic, Growth, QA Lead — or no retainer yet."
      />
    </main>
  );
}
