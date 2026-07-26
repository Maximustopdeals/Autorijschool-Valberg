import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { packages } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Tarieven & lespakketten | Rijschool Valkenburg vanaf € 60,-',
  description:
    'Bekijk de tarieven van Autorijschool Valberg in Valkenburg: losse lessen € 60,- en complete lespakketten vanaf € 1.650,- inclusief praktijkexamen. Gespreid betalen mogelijk.',
  alternates: { canonical: '/tarieven/' },
};

export default function TarievenPage() {
  return (
    <>
      <PageHero
        title="Tarieven en lespakketten: duidelijk en zonder verrassingen"
        intro="Bij Autorijschool Valberg betaal je een vaste, lage lesprijs en kies je een pakket dat past bij jouw tempo. Alle pakketten zijn inclusief praktijkexamen — je weet dus precies waar je aan toe bent."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Tarieven' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Lespakketten">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((p) => (
              <article
                key={p.name}
                className={`relative flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  p.popular ? 'ring-2 ring-brand' : 'ring-slate-200'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Meest populair
                  </span>
                )}
                <h2 className="text-lg font-bold">{p.name}</h2>
                <p className="mt-3 font-display text-3xl font-bold text-brand">{p.price}</p>
                <p className="mt-1 text-sm font-medium text-slate-500">{p.per}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/proefles/"
                  className={`mt-6 ${p.popular ? 'btn-primary' : 'btn-outline'} w-full !px-4 !py-3 text-xs`}
                >
                  Start met een proefles
                </Link>
              </article>
            ))}
          </div>

          <article className="prose-seo mt-16 max-w-none">
            <h2>Wat kost een rijbewijs in Valkenburg?</h2>
            <p>
              De totale kosten van je rijbewijs hangen af van het aantal lessen dat je nodig hebt.
              Bij <strong>Autorijschool Valberg</strong> betaal je voor een losse les van 60 minuten
              een vaste lage prijs van <strong>€ 60,-</strong>. Kies je voor een pakket, dan profiteer
              je van een voordeliger tarief én is het CBR praktijkexamen al inbegrepen. Zo kom je
              achteraf nooit voor onverwachte kosten te staan.
            </p>
            <p>
              Het <strong>Basis Pakket (€ 1.650,-)</strong> met 20 lessen is geschikt voor leerlingen
              die snel leren en al enig verkeersinzicht hebben. Het{' '}
              <strong>Standaard Pakket (€ 2.225,-)</strong> met 30 lessen is verreweg het meest
              gekozen: het sluit aan bij het landelijke gemiddelde en biedt voldoende ruimte om alle
              vaardigheden grondig te oefenen. Wil je maximale zekerheid of verwacht je meer tijd
              nodig te hebben, dan is het <strong>Premium Pakket (€ 2.750,-)</strong> met 40 lessen de
              beste keuze. Twijfel je welk pakket bij jou past? Tijdens de{' '}
              <Link href="/proefles/">gratis proefles</Link> krijg je een eerlijk en persoonlijk advies.
            </p>

            <h2>Gespreid betalen? Dat kan.</h2>
            <p>
              Een rijbewijs is een investering in je toekomst, maar we begrijpen dat je het bedrag
              liever spreidt. Daarom bieden wij de mogelijkheid om je lespakket{' '}
              <strong>in termijnen te betalen</strong>. Je start direct met lessen en betaalt in
              overzichtelijke delen, afgestemd op jouw situatie. Vraag tijdens je proefles of via het{' '}
              <Link href="/contact/">contactformulier</Link> naar de mogelijkheden — wij denken graag
              met je mee.
            </p>

            <h2>Waarom zijn onze tarieven zo scherp?</h2>
            <p>
              Wij geloven dat kwalitatief goed rijonderwijs betaalbaar moet blijven. Door efficiënt
              te plannen, met een vaste instructeur te werken en lessen doelgericht op te bouwen,
              houden we onze kosten laag — en dat voordeel geven we aan jou door. Bovendien bespaar
              je met onze doelgerichte methode op het totaal: wie gestructureerd en regelmatig lest,
              heeft doorgaans <strong>minder lessen nodig</strong> om examenklaar te zijn. Zo bespaar
              je niet alleen tijd, maar ook geld.
            </p>

            <h2>Bijkomende kosten: theorie- en praktijkexamen</h2>
            <p>
              Naast de lespakketten zijn er kosten die rechtstreeks aan het CBR en de gemeente
              worden betaald. Denk aan het theorie-examen, de gezondheidsverklaring en het aanvragen
              van het rijbewijs bij de gemeente. Het praktijkexamen zit bij onze pakketten al
              inbegrepen. Wij helpen je met de complete planning: van het machtigen van onze
              rijschool bij het CBR (via de knop <strong>&quot;Aanmelden mijn CBR&quot;</strong> in het
              menu) tot het reserveren van je examens. Lees meer over de examens op onze pagina over{' '}
              <Link href="/theorie/">theorie en examenbegeleiding</Link>.
            </p>

            <h2>Kwaliteit boven de laagste prijs</h2>
            <p>
              Vergelijk je rijscholen op prijs? Let dan vooral op wat je voor die prijs krijgt. Bij
              Valberg lessen leerlingen één-op-één van een instructeur met ruim 45 jaar ervaring, in
              een moderne lesauto, met een persoonlijk lesplan en training in het echte examengebied.
              Onze leerlingen beoordelen ons met{' '}
              <Link href="/reviews/">vijf sterren op Google</Link> en een groot deel slaagt in één
              keer — kijk maar bij onze <Link href="/geslaagden/">geslaagden</Link>. Dat is waar je
              uiteindelijk in investeert: een rijbewijs dat je snel, veilig en met plezier haalt.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Wil je weten welk pakket bij jou past?"
        text="Tijdens een gratis proefles beoordelen we je niveau en adviseren we eerlijk over het pakket dat past bij jouw tempo en budget."
      />
    </>
  );
}
