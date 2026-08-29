import { useState } from 'react';
import { formatPrice, kitchens, menu, type Kitchen } from '../data/menu';

type Filter = 'alle' | Kitchen;

const filters: { id: Filter; label: string }[] = [
  { id: 'alle', label: 'Ganze Karte' },
  { id: 'kalt', label: kitchens.kalt.label },
  { id: 'heiss', label: kitchens.heiss.label },
];

/**
 * Die Karte folgt der Küche: links die kalte Theke, rechts der Wok.
 * Der Filter zeigt eine Hälfte oder beide.
 */
export default function MenuExplorer() {
  const [filter, setFilter] = useState<Filter>('alle');
  const sections = menu.filter((s) => filter === 'alle' || s.kitchen === filter);

  return (
    <>
      <div className="menu-filter" role="group" aria-label="Karte filtern">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            data-kitchen={f.id}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="menu-section">
          <p className={`eyebrow eyebrow--${section.kitchen}`}>{kitchens[section.kitchen].note}</p>
          <h2>{section.title}</h2>
          <p className="menu-section__intro">{section.intro}</p>
          <ul className="dishes">
            {section.dishes.map((dish) => (
              <li key={dish.name} className="dish">
                <span className="dish__name">
                  {dish.name}
                  {dish.tags?.length ? (
                    <span className="dish__tags">
                      {dish.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
                <span className="dish__price">{formatPrice(dish.price)}</span>
                {dish.description ? <p className="dish__desc">{dish.description}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
