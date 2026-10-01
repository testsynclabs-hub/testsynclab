export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-2xl">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1 className="font-display mt-2 text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-lg leading-relaxed text-ink-soft">{description}</p> : null}
    </header>
  );
}
