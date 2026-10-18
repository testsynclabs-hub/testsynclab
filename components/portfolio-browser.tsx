"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  caseStudies,
  portfolioLaneFilters,
  type CaseStudy,
  type PortfolioLaneFilter,
} from "@/lib/case-studies";

const laneLabel: Record<CaseStudy["lanes"][number], string> = {
  manual: "Manual",
  api: "API",
  mobile: "Mobile",
};

export function PortfolioBrowser() {
  const [lane, setLane] = useState<PortfolioLaneFilter>("all");

  const visible = useMemo(
    () =>
      lane === "all"
        ? caseStudies
        : caseStudies.filter((item) => item.lanes.includes(lane)),
    [lane],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter portfolio by testing lane"
      >
        {portfolioLaneFilters.map((filter) => {
          const selected = lane === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setLane(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                selected
                  ? "bg-brand text-white"
                  : "border border-line bg-white text-slate-700 hover:border-brand/40 hover:text-brand-deep"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm font-medium text-muted" aria-live="polite">
        {visible.length === 1
          ? "Showing 1 snapshot"
          : `Showing ${visible.length} snapshots`}
      </p>
      {visible.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-dashed border-line bg-white px-6 py-10 text-muted">
          No snapshots in this lane yet.
        </p>
      ) : (
        <ul className="mt-8 grid gap-6">
          {visible.map((item) => (
            <li key={item.id}>
              <article className="grid gap-6 rounded-3xl border border-line bg-white p-6 shadow-sm shadow-brand/5 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                    {item.industry}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                    <Link
                      href={`/portfolio/${item.id}`}
                      className="hover:text-brand-deep"
                    >
                      {item.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-muted">{item.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.lanes.map((itemLane) => (
                      <li
                        key={itemLane}
                        className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-deep"
                      >
                        {laneLabel[itemLane]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Outcome</p>
                  <p className="mt-1 font-medium leading-relaxed text-brand-deep">
                    {item.outcome}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-muted">
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2">
                        <span aria-hidden="true" className="text-brand">
                          ·
                        </span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/portfolio/${item.id}`}
                    className="mt-6 inline-flex text-sm font-bold text-brand hover:text-brand-deep"
                  >
                    Open snapshot →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
