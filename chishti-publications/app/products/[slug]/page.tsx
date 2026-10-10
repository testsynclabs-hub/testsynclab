import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { FavoriteButton } from "@/components/favorite-button";
import { JsonLd } from "@/components/json-ld";
import { ProductGrid } from "@/components/product-grid";
import { ProductImage } from "@/components/product-image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  getCategoryByName,
  getProductBySlug,
  getProducts,
  getRelatedProducts,
  specsOf,
} from "@/lib/catalog";
import { priceLabel, productJsonLd } from "@/lib/seo";
import { productInquiryMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/products/${product.slug}`,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryByName(product.category);
  const price = priceLabel(product);
  const specs = specsOf(product);
  const related = getRelatedProducts(product);

  return (
    <Container className="py-10 sm:py-14">
      <JsonLd data={productJsonLd(product)} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-ink">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/products" className="hover:text-ink">
              Products
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-paper-deep shadow-[0_16px_40px_rgba(18,49,90,0.08)]">
          <ProductImage
            src={product.image}
            name={product.name}
            category={product.category}
            preload
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div>
          {category ? (
            <Link
              href={`/categories/${category.slug}`}
              className="kicker hover:underline"
            >
              {product.category}
            </Link>
          ) : (
            <p className="kicker">{product.category}</p>
          )}
          <h1 className="font-display mt-3 text-4xl leading-tight text-ink sm:text-5xl">{product.name}</h1>
          {product.sku ? (
            <p className="mt-3 text-sm text-muted">Product code {product.sku}</p>
          ) : null}
          {price ? <p className="mt-4 text-xl font-semibold text-ink">{price}</p> : null}
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{product.description}</p>

          {specs.length > 0 ? (
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {specs.map((spec) => (
                <div key={spec.label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
                  <dt className="text-sm text-muted">{spec.label}</dt>
                  <dd className="text-sm font-semibold text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              message={productInquiryMessage(product)}
              label="Inquire on WhatsApp"
              ariaLabel={`Inquire about ${product.name} on WhatsApp`}
              className="w-full sm:w-auto"
            />
            <FavoriteButton productId={product.id} productName={product.name} variant="labeled" />
          </div>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="font-display text-3xl text-ink">
            More in {product.category}
          </h2>
          <div className="mt-6">
            <ProductGrid products={related} headingLevel={3} />
          </div>
        </section>
      ) : null}
    </Container>
  );
}
