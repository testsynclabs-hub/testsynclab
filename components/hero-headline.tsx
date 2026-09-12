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
      }, 180);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <h1
      id="hero-heading"
      className="animate-fade-up delay-100 mt-5 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]"
    >
      QA retainers that keep every release{" "}
      <span className="relative inline-grid align-baseline">
        {rotatingWords.map((word, wordIndex) => (
          <span
            key={word}
            className={`col-start-1 row-start-1 text-brand transition-all duration-300 ${
              wordIndex === index && visible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-1 opacity-0"
            }`}
            aria-hidden={wordIndex === index ? undefined : true}
          >
            {word}
          </span>
        ))}
        <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
          release-ready
        </span>
      </span>
    </h1>
  );
}
