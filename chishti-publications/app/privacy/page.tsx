import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the Chishti Publications catalog handles information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        kicker="Policy"
        title="Privacy Policy"
        description="This is a simple notice for the catalog website. Replace it with your own policy if you need one."
      />
      <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-ink-soft">
        <p>This website does not ask visitors to create an account, and it does not take payment.</p>
        <p>
          Favorites are saved in your browser with localStorage. They stay on that device until you
          remove them or clear the site data. They are not sent to a customer database.
        </p>
        <p>
          WhatsApp buttons open WhatsApp with a prepared message. Messages you send are handled by
          WhatsApp, not by this website.
        </p>
        <p>Product pages are public catalog pages. They do not collect an order or a shipping address.</p>
      </div>
    </Container>
  );
}
