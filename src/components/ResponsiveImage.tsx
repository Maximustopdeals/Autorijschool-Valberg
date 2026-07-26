type Props = {
  base: string; // bijv. '/images/hero-lesauto' (zonder extensie/maat)
  widths: number[]; // beschikbare breedtes, bijv. [768, 1200, 1920]
  heightFor: (w: number) => number; // hoogte per breedte (tegen CLS)
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean; // true voor LCP-beeld (hero), anders lazy
};

// Geoptimaliseerde responsive afbeelding: WebP srcset, vaste afmetingen (geen CLS),
// lazy loading voor niet-kritieke beelden en hoge prioriteit voor de hero (LCP).
export default function ResponsiveImage({
  base,
  widths,
  heightFor,
  alt,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className,
  priority = false,
}: Props) {
  const sorted = [...widths].sort((a, b) => a - b);
  const largest = sorted[sorted.length - 1];
  const srcSet = sorted.map((w) => `${base}-${w}.webp ${w}w`).join(', ');

  return (
    <img
      src={`${base}-${largest}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={largest}
      height={heightFor(largest)}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
