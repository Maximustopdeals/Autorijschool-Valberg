'use client';

import { useEffect } from 'react';
import { site } from '@/lib/site';

// Elfsight Google Reviews-widget (lazy geladen, buiten de kritieke render-path)
export default function ElfsightReviews() {
  useEffect(() => {
    if (document.querySelector(`script[src="${site.elfsight.script}"]`)) return;
    const s = document.createElement('script');
    s.src = site.elfsight.script;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className={site.elfsight.appClass}
      data-elfsight-app-lazy
      suppressHydrationWarning
    />
  );
}
