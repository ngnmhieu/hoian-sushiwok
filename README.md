# Hội An Sushi & Wok

Statische Website für das Restaurant. Geschrieben in **Astro mit React-Komponenten**,
gebaut zu reinem HTML/CSS in `docs/`, ausgeliefert von GitHub Pages unter
[hoian-sushiwok.de](https://hoian-sushiwok.de).

## Arbeiten

```bash
npm install
npm run dev      # http://localhost:4321, lädt bei jeder Änderung neu
npm run build    # schreibt die fertigen Dateien nach docs/
npm run check    # TypeScript- und Astro-Prüfung
```

## Veröffentlichen

`npm run build` und den Inhalt von `docs/` committen und pushen. GitHub Pages
ist auf „Branch `main`, Ordner `/docs`" eingestellt und liefert innerhalb einer
Minute aus.

## Inhalte ändern

Der Text steht nicht im Layout, sondern an zwei Stellen:

| Datei | Inhalt |
| --- | --- |
| `src/data/site.ts` | Adresse, Telefon, E-Mail, Öffnungszeiten |
| `src/data/menu.ts` | Speisekarte: Kategorien, Gerichte, Preise |

Beide enthalten aktuell Platzhalter, markiert mit `TODO`. Preise stehen auf
`null` und erscheinen als „–,– €". Wenn alles eingetragen ist, in
`src/data/site.ts` `isDraft = false` setzen. Damit verschwinden die
Entwurfshinweise auf Startseite und Speisekarte — und erst dann gibt die Seite
Adresse und Öffnungszeiten als strukturierte Daten an Suchmaschinen weiter.
Solange Platzhalter drinstehen, bleiben sie bewusst draußen; ein TODO im
`schema.org`-Block wäre für Google eine Tatsachenbehauptung.

Achtung beim Ausfüllen: `openingHours` in den strukturierten Daten erwartet die
Form `Mo-Fr 11:30-14:30`. Die Anzeige auf der Seite nimmt jeden Text — die
Umsetzung in `src/layouts/Base.astro` gibt die Zeiten aber unverändert weiter.

Rechtstexte: `src/pages/impressum.astro` und `src/pages/datenschutz.astro`.
Beide sind Rohfassungen und müssen vor der Veröffentlichung geprüft werden.

## Aufbau

```
src/
  data/        Inhalte (siehe oben)
  components/  Nav.tsx, MenuExplorer.tsx  — React, laufen im Browser
               Lanterns.astro, Footer.astro — reines HTML, kein JavaScript
  layouts/     Base.astro: <head>, Kopf, Fuß, strukturierte Daten
  pages/       eine Datei = eine URL
  styles/      global.css: Farben, Schriften, alle Komponenten
public/        wird unverändert nach docs/ kopiert
  CNAME        die eigene Domain — nicht nach docs/ verschieben,
               der Build leert den Ordner bei jedem Lauf
  .nojekyll    sonst schluckt GitHub Pages den Ordner _astro/
```

React läuft nur dort, wo etwas passiert: das Klappmenü im Kopf und der Filter
auf der Speisekarte. Alles andere ist statisches HTML — die Seite ist lesbar,
bevor JavaScript geladen ist.

## Gestaltung

Farben und Schriften kommen aus der Altstadt von Hội An: Ockerputz, verwitterte
Fensterläden in Grünblau, Seidenlaternen bei Nacht. Die Karte folgt der Küche
und ist in eine kalte (Sushi-Theke) und eine heiße Hälfte (Wok) geteilt; diese
Zweiteilung ist das Ordnungsprinzip der ganzen Seite.

Schriften: Fraunces (Auszeichnung) und Be Vietnam Pro (Fließtext), beide mit
vietnamesischen und deutschen Diakritika. Sie liegen im Repository und werden
nicht von Google geladen — eine Anfrage weniger und ein Datenschutzproblem
weniger.
