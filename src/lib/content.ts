// Contentdata — hier voeg je eenvoudig nieuwe pakketten, FAQ's of geslaagden-foto's toe

export const packages = [
  {
    name: 'Losse les',
    price: '€ 60,-',
    per: 'per les van 60 minuten',
    features: [
      'Flexibel per les betalen',
      'Persoonlijke begeleiding op maat',
      'Ideaal als opfrisles of tussendoor',
      'Inclusief haal- en brengservice in de regio',
    ],
    popular: false,
  },
  {
    name: 'Basis Pakket',
    price: '€ 1.650,-',
    per: '20 lessen + praktijkexamen',
    features: [
      '20 rijlessen van 60 minuten',
      'Inclusief CBR praktijkexamen',
      'Persoonlijke leerlingvolgsysteem',
      'Tussentijdse toets ter voorbereiding',
      'Gratis theorieondersteuning',
    ],
    popular: false,
  },
  {
    name: 'Standaard Pakket',
    price: '€ 2.225,-',
    per: '30 lessen + praktijkexamen',
    features: [
      '30 rijlessen van 60 minuten',
      'Inclusief CBR praktijkexamen',
      'Persoonlijke leerlingvolgsysteem',
      'Tussentijdse toets ter voorbereiding',
      'Gratis theorieondersteuning',
      'Meest gekozen door onze leerlingen',
    ],
    popular: true,
  },
  {
    name: 'Premium Pakket',
    price: '€ 2.750,-',
    per: '40 lessen + praktijkexamen',
    features: [
      '40 rijlessen van 60 minuten',
      'Inclusief CBR praktijkexamen',
      'Persoonlijke leerlingvolgsysteem',
      'Tussentijdse toets ter voorbereiding',
      'Gratis theorieondersteuning',
      'Extra rust en zekerheid voor het examen',
    ],
    popular: false,
  },
] as const;

