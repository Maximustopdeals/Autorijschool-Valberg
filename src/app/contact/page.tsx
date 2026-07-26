import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | Autorijschool Valberg Valkenburg — 06-21 11 75 59',
  description:
    'Neem contact op met Autorijschool Valberg in Valkenburg. Bel 06-21 11 75 59, stuur een WhatsApp of gebruik het contactformulier. Reactie binnen één werkdag.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Neem contact op met Autorijschool Valberg"
        intro="Vraag over rijlessen, tarieven of de gratis proefles? Bel, WhatsApp of mail ons — wij reageren uiterlijk binnen één werkdag."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Contactgegevens en formulier">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr,1.3fr]">
          {/* Contactgegevens */}
          <div className="space-y-5">
            <a
              href={site.phoneHref}
              className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-slate-500">Bellen</span>
                <span className="block text-lg font-bold text-slate-900">{site.phone}</span>
              </span>
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#25D366]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm0-21.6a11.8 11.8 0 0 0-10.1 17.9L.5 23.2l5.2-1.4A11.8 11.8 0 1 0 12 .2Z" />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-slate-500">WhatsApp</span>
                <span className="block text-lg font-bold text-slate-900">Stuur direct een bericht</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </span>
              <span>
                <span className="block text-sm font-medium text-slate-500">E-mail</span>
                <span className="block break-all text-lg font-bold text-slate-900">{site.email}</span>
              </span>
            </a>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <span className="block text-sm font-medium text-slate-500">Bezoekadres</span>
                  <span className="block text-lg font-bold text-slate-900">
                    {site.street}, {site.zip} {site.city}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Wij werken op afspraak en halen je voor de{' '}
                <Link href="/rijlessen/" className="font-semibold text-brand underline-offset-4 hover:underline">rijlessen</Link>{' '}
                op in Valkenburg, Maastricht, Meerssen, Berg en Terblijt en omgeving.
                Ingeschreven bij de Kamer van Koophandel onder nummer {site.kvk}.
              </p>
            </div>
          </div>

          {/* Formulier */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg sm:p-10">
            <h2 className="text-2xl font-bold">Stuur ons een bericht</h2>
            <p className="mt-2 mb-8 text-sm leading-7 text-slate-600">
              Vul het formulier in en wij nemen zo snel mogelijk contact met je op. Wil je direct
              starten? Vraag dan meteen een{' '}
              <Link href="/proefles/" className="font-semibold text-brand underline-offset-4 hover:underline">gratis proefles</Link> aan.
            </p>
            <ContactForm subject="Contactbericht via autorijschoolvalberg.nl" />
          </div>
        </div>
      </section>
    </>
  );
}
