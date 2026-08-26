import { motion, useReducedMotion } from "motion/react";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

const ROWS = [
  {
    icon: Phone,
    label: "+49 179 5947356",
    href: "tel:+491795947356",
  },
  {
    icon: EnvelopeSimple,
    label: "Tjard.koehn@icloud.de",
    href: "mailto:Tjard.koehn@icloud.de?subject=Angebotsanfrage%20Geb%C3%A4udereinigung",
  },
  {
    icon: MapPin,
    label: "Mühlenstraße 8a, 14167 Berlin",
    href: "https://www.google.com/maps/search/?api=1&query=M%C3%BChlenstra%C3%9Fe+8a+14167+Berlin",
  },
];

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="kontakt" className="bg-white py-20 md:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl px-6 text-center lg:px-8"
      >
        <h2 className="text-3xl font-bold tracking-tight text-navy-dark md:text-4xl">
          Lassen Sie uns sprechen
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Rufen Sie uns an oder schreiben Sie uns, wir melden uns kurzfristig
          mit einem individuellen Angebot.
        </p>

        <div className="mt-10 divide-y divide-sky/60 rounded-2xl border border-sky/60 bg-sky-soft text-left">
          {ROWS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-sky/40"
            >
              <Icon size={22} weight="regular" className="shrink-0 text-navy" />
              <span className="text-base font-medium text-ink">{label}</span>
            </a>
          ))}
        </div>

        <a
          href="mailto:Tjard.koehn@icloud.de?subject=Angebotsanfrage%20Geb%C3%A4udereinigung"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-navy-dark active:scale-[0.98]"
        >
          Angebot anfragen
        </a>
      </motion.div>
    </section>
  );
}
