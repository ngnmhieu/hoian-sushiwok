export const site = {
  name: 'HOIAN WOK & SUSHI',
  shortName: 'HOIAN',
  tagline: 'Sushi, Wok und vietnamesische Küche mitten in Löbau',
  url: 'https://hoian-woksushi.de',
};

export const contact = {
  street: 'Bahnhofstraße 9',
  postalCode: '02708',
  city: 'Löbau',
  owner: 'Viet Toan Do',
  phone: '03585 4525047',
  // Für tel:-Links: ohne Leerzeichen, mit Ländervorwahl statt führender Null.
  phoneHref: 'tel:+4935854525047',
  mobile: '0176 31510183',
  mobileHref: 'tel:+4917631510183',
  email: 'info@hoian-woksushi.de',
  mapsUrl: '', // TODO: Google-Maps-Link einfügen, sonst wird der Button ausgeblendet.
};

// `schema` ist die maschinenlesbare Form für schema.org (`Mo-Sa 10:00-20:00`,
// ASCII-Bindestriche, zweistellige Tageskürzel). Ruhetage lassen sie weg.
export type Hours = { days: string; open: string; schema?: string; note?: string };

export const hours: Hours[] = [
  { days: 'Montag – Samstag', open: '10:00 – 20:00', schema: 'Mo-Sa 10:00-20:00' },
  { days: 'Feiertag & Sonntag', open: 'geschlossen' },
];

// Wird auf der Speisekarte und im Footer als Hinweis angezeigt,
// solange die echten Inhalte fehlen. Auf `false` setzen, wenn alles steht.
export const isDraft = false;
