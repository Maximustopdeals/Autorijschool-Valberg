'use client';

import { site } from '@/lib/site';

export default function Copyright() {
  const year = new Date().getFullYear();
  return (
    <p className="text-xs text-slate-500">
      Copyright © {year} {site.name} - Alle rechten voorbehouden - Ingeschreven bij de Kamer van
      Koophandel {site.kvk}
    </p>
  );
}