export const faqs = [
  {
    q: 'Hoe meld ik mij aan voor een gratis proefles in Valkenburg?',
    a: 'Aanmelden voor een gratis proefles kan eenvoudig via het contactformulier op onze website, per telefoon via 06-21 11 75 59 of via WhatsApp. Wij nemen binnen één werkdag contact met je op om een geschikte datum en tijd in te plannen. Tijdens de proefles maak je kennis met de rijinstructeur, de lesauto en onze manier van lesgeven. Je krijgt direct een eerlijk advies over het aantal lessen dat je waarschijnlijk nodig hebt.',
  },
  {
    q: 'Hoeveel rijlessen heb ik gemiddeld nodig om te slagen?',
    a: 'Dat verschilt per leerling en hangt af van je aanleg, leertempo en hoe vaak je les neemt. Gemiddeld hebben leerlingen in Nederland tussen de 30 en 40 lessen nodig. Bij Autorijschool Valberg krijg je na de proefles een persoonlijk advies. Door meerdere lessen per week te plannen, blijft de stof beter hangen en ben je doorgaans sneller examenklaar.',
  },
  {
    q: 'Wat kost een rijbewijs bij Autorijschool Valberg?',
    a: 'Een losse les kost € 60,- per uur. Onze pakketten beginnen bij € 1.650,- voor 20 lessen inclusief praktijkexamen. Het meest gekozen Standaard Pakket kost € 2.225,- voor 30 lessen inclusief praktijkexamen. Bekijk alle tarieven en pakketten op onze tarievenpagina.',
  },
  {
    q: 'Kan ik in termijnen betalen?',
    a: 'Ja, gespreid betalen is bij ons mogelijk. Je hoeft het pakketbedrag niet in één keer te voldoen. Neem contact met ons op voor de mogelijkheden; wij denken graag mee over een betalingsregeling die past bij jouw situatie.',
  },
  {
    q: 'Waar doe ik praktijkexamen als ik in Valkenburg les?',
    a: 'Onze leerlingen doen praktijkexamen bij het CBR-examencentrum in Maastricht (Geusselt). Tijdens de lessen rijden we regelmatig in het examengebied, zodat je de routes, kruispunten en bijzondere verkeerssituaties al goed kent voordat je examen doet. Dat vergroot je slagingskans aanzienlijk.',
  },
  {
    q: 'Hoe machtig ik Autorijschool Valberg bij het CBR?',
    a: 'Om examens voor jou te kunnen reserveren machtig je ons eenvoudig met je DigiD via de website van het CBR. Klik op de knop "Aanmelden mijn CBR" in het menu van onze website, log in met je DigiD en zoek ons op via onze rijschoolnaam. Na de machtiging kunnen wij direct je theorie- en praktijkexamen inplannen.',
  },
  {
    q: 'Geven jullie ook theorieondersteuning?',
    a: 'Ja. Naast praktijklessen helpen wij je ook bij het halen van je theorie-examen. Je krijgt toegang tot theorieondersteuning en wij denken mee over een studieplanning. Een goede theoriekennis legt het fundament voor veilige en zelfverzekerde praktijklessen.',
  },
  {
    q: 'Bieden jullie ook opfriscursussen aan?',
    a: 'Zeker. Onze opfriscursus is bedoeld voor bestuurders die hun rijbewijs al hebben maar bijvoorbeeld lang niet hebben gereden, onzeker zijn in het verkeer of specifieke vaardigheden willen verbeteren zoals parkeren, snelwegrijden of defensief rijden. De cursus stellen we volledig samen op basis van jouw wensen.',
  },
  {
    q: 'In welke plaatsen kan ik rijles volgen?',
    a: 'Autorijschool Valberg is gevestigd in Valkenburg en actief in de gehele regio: Valkenburg, Maastricht, Meerssen, Berg en Terblijt, Houthem, Schin op Geul, Beek, Vilt, Sibbe en omgeving. Wij halen je op en brengen je weer thuis, naar school of naar je werk.',
  },
  {
    q: 'Vanaf welke leeftijd kan ik beginnen met rijlessen?',
    a: 'Je mag in Nederland vanaf 16,5 jaar starten met autorijlessen. Je theorie-examen mag je vanaf 16 jaar doen en je praktijkexamen vanaf 17 jaar. Met 2toDrive mag je vanaf je 17e onder begeleiding van een coach rijden, totdat je 18 wordt en zelfstandig de weg op mag.',
  },
  {
    q: 'Wat gebeurt er als ik ziek ben of een les moet verzetten?',
    a: 'Een les kun je kosteloos verzetten tot 48 uur voor aanvang. Neem daarvoor zo snel mogelijk contact met ons op via telefoon of WhatsApp. Bij afzegging binnen 48 uur kunnen wij de les helaas in rekening brengen, omdat het gereserveerde lesuur niet meer aan een andere leerling kan worden gegeven.',
  },
  {
    q: 'Rij ik altijd met dezelfde instructeur?',
    a: 'Ja, bij Autorijschool Valberg rijd je met een vaste rijinstructeur. Dat zorgt voor rust, vertrouwen en een persoonlijke leerlijn. Je instructeur kent jouw sterke punten en aandachtspunten en bouwt de lessen daar logisch op op.',
  },
] as const;

// De 3 uitgelichte blokken op de homepagina (sectie geslaagden)
export const homeGeslaagden = [
  { src: '/images/home-geslaagd-1', alt: 'Geslaagde cursist van Autorijschool Valberg bij de lesauto', caption: 'Weer een cursist geslaagd — gefeliciteerd!' },
  { src: '/images/home-geslaagd-2', alt: 'Trotse geslaagde leerling na het praktijkexamen bij rijschool Valberg', caption: 'Van proefles tot rijbewijs' },
  { src: '/images/home-geslaagd-3', alt: 'Kyra Notermans geslaagd voor haar rijbewijs bij Autorijschool Valberg', caption: 'Kyra — geslaagd en de weg op!' },
] as const;

