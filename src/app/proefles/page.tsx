import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Gratis proefles aanvragen in Valkenburg | Autorijschool Valberg',
  description:
    'Vraag een gratis proefles aan bij Autorijschool Valberg in Valkenburg. Maak kennis met de instructeur en lesauto en ontvang een eerlijk persoonlijk advies. Geen wachttijd!',
  alternates: { canonical: '/proefles/' },
};

export default function ProeflesPage() {
  return (
    <>
      <PageHero
        title="Gratis proefles aanvragen: ervaar het zelf"
        intro="De beste manier om een rijschool te beoordelen is door het zelf te ervaren. Vraag vandaag een gratis en vrijblijvende proefles aan — je zit nergens aan vast."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Gratis proefles' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Proefles aanvragen">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr,1.2fr]">
          <article className="prose-seo">
            <h2 className="!mt-0">Waarom een gratis proefles?</h2>
            <p>
              Het kiezen van een rijschool is een belangrijke beslissing: je besteedt tientallen uren
              samen met je instructeur in de auto. Die klik moet goed voelen. Daarom biedt{' '}
              <strong>Autorijschool Valberg</strong> een <strong>gratis proefles</strong> aan. Tijdens
              deze kennismakingsles van een uur maak je kennis met je vaste rijinstructeur, stap je
              in onze moderne lesauto en ervaar je hoe onze lessen zijn opgebouwd. Rustig, duidelijk
              en volledig op jouw tempo.
            </p>
            <p>
              Na afloop van de proefles ontvang je een <strong>eerlijk en vrijblijvend advies</strong>:
              hoeveel lessen heb jij naar verwachting nodig, welk{' '}
              <Link href="/tarieven/">lespakket</Link> past daarbij en hoe ziet jouw route naar het
              rijbewijs eruit? Zo maak je een weloverwogen keuze zonder financieel risico.
            </p>

            <h2>Zo verloopt je proefles in Valkenburg</h2>
            <ul>
              <li><strong>Stap 1 — Aanmelden.</strong> Vul het formulier in, bel {site.phone} of stuur een WhatsApp-bericht. Wij reageren binnen één werkdag.</li>
              <li><strong>Stap 2 — Plannen.</strong> We plannen samen een moment dat jou uitkomt. Wij halen je thuis op, bij school of op je werk in Valkenburg en omgeving.</li>
              <li><strong>Stap 3 — Rijden.</strong> Je stapt in en rijdt onder begeleiding je eerste meters. Nerveus? Geen probleem — wij houden het rustig en overzichtelijk.</li>
              <li><strong>Stap 4 — Advies.</strong> Je ontvangt een persoonlijk lesadvies met een inschatting van het aantal lessen en een passend pakket.</li>
            </ul>

            <h2>Geen wachttijd: direct beginnen</h2>
            <p>
              Bij veel rijscholen in de regio sta je weken of zelfs maanden op een wachtlijst. Bij
              Autorijschool Valberg kun je <strong>direct starten</strong> met je rijlessen. Ook na je
              proefles hoef je niet te wachten: we plannen je lessen meteen in, zodat jij snel aan
              je rijbewijs kunt werken. Wil je versneld slagen? Lees dan hoe onze{' '}
              <Link href="/rijlessen/">autorijlessen met een doelgerichte methode</Link> je sneller
              examenklaar maken.
            </p>

            <h2>Liever eerst een vraag stellen?</h2>
            <p>
              Heb je vragen over lesprijzen, de planning, 2toDrive of het examen? Bekijk onze{' '}
              <Link href="/faq/">veelgestelde vragen</Link>, bel gerust naar {site.phone} of stuur een
              bericht via WhatsApp. Je kunt ook altijd het algemene{' '}
              <Link href="/contact/">contactformulier</Link> gebruiken. En wil je ons alvast machtigen
              voor het reserveren van je examens? Dat regel je eenvoudig met je DigiD via de knop{' '}
              <strong>&quot;Aanmelden mijn CBR&quot;</strong> in het menu.
            </p>
          </article>

          {/* Formulier */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg sm:p-10">
            <h2 className="text-2xl font-bold">Vraag je gratis proefles aan</h2>
            <p className="mt-2 mb-8 text-sm leading-7 text-slate-600">
              Vul onderstaand formulier in. Wij nemen uiterlijk binnen één werkdag contact met je op
              om je proefles in te plannen.
            </p>
            <ContactForm subject="Aanvraag gratis proefles via autorijschoolvalberg.nl" />
          </div>
        </div>
      </section>
    </>
  );
}
