import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical QA guides for founders and engineering leaders — retainers vs hiring, Playwright CI, API testing, launch checklists, and remote release gates.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            QA insights for teams that ship
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Practical articles on retainers, automation, API testing, and
            release quality — written to help you buy and build smarter.
          </p>
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
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-8">
          <div className="rounded-2xl border border-brand/20 bg-brand-soft/40 p-6 sm:flex sm:items-center sm:justify-between">
            <p className="font-semibold text-brand-deep">
              Want help applying this on your product?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-deep sm:mt-0"
            >
              Book free QA audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
