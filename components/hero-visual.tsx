"use client";

import { useEffect, useState } from "react";

const contexts = [
  "web apps",
  "mobile builds",
  "API contracts",
  "checkout flows",
  "release trains",
  "CI gates",
] as const;

export function HeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setIndex((value) => (value + 1) % contexts.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative flex w-full min-h-[14rem] items-center justify-center lg:min-h-[22rem] lg:justify-end">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-sky-400/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute right-24 top-8 h-40 w-40 rounded-full bg-emerald-400/15 blur-2xl" />
      </div>

      <div className="animate-drift relative max-w-md text-left lg:text-right">
        <p className="text-base font-medium text-slate-200 sm:text-lg">
          TestSync Lab covers
        </p>
        <div className="mt-4 inline-flex min-h-[3.5rem] items-center rounded-full border-2 border-emerald-300/80 bg-emerald-400/10 px-5 py-2.5 shadow-[0_0_40px_rgba(52,211,153,0.15)] backdrop-blur-sm lg:ml-auto">
          <span
            className="mr-3 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.85)]"
            aria-hidden="true"
          />
          <span className="relative inline-grid overflow-hidden text-left text-xl font-bold tracking-tight text-white sm:text-2xl">
            {contexts.map((item, itemIndex) => (
              <span
                key={item}
                className={`col-start-1 row-start-1 transition-all duration-300 ${
                  itemIndex === index
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
                aria-hidden={itemIndex === index ? undefined : true}
              >
                {item}
              </span>
            ))}
            <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
              checkout flows
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
