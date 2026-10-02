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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 text-binding">
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="font-display truncate text-base leading-none text-ink sm:text-lg">
            Chishti Publications
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`text-sm font-semibold ${
                isActive(pathname, link.href) ? "text-binding" : "text-ink-soft hover:text-ink"
              }`}
            >
              {link.label}
              {link.href === "/favorites" && ready && ids.length > 0 ? (
                <span className="ml-1 text-gilt">({ids.length})</span>
              ) : null}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
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
        className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-paper px-4 py-4 lg:hidden"
      >
          <ul className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  onClick={() => setOpenPath(null)}
                  className="flex min-h-12 items-center justify-between py-3 text-lg font-semibold text-ink"
                >
                  <span>{link.label}</span>
                  {link.href === "/favorites" && ready && ids.length > 0 ? (
                    <span className="text-sm text-gilt">{ids.length} saved</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
      </nav>
    </>
  );
}
