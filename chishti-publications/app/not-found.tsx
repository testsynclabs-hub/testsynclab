import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <p className="kicker">404</p>
      <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">This page is not in the catalog.</h1>
      <p className="mt-4 max-w-lg text-lg text-ink-soft">
        The address may be mistyped. You can return home or browse the products.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center bg-binding px-5 py-2.5 text-sm font-semibold text-[#f6f1e7] hover:bg-binding-mid"
        >
          Go home
        </Link>
        <Link
          href="/products"
          className="inline-flex min-h-11 items-center justify-center border border-line bg-card px-5 py-2.5 text-sm font-semibold text-binding hover:border-binding"
        >
          Browse products
        </Link>
      </div>
    </Container>
  );
}
