'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/site';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    // Vaste knoppen rechtsonder, netjes uitgelijnd boven elkaar
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Terug naar boven"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Stuur ons een WhatsApp-bericht"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6l-1-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4ZM12 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6Zm0-21.6a11.8 11.8 0 0 0-10.1 17.9L.5 23.2l5.2-1.4A11.8 11.8 0 1 0 12 .2Z" />
        </svg>
      </a>
    </div>
  );
}
