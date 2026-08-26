import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-navy-dark md:text-5xl">
            Saubere Gebäude,
            <br />
            verlässlich gepflegt.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Professionelle Reinigung für Wohn- und Gewerbeobjekte in Berlin,
            persönlich betreut und zuverlässig ausgeführt.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white transition-transform hover:bg-navy-dark active:scale-[0.98]"
            >
              Angebot anfragen
              <ArrowRight size={18} weight="bold" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center rounded-full border border-navy/25 px-7 py-3.5 text-base font-semibold text-navy-dark transition-colors hover:bg-sky-soft active:scale-[0.98]"
            >
              Leistungen ansehen
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center md:max-w-none"
        >
          <DropletGraphic />
        </motion.div>
      </div>
    </section>
  );
}

function DropletGraphic() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative w-full max-w-[380px]"
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={
        reduce
          ? undefined
          : { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {/* weicher Wasserschein hinter dem Haupttropfen */}
      <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-sky/50 blur-3xl" />

      <svg
        viewBox="0 0 240 300"
        className="w-full drop-shadow-[0_24px_48px_rgba(23,63,112,0.25)]"
        role="img"
        aria-label="Wassertropfen in den Markenfarben von Köhn Gebäudeservice"
      >
        <defs>
          <linearGradient id="dropMain" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#173f70" />
            <stop offset="100%" stopColor="#5f8fc7" />
          </linearGradient>
          <linearGradient id="dropGhost" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c3d5ee" />
            <stop offset="100%" stopColor="#eef4fb" />
          </linearGradient>
          <radialGradient id="dropHighlight" cx="0.32" cy="0.3" r="0.35">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* kleiner Begleittropfen im Hintergrund */}
        <path
          d="M188,58 C202,80 224,108 224,128 C224,148.9 207.9,166 188,166 C168.1,166 152,148.9 152,128 C152,108 174,80 188,58 Z"
          fill="url(#dropGhost)"
          opacity="0.8"
        />

        {/* Haupttropfen */}
        <path
          d="M118,10 C150,54 218,132 218,190 C218,238.6 172.9,278 118,278 C63.1,278 18,238.6 18,190 C18,132 86,54 118,10 Z"
          fill="url(#dropMain)"
        />
        {/* Reflexion im Wasser: geschwungene helle Linien */}
        <path
          d="M50,190 C75,210 155,210 186,182"
          stroke="#eef4fb"
          strokeOpacity="0.5"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M62,214 C85,228 145,230 170,212"
          stroke="#eef4fb"
          strokeOpacity="0.35"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="118" cy="190" rx="100" ry="88" fill="url(#dropHighlight)" />
      </svg>
    </motion.div>
  );
}
