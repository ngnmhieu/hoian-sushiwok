// ─────────────────────────────────────────────────────────────────────────────
// Platzhalter-Karte. Die Gerichtnamen sind Kategoriebeispiele, die Preise stehen
// bewusst auf `null` und erscheinen als „–,– €“.
// TODO: echte Gerichte, Beschreibungen und Preise eintragen, dann in
// src/data/site.ts `isDraft = false` setzen.
// ─────────────────────────────────────────────────────────────────────────────

/** Die Küche hat zwei Hälften: die kalte Theke und der heiße Wok. */
export type Kitchen = 'kalt' | 'heiss';

export type Dish = {
  name: string;
  description?: string;
  /** Preis in Euro. `null` = noch offen. */
  price: number | null;
  /** z. B. ['vegetarisch', 'scharf'] */
  tags?: string[];
};

export type Section = {
  id: string;
  title: string;
  kitchen: Kitchen;
  /** Ein Satz, der die Kategorie einordnet. */
  intro: string;
  dishes: Dish[];
};

export const kitchens: Record<Kitchen, { label: string; note: string }> = {
  kalt: { label: 'Kalte Küche', note: 'Sushi-Theke' },
  heiss: { label: 'Heiße Küche', note: 'Wok & Suppen' },
};

export const menu: Section[] = [
  {
    id: 'nigiri',
    title: 'Nigiri & Sashimi',
    kitchen: 'kalt',
    intro: 'Von Hand geformt, pro Stück bestellbar.',
    dishes: [
      { name: 'Lachs', price: null },
      { name: 'Thunfisch', price: null },
      { name: 'Garnele', price: null },
      { name: 'Avocado', price: null, tags: ['vegetarisch'] },
    ],
  },
  {
    id: 'maki',
    title: 'Maki & Inside Out',
    kitchen: 'kalt',
    intro: 'Sechs oder acht Stück, je nach Rolle.',
    dishes: [
      { name: 'Maki Lachs', price: null },
      { name: 'California Roll', price: null },
      { name: 'Gurke & Sesam', price: null, tags: ['vegan'] },
      { name: 'Crunchy Roll', price: null },
    ],
  },
  {
    id: 'platten',
    title: 'Sushi-Platten',
    kitchen: 'kalt',
    intro: 'Zum Teilen oder als ganzes Abendessen.',
    dishes: [
      { name: 'Platte klein', description: 'TODO: Zusammenstellung beschreiben', price: null },
      { name: 'Platte groß', description: 'TODO: Zusammenstellung beschreiben', price: null },
    ],
  },
  {
    id: 'wok',
    title: 'Aus dem Wok',
    kitchen: 'heiss',
    intro: 'Bei großer Hitze in Minuten gebraten.',
    dishes: [
      { name: 'Gebratene Nudeln', description: 'TODO: mit Gemüse, Huhn, Rind oder Tofu', price: null },
      { name: 'Gebratener Reis', price: null },
      { name: 'Wok-Gemüse der Saison', price: null, tags: ['vegan'] },
      { name: 'Ente süß-sauer', price: null },
    ],
  },
  {
    id: 'suppen',
    title: 'Suppen',
    kitchen: 'heiss',
    intro: 'Die Brühe zieht über Nacht.',
    dishes: [
      { name: 'Phở Bò', description: 'TODO: Rinderbrühe, Reisbandnudeln, Kräuter', price: null },
      { name: 'Phở Gà', description: 'TODO: Hühnerbrühe, Reisbandnudeln', price: null },
      { name: 'Misosuppe', price: null, tags: ['vegetarisch'] },
    ],
  },
  {
    id: 'vorspeisen',
    title: 'Kleinigkeiten',
    kitchen: 'heiss',
    intro: 'Für den Anfang oder zwischendurch.',
    dishes: [
      { name: 'Sommerrollen', price: null, tags: ['vegetarisch'] },
      { name: 'Frühlingsrollen', price: null },
      { name: 'Edamame', price: null, tags: ['vegan'] },
      { name: 'Gyoza', price: null },
    ],
  },
];

export function formatPrice(price: number | null): string {
  if (price === null) return '–,– €';
  return price.toFixed(2).replace('.', ',') + ' €';
}
