import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Rijschool Meerssen | Autorijlessen met haal- en brengservice',
  description:
    'Rijles in Meerssen bij Autorijschool Valberg: persoonlijke autorijlessen, opgehaald en thuisgebracht in heel Meerssen. Gratis proefles en pakketten vanaf € 1.650,-.',
  alternates: { canonical: '/rijschool-meerssen/' },
};

export default function RijschoolMeerssenPage() {
  return (
    <>
      <PageHero
        title="Rijschool in Meerssen: rijlessen dicht bij huis"
        intro="Vanuit onze rijschool in Valkenburg begeleiden wij al jaren leerlingen uit Meerssen naar hun rijbewijs. Opgehaald en thuisgebracht, met een vaste instructeur en een persoonlijk lesplan."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Rijschool Meerssen' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Rijles in Meerssen">
        <div className="container-site prose-seo max-w-none">
          <h2 className="!mt-0">Autorijlessen in Meerssen en de dorpskernen</h2>
          <p>
            Zoek je een <strong>rijschool in Meerssen</strong> waar persoonlijke aandacht nog
            normaal is? Autorijschool Valberg is actief in heel de gemeente Meerssen: van de
            dorpskern zelf tot Bunde, Geulle, Ulestraten, Rothem en Moorveld. Wij halen je op waar
            jij wilt — thuis, bij school of op je werk — en brengen je na de les weer terug. Zo hoef
            je voor je rijles nooit eerst ergens heen te reizen en kun je je volledig concentreren
            op het leren autorijden.
          </p>
          <p>
            Meerssen ligt op steenworp afstand van onze thuisbasis in Valkenburg, waardoor we
            leerlingen uit Meerssen dezelfde flexibiliteit bieden als onze leerlingen uit
            Valkenburg zelf: ruime lestijden, ook &apos;s avonds, en een{' '}
            <strong>vaste rijinstructeur</strong> met ruim 45 jaar ervaring. Je rijdt bij ons nooit
            met steeds wisselende begeleiders — je instructeur kent jouw voortgang en bouwt de{' '}
            <Link href="/rijlessen/">rijlessen</Link> daar logisch op op.
          </p>

          <h2>Van rustige dorpsstraten naar drukke snelwegen</h2>
          <p>
            De omgeving van Meerssen is een ideale leerschool. In de eerste lessen oefen je de
            basisvaardigheden op de rustige wegen in en rond de dorpen: wegrijden, schakelen,
            voorrangssituaties en parkeren. Zodra je die beheerst, breiden we uit. De A79 en de A2
            liggen praktisch om de hoek — perfect om invoegen, rijstrookwissels en anticiperen op
            snelwegverkeer grondig te oefenen. En voor de hellingproef en bochtentechniek nemen we
            je mee het Geuldal in, richting Valkenburg en het heuvelland.
          </p>
          <p>
            Uiteindelijk doe je praktijkexamen bij het <strong>CBR in Maastricht (Geusselt)</strong>.
            In de laatste fase van je opleiding rijden we daarom regelmatig naar Maastricht om in
            het examengebied te trainen. Je leert de kruispunten, rotondes en routes kennen die het
            CBR gebruikt — een enorm voordeel op je examendag. Lees er meer over op onze pagina{' '}
            <Link href="/theorie/">theorie en examenbegeleiding</Link>.
          </p>

          <h2>Transparante tarieven, ook in Meerssen</h2>
          <p>
            Voor leerlingen uit Meerssen gelden precies dezelfde scherpe tarieven als voor al onze
            leerlingen: een vaste lage lesprijs van € 60,- per uur en complete{' '}
            <Link href="/tarieven/">lespakketten vanaf € 1.650,-</Link> inclusief praktijkexamen.
            Gespreid betalen is mogelijk. En omdat wij met een doelgerichte methode werken — meerdere
            lessen per week, duidelijke leerdoelen per les — heb je doorgaans minder lessen nodig om
            examenklaar te zijn. Goed voor je portemonnee én je agenda.
          </p>

          <h2>Begin met een gratis proefles in Meerssen</h2>
          <p>
            De beste manier om te ontdekken of wij de rijschool voor jou zijn, is de{' '}
            <Link href="/proefles/">gratis proefles</Link>. Wij komen bij je thuis in Meerssen, je
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
            <Link href="/rijschool-berg-en-terblijt/">Berg en Terblijt</Link> en{' '}
            <Link href="/rijlessen/">Valkenburg</Link> zijn we actief. Vragen?{' '}
            <Link href="/contact/">Neem contact met ons op</Link> — bellen, mailen of WhatsAppen kan
            allemaal.
          </p>
        </div>
      </section>

      <CtaBand
        title="Start met rijles in Meerssen"
        text="Vraag een gratis proefles aan — wij halen je op in heel Meerssen en brengen je na de les weer thuis."
      />
    </>
  );
}
