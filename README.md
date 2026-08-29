# Hoi An Sushi & Wok

Statische Website für das Restaurant. Geschrieben in **Astro mit React-Komponenten**
und **Tailwind CSS v4**, gebaut zu reinem HTML/CSS in `docs/`, ausgeliefert von
GitHub Pages unter [hoian-sushiwok.de](https://hoian-sushiwok.de).

## Arbeiten

```bash
npm install
npm run dev      # http://localhost:4321, lädt bei jeder Änderung neu
npm run build    # schreibt die fertigen Dateien nach docs/
npm run serve    # http://localhost:4322, liefert docs/ als reine Dateien aus
npm run check    # TypeScript- und Astro-Prüfung
```

`npm run dev` ist zum Arbeiten da. `npm run serve` zeigt das gebaute Ergebnis
so, wie GitHub Pages es ausliefert — statische Dateien, keine Vite-Ebene, kein
Hot Reload. Vorher `npm run build` laufen lassen.

## Veröffentlichen

`npm run build` und den Inhalt von `docs/` committen und pushen. GitHub Pages
ist auf „Branch `main`, Ordner `/docs`" eingestellt und liefert innerhalb einer
Minute aus.

## Inhalte ändern

Der Text steht nicht im Layout, sondern an zwei Stellen:

| Datei | Inhalt |
| --- | --- |
| `src/data/site.ts` | Adresse, Telefon, E-Mail, Öffnungszeiten |
| `public/speisekarte.pdf` | Die Speisekarte selbst — die verbindliche Fassung |

Gerichte und Preise stehen nur im PDF, nicht als Text auf der Seite. Die
Speisekarten-Seite bindet es ein (ab `md` als Rahmen, darunter als antippbare
Titelseite) und verlinkt es. Wird das PDF getauscht, wird auch
`src/assets/speisekarte-titel.jpg` stale — das ist Seite 1 als Bild.

`src/data/site.ts` enthält aktuell Platzhalter, markiert mit `TODO`. Wenn alles eingetragen ist, in
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
  components/  Nav.tsx — React, läuft im Browser
               Button, Hours, Prose, Lanterns, Footer — reines HTML
  layouts/     Base.astro: <head>, Kopf, Fuß, strukturierte Daten
  pages/       eine Datei = eine URL
  styles/      global.css: das Tailwind-Theme — Farben, Schriften, Typoskala,
               Abstände, Animationen
public/        wird unverändert nach docs/ kopiert
  CNAME        die eigene Domain — nicht nach docs/ verschieben,
               der Build leert den Ordner bei jedem Lauf
  .nojekyll    sonst schluckt GitHub Pages den Ordner _astro/
```

React läuft nur dort, wo etwas passiert: das Klappmenü im Kopf und der Filter
auf der Speisekarte. Alles andere ist statisches HTML — die Seite ist lesbar,
bevor JavaScript geladen ist.

## Gestaltung

Gestylt wird ausschließlich mit Tailwind-Utilities im Markup. In
`src/styles/global.css` steht kein Layout, sondern nur das Theme: ein
`@theme`-Block mit Farben, Schriften, der fließenden Typoskala
(`text-label` … `text-display`), den Abständen (`py-band`, `px-gutter`) und den
Animationen. Dazu drei eigene `@utility`-Regeln, die sich als Utility-Klassen
nicht ausdrücken lassen: `wonk` für die Variable-Font-Achsen von Fraunces und
`lantern-paper` für den Lichtverlauf im Laternenpapier.

Wiederkehrende Muster sind Komponenten, keine CSS-Klassen: `Button.astro`,
`Hours.astro`, `Prose.astro`. Wer eine Schaltfläche ändern will, ändert sie
dort einmal.

Farben und Schriften kommen aus der Altstadt von Hoi An: Ockerputz, verwitterte
Fensterläden in Grünblau, Seidenlaternen bei Nacht. Die Karte folgt der Küche
und ist in eine kalte (Sushi-Theke) und eine heiße Hälfte (Wok) geteilt; diese
Zweiteilung ist das Ordnungsprinzip der ganzen Seite.

Schriften: Fraunces (Auszeichnung) und Be Vietnam Pro (Fließtext), beide mit
vietnamesischen und deutschen Diakritika. Sie liegen im Repository und werden
nicht von Google geladen — eine Anfrage weniger und ein Datenschutzproblem
weniger.
