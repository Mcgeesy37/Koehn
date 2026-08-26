import { Buildings, CalendarCheck, UserCircle } from "@phosphor-icons/react";

const ITEMS = [
  {
    icon: Buildings,
    text: "Für Wohn- und Gewerbeobjekte in Berlin",
  },
  {
    icon: CalendarCheck,
    text: "Wöchentliche oder monatliche Reinigungsintervalle",
  },
  {
    icon: UserCircle,
    text: "Ein persönlicher Ansprechpartner für Ihr Objekt",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-sky/60 bg-sky-soft">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3 lg:px-8">
        {ITEMS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3">
            <Icon
              size={26}
              weight="light"
              className="shrink-0 text-navy"
            />
            <p className="text-sm font-medium text-ink/85">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
