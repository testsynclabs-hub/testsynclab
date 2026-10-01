export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <form role="search" onSubmit={(event) => event.preventDefault()} className="max-w-xl">
      <label htmlFor="product-search" className="text-sm font-semibold text-ink">
        Search
      </label>
      <div className="mt-2 flex items-center gap-3 border-b border-line focus-within:border-binding">
        <input
          id="product-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search by product name or category"
          className="min-h-11 w-full bg-transparent py-2 text-base text-ink outline-none placeholder:text-muted"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear search"
            className="min-h-11 shrink-0 px-1 text-sm font-semibold text-binding"
          >
            Clear
          </button>
        ) : null}
      </div>
    </form>
  );
}
