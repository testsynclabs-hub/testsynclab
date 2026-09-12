import Image from "next/image";
import { getBlogCover } from "@/lib/blog-covers";

type BlogCoverImageProps = {
  slug: string;
  title: string;
  category?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function BlogCoverImage({
  slug,
  title,
  category = "Blog",
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: BlogCoverImageProps) {
  const cover = getBlogCover(slug);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-900 ${className}`}
    >
      <Image
        src={cover.src}
        alt={title}
        width={1200}
        height={630}
        className="h-full w-full object-cover"
        sizes={sizes}
        priority={priority}
        unoptimized
      />
      <span className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/70 bg-black/25 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        {category}
      </span>
    </div>
  );
}
