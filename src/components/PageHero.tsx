import Link from 'next/link';

type Crumb = { label: string; href?: string };

// Blauwe paginabanner in huiskleur met witte tekst + broodkruimels (ook als schema)
export default function PageHero({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs: Crumb[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://autorijschoolvalberg.nl${c.href}` } : {}),
    })),
  };

  return (
    <section className="bg-brand">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container-site py-14 sm:py-20">
        <nav aria-label="Broodkruimelpad" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-blue-200">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-semibold text-white">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">{intro}</p>}
      </div>
    </section>
  );
}
