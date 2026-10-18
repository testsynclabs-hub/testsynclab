import Image from "next/image";
import { getBlogCover } from "@/lib/blog-covers";

type BlogCoverImageProps = {
  slug: string;
  title: string;
  category?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  /** When true, show category above the image (Testlio-style), not overlaid */
  badgeOutside?: boolean;
};

export function BlogCoverImage({
  slug,
  title,
  category = "Blog",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
  badgeOutside = true,
}: BlogCoverImageProps) {
  const cover = getBlogCover(slug);

  return (
    <div className={badgeOutside ? "space-y-3" : undefined}>
      {badgeOutside ? (
        <span className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600">
          {category}
        </span>
      ) : null}
      <div
        className={`relative overflow-hidden rounded-2xl shadow-sm shadow-brand/10 ${className}`}
        style={{ backgroundColor: cover.bg }}
      >
        <Image
          src={cover.src}
          alt={title}
          width={1200}
          height={630}
          className="h-full w-full object-cover"
          sizes={sizes}
          priority={priority}
        />
        {!badgeOutside ? (
          <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-black/25 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            {category}
          </span>
        ) : null}
      </div>
    </div>
  );
}
