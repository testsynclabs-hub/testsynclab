import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical QA strategy for product teams — retainers vs hiring, Playwright CI, API testing, and remote release gates.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-gradient-to-br from-white via-sky-50 to-blue-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Ideas for shipping quality faster — written for founders, eng
            managers, and QA leads worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                {post.date} · {post.readingTime}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
              >
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
