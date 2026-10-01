import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using the Chishti Publications catalog.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        kicker="Terms"
        title="Terms"
        description="This is placeholder wording for a catalog site. Replace it with your own terms."
      />
      <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-ink-soft">
        <p>This website is a product catalog. It is for browsing products and sending an inquiry.</p>
        <p>There is no checkout, no online payment, and no order placed through the website.</p>
        <p>
          A price is shown only when one has been entered for that product. Confirm the current price
          on WhatsApp before you decide.
        </p>
        <p>Product details can change when the catalog file is updated.</p>
      </div>
    </Container>
  );
}
