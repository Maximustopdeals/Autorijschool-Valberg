import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Rijschool Berg en Terblijt | Rijlessen vlak bij huis',
  description:
    'Rijles in Berg en Terblijt bij Autorijschool Valberg: persoonlijke autorijlessen in het heuvelland, vlak bij huis. Gratis proefles, vaste instructeur en geen wachttijd.',
  alternates: { canonical: '/rijschool-berg-en-terblijt/' },
};

export default function RijschoolBergEnTerblijtPage() {
  return (
    <>
      <PageHero
        title="Rijschool in Berg en Terblijt: rijles in het hart van het heuvelland"
        intro="Woon je in Berg en Terblijt? Dan zit rijschool Valberg praktisch om de hoek. Persoonlijke rijlessen met een vaste instructeur, opgehaald en thuisgebracht in jouw eigen dorp."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Rijschool Berg en Terblijt' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Rijles in Berg en Terblijt">
        <div className="container-site prose-seo max-w-none">
          <h2 className="!mt-0">Rijlessen in Berg en Terblijt, Geulhem en Vilt</h2>
          <p>
            Berg en Terblijt ligt letterlijk tussen onze thuisbasis Valkenburg en de stad Maastricht
            in — en dat maakt ons de logische keuze voor leerlingen uit het dorp. Wij zijn al ruim
            45 jaar actief in de gemeente Valkenburg aan de Geul en kennen elke straat, elk
            kruispunt en elke helling in de regio. Of je nu in Berg, Terblijt, Geulhem of{' '}
            <Link href="/rijlessen/">Vilt</Link> woont: wij halen je thuis op en brengen je na de
            les weer terug.
          </p>
          <p>
            Bij Autorijschool Valberg rijd je met een <strong>vaste rijinstructeur</strong> die jouw
            leerproces van begin tot eind begeleidt. Geen wisselende gezichten, geen anonieme
            rijschool — maar persoonlijke begeleiding op jouw tempo. Dat waarderen onze leerlingen
            enorm, zoals je kunt lezen in onze <Link href="/reviews/">vijfsterrenreviews</Link>.
          </p>

          <h2>Leren rijden in heuvelachtig terrein: een uniek voordeel</h2>
          <p>
            Wie in Berg en Terblijt leert autorijden, heeft een streepje voor. De heuvels van het
            Geuldal bieden de perfecte trainingsomgeving voor vaardigheden die leerlingen uit
            vlakke streken alleen uit het theorieboek kennen: wegrijden op een steile helling,
            remmen op de motor in een afdaling, bochten inschatten op kronkelige landwegen en
            omgaan met beperkt zicht achter een heuvelkam. Beheers jij deze technieken in het
            heuvelland, dan voelt rijden in de rest van Nederland als een makkie.
          </p>
          <p>
            Tegelijkertijd is de variatie groot: binnen een kwartier rijden we van de rustige
            dorpsstraten van Berg en Terblijt naar het drukkere stadsverkeer van{' '}
            <Link href="/rijschool-maastricht/">Maastricht</Link>. Juist die mix — dorp, heuvel en
            stad — maakt onze <Link href="/rijlessen/">rijlessen</Link> zo compleet. En omdat het
            CBR-examencentrum aan de Geusselt in Maastricht ons vaste examencentrum is, trainen we
            in de eindfase volledig in het examengebied.
          </p>

          <h2>Pakketten en tarieven voor leerlingen uit Berg en Terblijt</h2>
          <p>
            Ook in Berg en Terblijt geldt onze vaste lage lesprijs van € 60,- per lesuur. De meeste
            leerlingen kiezen een van onze <Link href="/tarieven/">lespakketten</Link>: van het
            Basis Pakket (20 lessen + praktijkexamen voor € 1.650,-) tot het Premium Pakket (40
            lessen + praktijkexamen voor € 2.750,-). Gespreid betalen behoort tot de mogelijkheden.
            Welk pakket het beste bij jou past, bepalen we samen na een{' '}
            <Link href="/proefles/">gratis proefles</Link>.
          </p>

          <h2>Direct starten zonder wachttijd</h2>
          <p>
            Bij ons sta je niet op een wachtlijst. Vraag je gratis proefles aan en je kunt in de
            regel binnen een week je eerste les rijden. Door meerdere lessen per week te plannen —
            bijvoorbeeld twee lessen van een uur — bouw je snel routine op en ben je eerder klaar
            voor je examen. Onze doelgerichte methode heeft al honderden leerlingen uit de regio
            naar hun rijbewijs gebracht; bekijk ze op onze pagina met{' '}
            <Link href="/geslaagden/">geslaagde kandidaten</Link>.
          </p>
          <p>
            Woon je in de buurt maar net buiten Berg en Terblijt? Geen probleem: wij geven ook
            rijles in <Link href="/rijschool-meerssen/">Meerssen</Link>, Houthem, Schin op Geul,
            Beek en natuurlijk Valkenburg zelf. Heb je vragen over de planning, de tarieven of het
            examen? <Link href="/contact/">Neem contact met ons op</Link> of plan direct je gratis
            proefles — wij zien je graag in de lesauto!
          </p>
        </div>
      </section>

      <CtaBand
        title="Start met rijles in Berg en Terblijt"
        text="Vraag een gratis proefles aan — opgehaald en thuisgebracht in jouw eigen dorp, zonder wachttijd."
      />
    </>
  );
}
