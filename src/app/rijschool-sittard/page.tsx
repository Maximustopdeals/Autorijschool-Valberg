import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Rijschool Sittard | Autorijlessen met haal- en brengservice',
  description:
    'Rijles in Sittard bij Autorijschool Valberg: persoonlijke autorijlessen, opgehaald en thuisgebracht in heel Sittard. Gratis proefles en pakketten vanaf € 1.650,-.',
  alternates: { canonical: '/rijschool-sittard/' },
};

export default function RijschoolSittardPage() {
  return (
    <>
      <PageHero
        title="Rijschool in Sittard: rijlessen dicht bij huis"
        intro="Vanuit onze rijschool in Valkenburg begeleiden wij ook leerlingen uit Sittard naar hun rijbewijs. Opgehaald en thuisgebracht, met een vaste instructeur en een persoonlijk lesplan."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Rijschool Sittard' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Rijles in Sittard">
        <div className="container-site prose-seo max-w-none">
          <h2 className="!mt-0">Autorijlessen in Sittard en omgeving</h2>
          <p>
            Zoek je een <strong>rijschool in Sittard</strong> waar persoonlijke aandacht nog
            normaal is? Autorijschool Valberg is actief in heel Sittard: van het centrum tot
            de wijken Overhoven, Vrangendael, Limbrichterveld, Baandert en de dorpen Geleen,
            Munstergeleen en Windraak. Wij halen je op waar jij wilt — thuis, bij school of op je
            werk — en brengen je na de les weer terug. Zo hoef je voor je rijles nooit eerst ergens
            heen te reizen en kun je je volledig concentreren op het leren autorijden.
          </p>
          <p>
            Sittard ligt op korte afstand van onze thuisbasis in Valkenburg, waardoor we leerlingen
            uit Sittard dezelfde flexibiliteit bieden als onze leerlingen dichterbij: ruime
            lestijden, ook &apos;s avonds, en een <strong>vaste rijinstructeur</strong> met ruim 45
            jaar ervaring. Je rijdt bij ons nooit met steeds wisselende begeleiders — je instructeur
            kent jouw voortgang en bouwt de <Link href="/rijlessen/">rijlessen</Link> daar logisch
            op op.
          </p>

          <h2>Van rustige wijken naar drukke verkeersaders</h2>
          <p>
            De omgeving van Sittard is een ideale leerschool. In de eerste lessen oefen je de
            basisvaardigheden op de rustige wegen in de woonwijken: wegrijden, schakelen,
            voorrangssituaties en parkeren. Zodra je die beheerst, breiden we uit. De A2 en de A76
            liggen praktisch om de hoek — perfect om invoegen, rijstrookwissels en anticiperen op
            snelwegverkeer grondig te oefenen. En voor de hellingproef en bochtentechniek nemen we
            je mee richting het heuvelland, waar je leert omgaan met stijgen, dalen en scherpe
            bochten.
          </p>
          <p>
            Uiteindelijk doe je praktijkexamen bij het <strong>CBR in Maastricht (Geusselt)</strong>
            . In de laatste fase van je opleiding rijden we daarom regelmatig naar Maastricht om in
            het examengebied te trainen. Je leert de kruispunten, rotondes en routes kennen die het
            CBR gebruikt — een enorm voordeel op je examendag. Lees er meer over op onze pagina{' '}
            <Link href="/theorie/">theorie en examenbegeleiding</Link>.
          </p>

          <h2>Transparante tarieven, ook in Sittard</h2>
          <p>
            Voor leerlingen uit Sittard gelden precies dezelfde scherpe tarieven als voor al onze
            leerlingen: een vaste lage lesprijs van € 60,- per uur en complete{' '}
            <Link href="/tarieven/">lespakketten vanaf € 1.650,-</Link> inclusief praktijkexamen.
            Gespreid betalen is mogelijk. En omdat wij met een doelgerichte methode werken —
            meerdere lessen per week, duidelijke leerdoelen per les — heb je doorgaans minder lessen
            nodig om examenklaar te zijn. Goed voor je portemonnee én je agenda.
          </p>

          <h2>Begin met een gratis proefles in Sittard</h2>
          <p>
            De beste manier om te ontdekken of wij de rijschool voor jou zijn, is de{' '}
            <Link href="/proefles/">gratis proefles</Link>. Wij komen bij je thuis in Sittard, je
            stapt in onze moderne lesauto en je ervaart hoe onze lessen aanvoelen: rustig, duidelijk
            en volledig op jouw tempo. Achteraf ontvang je een eerlijk advies over het aantal lessen
            dat je nodig hebt en het pakket dat daarbij past. Er is geen wachttijd — je kunt direct
            starten.
          </p>
          <p>
            Wil je eerst weten hoe andere leerlingen ons ervaren? Lees de{' '}
            <Link href="/reviews/">reviews op Google</Link> of bekijk onze{' '}
            <Link href="/geslaagden/">geslaagden</Link>. Ook in de omliggende plaatsen{' '}
            <Link href="/rijschool-maastricht/">Maastricht</Link>,{' '}
            <Link href="/rijschool-meerssen/">Meerssen</Link>,{' '}
            <Link href="/rijschool-berg-en-terblijt/">Berg en Terblijt</Link> en{' '}
            <Link href="/rijlessen/">Valkenburg</Link> zijn we actief. Vragen?{' '}
            <Link href="/contact/">Neem contact met ons op</Link> — bellen, mailen of WhatsAppen kan
            allemaal.
          </p>
        </div>
      </section>

      <CtaBand
        title="Start met rijles in Sittard"
        text="Vraag een gratis proefles aan — wij halen je op in heel Sittard en brengen je na de les weer thuis."
      />
    </>
  );
}
