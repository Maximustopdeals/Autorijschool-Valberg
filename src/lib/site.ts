// Centrale bedrijfs- en sitegegevens — op één plek aanpassen, overal bijgewerkt
export const site = {
  name: 'Autorijschool Valberg',
  domain: 'https://autorijschoolvalberg.nl',
  tagline: 'De rijschool in Valkenburg',
  description:
    'Autorijschool Valberg in Valkenburg: persoonlijke rijlessen, hoge slagingskans en al ruim 45 jaar ervaring. Boek vandaag je gratis proefles.',
  phone: '06-21 11 75 59',
  phoneHref: 'tel:+31621117559',
  whatsapp: 'https://wa.me/31621117559?text=Hallo%20Autorijschool%20Valberg%2C%20ik%20wil%20graag%20informatie%20over%20rijlessen.',
  email: 'info@autorijschoolvalberg.nl',
  street: 'Vroenhof 47',
  zip: '6301 KD',
  city: 'Valkenburg',
  region: 'Limburg',
  country: 'NL',
  kvk: '58658262',
  founded: 1979,
  geo: { lat: 50.8652, lng: 5.8321 },
  facebook: 'https://www.facebook.com/autorijschoolvalberg',
  cbrLink:
    'https://www.cbr.nl/nl/service/nl/reservering-examens-en-rijtesten/machtig-je-opleider-met-je-digid',
  formspree: 'https://formspree.io/f/mrenynqe',
  tracking: {
    ga4: 'G-2BG0TLR3X7',
    gtm: 'GTM-NRNCDCQL',
    searchConsole: 'PxayokYkc90oYDldDz-s-2ZSoI7_dWoYJQ5Zf_9zD24',
  },
  elfsight: {
    script: 'https://static.elfsight.com/platform/platform.js',
    appClass: 'elfsight-app-5e800cfe-fd55-4496-9f94-39a061884abc',
  },
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Rijlessen', href: '/rijlessen/' },
  { label: 'Tarieven', href: '/tarieven/' },
  { label: 'Proefles', href: '/proefles/' },
  { label: 'Over ons', href: '/over-ons/' },
  { label: 'Geslaagden', href: '/geslaagden/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
] as const;
