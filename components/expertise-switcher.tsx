"use client";

import { useState } from "react";
import { productDomains, qaToolStack } from "@/lib/home-content";

type Tab = "tools" | "domains";

export function ExpertiseSwitcher() {
  const [tab, setTab] = useState<Tab>("tools");

  return (
    <div>
      <div
        role="tablist"
        aria-label="Tools and product domains"
        className="mx-auto flex w-full max-w-md rounded-2xl border border-brand/20 bg-white p-1.5 shadow-sm"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === "tools"}
          onClick={() => setTab("tools")}
          className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
            tab === "tools"
              ? "bg-brand text-white shadow-md shadow-brand/25"
              : "text-slate-700 hover:bg-sky-50"
          }`}
        >
          Tool stack
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === "domains"}
          onClick={() => setTab("domains")}
          className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
            tab === "domains"
              ? "bg-brand text-white shadow-md shadow-brand/25"
              : "text-slate-700 hover:bg-sky-50"
          }`}
        >
          Product domains
        </button>
      </div>

      {tab === "tools" ? (
        <ul
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          aria-label="QA tools we use"
        >
          {qaToolStack.map((tool) => (
            <li
              key={tool.name}
              className="flex flex-col items-center rounded-2xl border border-line bg-white px-3 py-5 text-center shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft font-[family-name:var(--font-display)] text-sm font-extrabold text-brand-deep">
                {tool.name.slice(0, 2)}
              </span>
              <span className="mt-3 font-[family-name:var(--font-display)] text-sm font-bold text-slate-900">
                {tool.name}
              </span>
              <span className="mt-1 text-xs font-medium text-muted">
                {tool.group}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3"
          aria-label="Product domains we test"
        >
          {productDomains.map((domain) => (
            <li
              key={domain.name}
              className="rounded-2xl border border-line bg-white px-4 py-5 text-center font-[family-name:var(--font-display)] text-sm font-bold text-slate-900 shadow-sm sm:text-base"
            >
              {domain.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
