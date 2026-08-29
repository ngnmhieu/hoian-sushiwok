import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Start' },
  { href: '/speisekarte/', label: 'Speisekarte' },
  { href: '/kontakt/', label: 'Kontakt' },
];

/** Kopfnavigation. Unter 46rem klappt sie auf Knopfdruck auf. */
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
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="hauptnavigation"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Schließen' : 'Menü'}
      </button>
      <nav id="hauptnavigation" className="nav" data-open={open} aria-label="Hauptnavigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={current === norm(link.href) ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
