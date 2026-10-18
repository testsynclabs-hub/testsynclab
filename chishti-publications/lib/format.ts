export function formatPrice(price: number | null | undefined): string | null {
  if (typeof price !== "number" || !Number.isFinite(price)) return null;

  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: Number.isInteger(price) ? 0 : 2,
  }).format(price);
}
