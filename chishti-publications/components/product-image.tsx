"use client";

import Image from "next/image";
import { useState } from "react";

function CoverPlaceholder({ name, category }: { name: string; category?: string }) {
  return (
    <div
      role="img"
      aria-label={`${name}. Image not available yet.`}
      className="flex h-full w-full flex-col justify-between bg-binding px-4 py-5 text-center text-paper"
    >
      <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-gilt-soft uppercase">
        {category || "Catalog"}
      </span>
      <span className="font-display text-xl leading-tight sm:text-2xl">{name}</span>
      <span className="text-[0.65rem] tracking-[0.16em] text-gilt-soft uppercase">
        Chishti Publications
      </span>
    </div>
  );
}

export function ProductImage({
  src,
  name,
  category,
  preload = false,
  sizes,
}: {
  src?: string;
  name: string;
  category?: string;
  preload?: boolean;
  sizes: string;
}) {
  const [failed, setFailed] = useState(false);
  const image = src?.trim();

  if (!image || failed) {
    return <CoverPlaceholder name={name} category={category} />;
  }

  return (
    <Image
      src={image}
      alt={name}
      fill
      sizes={sizes}
      preload={preload}
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