// Geslaagden-foto's — voeg hier eenvoudig een nieuwe foto toe:
// 1. Zet de foto als WebP op twee breedtes (800 en 480) in /public/images
//    bijv. geslaagd-40-800.webp en geslaagd-40-480.webp
// 2. Voeg hieronder een regel toe met src (zonder maat/extensie), alt-tekst en caption
export const geslaagden = [
  { src: '/images/geslaagd-1', alt: 'Geslaagde kandidaat van Autorijschool Valberg poseert bij de blauwe lesauto', caption: 'Geslaagd in één keer — gefeliciteerd!' },
  { src: '/images/geslaagd-2', alt: 'Trotse geslaagde leerling voor het CBR examencentrum in Maastricht', caption: 'Rijbewijs behaald bij CBR Maastricht' },
  { src: '/images/geslaagd-3', alt: 'Geslaagde leerling van rijschool Valberg met het examenresultaat', caption: 'Weer een trotse nieuwe bestuurder' },
  { src: '/images/geslaagd-4', alt: 'Geslaagde kandidaat naast de lesauto van Autorijschool Valberg in Valkenburg', caption: 'Van eerste les tot rijbewijs' },
  { src: '/images/geslaagd-5', alt: 'Blije geslaagde cursist bij de lesauto voor het examencentrum', caption: 'Op naar de open weg' },
  { src: '/images/geslaagd-6', alt: 'Geslaagde leerling toont vreugde na het praktijkexamen', caption: 'Geslaagd met een glimlach' },
  { src: '/images/geslaagd-7', alt: 'Kayli is geslaagd voor haar rijbewijs en staat bij de lesauto', caption: 'Kayli — geslaagd en klaar voor de open weg' },
  { src: '/images/geslaagd-8', alt: 'Jonathan is in één keer geslaagd voor zijn praktijkexamen', caption: 'Jonathan — in één keer geslaagd' },
  { src: '/images/geslaagd-9', alt: 'Kyra Notermans geslaagd bij Autorijschool Valberg', caption: 'Kyra — rijbewijs in de pocket' },
  { src: '/images/geslaagd-10', alt: 'Weer een cursist geslaagd bij Autorijschool Valberg in Valkenburg', caption: 'Weer een cursist geslaagd' },
  { src: '/images/geslaagd-12', alt: 'Trotse geslaagde kandidaat bij de lesauto van rijschool Valberg', caption: 'Trots op onze geslaagden' },
  { src: '/images/geslaagd-13', alt: 'Blije leerling na een geslaagd praktijkexamen in Maastricht', caption: 'Geslaagd bij het CBR Maastricht' },
  { src: '/images/geslaagd-14', alt: 'Geslaagde cursist poseert bij de lesauto van Autorijschool Valberg', caption: 'De weg op met het rijbewijs' },
  { src: '/images/geslaagd-15', alt: 'Geslaagde leerling toont het rijbewijs naast de lesauto', caption: 'Het rijbewijs is binnen' },
  { src: '/images/geslaagd-16', alt: 'Geslaagde kandidaat na een succesvol rijexamen', caption: 'Weer een geslaagd examen' },
  { src: '/images/geslaagd-17', alt: 'Geslaagde leerling van Autorijschool Valberg in het Geuldal', caption: 'Geslaagd in het Geuldal' },
  { src: '/images/geslaagd-18', alt: 'Nieuwe bestuurder na het behalen van het rijbewijs bij Valberg', caption: 'Een nieuwe bestuurder erbij' },
  { src: '/images/geslaagd-19', alt: 'Geslaagde cursist naast de Valberg lesauto', caption: 'Geslaagd — gefeliciteerd!' },
  { src: '/images/geslaagd-20', alt: 'Trotse leerling na het praktijkexamen bij rijschool Valberg', caption: 'Trots op dit resultaat' },
  { src: '/images/geslaagd-21', alt: 'Geslaagde kandidaat met de instructeur van Autorijschool Valberg', caption: 'Samen naar het rijbewijs' },
  { src: '/images/geslaagd-22', alt: 'Leerling viert het behalen van het rijbewijs bij de lesauto', caption: 'Feest na het examen' },
  { src: '/images/geslaagd-23', alt: 'Geslaagde cursist van rijschool Valberg in Valkenburg', caption: 'Weer een leerling geslaagd' },
  { src: '/images/geslaagd-24', alt: 'Blije geslaagde na het autorijexamen in Maastricht', caption: 'Geslaagd voor het rijexamen' },
  { src: '/images/geslaagd-25', alt: 'Geslaagde leerling poseert trots bij de lesauto', caption: 'Rijbewijs in de pocket' },
  { src: '/images/geslaagd-26', alt: 'Nog een geslaagde kandidaat van Autorijschool Valberg', caption: 'Op naar de open weg' },
  { src: '/images/geslaagd-27', alt: 'Geslaagde cursist na een succesvolle rijopleiding', caption: 'Een geslaagde opleiding' },
  { src: '/images/geslaagd-28', alt: 'Trotse geslaagde leerling bij de blauwe lesauto van Valberg', caption: 'Trots en geslaagd' },
  { src: '/images/geslaagd-29', alt: 'Leerling geslaagd voor het praktijkexamen bij het CBR', caption: 'CBR-examen gehaald' },
  { src: '/images/geslaagd-30', alt: 'Geslaagde kandidaat van rijschool Valberg met rijbewijs', caption: 'Rijbewijs behaald' },
  { src: '/images/geslaagd-31', alt: 'Blije nieuwe bestuurder na het halen van het rijbewijs', caption: 'Zelfstandig de weg op' },
  { src: '/images/geslaagd-32', alt: 'Geslaagde leerling bij de lesauto in Valkenburg', caption: 'Geslaagd in Valkenburg' },
  { src: '/images/geslaagd-33', alt: 'Geslaagde cursist poseert na het examen bij de lesauto', caption: 'Weer een topper erbij' },
  { src: '/images/geslaagd-34', alt: 'Geslaagde leerling van Autorijschool Valberg met certificaat', caption: 'Examen met succes afgerond' },
  { src: '/images/geslaagd-35', alt: 'Leerling geslaagd voor het autorijbewijs bij rijschool Valberg', caption: 'Autorijbewijs gehaald' },
  { src: '/images/geslaagd-36', alt: 'Trotse geslaagde kandidaat na de rijopleiding', caption: 'Klaar voor de weg' },
  { src: '/images/geslaagd-37', alt: 'Geslaagde leerling na examen bij CBR Maastricht', caption: 'Geslaagd in Maastricht' },
  { src: '/images/geslaagd-38', alt: 'Jasper geslaagd bij Autorijschool Valberg', caption: 'Jasper — geslaagd!' },
  { src: '/images/geslaagd-39', alt: 'Weer een cursist geslaagd bij Autorijschool Valberg', caption: 'Weer een cursist geslaagd' },
] as const;

