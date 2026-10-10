"use client";

import Link from "next/link";
import { useId, useState } from "react";

type FooterLink = {
  href: string;
  label: string;
};

const PREVIEW_COUNT = 10;

export function FooterLinkGroup({
  title,
  links,
  ariaLabel,
}: {
  title: string;
  links: readonly FooterLink[];
  ariaLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const hasMore = links.length > PREVIEW_COUNT;
  const hiddenCount = links.length - PREVIEW_COUNT;
  const visibleLinks = expanded || !hasMore ? links : links.slice(0, PREVIEW_COUNT);

  return (
    <nav aria-label={ariaLabel}>
      <h3 className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.14em] text-blue-300">
        {title}
      </h3>
      <ul id={panelId} className="mt-3 space-y-2 text-sm">
        {visibleLinks.map((link) => (
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

      {/* Remaining links stay in HTML for crawlers while the column stays short */}
      {hasMore && !expanded ? (
        <ul className="sr-only">
          {links.slice(PREVIEW_COUNT).map((link) => (
            <li key={`seo-${link.href}`}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      ) : null}

      {hasMore ? (
        <button
          type="button"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 transition-colors hover:text-white"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((value) => !value)}
        >
          <span
            className={`inline-block text-[10px] transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            ▼
          </span>
          {expanded ? "Show less" : `Show ${hiddenCount} more`}
        </button>
      ) : null}
    </nav>
  );
}
