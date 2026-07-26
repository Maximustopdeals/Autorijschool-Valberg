import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ResponsiveImage from '@/components/ResponsiveImage';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Over Autorijschool Valberg | Rijschool in Valkenburg sinds 1979',
  description:
    'Autorijschool Valberg is al ruim 45 jaar de vertrouwde rijschool in Valkenburg. Lees over onze geschiedenis, onze persoonlijke aanpak en onze kernwaarden.',
  alternates: { canonical: '/over-ons/' },
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        title="Over Autorijschool Valberg: een begrip in Valkenburg sinds 1979"
        intro="Al meer dan 45 jaar leiden wij zelfverzekerde en verantwoordelijke bestuurders op — met een persoonlijke benadering, geduld en vakmanschap."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Over ons' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Over onze rijschool">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2">
          <article className="prose-seo">
            <h2 className="!mt-0">Authentiek en gevestigd in het Geuldal</h2>
            <p>
              Autorijschool Valberg is een gevestigde naam in <strong>Valkenburg en omstreken</strong>.
              De rijschool is opgericht in {site.founded} en heeft sindsdien{' '}
              <strong>duizenden leerlingen</strong> geholpen om veilig de weg op te gaan en hun
              rijbewijs te behalen. Generaties bestuurders uit het Geuldal leerden bij ons autorijden
              — en dat vertrouwen nemen we serieus, elke les weer.
            </p>
            <p>
              Wat ons al die jaren onderscheidt, is de combinatie van ervaring en persoonlijke
              aandacht. Wij zijn geen anonieme rijschool met steeds wisselende instructeurs, maar een
              rijschool waar je met een <strong>vaste instructeur</strong> rijdt die jou kent, jouw
              ontwikkeling volgt en de lessen daarop afstemt. Vanuit onze thuisbasis aan de{' '}
              {site.street} in {site.city} zijn we actief in heel Zuid-Limburg: van{' '}
              <Link href="/rijschool-maastricht/">Maastricht</Link> en{' '}
              <Link href="/rijschool-meerssen/">Meerssen</Link> tot{' '}
              <Link href="/rijschool-berg-en-terblijt/">Berg en Terblijt</Link>, Houthem, Schin op
              Geul en Beek.
            </p>
            <p>
              Onze leerlingen doen praktijkexamen bij het CBR in Maastricht. Omdat we daar tijdens de{' '}
              <Link href="/rijlessen/">rijlessen</Link> regelmatig trainen, gaat vrijwel elke leerling
              met vertrouwen het examen in. Het resultaat zie je terug op onze pagina met{' '}
              <Link href="/geslaagden/">geslaagde kandidaten</Link> en in de{' '}
              <Link href="/reviews/">vijfsterrenreviews</Link> die leerlingen achterlaten op Google.
            </p>
          </article>
          <ResponsiveImage
            base="/images/over-ons"
            widths={[480, 720]}
            heightFor={(w) => Math.round((w * 540) / 720)}
            alt="Rijinstructeur van Autorijschool Valberg met een geslaagde leerling bij de lesauto"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="bg-slate-50 py-16 sm:py-20" aria-labelledby="kernwaarden-titel">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">Professionaliteit</p>
            <h2 id="kernwaarden-titel" className="mt-3 text-3xl font-bold sm:text-4xl">
              Onze kernwaarden
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: 'Toewijding aan veiligheid',
                d: 'Wij hechten enorm veel waarde aan het veiligheidsbewustzijn van onze leerlingen. Wij leren je niet alleen examenrijden, maar verantwoordelijk rijden — voor nu en voor de rest van je leven.',
              },
              {
                t: 'Geduldige begeleiding',
                d: 'Iedereen leert in zijn eigen tempo. Onze instructeur biedt geduldige en professionele begeleiding, zodat elke leerling kan groeien zonder druk of stress.',
              },
              {
                t: 'Persoonlijke aanpak',
                d: 'Met een persoonlijke benadering zorgen wij dat elke les waardevol is en bijdraagt aan het zelfvertrouwen en de vaardigheden van onze leerlingen.',
              },
            ].map((k) => (
              <div key={k.t} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold">{k.t}</h3>
                <p className="mt-3 leading-8 text-slate-600">{k.d}</p>
              </div>
            ))}
          </div>

          <article className="prose-seo mt-14 max-w-none">
            <h2>Meer dan vier decennia vakmanschap</h2>
            <p>
              In 45 jaar verandert er veel: de auto&apos;s, de verkeersregels, de exameneisen van het
              CBR. Wat nooit verandert, is onze missie: leerlingen opleiden tot bestuurders die
              veilig, zelfverzekerd en met plezier de weg op gaan. Die missie voeren we uit met
              moderne lesauto&apos;s, actuele lesmethodieken en bovenal met de rust en het geduld die
              alleen ervaring kan brengen.
            </p>
            <p>
              Of je nu kiest voor een <Link href="/tarieven/">compleet lespakket</Link>, een{' '}
              <Link href="/opfriscursus/">opfriscursus</Link> of begeleiding bij je{' '}
              <Link href="/theorie/">theorie-examen</Link>: bij Valberg krijg je altijd dezelfde
              betrokken begeleiding. Benieuwd geworden? Plan een{' '}
              <Link href="/proefles/">gratis proefles</Link> en ervaar zelf wat autorijden leren bij
              een rijschool met een geschiedenis van bijna een halve eeuw zo bijzonder maakt.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Leer autorijden bij een rijschool met 45 jaar ervaring"
        text="Word net als duizenden leerlingen voor je een zelfverzekerde bestuurder. Start met een gratis proefles."
      />
    </>
  );
}
