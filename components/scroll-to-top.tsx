"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

function jumpToTop() {
  if (typeof window === "undefined") return;
  if (window.location.hash) return;

  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";

  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;

  html.style.scrollBehavior = previous;
}

/**
 * App Router can restore the previous page’s scroll offset after paint.
 * Force top on every pathname change (skip hash targets).
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      const previous = history.scrollRestoration;
      history.scrollRestoration = "manual";
      return () => {
        history.scrollRestoration = previous;
      };
    }
  }, []);

  useLayoutEffect(() => {
    jumpToTop();

    // Beat Next’s late scroll restoration on soft navigations.
    const raf1 = requestAnimationFrame(() => {
      jumpToTop();
      requestAnimationFrame(jumpToTop);
    });
    const t0 = window.setTimeout(jumpToTop, 0);
    const t1 = window.setTimeout(jumpToTop, 50);
    const t2 = window.setTimeout(jumpToTop, 120);

    return () => {
      cancelAnimationFrame(raf1);
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
