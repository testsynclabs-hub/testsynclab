import Link from "next/link";
import { site } from "@/lib/site";
import { displayWhatsappNumber, generalInquiryMessage, whatsappHref } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const whatsapp = displayWhatsappNumber();

  return (
    <footer className="mt-16 bg-binding text-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pt-12 pb-24 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] md:pb-12">
        <div>
          <p className="font-display text-2xl">Chishti Publications</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/80">{site.tagline}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gilt-soft uppercase">Quick links</p>
          <ul className="mt-3 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm hover:text-gilt-soft">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-gilt-soft uppercase">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={whatsappHref(generalInquiryMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gilt-soft"
              >
                WhatsApp{whatsapp ? ` ${whatsapp}` : ""}
              </a>
            </li>
            <li>
              {site.email ? (
                <a href={`mailto:${site.email}`} className="hover:text-gilt-soft">
                  {site.email}
                </a>
              ) : (
                <span>Email to be added</span>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 pr-24 text-sm text-paper/75 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} Chishti Publications</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
