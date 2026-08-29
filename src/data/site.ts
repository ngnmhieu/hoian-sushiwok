// ─────────────────────────────────────────────────────────────────────────────
// TODO: Alle Werte mit «TODO» durch die echten Angaben ersetzen.
// Diese Datei ist die einzige Stelle, an der Adresse, Zeiten und Kontakt stehen.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Hội An Sushi & Wok',
  shortName: 'Hội An',
  tagline: 'Sushi-Theke und Wok-Küche unter einem Dach',
  url: 'https://hoian-sushiwok.de',
};

export const contact = {
  street: 'TODO: Straße und Hausnummer',
  postalCode: 'TODO: PLZ',
  city: 'TODO: Ort',
  phone: 'TODO: +49 ...',
  // Für tel:-Links, ohne Leerzeichen. TODO ersetzen.
  phoneHref: 'tel:+49000000000',
  email: 'TODO: mail@hoian-sushiwok.de',
  mapsUrl: '', // TODO: Google-Maps-Link einfügen, sonst wird der Button ausgeblendet.
};

export type Hours = { days: string; open: string; note?: string };

// TODO: echte Öffnungszeiten eintragen.
export const hours: Hours[] = [
  { days: 'Montag', open: 'Ruhetag' },
  { days: 'Dienstag – Freitag', open: '11:30 – 14:30 · 17:30 – 22:00' },
  { days: 'Samstag', open: '17:30 – 22:30' },
  { days: 'Sonntag & Feiertage', open: '12:00 – 21:30' },
];

// Wird auf der Speisekarte und im Footer als Hinweis angezeigt,
// solange die echten Inhalte fehlen. Auf `false` setzen, wenn alles steht.
export const isDraft = true;
