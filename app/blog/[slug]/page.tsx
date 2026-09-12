import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="flex-1">
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-sm font-semibold text-brand">
          <Link href="/blog" className="hover:text-brand-deep">
            ← Blog
          </Link>
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {post.date} · {post.readingTime} · {post.tags.join(", ")}
        </p>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-brand/20 bg-brand-soft/40 p-6">
          <p className="font-semibold text-brand-deep">
            Want this operating model on your team?
          </p>
          <Link
            href="/contact?plan=growth"
            className="mt-3 inline-flex font-bold text-brand hover:text-brand-deep"
          >
            Start a free QA audit →
          </Link>
        </div>
      </article>
    </main>
  );
}
