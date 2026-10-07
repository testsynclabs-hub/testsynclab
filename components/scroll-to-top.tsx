"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * App Router keeps the previous scroll offset on some navigations when
 * `html { scroll-behavior: smooth }` is set. Force the document to the top
 * on every pathname change (unless the URL has a hash target).
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;

    // Instant jump — smooth CSS scroll-behavior can leave mid-page offsets.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      const previous = history.scrollRestoration;
      history.scrollRestoration = "manual";
      return () => {
        history.scrollRestoration = previous;
      };
    }
  }, []);

  return null;
}
