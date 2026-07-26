import Link from 'next/link';
import { site } from '@/lib/site';

type Props = {
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

// Herbruikbare CTA-banner in huiskleur #0953A3 met witte tekst
export default function CtaBand({
  title = 'Begin vandaag met je rijavontuur',
  text = 'Vraag een gratis en vrijblijvende proefles aan en ontdek hoe ontspannen autorijden leren kan zijn. Wij halen je op in Valkenburg en de hele regio.',
  ctaLabel = 'Vraag je gratis proefles aan',
  ctaHref = '/proefles/',
}: Props) {
  return (
    <section aria-label="Call to action" className="bg-brand">
      <div className="container-site flex flex-col items-center gap-8 py-16 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-blue-100">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row lg:flex-col">
          <Link href={ctaHref} className="btn-white">
            {ctaLabel}
          </Link>
          <a href={site.phoneHref} className="text-sm font-semibold text-white underline-offset-4 hover:underline">
            Of bel direct: {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
