"use client";

import { useEffect, useState } from "react";
import { reviews, type Review } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const fill = Math.min(1, Math.max(0, rating - index));
        return (
          <span key={index} className="relative inline-block h-4 w-4 sm:h-5 sm:w-5">
            <svg viewBox="0 0 20 20" className="absolute inset-0 h-full w-full text-white/25" aria-hidden>
              <path
                fill="currentColor"
                d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.9l-4.78 2.5.91-5.32L2.27 7.12l5.34-.78L10 1.5z"
              />
            </svg>
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4 text-white sm:h-5 sm:w-5" aria-hidden>
                <path
                  fill="currentColor"
                  d="M10 1.5l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.9l-4.78 2.5.91-5.32L2.27 7.12l5.34-.78L10 1.5z"
                />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}

function HighlightedHeadline({
  headline,
  highlight,
}: {
  headline: string;
  highlight: string;
}) {
  const idx = headline.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) {
    return <>{headline}</>;
  }
  const before = headline.slice(0, idx);
  const match = headline.slice(idx, idx + highlight.length);
  const after = headline.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="rounded-sm bg-emerald-300 px-1.5 text-[#07111f]">{match}</span>
      {after}
    </>
  );
}

function ReviewCard({
  review,
  active,
}: {
  review: Review;
  active: boolean;
}) {
  return (
    <article
      className={`flex h-full min-h-[22rem] w-[min(100%,34rem)] shrink-0 flex-col rounded-2xl border p-6 transition-all duration-500 sm:min-h-[24rem] sm:p-8 ${
        active
          ? "scale-100 border-white/15 bg-[#0b1729] opacity-100 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
          : "scale-[0.96] border-white/10 bg-[#101a2c] opacity-55"
      }`}
      aria-hidden={!active}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-[family-name:var(--font-display)] text-4xl leading-none text-white/80" aria-hidden>
          “
        </span>
        <Stars rating={review.rating} />
      </div>

      <p className="mt-3 inline-flex w-fit rounded-full border border-white/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 sm:text-xs">
        {review.industry}
      </p>

      <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl">
        <HighlightedHeadline headline={review.headline} highlight={review.highlight} />
      </h3>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-200 sm:text-base">
        {review.quote}
      </p>

      <div className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
        <p className="font-[family-name:var(--font-display)] text-sm font-bold tracking-wide text-white sm:text-base">
          {review.company}
        </p>
        <div className="text-right">
          <p className="text-sm font-semibold text-white">{review.name}</p>
          <p className="text-xs text-slate-400">{review.role}</p>
        </div>
      </div>
    </article>
  );
}

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const prev = () => setIndex((value) => (value - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((value) => (value + 1) % reviews.length);

  return (
    <section
      className="overflow-hidden border-t border-line bg-[#f4f7fb] py-16 sm:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="reviews-heading"
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl lg:text-[2.75rem]"
          >
            Delivering exceptional client outcomes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Product teams choose TestSync Lab for clear monthly QA ownership —
            see how partners describe the work.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <div className="flex items-stretch justify-center gap-4 overflow-hidden px-1 sm:gap-6">
            {[-1, 0, 1].map((offset) => {
              const reviewIndex = (index + offset + reviews.length) % reviews.length;
              const review = reviews[reviewIndex];
              return (
                <div
                  key={`${review.id}-${offset}`}
                  className={`flex justify-center transition-all duration-500 ${
                    offset === 0 ? "w-full max-w-xl" : "hidden w-0 lg:block lg:w-[18rem] lg:shrink-0"
                  }`}
                >
                  <ReviewCard review={review} active={offset === 0} />
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-deep shadow-sm transition hover:border-brand/40 hover:bg-brand-soft"
              aria-label="Previous review"
            >
              ←
            </button>
            <div className="flex items-center gap-2" role="tablist" aria-label="Review slides">
              {reviews.map((review, reviewIndex) => (
                <button
                  key={review.id}
                  type="button"
                  role="tab"
                  aria-selected={reviewIndex === index}
                  aria-label={`Show review from ${review.company}`}
                  onClick={() => setIndex(reviewIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    reviewIndex === index ? "w-7 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-brand-deep shadow-sm transition hover:border-brand/40 hover:bg-brand-soft"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
