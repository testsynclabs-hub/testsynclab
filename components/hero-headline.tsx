"use client";

import { useEffect, useState } from "react";

const rotatingWords = [
  "shippable",
  "stable",
  "confident",
  "release-ready",
] as const;

export function HeroHeadline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((value) => (value + 1) % rotatingWords.length);
        setVisible(true);
      }, 220);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <h1
      id="hero-heading"
      className="animate-fade-up delay-100 mt-5 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]"
    >
      QA retainers that keep every release{" "}
      <span
        className={`inline-block min-w-[9.5ch] bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
        aria-live="polite"
      >
        {rotatingWords[index]}
      </span>
      .
    </h1>
  );
}
