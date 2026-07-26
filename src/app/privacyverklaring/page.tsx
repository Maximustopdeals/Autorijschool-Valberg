import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacyverklaring',
  description:
    'Privacyverklaring van Autorijschool Valberg: hoe wij omgaan met je persoonsgegevens, cookies, Google Analytics en het contactformulier.',
  alternates: { canonical: '/privacyverklaring/' },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacyverklaring"
        intro="Wij gaan zorgvuldig om met je persoonsgegevens. Hieronder lees je welke gegevens wij verzamelen, waarom en hoe lang wij ze bewaren."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacyverklaring' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Privacyverklaring">
        <div className="container-site prose-seo max-w-3xl">
          <h2 className="!mt-0">Wie zijn wij?</h2>
          <p>
            Autorijschool Valberg, gevestigd aan de {site.street}, {site.zip} {site.city}, is
            verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze
            privacyverklaring. Wij zijn ingeschreven bij de Kamer van Koophandel onder nummer{' '}
            {site.kvk}. Je bereikt ons via {site.email} of {site.phone}.
          </p>

          <h2>Welke gegevens verzamelen wij?</h2>
          <p>
            Wanneer je het contactformulier of het proeflesformulier op onze website invult,
            verwerken wij de gegevens die je zelf invult: je naam, telefoonnummer, e-mailadres en
            de inhoud van je bericht. Deze gegevens gebruiken wij uitsluitend om contact met je op
            te nemen en je aanvraag te behandelen. Het formulier wordt verstuurd via Formspree;
            je bericht komt rechtstreeks in onze mailbox terecht.
          </p>

          <h2>Cookies en website-analyse</h2>
          <p>
            Op onze website maken wij gebruik van Google Analytics (via Google Tag Manager) om
            inzicht te krijgen in het gebruik van de website, bijvoorbeeld welke pagina&apos;s goed
            worden bezocht. Deze gegevens zijn geanonimiseerd en worden niet aan andere diensten
            verstrekt. Daarnaast tonen wij Google-reviews via een widget van Elfsight; deze widget
            kan functionele cookies plaatsen om de reviews te laden.
          </p>

          <h2>Hoe lang bewaren wij je gegevens?</h2>
          <p>
            Wij bewaren je persoonsgegevens niet langer dan noodzakelijk. Correspondentie naar
            aanleiding van een contact- of proeflesaanvraag bewaren wij maximaal twee jaar na het
            laatste contact, tenzij je leerling bij ons wordt — dan gelden de wettelijke
            bewaartermijnen voor onze leerlingenadministratie.
          </p>

          <h2>Jouw rechten</h2>
          <p>
            Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te laten
            verwijderen. Ook kun je bezwaar maken tegen de verwerking of je toestemming
            intrekken. Stuur hiervoor een bericht naar {site.email}. Wij reageren binnen vier
            weken op je verzoek. Je hebt daarnaast het recht een klacht in te dienen bij de
            Autoriteit Persoonsgegevens.
          </p>

          <h2>Wijzigingen</h2>
          <p>
            Deze privacyverklaring kan worden aangepast, bijvoorbeeld wanneer wij nieuwe diensten
            gaan gebruiken. De meest actuele versie vind je altijd op deze pagina. Deze versie is
            voor het laatst bijgewerkt in juli 2026.
          </p>
        </div>
      </section>
    </>
  );
}
