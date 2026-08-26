import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Wichtig für GitHub Pages: "base" muss dem Repository-Namen entsprechen,
// z. B. https://<benutzername>.github.io/Koehn/ -> base: "/Koehn/"
// Falls du eine eigene Domain (CNAME) nutzt, setze base wieder auf "/".
export default defineConfig({
  base: "/Koehn/",
  plugins: [react(), tailwindcss()],
});
