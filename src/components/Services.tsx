import { motion, useReducedMotion } from "motion/react";
import { Stairs, Sparkle, Mailbox, SprayBottle } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const SERVICES: { icon: Icon; title: string; text: string }[] = [
  {
    icon: Stairs,
    title: "Treppenhausreinigung",
    text: "Treppen, Podeste und Handläufe werden gefegt und feucht gewischt, Spinnweben zuverlässig entfernt.",
  },
  {
    icon: Sparkle,
    title: "Fensterreinigung",
    text: "Fenster und Fensterbänke werden streifenfrei gereinigt, innen wie außen.",
  },
  {
    icon: Mailbox,
    title: "Eingangsbereich & Briefkästen",
    text: "Ein gepflegter erster Eindruck für Bewohner, Mieter und Besucher Ihres Objekts.",
  },
  {
    icon: SprayBottle,
    title: "Sonderreinigungen",
    text: "Sanitärbereiche und individuelle Zusatzleistungen, abgestimmt auf Ihre Immobilie.",
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="leistungen" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-navy-dark md:text-4xl">
            Unser Leistungsumfang
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Individuelle Wünsche oder besondere Anforderungen berücksichtigen
            wir gerne, gemeinsam finden wir eine Lösung für Ihre Immobilie.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-sky/60 border-t border-sky/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:border-b">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-3 py-8 pr-6 sm:px-8"
            >
              <Icon size={30} weight="light" className="text-navy" />
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-muted">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
