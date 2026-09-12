"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { navLinks, SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm shadow-brand/5 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-brand sm:text-xl"
        >
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span>{SITE_NAME}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={auditHref("header")}
            className="rounded-lg bg-brand px-3.5 py-2 text-white shadow-md shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-line px-3 py-2 text-sm font-semibold text-brand-deep md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-white/95 px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={auditHref("header-mobile")}
                className="mt-1 inline-flex rounded-lg bg-brand px-3.5 py-2 text-white"
                onClick={() => setOpen(false)}
              >
                {FREE_QA_AUDIT_LABEL}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
