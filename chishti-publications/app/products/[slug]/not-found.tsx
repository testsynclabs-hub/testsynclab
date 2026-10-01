import Link from "next/link";
import { Container } from "@/components/container";

export default function ProductNotFound() {
  return (
    <Container className="py-20">
      <p className="kicker">Missing product</p>
      <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">This product is not in the catalog.</h1>
      <p className="mt-4 max-w-lg text-lg text-ink-soft">
        The link may be out of date, or the product may have been removed.
      </p>
      <Link
        href="/products"
        className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-binding px-5 py-2.5 text-sm font-semibold text-paper hover:bg-binding-mid"
      >
        Browse products
      </Link>
    </Container>
  );
}
