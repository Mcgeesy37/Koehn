import { motion, useReducedMotion } from "motion/react";
import { HandHeart } from "@phosphor-icons/react";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="ueber-uns" className="bg-navy-dark py-20 md:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <HandHeart size={34} weight="light" className="mx-auto text-sky" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Unser Qualitätsversprechen
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-sky-soft/90">
          Wir legen großen Wert auf eine zuverlässige Ausführung, offene
          Kommunikation und eine gleichbleibend hohe Reinigungsqualität.
          Unser Anspruch ist es, Ihr langfristiger und verlässlicher Partner
          für die professionelle Reinigung Ihrer Immobilien zu sein. Ihre
          Zufriedenheit steht für uns an erster Stelle.
        </p>
        <p className="mt-8 text-base font-semibold text-white">
          Tjard Köhn
          <span className="block text-sm font-normal text-sky-soft/70">
            Geschäftsführer
          </span>
        </p>
      </motion.div>
    </section>
  );
}
