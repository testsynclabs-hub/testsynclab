import type { Metadata } from "next";
import Link from "next/link";
import { BlogCoverImage } from "@/components/blog-cover-image";
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
    image: `${SITE_URL}/images/blog/${post.slug}.svg`,
  })),
};

export default function BlogPage() {
  const spotlight = blogPosts.slice(0, 3);

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

      <section
        className="border-b border-line bg-slate-50 py-16 sm:py-20"
        aria-labelledby="spotlight-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-4 border-b border-slate-300 pb-4">
            <h2
              id="spotlight-heading"
              className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              In the spotlight
            </h2>
            <a
              href="#all-posts"
              className="hidden text-sm font-bold text-brand hover:text-brand-deep sm:inline"
            >
              View all →
            </a>
          </div>

          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {spotlight.map((post, index) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <BlogCoverImage
                      slug={post.slug}
                      title={post.title}
                      category={post.tags[0] ?? "Blog"}
                      priority={index === 0}
                      className="aspect-[16/10] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-brand/15"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                    {post.date} · {post.readingTime}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition-colors hover:text-brand"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 text-sm font-bold text-brand hover:text-brand-deep"
                  >
                    Read article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="all-posts"
        className="scroll-mt-28 bg-white py-16 sm:py-20"
        aria-labelledby="all-posts-heading"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2
            id="all-posts-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep"
          >
            All articles
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <article className="group flex h-full flex-col">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <BlogCoverImage
                      slug={post.slug}
                      title={post.title}
                      category={post.tags[0] ?? "Blog"}
                      className="aspect-[16/10] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-brand/10"
                    />
                  </Link>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-deep"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">
                    {post.date} · {post.readingTime}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brand"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FreeQaAuditCta
        source="blog-index-footer"
        heading="Ready to turn reading into a test plan?"
        body="Book a free QA audit. We will map risks on your product and recommend Basic, Growth, Scale — or no retainer yet."
      />
    </main>
  );
}
