import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { site } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: 'Autorijschool Valberg in Valkenburg | Rijlessen & Gratis Proefles',
  description: site.description,
  keywords: [
    'rijschool Valkenburg',
    'autorijschool Valkenburg',
    'rijlessen Valkenburg',
    'autorijles Valkenburg',
    'gratis proefles',
    'rijbewijs halen Valkenburg',
    'rijschool Maastricht',
    'opfriscursus autorijden',
    'Autorijschool Valberg',
  ],
  alternates: { canonical: '/' },
  verification: {
    google: site.tracking.searchConsole,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: site.domain,
    siteName: site.name,
    title: 'Autorijschool Valberg in Valkenburg | Rijlessen & Gratis Proefles',
    description: site.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Blauwe lesauto van Autorijschool Valberg in Valkenburg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autorijschool Valberg in Valkenburg | Rijlessen & Gratis Proefles',
    description: site.description,
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0953A3',
};

const drivingSchoolSchema = {
  '@context': 'https://schema.org',
  '@type': 'DrivingSchool',
  '@id': `${site.domain}/#organization`,
  name: site.name,
  url: site.domain,
  description: site.description,
  telephone: '+31621117559',
  email: site.email,
  foundingDate: String(site.founded),
  image: `${site.domain}/og-image.jpg`,
  logo: `${site.domain}/images/logo-432.png`,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  areaServed: [
    { '@type': 'City', name: 'Valkenburg' },
    { '@type': 'City', name: 'Maastricht' },
    { '@type': 'City', name: 'Meerssen' },
    { '@type': 'City', name: 'Berg en Terblijt' },
    { '@type': 'City', name: 'Houthem' },
    { '@type': 'City', name: 'Schin op Geul' },
  ],
  sameAs: [site.facebook],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.tracking.gtm}');`}
        </Script>
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.tracking.ga4}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.tracking.ga4}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(drivingSchoolSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.tracking.gtm}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Ga naar de inhoud
        </a>
        <Header />
        <main id="inhoud" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
