"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import { navLinks, SITE_NAME } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 shadow-sm shadow-brand/5 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-brand sm:text-xl"
          aria-label={`${SITE_NAME} home`}
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
          className="hidden items-center gap-1 text-sm font-semibold text-slate-600 lg:flex"
        >
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 transition-all duration-200 hover:bg-brand-soft/60 hover:text-brand ${
                  active
                    ? "bg-brand-soft/70 text-brand"
                    : "text-slate-600"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand transition-all duration-200 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
          <Link
            href={auditHref("header")}
            className="ml-2 rounded-lg bg-brand px-3.5 py-2 text-white shadow-md shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-line px-3 py-2 text-sm font-semibold text-brand-deep lg:hidden"
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
          className="border-t border-line bg-white/95 px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-lg px-3 py-2.5 transition-colors ${
                      active
                        ? "bg-brand-soft text-brand"
                        : "hover:bg-slate-50 hover:text-brand"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href={auditHref("header-mobile")}
                className="mt-2 inline-flex rounded-lg bg-brand px-3.5 py-2.5 text-white"
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
