'use client';

import { useRef, useState, useEffect } from 'react';
import { geslaagden } from '@/lib/content';

// Horizontale carousel met geslaagden-foto's.
// Nieuwe foto toevoegen? Zie src/lib/content.ts (array 'geslaagden').
export default function GeslaagdenCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('[data-card]');
    const step = card ? card.offsetWidth + 20 : 320;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.querySelector<HTMLElement>('[data-card]');
      const step = card ? card.offsetWidth + 20 : 320;
      setIndex(Math.round(track.scrollLeft / step));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Foto's van geslaagde leerlingen"
        tabIndex={0}
      >
        {geslaagden.map((g, i) => (
          <figure
            key={i}
            data-card
            className="w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 sm:w-[300px]"
          >
            <img
              src={`${g.src}-800.webp`}
              srcSet={`${g.src}-480.webp 480w, ${g.src}-800.webp 800w`}
              sizes="(max-width: 640px) 260px, 300px"
              width={800}
              height={533}
              alt={g.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm font-medium text-slate-700">
              {g.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Bediening */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollTo(-1)}
          aria-label="Vorige foto's"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <span className="text-sm font-medium text-slate-500" aria-live="polite">
          {Math.min(index + 1, geslaagden.length)} / {geslaagden.length}
        </span>
        <button
          type="button"
          onClick={() => scrollTo(1)}
          aria-label="Volgende foto's"
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand text-brand transition-colors hover:bg-brand hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
