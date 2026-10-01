import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";
import { displayWhatsappNumber, generalInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Chishti Publications on WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const whatsapp = displayWhatsappNumber();

  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        kicker="Contact"
        title="Contact"
        description="The simplest way to reach Chishti Publications is WhatsApp."
      />
      <div className="mt-8">
        <WhatsAppButton
          message={generalInquiryMessage}
          label="WhatsApp Us"
          ariaLabel="WhatsApp Chishti Publications"
        />
      </div>
      <dl className="mt-10 max-w-xl divide-y divide-line border-y border-line">
        <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
          <dt className="text-sm text-muted">WhatsApp</dt>
          <dd className="font-semibold text-ink">
            {whatsapp ?? "WhatsApp number to be added"}
          </dd>
        </div>
        <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
          <dt className="text-sm text-muted">Email</dt>
          <dd className="font-semibold text-ink">
            {site.email ? (
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>
            ) : (
              "Email to be added"
            )}
          </dd>
        </div>
        <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr]">
          <dt className="text-sm text-muted">Address</dt>
          <dd className="font-semibold text-ink">{site.address || "Address to be added"}</dd>
        </div>
      </dl>
    </Container>
  );
}
