import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { LiquidMetal } from "@paper-design/shaders-react";

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
          <LiquidDroplet />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Animierter 3D-Wassertropfen: echter WebGL-Shader (Liquid Metal, Form
 * "metaballs") von @paper-design/shaders-react, in den Markenfarben von
 * Köhn eingefärbt. Reagiert auf "reduzierte Bewegung" (Animation stoppt).
 */
function LiquidDroplet() {
  const reduce = useReducedMotion();

  return (
    <div className="relative aspect-square w-full max-w-[420px]">
      {/* weicher Wasserschein hinter dem Tropfen */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-sky/50 blur-3xl" />

      {/* kreisrundes Fenster, damit der rechteckige Shader wie ein Tropfen/Kugel wirkt */}
      <div className="h-full w-full overflow-hidden rounded-full shadow-[0_24px_60px_rgba(23,63,112,0.3)]">
        <LiquidMetal
          className="h-full w-full"
          shape="metaballs"
          colorBack="#173f70"
          colorTint="#c3d5ee"
          repetition={2.4}
          softness={0.45}
          shiftRed={0.12}
          shiftBlue={0.18}
          distortion={0.12}
          contour={0.6}
          angle={210}
          scale={1.15}
          speed={reduce ? 0 : 0.5}
        />
      </div>
    </div>
  );
}
