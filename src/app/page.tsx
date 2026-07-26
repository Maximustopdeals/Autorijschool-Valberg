import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';
import { services, homeGeslaagden } from '@/lib/content';
import ResponsiveImage from '@/components/ResponsiveImage';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Autorijschool Valberg in Valkenburg | Rijlessen & Gratis Proefles',
  description:
    'Autorijschool Valberg: dé rijschool in Valkenburg met 45+ jaar ervaring en een 5-sterrenbeoordeling. Persoonlijke rijlessen, vaste lage lesprijs en gratis proefles.',
  alternates: { canonical: '/' },
};

const quickLinks = [
  {
    href: '/tarieven/',
    title: 'Tarieven & pakketten',
    text: 'Losse lessen vanaf € 60,- en complete lespakketten vanaf € 1.650,- inclusief praktijkexamen. Gespreid betalen mogelijk.',
    link: 'Bekijk alle tarieven',
  },
  {
    href: '/reviews/',
    title: 'Reviews van leerlingen',
    text: 'Onze leerlingen beoordelen ons op Google met vijf sterren. Lees zelf waarom zij voor Autorijschool Valberg kozen.',
    link: 'Lees de reviews',
  },
  {
    href: '/faq/',
    title: 'Veelgestelde vragen',
    text: 'Alles over de proefles, lespakketten, het examen bij het CBR en gespreid betalen — helder op een rij.',
    link: 'Naar de FAQ',
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ============ HERO (LCP) ============ */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="container-site grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="fade-up">
            <p className="eyebrow">Rijschool in Valkenburg sinds {site.founded}</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Autorijschool Valberg —{' '}
              <span className="text-brand">de rijschool in Valkenburg</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Rij in stijl. Leer met vertrouwen. Slaag snel. Bij Autorijschool Valberg leer je
              veilig, ontspannen en zelfverzekerd autorijden, met persoonlijke rijlessen op maat —
              afgestemd op jouw tempo en niveau.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/proefles/" className="btn-primary">
                Boek je gratis proefles
              </Link>
              <Link href="/tarieven/" className="btn-outline">
                Bekijk tarieven
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                Geen wachttijd, direct starten
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                Vaste lage lesprijs van € 60,-
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-5 w-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                5-sterren beoordeling op Google
              </li>
            </ul>
          </div>
          <div className="fade-up relative">
            <ResponsiveImage
              base="/images/hero-lesauto"
              widths={[768, 1200, 1920]}
              heightFor={(w) => Math.round((w * 1300) / 1920)}
              alt="Blauwe lesauto van Autorijschool Valberg langs de weg in Valkenburg"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/10"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-6 py-4 shadow-xl ring-1 ring-slate-100">
              <p className="text-3xl font-bold text-brand">45+</p>
              <p className="text-sm font-medium text-slate-600">jaar ervaring in rijopleidingen</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DIENSTEN ============ */}
      <section className="py-16 sm:py-24" aria-labelledby="diensten-titel">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">Onze diensten</p>
            <h2 id="diensten-titel" className="mt-3 text-3xl font-bold sm:text-4xl">
              Vind het rijlespakket dat perfect bij jou past
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Of je nu net begint met autorijlessen, je theorie-examen moet halen of je rijvaardigheid
              wilt opfrissen: wij bieden een lesvorm die past bij jouw doel, tempo en budget.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  <Link href={s.href} className="transition-colors group-hover:text-brand">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{s.text}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                      <svg className="h-4 w-4 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                  aria-label={`Meer over ${s.title}`}
                >
                  Lees meer
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ USP-BAND ============ */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="waarom-titel">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Echte resultaten, echte mensen</p>
              <h2 id="waarom-titel" className="mt-3 text-3xl font-bold sm:text-4xl">
                Wat ons anders maakt als rijschool in Valkenburg
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    n: '01',
                    t: 'Persoonlijke aanpak',
                    d: 'Eén-op-één begeleiding van een vaste rijinstructeur die jouw leertempo, sterke punten en aandachtspunten kent. Zo wordt elke les maximaal effectief.',
                  },
                  {
                    n: '02',
                    t: 'Veiligheid voorop',
                    d: 'Wij leiden je op tot een verantwoordelijke bestuurder. Verkeersinzicht, defensief rijden en bewustzijn staan centraal in elke les.',
                  },
                  {
                    n: '03',
                    t: 'Doelgerichte methode',
                    d: 'Met een gestructureerd lesplan en meerdere lessen per week blijft de stof beter hangen. Je bent sneller examenklaar en bespaart tijd én geld.',
                  },
                ].map((u) => (
                  <div key={u.n} className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand font-display text-lg font-bold text-white">
                      {u.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{u.t}</h3>
                      <p className="mt-1.5 leading-7 text-slate-600">{u.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/over-ons/" className="btn-outline mt-9">
                Meer over onze rijschool
              </Link>
            </div>
            <ResponsiveImage
              base="/images/rijles-auto"
              widths={[768, 1024, 1600]}
              heightFor={(w) => Math.round((w * 3635) / 5452)}
              alt="Rijinstructeur van Autorijschool Valberg geeft uitleg tijdens een praktijkles"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ============ GESLAAGDEN: 3 BLOKKEN ============ */}
      <section className="py-16 sm:py-24" aria-labelledby="geslaagden-titel">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Onze trots</p>
            <h2 id="geslaagden-titel" className="mt-3 text-3xl font-bold sm:text-4xl">
              Gefeliciteerd aan de nieuwe bestuurders
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Al duizenden leerlingen haalden bij ons hun rijbewijs. Hieronder een greep uit onze
              trotse geslaagden — jij kunt de volgende zijn.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {homeGeslaagden.map((g, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100">
                <img
                  src={`${g.src}-800.webp`}
                  srcSet={`${g.src}-480.webp 480w, ${g.src}-800.webp 800w`}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  width={800}
                  height={600}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="px-5 py-4 text-sm font-medium text-slate-700">{g.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/geslaagden/" className="btn-outline">
              Bekijk alle geslaagden
            </Link>
          </div>
        </div>
      </section>

      {/* ============ VERWIJZINGEN NAAR PAGINA'S ============ */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="meer-titel">
        <div className="container-site">
          <h2 id="meer-titel" className="sr-only">
            Ontdek meer over Autorijschool Valberg
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {quickLinks.map((q) => (
              <article
                key={q.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl"
              >
                <h3 className="text-xl font-bold">
                  <Link href={q.href} className="transition-colors group-hover:text-brand">
                    {q.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 leading-8 text-slate-600">{q.text}</p>
                <Link href={q.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  {q.link}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA-BAND ============ */}
      <CtaBand />
    </>
  );
}
