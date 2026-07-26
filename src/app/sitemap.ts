import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/rijlessen/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/tarieven/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/proefles/', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/opfriscursus/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/theorie/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/rijschool-maastricht/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/rijschool-meerssen/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/rijschool-berg-en-terblijt/', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/geslaagden/', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/reviews/', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/over-ons/', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/faq/', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact/', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/privacyverklaring/', priority: 0.2, changeFrequency: 'yearly' as const },
  ];

  return pages.map((p) => ({
    url: `${site.domain}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
