"use client";

import { HeartIcon } from "@/components/icons";
import { useFavorites } from "@/components/favorites-provider";

export function FavoriteButton({
  productId,
  productName,
  variant = "icon",
}: {
  productId: string;
  productName: string;
  variant?: "icon" | "labeled";
}) {
  const { isFavorite, toggle } = useFavorites();
  const saved = isFavorite(productId);
  const label = saved ? `Remove ${productName} from favorites` : `Save ${productName} to favorites`;

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={label}
      onClick={() => toggle(productId)}
      className={
        variant === "icon"
          ? "inline-flex h-11 w-11 items-center justify-center rounded-full bg-card/95 text-binding shadow-sm hover:text-seal"
          : "inline-flex min-h-11 items-center justify-center gap-2 border border-line bg-card px-4 py-2.5 text-sm font-semibold text-binding hover:border-binding"
      }
    >
      <HeartIcon filled={saved} className={saved ? "h-5 w-5 text-seal" : "h-5 w-5"} />
      {variant === "labeled" ? <span>{saved ? "Saved" : "Save"}</span> : null}
    </button>
  );
}
