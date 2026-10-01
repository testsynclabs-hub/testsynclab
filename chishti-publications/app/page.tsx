import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { Container } from "@/components/container";
import { ProductGrid } from "@/components/product-grid";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getCategories, getFeaturedProducts, getProductsByCategory } from "@/lib/catalog";
import { generalInquiryMessage } from "@/lib/whatsapp";

const steps = [
  {
    number: "01",
    title: "Browse",
    text: "Look through categories and products.",
  },
  {
    number: "02",
    title: "Open a product",
    text: "Read the description and any details that are listed.",
  },
  {
    number: "03",
    title: "WhatsApp",
    text: "Send an inquiry with the product name and link already filled in.",
  },
];

export default function HomePage() {
  const categories = getCategories();
  const featured = getFeaturedProducts();

  return (
    <>
      <section>
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="rise">
            <p className="kicker">Chishti Publications</p>
            <h1 className="font-display mt-4 max-w-3xl text-[2.35rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.15rem]">
              Quality Books & Copies for Every Learning Journey
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Explore our collection of books, copies and educational products and contact us easily
              through WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-binding px-5 py-2.5 text-sm font-semibold text-paper shadow-sm hover:bg-binding-mid"
              >
                Explore Products
              </Link>
              <WhatsAppButton
                message={generalInquiryMessage}
                label="WhatsApp Us"
                ariaLabel="WhatsApp Chishti Publications"
              />
            </div>
          </div>

          <aside className="rounded-3xl border border-line bg-card p-6 shadow-[0_16px_40px_rgba(107,49,66,0.08)] sm:p-8">
            <p className="kicker">In the catalog</p>
            <ul className="mt-2">
              {categories.map((category, index) => (
                <li key={category.slug}>
                  <Link
                    href={`/categories/${category.slug}`}
                    className="flex items-center justify-between gap-4 rounded-2xl px-2 py-2.5 hover:bg-paper-deep/70"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: category.accent }}
                      />
                      <span className="font-display text-2xl text-ink hover:text-binding">
                        {category.name}
                      </span>
                    </span>
                    <span className="text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="categories-heading">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="kicker">Browse</p>
              <h2 id="categories-heading" className="font-display mt-2 text-3xl text-ink sm:text-4xl">
                Categories
              </h2>
            </div>
            <Link href="/categories" className="hidden text-sm font-semibold text-binding hover:underline sm:inline">
              View all
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <li key={category.slug}>
                <CategoryCard category={category} count={getProductsByCategory(category.name).length} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-16" aria-labelledby="featured-heading">
        <Container>
          <p className="kicker">Selection</p>
          <h2 id="featured-heading" className="font-display mt-2 text-3xl text-ink sm:text-4xl">
            Featured products
          </h2>
          <div className="mt-8">
            {featured.length > 0 ? (
              <ProductGrid products={featured} preloadCount={2} headingLevel={3} />
            ) : (
              <p className="text-muted">Featured products will appear here.</p>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-16" aria-labelledby="inquire-heading">
        <Container>
          <p className="kicker">How to inquire</p>
          <h2 id="inquire-heading" className="font-display mt-2 text-3xl text-ink sm:text-4xl">
            Browse, then WhatsApp
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="rounded-3xl border border-line bg-card p-6">
                <p className="font-display text-3xl text-gilt">{step.number}</p>
                <h3 className="font-display mt-3 text-2xl">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="pb-4">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-binding px-6 py-10 text-paper sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="font-display text-3xl">Ask about any item on WhatsApp.</h2>
              <p className="mt-2 max-w-xl text-paper/80">
                There is no cart and no online payment. Tell us which product you want and we will reply
                on WhatsApp.
              </p>
            </div>
            <WhatsAppButton
              message={generalInquiryMessage}
              label="WhatsApp Us"
              ariaLabel="WhatsApp Chishti Publications about the catalog"
              variant="light"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
