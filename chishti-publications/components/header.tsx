"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useFavorites } from "@/components/favorites-provider";
import { CloseIcon, LogoMark, MenuIcon } from "@/components/icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/products", label: "Products" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const { ids, ready } = useFavorites();

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-binding">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <LogoMark className="h-9 w-9 shrink-0" />
          <span className="min-w-0">
            <span className="font-display block truncate text-[1.05rem] leading-none text-paper sm:text-lg">
              Chishti
            </span>
            <span className="mt-1 block truncate text-[0.62rem] leading-none font-semibold tracking-[0.16em] text-gilt-soft uppercase">
              Publications
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`text-sm font-semibold ${
                isActive(pathname, link.href)
                  ? "text-paper underline decoration-gilt-soft underline-offset-4"
                  : "text-paper/80 hover:text-paper"
              }`}
            >
              {link.label}
              {link.href === "/favorites" && ready && ids.length > 0 ? (
                <span className="ml-1 text-gilt-soft">({ids.length})</span>
              ) : null}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-binding px-4 py-4 lg:hidden"
      >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-white/15">
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  onClick={() => setOpenPath(null)}
                  className="flex min-h-12 items-center justify-between py-3 text-lg font-semibold text-paper"
                >
                  <span>{link.label}</span>
                  {link.href === "/favorites" && ready && ids.length > 0 ? (
                    <span className="text-sm text-gilt-soft">{ids.length} saved</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
    </>
  );
}
