import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Rijschool Maastricht | Autorijlessen vanaf Valkenburg',
  description:
    'Rijles in Maastricht bij Autorijschool Valberg: persoonlijke autorijlessen met examen training rond CBR Geusselt. Gratis proefles, vaste instructeur, geen wachttijd.',
  alternates: { canonical: '/rijschool-maastricht/' },
};

export default function RijschoolMaastrichtPage() {
  return (
    <>
      <PageHero
        title="Rijschool in Maastricht: persoonlijke rijlessen met examenvoordeel"
        intro="Woon je in Maastricht en zoek je een rijschool die je ophaalt waar jij bent? Autorijschool Valberg geeft al jaren rijles aan leerlingen uit Maastricht — met een groot voordeel: jouw examengebied is ons trainingsgebied."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Rijschool Maastricht' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Rijles in Maastricht">
        <div className="container-site prose-seo max-w-none">
          <h2 className="!mt-0">Autorijlessen in Maastricht, opgehaald waar jij bent</h2>
          <p>
            Maastricht is een bruisende stad vol studenten, young professionals en gezinnen — en
            steeds meer van hen kiezen voor <strong>Autorijschool Valberg</strong> voor hun
            rijopleiding. Hoewel onze rijschool in Valkenburg is gevestigd, is Maastricht voor ons
            vertrouwd terrein. Wij halen je op waar het jou uitkomt: thuis in Wyck, Sint Pieter,
            Wittevrouwenveld of Heer, bij je school of hogeschool, op het station of op je werk.
            Na de les word je weer teruggebracht. Zo verandert je rijles van een logistieke puzzel
            in een vast moment in je week.
          </p>
          <p>
            Wat rijles in Maastricht bij ons extra interessant maakt: het{' '}
            <strong>CBR-examencentrum aan de Geusselt</strong> is hét centrum waar onze leerlingen
            praktijkexamen doen. Tijdens je lessen trainen we dus letterlijk in je toekomstige
            examengebied. De rotondes rond de Geusselt, de invoegstroken van de A2 en A79, het
            drukke stadsverkeer in de binnenstad en de verkeerssituaties die het CBR graag in
            examens gebruikt — jij kent ze allemaal al voordat je examen doet. Lees meer over onze
            aanpak op de pagina <Link href="/theorie/">theorie en examenbegeleiding</Link>.
          </p>

          <h2>Rijles voor studenten in Maastricht</h2>
          <p>
            Een groot deel van onze Maastrichtse leerlingen is student. Wij begrijpen dat je naast
            colleges, tentamens en een bijbaan flexibel moet kunnen plannen. Daarom plannen wij je{' '}
            <Link href="/rijlessen/">rijlessen</Link> om je rooster heen, ook in de avonduren. En
            omdat een studentenbudget niet oneindig is, profiteer je bij ons van een vaste lage
            lesprijs van € 60,- per uur en kun je je <Link href="/tarieven/">lespakket</Link>{' '}
            gespreid betalen. Met onze doelgerichte methode heb je bovendien doorgaans minder lessen
            nodig — dat scheelt flink in de totale kosten van je rijbewijs.
          </p>

          <h2>Stadsrijden leren in een echte stad</h2>
          <p>
            Wie in Maastricht leert rijden, leert rijden in alle soorten verkeer. Smalle straten in
            de binnenstad waar je fietsers, voetgangers en geparkeerde auto&apos;s tegelijk in de gaten
            houdt. Drukke kruispunten met meerdere rijstroken. Trambaan-achtige fietsstromen bij
            het station. Wij leren je om in dat drukke stadsverkeer rustig en overzichtelijk te
            blijven — vaardigheden waar je je leven lang profijt van hebt, waar je ook gaat wonen.
          </p>
          <p>
            Tegelijkertijd variëren we de lessen bewust met ritten door het Limburgse heuvelland
            rondom de stad. Want wie alleen in de vlakke stad leert rijden, krijgt het lastig zodra
            de weg gaat hellen. Bij ons oefen je de hellingproef gewoon in het echt, op de
            beklimmingen richting Valkenburg en Margraten.
          </p>

          <h2>Van gratis proefles tot rijbewijs in Maastricht</h2>
          <p>
            Je rijavontuur begint met een <Link href="/proefles/">gratis proefles</Link>. Wij halen
            je op in Maastricht, je maakt kennis met je vaste instructeur en onze lesauto, en je
            krijgt direct een eerlijk advies over jouw leertraject. Daarna kies je een pakket dat
            past bij jouw tempo — van het Basis Pakket tot het Premium Pakket, altijd inclusief
            praktijkexamen bij het CBR Geusselt.
          </p>
          <p>
            Benieuwd naar de ervaringen van leerlingen uit Maastricht? Lees onze{' '}
            <Link href="/reviews/">Google-reviews</Link> — wij worden beoordeeld met vijf sterren —
            of bekijk de foto&apos;s van <Link href="/geslaagden/">geslaagde leerlingen</Link> bij het
            examencentrum. Wil je eerst meer weten? <Link href="/contact/">Neem gerust contact met
            ons op</Link>, ook via WhatsApp zijn we goed bereikbaar. En machtig ons alvast bij het
            CBR via de knop &quot;Aanmelden mijn CBR&quot; in het menu, dan plannen wij straks direct je
            examens.
          </p>

          <h2>Ook rijles in de omgeving van Maastricht</h2>
          <p>
            Woon je net buiten de stad? Wij zijn ook actief in{' '}
            <Link href="/rijschool-meerssen/">Meerssen</Link>,{' '}
            <Link href="/rijschool-berg-en-terblijt/">Berg en Terblijt</Link>, Bunde, Ulestraten,
            Gronsveld, Cadier en Keer en natuurlijk in onze thuisplaats{' '}
            <Link href="/rijlessen/">Valkenburg</Link>. Overal in de regio geldt: wij halen op, wij
            brengen terug, en jij werkt ontspannen aan je rijbewijs.
          </p>
        </div>
      </section>

      <CtaBand
        title="Start met rijles in Maastricht"
        text="Vraag een gratis proefles aan — wij halen je op in heel Maastricht en trainen je direct in het CBR-examengebied."
      />
    </>
  );
}
