import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FreeQaAuditCta } from "@/components/free-qa-audit-cta";
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
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          {post.description}{" "}
          <Link
            href={auditHref(source)}
            className="font-bold text-brand hover:text-brand-deep"
          >
            Start a free QA audit
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-bold text-brand hover:text-brand-deep">
            contact TestSync Lab
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
          <aside className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-slate-900">
              Keep reading
            </h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="font-semibold text-brand hover:text-brand-deep"
                  >
                    {item.title} →
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </article>
    </main>
  );
}
