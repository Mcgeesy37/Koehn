export default function WaveBand() {
  return (
    <section
      aria-hidden="true"
      className="relative h-56 w-full overflow-hidden bg-gradient-to-r from-navy-dark via-navy to-sky md:h-64"
    >
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full opacity-70"
      >
        <path
          d="M0,140 C240,200 480,80 720,120 C960,160 1200,60 1440,110 L1440,260 L0,260 Z"
          fill="#ffffff"
          fillOpacity="0.08"
        />
        <path
          d="M0,180 C260,120 500,220 760,170 C1000,125 1220,205 1440,160 L1440,260 L0,260 Z"
          fill="#ffffff"
          fillOpacity="0.14"
        />
      </svg>
    </section>
  );
}
