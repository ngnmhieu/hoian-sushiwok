import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/speisekarte/', label: 'Speisekarte' },
  { href: '/kontakt/', label: 'Kontakt' },
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
        className="cursor-pointer rounded-full border border-cream/15 px-4 py-2 text-label tracking-[0.08em] uppercase md:hidden"
        aria-expanded={open}
        aria-controls="hauptnavigation"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Schließen' : 'Menü'}
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
            className="border-b border-transparent py-1.5 text-label tracking-[0.06em] text-cream-dim no-underline transition-colors hover:text-cream aria-[current=page]:border-lantern aria-[current=page]:text-cream max-md:border-b-cream/15 max-md:py-3.5 max-md:aria-[current=page]:border-b-lantern"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
