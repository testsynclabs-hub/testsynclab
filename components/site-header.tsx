"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { auditHref, FREE_QA_AUDIT_LABEL } from "@/lib/cta";
import {
  primaryNav,
  SITE_EMAIL,
  SITE_NAME,
  type PrimaryNavItem,
} from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  const pathOnly = href.split("#")[0] || "/";
  if (pathOnly === "/") return pathname === "/";
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

function menuIsActive(pathname: string, item: Extract<PrimaryNavItem, { type: "menu" }>) {
  if (item.href && isActivePath(pathname, item.href)) return true;
  return item.children.some((child) => isActivePath(pathname, child.href));
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
      fill="none"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuBaseId = useId();

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenu(null);
    setMobileMenu(null);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopMenu(null);
        setMobileOpen(false);
      }
    }

    function onPointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setDesktopMenu(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function openDesktopMenu(id: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopMenu(id);
  }

  function scheduleCloseDesktopMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopMenu(null), 160);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-line/80 bg-white/95 shadow-sm shadow-brand/5 backdrop-blur-xl"
    >
      <div className="border-b border-line/70 bg-slate-950 text-slate-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-2 text-xs font-semibold sm:px-8 sm:text-sm">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="truncate transition-colors hover:text-white"
          >
            {SITE_EMAIL}
          </a>
          <Link
            href={auditHref("utility-bar")}
            className="shrink-0 text-blue-300 transition-colors hover:text-white"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-3.5">
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
          className="hidden items-center gap-0.5 text-sm font-semibold text-slate-700 lg:flex"
        >
          {primaryNav.map((item) => {
            if (item.type === "link") {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 transition-colors hover:bg-brand-soft/70 hover:text-brand ${
                    active ? "bg-brand-soft/80 text-brand" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const open = desktopMenu === item.id;
            const active = menuIsActive(pathname, item);
            const panelId = `${menuBaseId}-${item.id}`;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => openDesktopMenu(item.id)}
                onMouseLeave={scheduleCloseDesktopMenu}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors hover:bg-brand-soft/70 hover:text-brand ${
                    active || open ? "bg-brand-soft/80 text-brand" : ""
                  }`}
                  aria-expanded={open}
                  aria-haspopup="true"
                  aria-controls={panelId}
                  onClick={() =>
                    setDesktopMenu((current) =>
                      current === item.id ? null : item.id,
                    )
                  }
                >
                  {item.label}
                  <Chevron open={open} />
                </button>

                {open ? (
                  <div
                    id={panelId}
                    role="menu"
                    className="absolute left-0 top-full z-50 pt-2"
                    onMouseEnter={() => openDesktopMenu(item.id)}
                    onMouseLeave={scheduleCloseDesktopMenu}
                  >
                    <div className="w-[22rem] rounded-2xl border border-line bg-white p-2 shadow-xl shadow-brand/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          role="menuitem"
                          className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-brand-soft/70"
                          onClick={() => setDesktopMenu(null)}
                        >
                          <span className="block font-bold text-slate-900">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-xs font-medium leading-relaxed text-muted">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

          <Link
            href={auditHref("header")}
            className="ml-2 rounded-full bg-brand px-4 py-2 text-white shadow-md shadow-brand/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
          >
            {FREE_QA_AUDIT_LABEL}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-line px-3 py-2 text-sm font-semibold text-brand-deep lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
            {primaryNav.map((item) => {
              if (item.type === "link") {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-2.5 ${
                        active
                          ? "bg-brand-soft text-brand"
                          : "hover:bg-slate-50 hover:text-brand"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const expanded = mobileMenu === item.id;
              const active = menuIsActive(pathname, item);

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left ${
                      active || expanded
                        ? "bg-brand-soft text-brand"
                        : "hover:bg-slate-50 hover:text-brand"
                    }`}
                    aria-expanded={expanded}
                    onClick={() =>
                      setMobileMenu((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                  >
                    <span>{item.label}</span>
                    <Chevron open={expanded} />
                  </button>
                  {expanded ? (
                    <ul className="mt-1 space-y-1 border-l border-brand/20 py-1 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-brand-soft/60 hover:text-brand"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="block font-bold text-slate-800">
                              {child.label}
                            </span>
                            {child.description ? (
                              <span className="mt-0.5 block text-xs font-medium text-muted">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="block rounded-lg px-3 py-2.5 text-brand"
              >
                {SITE_EMAIL}
              </a>
            </li>
            <li>
              <Link
                href={auditHref("header-mobile")}
                className="mt-1 inline-flex rounded-full bg-brand px-4 py-2.5 text-white"
                onClick={() => setMobileOpen(false)}
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