export const services = [
  {
    title: 'Autorijlessen',
    href: '/rijlessen/',
    text: 'Persoonlijke praktijklessen op jouw tempo, met een vaste instructeur in een moderne lesauto. Van je allereerste les tot volledige examenvoorbereiding.',
    points: ['Praktijklessen op maat', 'Vaste rijinstructeur', 'Examengericht lesplan'],
  },
  {
    title: 'Gratis proefles',
    href: '/proefles/',
    text: 'Maak vrijblijvend kennis met onze rijschool, de lesauto en onze manier van lesgeven. Je ontvangt direct een eerlijk lesmethodisch advies.',
    points: ['Vrijblijvend kennismaken', 'Persoonlijk adviesrapport', 'Direct starten zonder wachttijd'],
  },
  {
    title: 'Opfriscursus',
    href: '/opfriscursus/',
    text: 'Voor bestuurders met rijbewijs die hun rijvaardigheid, veiligheid en zelfvertrouwen willen vergroten — van parkeren tot snelwegrijden.',
    points: ['Defensief rijden', 'Parkeertechnieken', 'Navigatie en snelweg'],
  },
  {
    title: 'Theorie & examen',
    href: '/theorie/',
    text: 'Wij begeleiden je bij het theorie-examen en het CBR praktijkexamen in Maastricht, inclusief stressmanagement en examensimulaties.',
    points: ['Theorieondersteuning', 'Examensimulatie', 'Stressmanagement'],
  },
] as const;

export const regions = [
  { name: 'Valkenburg', href: '/rijlessen/', text: 'Onze thuisbasis: lessen vanuit het hart van het Geuldal.' },
  { name: 'Maastricht', href: '/rijschool-maastricht/', text: 'Rijles in Maastricht en examen training rond CBR Geusselt.' },
  { name: 'Meerssen', href: '/rijschool-meerssen/', text: 'Opgehaald en thuisgebracht in heel Meerssen.' },
  { name: 'Berg en Terblijt', href: '/rijschool-berg-en-terblijt/', text: 'Rijlessen vlak bij huis in Berg en Terblijt.' },
] as const;

export const reviews = [
  {
    name: 'Leerling uit Valkenburg',
    text: 'Hartelijk bedankt voor de goede lessen en het rustig uitleggen. Ik voelde me elke les op mijn gemak en ben met vertrouwen het examen ingegaan. Bedankt!',
    rating: 5,
  },
  {
    name: 'Ouder van een leerling',
    text: 'Wij zijn erg trots op deze rijschool. Professionele aanpak, duidelijke communicatie en een mooi resultaat. Het is een echte aanrader, dankjewel.',
    rating: 5,
  },
  {
    name: 'Leerling uit Maastricht',
    text: 'Duidelijke uitleg, geduld en altijd op tijd. De lessen in het examengebied maakten dat ik ontspannen naar het CBR kon. In één keer geslaagd!',
    rating: 5,
  },
] as const;
