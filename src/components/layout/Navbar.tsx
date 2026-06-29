import { useEffect, useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { navigationLinks } from '../../constants/navigation';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-stone-950/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4 sm:py-5">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.35em] text-brand-500 sm:text-xl">
          LUXE DINING
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-300 lg:flex">
          {navigationLinks.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="secondary" className="hidden sm:inline-flex">
            Book Table
          </Button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div className={`fixed inset-0 z-40 bg-stone-950/80 backdrop-blur-sm transition-all duration-300 lg:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className={`absolute right-4 top-4 w-[min(88vw,22rem)] rounded-[1.5rem] border border-white/10 bg-stone-900/95 p-6 shadow-2xl shadow-black/50 transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Menu</span>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/10 p-2 text-stone-300 transition hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-4">
            {navigationLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-stone-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <Button variant="primary" className="w-full">
              Book Table
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
