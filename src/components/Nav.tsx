import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/speisekarte/', label: 'Speisekarte' },
  { href: '/#kontakt', label: 'Kontakt' },
];

/** Kopfnavigation. Unter der md-Grenze klappt sie auf Knopfdruck auf. */
export default function Nav({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const norm = (p: string) => p.replace(/\/+$/, '') || '/';
  const current = norm(pathname);

  return (
    <>
      <button
        type="button"
        data-nav-toggle
        className="grid size-11 cursor-pointer place-items-center text-cream-dim transition-colors hover:text-cream md:hidden"
        aria-expanded={open}
        aria-controls="hauptnavigation"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Drei Striche, die zum Kreuz werden: der mittlere blendet aus, die
            äußeren wandern in die Mitte und drehen sich. */}
        <span aria-hidden="true" className="relative block h-3.5 w-5">
          <span
            className={`absolute inset-x-0 top-0 h-px bg-current transition-transform duration-200 motion-reduce:transition-none ${open ? 'translate-y-[6.5px] rotate-45' : ''}`}
          />
          <span
            className={`absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current transition-opacity duration-200 motion-reduce:transition-none ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-200 motion-reduce:transition-none ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`}
          />
        </span>
      </button>
      <nav
        id="hauptnavigation"
        data-nav
        aria-label="Hauptnavigation"
        className={`${open ? 'flex' : 'hidden'} max-md:absolute max-md:inset-x-0 max-md:top-full max-md:flex-col max-md:border-b max-md:border-cream/15 max-md:bg-ink-900 max-md:px-gutter max-md:pt-2 max-md:pb-6 md:flex md:items-center md:gap-7`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={current === norm(link.href) ? 'page' : undefined}
            onClick={() => setOpen(false)}
            className="border-b border-transparent py-1.5 text-body md:pb-0.5 font-medium tracking-[0.06em] text-white no-underline transition-colors hover:text-white/70 aria-[current=page]:border-lacquer max-md:border-b-cream/15 max-md:py-3.5 max-md:aria-[current=page]:border-b-lacquer"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
