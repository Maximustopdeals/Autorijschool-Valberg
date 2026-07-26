import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ResponsiveImage from '@/components/ResponsiveImage';

export const metadata: Metadata = {
  title: 'Opfriscursus autorijden in Valkenburg | Weer zelfverzekerd de weg op',
  description:
    'Opfriscursus bij Autorijschool Valberg in Valkenburg: voor bestuurders die hun rijvaardigheid willen verbeteren. Defensief rijden, parkeren, snelweg — op maat. Vraag info aan.',
  alternates: { canonical: '/opfriscursus/' },
};

export default function OpfriscursusPage() {
  return (
    <>
      <PageHero
        title="Opfriscursus autorijden: weer zelfverzekerd de weg op"
        intro="Heb je je rijbewijs al, maar voel je je onzeker in het verkeer? Met een opfriscursus bij Autorijschool Valberg fris je je kennis en vaardigheden op — volledig afgestemd op jouw situatie."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Opfriscursus' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Inhoud opfriscursus">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[2fr,1fr]">
          <article className="prose-seo">
            <h2 className="!mt-0">Voor wie is de opfriscursus bedoeld?</h2>
            <p>
              Er zijn talloze redenen om je rijvaardigheid weer eens onder de loep te nemen.
              Misschien heb je jarenlang niet gereden omdat je in de stad woonde, heb je een
              ongelukkige ervaring gehad in het verkeer, of ga je binnenkort voor je werk vaker de
              weg op. Ook veel oudere bestuurders kiezen ervoor om hun rijvaardigheid actueel te
              houden. Onze <strong>opfriscursus in Valkenburg</strong> is er voor iedere bestuurder
              die weer met vertrouwen achter het stuur wil zitten — ongeacht leeftijd of ervaring.
            </p>
            <p>
              Anders dan bij reguliere <Link href="/rijlessen/">rijlessen</Link> stel je de
              opfriscursus volledig zelf samen. Tijdens een eerste kennismakingsrit inventariseren
              we samen waar jouw aandachtspunten liggen. Op basis daarvan maken we een plan: een
              enkele les om een specifieke vaardigheid aan te scherpen, of een reeks lessen om je
              algehele rijvaardigheid weer op peil te brengen. Je betaalt gewoon onze vaste lage
              lesprijs van € 60,- per les — zie onze <Link href="/tarieven/">tarieven</Link>.
            </p>

            <h2>Wat behandelen we tijdens de opfriscursus?</h2>
            <ul>
              <li><strong>Defensief rijden</strong> — anticiperen op het gedrag van andere weggebruikers en risico&apos;s tijdig herkennen.</li>
              <li><strong>Parkeertechnieken</strong> — vlot en stressvrij parkeren: file parkeren, achteruit inparkeren en parkeren op hellingen.</li>
              <li><strong>Navigatievaardigheden</strong> — zelfstandig rijden op navigatie in onbekend gebied, zonder afleiding.</li>
              <li><strong>Snelweg- en nachtritten</strong> — invoegen, uitvoegen, inhalen en rijden bij slecht weer of in het donker.</li>
              <li><strong>Nieuwe verkeersregels en -situaties</strong> — actuele regelgeving, rotondes, fietsstraten en moderne auto-assistenten.</li>
            </ul>

            <h2>Rijden in je eigen auto of in onze lesauto</h2>
            <p>
              Veel bestuurders vinden het prettig om de opfriscursus in hun eigen auto te volgen —
              immers, daarin rijd je straks ook zelfstandig. Dat kan bij ons. Liever eerst oefenen in
              een auto met dubbele bediening? Ook dat is mogelijk: je volgt de cursus dan in onze
              moderne lesauto, waarin de instructeur altijd kan ingrijpen. Zo bouw je in alle rust
              je zelfvertrouwen weer op.
            </p>

            <h2>Opfriscursus in Valkenburg en de hele regio</h2>
            <p>
              Wij komen bij je thuis in Valkenburg, <Link href="/rijschool-maastricht/">Maastricht</Link>,{' '}
              <Link href="/rijschool-meerssen/">Meerssen</Link>,{' '}
              <Link href="/rijschool-berg-en-terblijt/">Berg en Terblijt</Link> en de omliggende
              dorpen. De praktijkroutes stemmen we af op jouw dagelijkse ritten: rijd je straks
              dagelijks naar je werk in Maastricht, dan oefenen we precies die route, inclusief het
              ochtendspitsuur, de kruispunten en de parkeersituaties die je onderweg tegenkomt.
            </p>

            <h2>Waarom kiezen bestuurders voor Valberg?</h2>
            <p>
              Met ruim 45 jaar ervaring weten wij precies hoe we bestuurders weer zelfverzekerd de
              weg op krijgen. Geen standaardprogramma, geen oordelen — maar geduldige begeleiding van
              een instructeur die rustig uitlegt en meedenkt. Lees ook de ervaringen van onze
              leerlingen in de <Link href="/reviews/">reviews</Link>. Klaar om weer met plezier te
              rijden? <Link href="/contact/">Neem contact met ons op</Link> of vraag direct een
              vrijblijvende kennismakingsrit aan via de <Link href="/proefles/">proeflespagina</Link>.
            </p>
          </article>

          <aside className="space-y-6">
            <ResponsiveImage
              base="/images/hero-lesauto"
              widths={[768, 1200, 1920]}
              heightFor={(w) => Math.round((w * 1300) / 1920)}
              alt="Lesauto van Autorijschool Valberg voor een opfriscursus in Valkenburg"
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="rounded-2xl bg-brand p-7 text-white">
              <h2 className="text-xl font-bold text-white">Opfriscursus op maat</h2>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                Vertel ons waar jij je onzeker over voelt — wij stellen een persoonlijke cursus voor
                je samen, van één les tot een complete reeks.
              </p>
              <Link href="/contact/" className="btn-white mt-5 w-full !px-4 !py-3 text-xs">
                Vraag een opfriscursus aan
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Weer vol vertrouwen de weg op?"
        text="Neem contact op voor een opfriscursus op maat. Wij halen je thuis op en oefenen precies wat jij wilt verbeteren."
        ctaLabel="Neem contact op"
        ctaHref="/contact/"
      />
    </>
  );
}
