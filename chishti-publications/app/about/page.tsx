import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description: "Chishti Publications offers books, copies, and educational products.",
  alternates: { canonical: "/about" },
};

const sections = [
  {
    title: "Books",
    text: "The catalog includes books for study, reading, and classroom use. Each title has its own page with a short description.",
  },
  {
    title: "Copies",
    text: "Copies are listed by ruling and use, so a school or family can ask about the style they need.",
  },
  {
    title: "Educational products",
    text: "Notebooks, registers, stationery, and other learning materials sit beside the books in the same catalog.",
  },
  {
    title: "Quality",
    text: "Product pages describe what an item is. When a price is not listed, it is left off the page rather than guessed.",
  },
  {
    title: "Customer service",
    text: "Questions go through WhatsApp. Open a product and the message already includes its name and link.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-12 sm:py-16">
      <PageHeader
        kicker="About"
        title="About Chishti Publications"
        description="This introduction is placeholder text. Replace it with your own description when you are ready."
      />
      <div className="mt-10 max-w-3xl space-y-8">
        <p className="text-lg leading-relaxed text-ink-soft">
          Chishti Publications is a catalog of books, copies, and educational products. Visitors can
          browse the collection and ask about any item on WhatsApp.
        </p>
        {sections.map((section) => (
          <section key={section.title} className="border-t border-line pt-6">
            <h2 className="font-display text-2xl text-ink">{section.title}</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{section.text}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
