"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";

export type FooterLink = {
  href: string;
  label: string;
};

const PREVIEW_COUNT = 10;

function PreviewList({ links }: { links: readonly FooterLink[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="transition-colors hover:text-blue-300"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ExpandPanel({
  title,
  links,
  open,
}: {
  title: string;
  links: readonly FooterLink[];
  open: boolean;
}) {
  const panelId = useId();
  if (!open || links.length === 0) return null;

  return (
    <div
      id={panelId}
      className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5"
    >
      <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
        More {title.toLowerCase()}
      </p>
      <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors hover:text-blue-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterColumns({
  brand,
  company,
  serviceLinks,
  marketLinks,
}: {
  brand: ReactNode;
  company: ReactNode;
  serviceLinks: readonly FooterLink[];
  marketLinks: readonly FooterLink[];
}) {
  const [openSection, setOpenSection] = useState<"services" | "markets" | null>(
    null,
  );

  const servicePreview = serviceLinks.slice(0, PREVIEW_COUNT);
  const serviceMore = serviceLinks.slice(PREVIEW_COUNT);
  const marketPreview = marketLinks.slice(0, PREVIEW_COUNT);
  const marketMore = marketLinks.slice(PREVIEW_COUNT);

  const toggle = (section: "services" | "markets") => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {brand}

        <nav aria-label="Services" className="min-w-0">
          <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
            Services
          </h3>
          <PreviewList links={servicePreview} />
          {serviceMore.length > 0 ? (
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-white"
              aria-expanded={openSection === "services"}
              onClick={() => toggle("services")}
            >
              <span
                className={`inline-block text-[10px] transition-transform duration-200 ${
                  openSection === "services" ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                ▼
              </span>
              {openSection === "services"
                ? "Show less"
                : `Show ${serviceMore.length} more`}
            </button>
          ) : null}
          {openSection !== "services" ? (
            <ul className="sr-only">
              {serviceMore.map((link) => (
                <li key={`seo-s-${link.href}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </nav>

        {company}

        <nav aria-label="Markets" className="min-w-0">
          <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
            Markets
          </h3>
          <PreviewList links={marketPreview} />
          {marketMore.length > 0 ? (
            <button
              type="button"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-white"
              aria-expanded={openSection === "markets"}
              onClick={() => toggle("markets")}
            >
              <span
                className={`inline-block text-[10px] transition-transform duration-200 ${
                  openSection === "markets" ? "rotate-180" : ""
                }`}
                aria-hidden
              >
                ▼
              </span>
              {openSection === "markets"
                ? "Show less"
                : `Show ${marketMore.length} more`}
            </button>
          ) : null}
          {openSection !== "markets" ? (
            <ul className="sr-only">
              {marketMore.map((link) => (
                <li key={`seo-m-${link.href}`}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
      </div>

      {(openSection === "services" && serviceMore.length > 0) ||
      (openSection === "markets" && marketMore.length > 0) ? (
        <div className="mx-auto w-full max-w-6xl px-5 pb-8 sm:px-8">
          <ExpandPanel
            title="Services"
            links={serviceMore}
            open={openSection === "services"}
          />
          <ExpandPanel
            title="Markets"
            links={marketMore}
            open={openSection === "markets"}
          />
        </div>
      ) : null}
    </>
  );
}
