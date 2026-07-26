'use client';

import { useState } from 'react';

type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: readonly Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((f, i) => (
        <div key={i}>
          <h3>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-semibold text-slate-900">{f.q}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </h3>
          {open === i && (
            <div className="px-6 pb-6">
              <p className="leading-8 text-slate-600">{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
