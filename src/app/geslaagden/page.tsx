import type { Metadata } from 'next';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import GeslaagdenCarousel from '@/components/GeslaagdenCarousel';
import { geslaagden } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Geslaagde leerlingen | Autorijschool Valberg Valkenburg',
  description:
    'Bekijk de foto\'s van onze geslaagde leerlingen bij Autorijschool Valberg in Valkenburg. Honderden bestuurders haalden bij ons hun rijbewijs — jij kunt de volgende zijn!',
  alternates: { canonical: '/geslaagden/' },
};

export default function GeslaagdenPage() {
  return (
    <>
      {/* Header met feestelijke ballonnenfoto */}
      <section className="relative overflow-hidden bg-brand">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autorijschoolvalberg.nl/' },
                { '@type': 'ListItem', position: 2, name: 'Geslaagden' },
              ],
            }),
          }}
        />
        <img
          src="/images/header-geslaagden-1600.webp"
          srcSet="/images/header-geslaagden-768.webp 768w, /images/header-geslaagden-1600.webp 1600w"
          sizes="100vw"
          width={1600}
          height={915}
          alt="Feestelijke ballonnen voor de geslaagde cursisten van Autorijschool Valberg"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand/70" aria-hidden="true" />
        <div className="container-site relative py-16 sm:py-24">
          <nav aria-label="Broodkruimelpad" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-blue-100">
              <li className="flex items-center gap-2">
                <Link href="/" className="transition-colors hover:text-white">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span aria-current="page" className="font-semibold text-white">Geslaagden</span>
              </li>
            </ol>
          </nav>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Onze geslaagden: trotse nieuwe bestuurders
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">
            Niets zegt meer over een rijschool dan de resultaten. Al ruim 45 jaar helpen wij
            leerlingen uit Valkenburg en omgeving aan hun rijbewijs. Hieronder een greep uit onze
            trotse geslaagden.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-label="Foto's van geslaagden">
        <div className="container-site">
          <GeslaagdenCarousel />

          {/* Fotogrid */}
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {geslaagden.map((g, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100">
                <img
                  src={`${g.src}-480.webp`}
                  srcSet={`${g.src}-480.webp 480w, ${g.src}-800.webp 800w`}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  width={800}
                  height={533}
                  alt={g.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <figcaption className="px-4 py-3 text-xs font-medium text-slate-600 sm:text-sm">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <article className="prose-seo mx-auto mt-16 max-w-3xl">
            <h2 className="!mt-0">Honderden leerlingen gingen je voor</h2>
            <p>
              Van Valkenburg tot Maastricht en van Meerssen tot Berg en Terblijt: overal in de regio
              rijden bestuurders rond die hun rijbewijs bij Autorijschool Valberg hebben gehaald.
              Wat hen bindt? Een persoonlijke aanpak, geduldige begeleiding en een grondige
              voorbereiding op het praktijkexamen bij het CBR in Maastricht. Velen van hen slaagden
              in één keer — en wij zijn daar net zo trots op als zijzelf.
            </p>
            <p>
              Word jij onze volgende geslaagde? Begin met een{' '}
              <Link href="/proefles/">gratis proefles</Link>, kies een{' '}
              <Link href="/tarieven/">lespakket dat bij je past</Link> en ervaar hoe onze{' '}
              <Link href="/rijlessen/">rijlessen</Link> je stap voor stap naar je rijbewijs brengen.
              Lees ook de <Link href="/reviews/">reviews van onze leerlingen</Link> om te zien hoe
              zij het traject hebben ervaren.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Sta jij binnenkort ook op deze pagina?"
        text="Begin vandaag met je rijopleiding bij Autorijschool Valberg. Vraag een gratis proefles aan en zet de eerste stap naar je rijbewijs."
      />
    </>
  );
}
