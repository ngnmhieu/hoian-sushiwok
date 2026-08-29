import { useState } from 'react';
import { formatPrice, kitchens, menu, type Kitchen } from '../data/menu';

type Filter = 'alle' | Kitchen;

const filters: { id: Filter; label: string }[] = [
  { id: 'alle', label: 'Ganze Karte' },
  { id: 'kalt', label: kitchens.kalt.label },
  { id: 'heiss', label: kitchens.heiss.label },
];

const active: Record<Filter, string> = {
  alle: 'border-ink-900 bg-ink-900 text-cream',
  kalt: 'border-shutter bg-shutter text-cream',
  heiss: 'border-lantern bg-lantern text-white',
};

/**
 * Die Karte folgt der Küche: die kalte Theke und der Wok.
 * Der Filter zeigt eine Hälfte oder beide.
 */
export default function MenuExplorer() {
  const [filter, setFilter] = useState<Filter>('alle');
  const sections = menu.filter((s) => filter === 'alle' || s.kitchen === filter);

  return (
    <>
      <div
        className="mb-12 flex flex-wrap gap-2 border-b border-night/15 pb-6"
        role="group"
        aria-label="Karte filtern"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`cursor-pointer rounded-full border px-[1.15rem] py-2.5 text-label tracking-[0.08em] uppercase transition-colors ${
              filter === f.id
                ? active[f.id]
                : 'border-night/15 text-night-dim hover:text-night'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {sections.map((section, i) => (
        <section key={section.id} id={section.id} className={i > 0 ? 'mt-[clamp(2.5rem,6vw,4.5rem)]' : ''}>
          <p className="mb-5 inline-flex items-center gap-2.5 text-label font-medium tracking-[0.16em] text-night-dim uppercase">
            <span
              className={`size-2 shrink-0 rounded-full ${
                section.kitchen === 'kalt' ? 'bg-shutter' : 'bg-lantern'
              }`}
              aria-hidden="true"
            />
            {kitchens[section.kitchen].note}
          </p>
          <h2 className="font-display wonk text-title leading-none tracking-[-0.015em] text-balance">
            {section.title}
          </h2>
          <p className="mt-2 text-night-dim">{section.intro}</p>

          <ul className="mt-7">
            {section.dishes.map((dish) => (
              <li
                key={dish.name}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1.5 border-t border-night/15 py-3.5"
              >
                <span>
                  {dish.name}
                  {dish.tags?.length ? (
                    <span className="ml-2.5 inline-flex gap-1.5">
                      {dish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-shutter/45 px-2 py-0.5 text-[0.7rem] tracking-[0.1em] text-shutter uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
                <span className="whitespace-nowrap text-night-dim tabular-nums">
                  {formatPrice(dish.price)}
                </span>
                {dish.description ? (
                  <p className="col-span-full m-0 text-label text-night-dim">{dish.description}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
