import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ResponsiveImage from '@/components/ResponsiveImage';

export const metadata: Metadata = {
  title: 'Theorie-examen & CBR examenbegeleiding | Rijschool Valkenburg',
  description:
    'Begeleiding bij je theorie-examen en CBR praktijkexamen door Autorijschool Valberg. Examensimulatie, stressmanagement en praktijkgerichte tips. Examencentrum Maastricht.',
  alternates: { canonical: '/theorie/' },
};

export default function TheoriePage() {
  return (
    <>
      <PageHero
        title="Theorie-examen en CBR examenbegeleiding"
        intro="Van het halen van je theorie tot het praktijkexamen bij het CBR in Maastricht: wij begeleiden je bij elke stap — met praktijkgerichte tips, examensimulaties en stressmanagement."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Theorie & examen' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Inhoud theorie en examen">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[2fr,1fr]">
          <article className="prose-seo">
            <h2 className="!mt-0">Je theorie-examen halen: het fundament van je rijbewijs</h2>
            <p>
              Voordat je praktijkexamen mag doen, moet je in het bezit zijn van een geldig
              theoriecertificaat. Het theorie-examen bij het CBR bestaat uit vragen over
              verkeersregels, verkeersinzicht en gevaarherkenning. Veel leerlingen onderschatten het
              examen — en dat zie je terug in de landelijke slagingspercentages. Bij{' '}
              <strong>Autorijschool Valberg</strong> nemen we de theorie serieus, want een goede
              theoretische basis maakt je niet alleen een betere examenkandidaat, maar vooral een
              veiligere bestuurder.
            </p>
            <p>
              Daarom krijg je bij ons <strong>theorieondersteuning</strong> als onderdeel van je
              lespakket. Wij helpen je met een realistische studieplanning, wijzen je op de
              onderwerpen waar leerlingen vaak de fout ingaan en leggen tijdens de{' '}
              <Link href="/rijlessen/">praktijklessen</Link> voortdurend de koppeling tussen theorie
              en praktijk. Wat je in je theorieboek leert over voorrangssituaties, pas je direct toe
              op de kruispunten van Valkenburg en Maastricht. Zo blijft de stof veel beter hangen dan
              bij alleen blokken uit een boek.
            </p>

            <h2>Zo bereiden wij je voor op het theorie-examen</h2>
            <ul>
              <li><strong>Persoonlijke studieplanning</strong> — afgestemd op je examendatum en je leertempo.</li>
              <li><strong>Uitleg tijdens de rijles</strong> — verkeerssituaties die we tegenkomen, bespreken we direct met de bijbehorende theorie.</li>
              <li><strong>Gevaarherkenning trainen</strong> — het onderdeel waar de meeste leerlingen op zakken, oefenen we gericht.</li>
              <li><strong>Examen reserveren</strong> — machtig ons via &quot;Aanmelden mijn CBR&quot; en wij plannen je theorie-examen voor je in.</li>
            </ul>

            <h2>Rijexamen begeleiding bij het CBR in Maastricht</h2>
            <p>
              Het praktijkexamen doen onze leerlingen bij het{' '}
              <strong>CBR-examencentrum in Maastricht (Geusselt)</strong>. In de weken voor je examen
              richten we de lessen volledig op examenvoorbereiding: we rijden in het examengebied,
              oefenen de bijzondere verrichtingen en simuleren complete examens. Tijdens zo&apos;n{' '}
              <strong>examensimulatie</strong> gedraagt de instructeur zich als examinator: je krijgt
              opdrachten via de navigatie, moet zelfstandig een route rijden en je vaardigheden
              tonen onder tijdsdruk. Na afloop bespreken we uitgebreid wat goed ging en waar je nog
              punten kunt pakken.
            </p>

            <h2>Omgaan met examenstress</h2>
            <p>
              Zenuwen voor het examen zijn normaal — maar ze hoeven je niet in de weg te zitten.
              Wij besteden daarom expliciet aandacht aan <strong>stressmanagement</strong>: ademhalingstechnieken,
              mentale voorbereiding en een realistisch beeld van wat de examinator van je verwacht.
              Omdat je tijdens de lessen al meerdere keren een gesimuleerd examen hebt gereden, voelt
              het echte examen als &quot;nog een les&quot;. Dat geeft rust, en die rust zie je terug in het
              resultaat van onze <Link href="/geslaagden/">geslaagde leerlingen</Link>.
            </p>

            <h2>Van aanmelding tot examen: wij regelen het</h2>
            <p>
              Het examenproces brengt behoorlijk wat administratie met zich mee: de
              gezondheidsverklaring, de machtiging van je rijschool, het reserveren van theorie- en
              praktijkexamen en eventueel een tussentijdse toets. Wij nemen je dit volledig uit
              handen. Machtig ons eenvoudig met je DigiD via de knop{' '}
              <strong>&quot;Aanmelden mijn CBR&quot;</strong> in het menu, en wij zorgen voor de planning
              en reserveringen. Heb je vragen over het traject? Bekijk de{' '}
              <Link href="/faq/">veelgestelde vragen</Link> of{' '}
              <Link href="/contact/">neem contact met ons op</Link>. Start je liever meteen? Vraag
              dan een <Link href="/proefles/">gratis proefles</Link> aan.
            </p>
          </article>

          <aside className="space-y-6">
            <ResponsiveImage
              base="/images/theorie"
              widths={[768, 1024]}
              heightFor={(w) => w}
              alt="Theorie-examen voorbereiding bij Autorijschool Valberg"
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="rounded-2xl bg-brand p-7 text-white">
              <h2 className="text-xl font-bold text-white">Machtig ons bij het CBR</h2>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                Met een machtiging kunnen wij je theorie- en praktijkexamen direct voor je
                reserveren. Regel het in twee minuten met je DigiD.
              </p>
              <a
                href="https://www.cbr.nl/nl/service/nl/reservering-examens-en-rijtesten/machtig-je-opleider-met-je-digid"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white mt-5 w-full !px-4 !py-3 text-xs"
              >
                Aanmelden mijn CBR
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Samen naar een geslaagd examen"
        text="Met de juiste voorbereiding ga je met vertrouwen je theorie- en praktijkexamen in. Start met een gratis proefles."
      />
    </>
  );
}
