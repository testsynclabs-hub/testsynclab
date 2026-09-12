import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCoverImage } from "@/components/blog-cover-image";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
import { getBlogCover } from "@/lib/blog-covers";
import { auditHref } from "@/lib/cta";
import {
  blogPostingJsonLd,
  blogPosts,
  getPost,
  getRelatedPosts,
} from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

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
  const path = `/blog/${post.slug}`;
  const cover = getBlogCover(post.slug);
  const imageUrl = `${SITE_URL}${cover.src}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: path,
      publishedTime: post.date,
      authors: [SITE_NAME],
      tags: post.tags,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);
  const source = `blog:${post.slug}`;
  const canonical = `${SITE_URL}/blog/${post.slug}`;

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd(post, canonical)),
        }}
      />
      <article>
        <div className="border-b border-line bg-slate-50">
          <div className="mx-auto max-w-4xl px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-16">
            <p className="text-sm font-semibold text-brand">
              <Link href="/blog" className="hover:text-brand-deep">
                ← Blog
              </Link>
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand-deep"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-muted">
              {post.date} · {post.readingTime}
            </p>
            <div className="mt-8">
              <BlogCoverImage
                slug={post.slug}
                title={post.title}
                category={post.tags[0] ?? "Blog"}
                priority
                className="aspect-[16/9] shadow-lg shadow-brand/10"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-lg leading-relaxed text-slate-700">
            {post.description}{" "}
            <Link
              href={auditHref(source)}
              className="font-bold text-brand hover:text-brand-deep"
            >
              Start a free QA audit
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-bold text-brand hover:text-brand-deep"
            >
              contact {SITE_NAME}
            </Link>
            .
          </p>

          <div className="mt-10 space-y-10">
            {post.sections.map((section, index) => (
              <section key={section.heading}>
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-slate-900">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
                {index === 1 ? (
                  <FreeQaAuditCta
                    source={`${source}:mid`}
                    variant="card"
                    heading="Want this applied to your product?"
                    body="Book a free QA audit. We reply with a risk map and a recommended monthly package — or we tell you if you do not need one yet."
                  />
                ) : null}
              </section>
            ))}
          </div>

          <FreeQaAuditCta
            source={`${source}:end`}
            variant="card"
            heading="Free QA audit — next step"
            body="Share your website or staging URL on the contact form. Every article on this blog is built to get you a concrete quality plan, not a newsletter."
          />

          {related.length > 0 ? (
            <aside className="mt-14">
              <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
                Keep reading
              </h2>
              <ul className="mt-6 grid gap-6 sm:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/blog/${item.slug}`} className="group block">
                      <BlogCoverImage
                        slug={item.slug}
                        title={item.title}
                        category={item.tags[0] ?? "Blog"}
                        className="aspect-[16/10] transition duration-300 group-hover:-translate-y-1"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                      <span className="mt-3 block text-sm font-bold text-slate-900 group-hover:text-brand">
                        {item.title} →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </article>
    </main>
  );
}
