"use client";

import { useEffect, useState } from "react";
import { reviews } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const fill = Math.min(1, Math.max(0, rating - index));
        return (
          <span key={index} className="relative inline-block h-4 w-4">
            <svg viewBox="0 0 20 20" className="absolute inset-0 h-full w-full text-slate-200" aria-hidden>
              <path
                fill="currentColor"
                d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.9l-4.78 2.5.91-5.32L2.27 7.12l5.34-.78L10 1.5z"
              />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-amber-400" aria-hidden>
                <path
                  fill="currentColor"
                  d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.9l-4.78 2.5.91-5.32L2.27 7.12l5.34-.78L10 1.5z"
                />
              </svg>
            </span>
          </span>
        );
      })}
      <span className="ml-1.5 text-sm font-semibold tabular-nums text-slate-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const active = reviews[index];
  const prev = () => setIndex((value) => (value - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((value) => (value + 1) % reviews.length);

  return (
    <section
      className="border-t border-line bg-white py-20 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Client feedback
          </p>
          <h2
            id="reviews-heading"
            className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl"
          >
            What teams say after working with us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Straight feedback from product and engineering partners on monthly
            QA retainers.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <article
            key={active.id}
            className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-brand/5 sm:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Stars rating={active.rating} />
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
                {active.industry}
              </span>
            </div>

            <blockquote className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
              “{active.quote}”
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
              <div>
                <p className="font-[family-name:var(--font-display)] text-base font-bold text-slate-900">
                  {active.name}
                </p>
                <p className="text-sm text-muted">
                  {active.role}
                  {active.role !== active.company ? ` · ${active.company}` : ""}
                </p>
              </div>
              <p className="text-sm font-semibold text-brand">{active.company}</p>
            </div>
          </article>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-deep transition hover:border-brand/40 hover:bg-brand-soft"
              aria-label="Previous review"
            >
              ←
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Reviews">
              {reviews.map((review, reviewIndex) => (
                <button
                  key={review.id}
                  type="button"
                  role="tab"
                  aria-selected={reviewIndex === index}
                  aria-label={`Review from ${review.company}`}
                  onClick={() => setIndex(reviewIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    reviewIndex === index
                      ? "w-7 bg-brand"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-deep transition hover:border-brand/40 hover:bg-brand-soft"
              aria-label="Next review"
            >
              →
            </button>
          </div>

          <ul className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {reviews
              .filter((review) => review.id !== active.id)
              .slice(0, 4)
              .map((review) => (
                <li key={review.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setIndex(reviews.findIndex((item) => item.id === review.id))
                    }
                    className="h-full w-full rounded-xl border border-line bg-white p-4 text-left transition hover:border-brand/30 hover:bg-brand-soft/40"
                  >
                    <Stars rating={review.rating} />
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                      {review.quote}
                    </p>
                    <p className="mt-3 text-sm font-bold text-slate-900">
                      {review.company}
                    </p>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
