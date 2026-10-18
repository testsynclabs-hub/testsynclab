"use client";

import { useState } from "react";
import { capabilityAreas } from "@/lib/home-content";

type CapabilityId = (typeof capabilityAreas)[number]["id"];

export function CapabilityExplorer() {
  const [activeId, setActiveId] = useState<CapabilityId>(
    capabilityAreas[0].id,
  );
  const active =
    capabilityAreas.find((item) => item.id === activeId) ?? capabilityAreas[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div
        role="tablist"
        aria-label="QA capability areas"
        className="flex flex-col gap-2"
      >
        {capabilityAreas.map((item) => {
          const selected = item.id === activeId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              id={`capability-tab-${item.id}`}
              aria-controls={`capability-panel-${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={`rounded-xl border px-4 py-3.5 text-left transition-all duration-300 ${
                selected
                  ? "border-brand bg-brand text-white shadow-lg shadow-brand/25"
                  : "border-line bg-white text-slate-800 hover:border-brand/40 hover:bg-sky-50"
              }`}
            >
              <span className="font-[family-name:var(--font-display)] text-base font-bold">
                {item.title}
              </span>
              <span
                className={`mt-1 block text-sm leading-relaxed ${
                  selected ? "text-blue-100" : "text-muted"
                }`}
              >
                {item.summary}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`capability-panel-${active.id}`}
        aria-labelledby={`capability-tab-${active.id}`}
        className="rounded-2xl border border-brand/20 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-7 sm:p-9"
      >
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
          Coverage depth
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-extrabold text-brand-deep sm:text-3xl">
          {active.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {active.summary}
        </p>
        <ul className="mt-8 space-y-3">
          {active.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-base text-slate-800"
            >
              <span
                className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-brand"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
