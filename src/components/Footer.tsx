import Link from 'next/link';
import { site, nav } from '@/lib/site';
import { services, regions } from '@/lib/content';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Merk & intro */}
        <div>
          <Link href="/" aria-label="Autorijschool Valberg - homepage">
            <img
              src="/images/logo-288.png"
              width={288}
              height={96}
              alt="Logo Autorijschool Valberg"
              className="h-14 w-auto"
              loading="lazy"
            />
          </Link>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            Autorijschool Valberg: toegewijd aan het veilig opleiden van zelfverzekerde
            bestuurders sinds {site.founded}. Persoonlijke rijlessen in Valkenburg en omstreken.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Volg Autorijschool Valberg op Facebook"
            className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-transform hover:scale-110"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
            </svg>
          </a>
        </div>

        {/* Diensten */}
        <nav aria-label="Footer diensten">
          <h2 className="text-base font-bold text-slate-900">Diensten</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="text-sm text-slate-600 transition-colors hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tarieven/" className="text-sm text-slate-600 transition-colors hover:text-brand">
                Tarieven &amp; pakketten
              </Link>
            </li>
            <li>
              <Link href="/faq/" className="text-sm text-slate-600 transition-colors hover:text-brand">
                Veelgestelde vragen
              </Link>
            </li>
          </ul>
        </nav>

        {/* Regio */}
        <nav aria-label="Footer regio's">
          <h2 className="text-base font-bold text-slate-900">Rijles in de regio</h2>
          <ul className="mt-5 space-y-3">
            {regions.map((r) => (
              <li key={r.name}>
                <Link href={r.href} className="text-sm text-slate-600 transition-colors hover:text-brand">
                  Rijschool {r.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/geslaagden/" className="text-sm text-slate-600 transition-colors hover:text-brand">
                Onze geslaagden
              </Link>
            </li>
            <li>
              <Link href="/reviews/" className="text-sm text-slate-600 transition-colors hover:text-brand">
                Reviews van leerlingen
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-base font-bold text-slate-900">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-slate-600">
            <li className="flex gap-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{site.street}, {site.zip} {site.city}</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 transition-colors hover:text-brand">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-brand">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                {site.email}
              </a>
            </li>
          </ul>
          <Link href="/proefles/" className="btn-primary mt-6 !px-5 !py-2.5 text-xs">
            Gratis proefles aanvragen
          </Link>
        </div>
      </div>

      {/* Onderbalk: pagina's + copyright */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container-site flex flex-col items-center gap-4 py-6 text-center">
          <nav aria-label="Footer paginaoverzicht" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-slate-500 transition-colors hover:text-brand">
                {item.label}
              </Link>
            ))}
            <Link href="/privacyverklaring/" className="text-xs text-slate-500 transition-colors hover:text-brand">
              Privacyverklaring
            </Link>
          </nav>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
