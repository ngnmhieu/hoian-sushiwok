# Hoi An Wok & Sushi

## Information
Restaurant name: Hoi An Wok & Sushi
Owner: Viet Toan Do
Address: Bahnhofstraße 9, 02708 Löbau
Opening hours: Monday to Saturday, 10:00-20:00 (closed Sunday)
Landline: 03585 4525047
Mobile: 0176 31510183

## Idea

The name is a town in central Vietnam; the restaurant is in Löbau, Saxony. What
it sells is an evening of Asian cooking and atmosphere in a small German town.
Copy says that plainly: it never implies the restaurant is in Hoi An, and it
never sells the trip in place of the meal — the paragraph lands on what reaches
Löbau, not on what stayed behind.

Written without diacritics everywhere — `Hoi An`, never `Hội An`.

## Reservation
Reservation is only possible by phone right now.
Both landline and mobile numbers can be used for reservation.

## Deploy

GitHub Pages serves `main` + `/docs` at hoian-woksushi.de, so the built `docs/`
is committed. Run `npm run build` after any source change or a stale `docs/`
ships. The build empties `docs/`, which is why `CNAME` and `.nojekyll` live in
`public/` — and without `.nojekyll`, Jekyll eats `_astro/` and the site arrives
unstyled. Internal links need trailing slashes; Pages 301s otherwise.

## Decisions

- Tailwind utilities only. Recurring patterns become components, never `@apply`.
- Fonts are self-hosted rather than loaded from Google. That's a privacy
  decision for a German site, not a convenience one.
- `isDraft` also withholds address and hours from the schema.org block: Google
  reads a `TODO` in structured data as fact. Impressum and Datenschutz are
  unreviewed drafts.

## Tailwind preflight traps

- Headings inherit `font-weight` and `<body>` is `font-light`, so weight rides
  on the font size (`--text-heading--font-weight`). New heading sizes need that
  line too.
- `text-wrap` is not a base rule: set `text-balance` and `text-pretty` yourself.
