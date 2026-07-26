import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import ResponsiveImage from '@/components/ResponsiveImage';
import { packages } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Autorijlessen in Valkenburg | Persoonlijke rijlessen op maat',
  description:
    'Autorijlessen in Valkenburg bij Autorijschool Valberg: persoonlijke begeleiding, vaste instructeur, moderne lesauto en examen training bij CBR Maastricht. Vraag een gratis proefles aan.',
  alternates: { canonical: '/rijlessen/' },
};

export default function RijlessenPage() {
  return (
    <>
      <PageHero
        title="Autorijlessen in Valkenburg: persoonlijk, ontspannen en doelgericht"
        intro="Bij Autorijschool Valberg volg je rijlessen die volledig zijn afgestemd op jouw tempo en niveau. Met een vaste instructeur, een moderne lesauto en een bewezen methode werk je stap voor stap naar je rijbewijs."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Rijlessen' }]}
      />

      <section className="py-14 sm:py-20" aria-label="Inhoud autorijlessen">
        <div className="container-site grid gap-12 lg:grid-cols-[2fr,1fr]">
          <article className="prose-seo">
            <h2 className="!mt-0">Rijles in Valkenburg op jouw tempo</h2>
            <p>
              Iedere leerling is anders. De een pakt het autorijden direct op, de ander heeft meer
              tijd nodig om vertrouwen op te bouwen. Bij <strong>Autorijschool Valberg</strong>{' '}
              geloven we dat goed rijonderwijs begint bij maatwerk. Daarom starten we altijd met een{' '}
              <Link href="/proefles/">gratis proefles</Link>: we leren elkaar kennen, beoordelen je
              beginniveau en stellen op basis daarvan een persoonlijk lesplan samen. Zo betaal je
              nooit voor lessen die je niet nodig hebt en krijg je precies de aandacht die jouw
              leerproces vraagt.
            </p>
            <p>
              Onze autorijlessen vinden plaats in een moderne, goed onderhouden lesauto met
              dubbele bediening. Je rijdt met een <strong>vaste rijinstructeur</strong> die meer dan
              vier decennia ervaring meebrengt en precies weet hoe hij rust en structuur in de
              lessen houdt. Ook als je faalangst hebt of eerder een minder prettige ervaring bij een
              andere rijschool hebt gehad, ben je bij ons aan het juiste adres. We bouwen de lessen
              rustig op en leggen alles stap voor stap rustig uit.
            </p>

            <h2>Hoe ziet een rijles bij Valberg eruit?</h2>
            <p>
              Elke les duurt 60 minuten en heeft een duidelijk leerdoel. We beginnen met een korte
              terugblik op de vorige les: wat ging goed en waar oefenen we nog aan? Daarna gaan we
              de weg op en werken we aan nieuwe vaardigheden, van het wegrijden op een helling tot
              het anticiperen op druk stadsverkeer. Aan het einde van de les bespreken we je
              voortgang en bepalen we samen het doel van de volgende les. Door deze vaste structuur
              weet je altijd waar je staat en wat de volgende stap is.
            </p>
            <ul>
              <li><strong>Praktijklessen</strong> — volledig één-op-één, met persoonlijke feedback tijdens en na elke rit.</li>
              <li><strong>Theorieondersteuning</strong> — wij helpen je ook bij het halen van je <Link href="/theorie/">theorie-examen</Link>, het fundament van veilig rijden.</li>
              <li><strong>Examenvoorbereiding</strong> — gerichte training in het examengebied van het CBR in Maastricht, inclusief examensimulaties.</li>
              <li><strong>Haal- en brengservice</strong> — wij halen je op in Valkenburg, Maastricht, Meerssen, Berg en Terblijt en omstreken.</li>
            </ul>

            <h2>Meerdere lessen per week = sneller slagen</h2>
            <p>
              Wil je <strong>snel je rijbewijs halen</strong>? Dan adviseren we twee tot drie lessen
              per week. Wie verspreid les volgt, verliest aan het begin van elke les kostbare tijd
              met het oppakken van de vorige lesstof. Door vaker te lessen blijft de stof beter
              hangen, ontwikkel je sneller routines en ben je eerder klaar voor het praktijkexamen.
              Uiteindelijk heb je dan vaak minder lessen nodig — en dat scheelt in de totale
              kosten van je rijbewijs. Bekijk onze <Link href="/tarieven/">lespakketten en
              tarieven</Link> om te zien welk pakket het beste bij jouw planning past.
            </p>

            <h2>Examengericht lessen in het CBR-gebied Maastricht</h2>
            <p>
              Onze leerlingen doen praktijkexamen bij het <strong>CBR-examencentrum in Maastricht
              (Geusselt)</strong>. Tijdens je lessen rijden we daarom regelmatig in en rond
              Maastricht, zodat je de examenroutes, rotondes, invoegstroken en bijzondere
              kruispunten al goed kent. We oefenen onder meer op het navigeren in onbekend gebied,
              het zelfstandig uitvoeren van bijzondere verrichtingen en het omgaan met
              examenstress. Zo ga je met vertrouwen je examen in — en dat zie je terug in onze{' '}
              <Link href="/geslaagden/">lange rij geslaagden</Link>.
            </p>

            <h2>Voor wie zijn onze rijlessen bedoeld?</h2>
            <p>
              Onze autorijlessen zijn er voor iedereen: jongeren die vanaf 16,5 jaar willen starten,
              studenten uit Maastricht die naast hun studie hun rijbewijs willen halen, en volwassenen
              die het autorijden later in het leven oppakken. Heb je al een rijbewijs maar wil je
              je rijvaardigheid verbeteren? Kijk dan eens bij onze{' '}
              <Link href="/opfriscursus/">opfriscursus</Link>. En ben je benieuwd wat leerlingen
              over ons zeggen? Lees dan de <Link href="/reviews/">reviews op Google</Link> — daar
              worden we beoordeeld met vijf sterren.
            </p>
            <p>
              Klaar om te beginnen? Vraag vandaag nog je{' '}
              <Link href="/proefles/">gratis proefles</Link> aan of{' '}
              <Link href="/contact/">neem contact met ons op</Link> voor een vrijblijvend advies.
              Je kunt ook direct je <strong>opleider machtigen bij het CBR</strong> via de knop
              &quot;Aanmelden mijn CBR&quot; in het menu — dan kunnen wij straks direct je examens voor
              je reserveren.
            </p>
          </article>

          {/* Zijbalk */}
          <aside className="space-y-6">
            <ResponsiveImage
              base="/images/rijles-auto"
              widths={[768, 1024, 1600]}
              heightFor={(w) => Math.round((w * 3635) / 5452)}
              alt="Praktijkles autorijden bij Autorijschool Valberg in de lesauto"
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="w-full rounded-2xl object-cover shadow-lg"
            />
            <div className="rounded-2xl bg-brand p-7 text-white">
              <h2 className="text-xl font-bold text-white">Direct starten, geen wachttijd</h2>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                Bij ons kun je meteen beginnen met je rijlessen. Vraag een gratis proefles aan en
                ervaar zelf hoe prettig lessen bij Valberg is.
              </p>
              <Link href="/proefles/" className="btn-white mt-5 w-full !px-4 !py-3 text-xs">
                Gratis proefles aanvragen
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <h2 className="text-lg font-bold">Populairste pakket</h2>
              <p className="mt-2 font-display text-3xl font-bold text-brand">{packages[2].price}</p>
              <p className="text-sm text-slate-500">{packages[2].per}</p>
              <Link href="/tarieven/" className="mt-4 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline">
                Bekijk alle pakketten →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Klaar voor je eerste rijles in Valkenburg?"
        text="Boek een gratis proefles en ontvang direct een persoonlijk advies over jouw snelste route naar het rijbewijs."
      />
    </>
  );
}
