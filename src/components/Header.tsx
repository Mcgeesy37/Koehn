import { Phone } from "@phosphor-icons/react";
import logo from "../assets/logo.png";

const NAV_LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Köhn Gebäudeservice GmbH"
            className="h-10 w-auto md:h-11"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+491795947356"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-navy"
          >
            <Phone size={18} weight="regular" />
            +49 179 5947356
          </a>
          <a
            href="#kontakt"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Angebot anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
