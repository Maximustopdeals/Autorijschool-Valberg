import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import FaqAccordion from '@/components/FaqAccordion';
import { faqs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen over rijlessen | Rijschool Valkenburg',
  description:
    'Antwoorden op veelgestelde vragen over rijlessen bij Autorijschool Valberg: kosten, proefles, examen bij het CBR, gespreid betalen, leeftijd en meer.',
  alternates: { canonical: '/faq/' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Veelgestelde vragen over rijlessen bij Valberg"
        intro="Alles wat je wilt weten over rijlessen, tarieven, de proefles en het examen — helder beantwoord. Staat jouw vraag er niet bij? Neem gerust contact op."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Veelgestelde vragen' }]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="py-14 sm:py-20" aria-label="Veelgestelde vragen">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>

          <article className="prose-seo mx-auto mt-16 max-w-3xl">
            <h2 className="!mt-0">Staat jouw antwoord er niet bij?</h2>
            <p>
              We hopen dat je met deze vragen een goed beeld hebt gekregen van rijlessen bij
              Autorijschool Valberg. Wil je meer weten over onze{' '}
              <Link href="/rijlessen/">autorijlessen</Link>, de{' '}
              <Link href="/tarieven/">tarieven en pakketten</Link>, de{' '}
              <Link href="/opfriscursus/">opfriscursus</Link> of de{' '}
              <Link href="/theorie/">theorie- en examenbegeleiding</Link>? Op die pagina&apos;s vind je
              uitgebreide informatie.
            </p>
            <p>
              Liever persoonlijk contact? Bel ons, stuur een WhatsApp-bericht of gebruik het{' '}
              <Link href="/contact/">contactformulier</Link> — wij reageren binnen één werkdag. En de
              snelste manier om al je vragen beantwoord te krijgen: boek een{' '}
              <Link href="/proefles/">gratis proefles</Link>. Dan bespreken we alles aan de hand van
              jouw situatie, terwijl je gelijk je eerste meters maakt in de lesauto.
            </p>
          </article>
        </div>
      </section>

      <CtaBand
        title="Al je vragen beantwoord in een gratis proefles"
        text="Tijdens een proefles bespreken we jouw situatie, krijg je een eerlijk advies en ervaar je direct hoe onze lessen zijn."
      />
    </>
  );
}
