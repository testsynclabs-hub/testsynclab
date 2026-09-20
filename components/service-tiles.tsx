import Link from "next/link";

function TileIcon({ name }: { name: string }) {
  const className = "h-7 w-7 text-brand";
  switch (name) {
    case "search":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "automation":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 19h8M12 15v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "api":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M8 8H6a3 3 0 0 0 0 8h2M16 8h2a3 3 0 0 1 0 8h-2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "devices":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="14" y="10" width="7" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "spark":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "gauge":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 16a7 7 0 1 1 14 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M12 16 16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "release":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="m6 12 4 4 8-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export function ServiceTiles({
  tiles,
}: {
  tiles: readonly { title: string; href: string; icon: string }[];
}) {
  return (
    <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
      {tiles.map((tile) => (
        <li key={tile.title} className="bg-white">
          <Link
            href={tile.href}
            className="flex h-full flex-col items-center gap-3 px-4 py-8 text-center transition hover:bg-sky-50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft">
              <TileIcon name={tile.icon} />
            </span>
            <span className="font-[family-name:var(--font-display)] text-sm font-bold text-slate-900 sm:text-base">
              {tile.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
