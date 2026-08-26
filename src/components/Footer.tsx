import logo from "../assets/logo.png";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-sky/60 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <img src={logo} alt="Köhn Gebäudeservice GmbH" className="h-9 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Mühlenstraße 8a
              <br />
              14167 Berlin
            </p>
          </div>

          <div className="text-sm leading-relaxed text-muted">
            <p>Telefon: +49 179 5947356</p>
            <p>E-Mail: Tjard.koehn@icloud.de</p>
          </div>

          <div className="text-sm leading-relaxed text-muted">
            <p>Handelsregister: HRB 287493 B</p>
            <p>Amtsgericht Berlin-Charlottenburg</p>
          </div>
        </div>

        <div className="mt-10 border-t border-sky/60 pt-6 text-xs text-muted/80">
          © {year} Köhn Gebäudeservice GmbH
        </div>
      </div>
    </footer>
  );
}
