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

      <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted">
        {tab === "tools"
          ? "What we run in your repo — and what you actually get back each cycle."
          : "Product types we test week after week — with the outcomes that matter to ship."}
      </p>

      {tab === "tools" ? (
        <ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="QA tools we use"
        >
          {qaToolStack.map((tool) => (
            <li key={tool.name} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm shadow-brand/5 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-[family-name:var(--font-display)] text-sm font-extrabold text-brand-deep">
                    {tool.name.slice(0, 2)}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-slate-900">
                      {tool.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                      {tool.group}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {tool.summary}
                </p>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                    You get
                  </p>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-brand-deep">
                    {tool.deliver}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Product domains we test"
        >
          {productDomains.map((domain) => (
            <li key={domain.name} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm shadow-brand/5 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 sm:p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-slate-900">
                  {domain.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {domain.summary}
                </p>
                <div className="mt-4 border-t border-line pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">
                    You get
                  </p>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-brand-deep">
                    {domain.deliver}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
