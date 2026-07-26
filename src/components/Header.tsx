'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="container-site flex items-center justify-between gap-4 py-3">
        <Link href="/" aria-label="Autorijschool Valberg - naar de homepage" className="shrink-0">
          <img
            src="/images/logo-288.png"
            srcSet="/images/logo-288.png 288w, /images/logo-432.png 432w"
            sizes="(max-width: 640px) 150px, 180px"
            width={288}
            height={96}
            alt="Autorijschool Valberg - rijschool in Valkenburg"
            className="h-12 w-auto shrink-0 sm:h-14"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop navigatie */}
        <nav aria-label="Hoofdmenu" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-brand xl:text-[15px] ${
                      active ? 'font-semibold text-brand' : 'text-slate-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.cbrLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden whitespace-nowrap !px-5 !py-3 text-xs sm:inline-flex xl:!px-6"
          >
            Aanmelden mijn CBR
          </a>
          {/* Hamburger (mobiel) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobiel-menu"
            aria-label={open ? 'Menu sluiten' : 'Menu openen'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobiel menu */}
      {open && (
        <nav id="mobiel-menu" aria-label="Mobiel menu" className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="container-site space-y-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-base font-medium ${
                    pathname === item.href ? 'bg-brand-light font-semibold text-brand' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href={site.cbrLink} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Aanmelden mijn CBR
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
