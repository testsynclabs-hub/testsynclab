import Link from "next/link";

export function EmptyState({
  title,
  description,
  href,
  action,
  onAction,
}: {
  title: string;
  description?: string;
  href?: string;
  action?: string;
  onAction?: () => void;
}) {
  const actionClass =
    "mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-binding px-5 py-2.5 text-sm font-semibold text-paper hover:bg-binding-mid";

  return (
    <div className="rounded-3xl border border-dashed border-line bg-card px-6 py-14 text-center">
      <p className="font-display text-2xl text-ink">{title}</p>
      {description ? <p className="mx-auto mt-3 max-w-md text-muted">{description}</p> : null}
      {action && onAction ? (
        <button type="button" onClick={onAction} className={actionClass}>
          {action}
        </button>
      ) : null}
      {action && href && !onAction ? (
        <Link href={href} className={actionClass}>
          {action}
        </Link>
      ) : null}
    </div>
  );
}
