import type { Metadata } from "next";
import { Container } from "@/components/container";
import { FavoritesList } from "@/components/favorites-list";
import { PageHeader } from "@/components/page-header";
import { getProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Favorites",
  description: "Products saved in this browser.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/favorites" },
};

export default function FavoritesPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        kicker="Saved"
        title="Favorites"
        description="Favorites stay in this browser. There is no account to sign in to."
      />
      <FavoritesList products={getProducts()} />
    </Container>
  );
}
