# Köhn Gebäudeservice – Website

One-Page-Website für Köhn Gebäudeservice GmbH. Gebaut mit React, TypeScript, Vite und Tailwind CSS. Wird automatisch per GitHub Actions auf GitHub Pages veröffentlicht.

## Lokal starten (optional)

```bash
npm install
npm run dev
```

## Live schalten über GitHub Pages

1. Alle Dateien dieses Projekts in dein GitHub-Repository hochladen (Struktur beibehalten, inklusive des Ordners `.github/workflows`).
2. Im Repository zu **Settings → Pages** gehen.
3. Unter **Build and deployment** bei **Source** die Option **GitHub Actions** auswählen.
4. Bei jedem Push auf den Branch `main` baut GitHub Actions die Seite automatisch und veröffentlicht sie unter:
   `https://<dein-github-benutzername>.github.io/Koehn/`

Der erste Durchlauf kann 1 bis 2 Minuten dauern. Der Fortschritt ist im Reiter **Actions** des Repositories sichtbar.

## Wichtig: `base`-Pfad in `vite.config.ts`

`base: "/Koehn/"` muss dem Namen deines Repositorys entsprechen. Falls du das Repository umbenennst oder eine eigene Domain verwendest, `base` entsprechend anpassen (bei einer eigenen Domain auf `"/"` setzen).

## Struktur

```
src/
  components/   Alle Seitenabschnitte (Header, Hero, Leistungen, ...)
  assets/       Logo
  index.css     Farben, Schriftart, globale Styles
  App.tsx       Zusammensetzung der Seite
```

## Inhalte anpassen

Texte, Telefonnummer, E-Mail und Adresse stehen direkt in den jeweiligen Dateien unter `src/components/` und lassen sich dort einfach ändern.
