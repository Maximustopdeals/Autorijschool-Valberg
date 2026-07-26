import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ElfsightReviews from '@/components/ElfsightReviews';
import { reviews, site_rating } from '@/lib/reviews-data';

export const metadata: Metadata = {
  title: 'Reviews | Wat leerlingen zeggen over Autorijschool Valberg',
  description:
    'Lees de reviews van leerlingen over Autorijschool Valberg in Valkenburg. Onze leerlingen beoordelen ons met 5 sterren op Google. Ervaar zelf waarom!',
  alternates: { canonical: '/reviews/' },
};

const aggregateSchema = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  name: 'Autorijschool Valberg',
  url: 'https://autorijschoolvalberg.nl',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '10',
    bestRating: '5',
  },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Reviews: dit zeggen onze leerlingen"
        intro="Onze leerlingen beoordelen Autorijschool Valberg op Google met het maximale aantal sterren. Lees hun ervaringen en ontdek waarom zij voor ons kozen."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }} />

      <section className="py-14 sm:py-20" aria-label="Google reviews">
        <div className="container-site">
          {/* Scoreoverzicht */}
          <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <p className="font-display text-6xl font-bold text-brand">{site_rating.score}</p>
            <div className="mt-3 flex justify-center gap-1 text-amber-400" aria-label={`${site_rating.score} van 5 sterren`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />
                </svg>
              ))}
            </div>
            <p className="mt-3 text-sm font-medium text-slate-600">
              Gebaseerd op echte Google-beoordelingen van onze leerlingen
            </p>
          </div>

          {/* Live widget */}
          <div className="mt-12">
            <ElfsightReviews />
          </div>

          {/* Uitgelichte reviews (fallback / tekst voor zoekmachines) */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <blockquote key={i} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex gap-1 text-amber-400" aria-label={`Beoordeling: ${r.rating} van 5 sterren`}>
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <svg key={s} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 flex-1 leading-8 text-slate-600">&ldquo;{r.text}&rdquo;</p>
                <footer className="mt-5 text-sm font-semibold text-slate-900">— {r.name}</footer>
              </blockquote>
            ))}
          </div>

          <article className="prose-seo mx-auto mt-16 max-w-3xl">
            <h2 className="!mt-0">Waarom leerlingen ons vijf sterren geven</h2>
            <p>
              In de reviews van onze leerlingen keren steeds dezelfde woorden terug: rustig, geduldig,
              duidelijk en persoonlijk. Dat is precies hoe wij werken. Bij Autorijschool Valberg leer
              je autorijden zonder druk, met een vaste instructeur die de tijd voor je neemt en alles
              stap voor stap uitlegt. Of je nu snel je rijbewijs wilt halen of juist behoefte hebt
              aan extra begeleiding: wij passen de <Link href="/rijlessen/">rijlessen</Link> aan op
              wat jij nodig hebt.
            </p>
            <p>
              Heb je bij ons gelest en wil je jouw ervaring delen? Wij stellen een review op ons
              Google Bedrijfsprofiel enorm op prijs — zo help je toekomstige leerlingen bij het
              kiezen van een rijschool. Ben je nog geen leerling maar benieuwd geworden? Vraag dan
              een <Link href="/proefles/">gratis proefles</Link> aan en ervaar zelf waarom onze
              leerlingen zo tevreden zijn. Bekijk ook onze <Link href="/geslaagden/">geslaagden</Link>{' '}
              of neem <Link href="/contact/">contact met ons op</Link> bij vragen.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Ervaar zelf onze 5-sterren service"
        text="Sluit je aan bij de honderden tevreden leerlingen van Autorijschool Valberg. Start met een gratis proefles."
      />
    </>
  );
}
