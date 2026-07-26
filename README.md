# Autorijschool Valberg — website (Next.js App Router)

Premium, volledig statische website voor Autorijschool Valberg in Valkenburg.
Gebouwd met Next.js 15 (App Router), TypeScript en Tailwind CSS — klaar voor Vercel.

## Techniek

- **Next.js 15** met `output: 'export'` — 100% statisch, razendsnel (First Load JS ~103 kB)
- **Mobile-first**, responsive, WebP-afbeeldingen met srcset (LCP/CLS/FID geoptimaliseerd)
- **SEO**: unieke title + meta description per pagina, canonicals, Open Graph, sitemap.xml,
  robots.txt, JSON-LD (DrivingSchool, FAQPage, BreadcrumbList, AggregateRating)
- **Tracking**: Google Analytics 4 (`G-2BG0TLR3X7`), Google Tag Manager (`GTM-NRNCDCQL`),
  Google Search Console-verificatie (meta-tag in `src/app/layout.tsx`)
- **Reviews**: Elfsight Google Reviews-widget (`src/components/ElfsightReviews.tsx`)
- **Formulieren**: Formspree (`src/components/ContactForm.tsx`)
- **Redirects** van oude WordPress-URL's: zie `vercel.json`

## Deployen op Vercel

1. Push deze map naar een (private) Git-repository (GitHub/GitLab/Bitbucket).
2. Importeer de repo in Vercel — framework wordt automatisch herkend als Next.js.
3. Koppel het domein `autorijschoolvalberg.nl` in Vercel en pas bij Cloud86 de DNS aan
   (A-record naar `76.76.21.21` of CNAME naar `cname.vercel-dns.com` — zie Vercel-docs).
4. Vercel activeert automatisch HTTPS. De Search Console-verificatie zit al in de code.

Lokaal testen:

```bash
npm install
npm run dev      # ontwikkelserver op http://localhost:3000
npm run build    # statische export naar ./out
```

## Content aanpassen

Alle content staat centraal in `src/lib/`:

| Bestand | Inhoud |
|---|---|
| `src/lib/site.ts` | Bedrijfsgegevens, telefoon, e-mail, tracking-ID's, links |
| `src/lib/content.ts` | Lespakketten/tarieven, FAQ's, geslaagden-foto's, diensten, regio's |

### Nieuwe geslaagden-foto toevoegen

1. Optimaliseer de foto naar WebP op twee breedtes, bijv. `geslaagd-11-800.webp` en
   `geslaagd-11-480.webp`, en zet ze in `public/images/`.
2. Voeg in `src/lib/content.ts` bij de array `geslaagden` een regel toe:

```ts
{ src: '/images/geslaagd-11', alt: 'Omschrijving van de foto voor Google en screenreaders', caption: 'Korte bijschrift' },
```

3. Bouw opnieuw (`npm run build`) of push naar Git — Vercel publiceert automatisch.

### Tarieven of FAQ wijzigen

Pas de arrays `packages` resp. `faqs` aan in `src/lib/content.ts`. De homepage,
tarievenpagina, FAQ-pagina én de FAQ structured data worden automatisch bijgewerkt.
