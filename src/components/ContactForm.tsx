'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

type Status = 'idle' | 'sending' | 'success' | 'error';

// Contactformulier met Formspree — berichten komen direct in je mailbox
export default function ContactForm({ subject = 'Nieuwe aanvraag via de website' }: { subject?: string }) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(site.formspree, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <svg className="mx-auto h-12 w-12 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 11.1V12a10 10 0 1 1-5.9-9.1" />
          <path d="M22 4 12 14l-3-3" />
        </svg>
        <h2 className="mt-4 text-xl font-bold text-slate-900">Bedankt voor je bericht!</h2>
        <p className="mt-2 text-slate-600">
          Wij nemen zo snel mogelijk, uiterlijk binnen één werkdag, contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value={subject} />
      {/* Honeypot tegen spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className="mb-1.5 block text-sm font-semibold text-slate-800">
            Naam <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base transition-colors focus:border-brand"
            placeholder="Je voor- en achternaam"
          />
        </div>
        <div>
          <label htmlFor="telefoon" className="mb-1.5 block text-sm font-semibold text-slate-800">
            Telefoonnummer <span aria-hidden="true" className="text-brand">*</span>
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base transition-colors focus:border-brand"
            placeholder="06 - 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-800">
          E-mailadres <span aria-hidden="true" className="text-brand">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base transition-colors focus:border-brand"
          placeholder="jouw@email.nl"
        />
      </div>

      <div>
        <label htmlFor="onderwerp" className="mb-1.5 block text-sm font-semibold text-slate-800">
          Waar kunnen wij je mee helpen?
        </label>
        <select
          id="onderwerp"
          name="onderwerp"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base transition-colors focus:border-brand"
          defaultValue="Gratis proefles aanvragen"
        >
          <option>Gratis proefles aanvragen</option>
          <option>Lespakket aanmelden</option>
          <option>Vraag over lespakketten en tarieven</option>
          <option>Opfriscursus</option>
          <option>Theorie-examen</option>
          <option>Overstappen van een andere rijschool</option>
          <option>Anders</option>
        </select>
      </div>

      {/* Pakketkeuze */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-slate-800">
          Kies hier uw rijlespakket <span aria-hidden="true" className="text-brand">*</span>
        </legend>
        <div className="space-y-3">
          {[
            'Basis pakket 20 lessen + TTT + Examen € 1.650,00',
            'Standaard pakket 30 lessen + TTT + Examen € 2.225,00',
            'Premium pakket 40 lessen + TTT + Examen € 2.750,00',
            'Losse lessen € 60,00',
            'Ik wil eerst een gratis proefles',
          ].map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-3 text-base text-slate-700">
              <input
                type="radio"
                name="rijlespakket"
                value={opt}
                required
                className="h-4 w-4 accent-brand"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Herkomst */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-slate-800">
          Hoe heb je mij gevonden? <span aria-hidden="true" className="text-brand">*</span>
        </legend>
        <div className="space-y-3">
          {['Google', 'Facebook', 'Familie en/ of vrienden', 'Anders'].map((opt) => (
            <label key={opt} className="flex cursor-pointer items-center gap-3 text-base text-slate-700">
              <input
                type="radio"
                name="herkomst"
                value={opt}
                required
                className="h-4 w-4 accent-brand"
              />
              {opt}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="bericht" className="mb-1.5 block text-sm font-semibold text-slate-800">
          Je bericht
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={5}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base transition-colors focus:border-brand"
          placeholder="Vertel kort waar je naar op zoek bent, bijvoorbeeld wanneer je wilt starten met rijlessen."
        />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          Er ging iets mis bij het verzenden. Probeer het opnieuw of bel ons direct via {site.phone}.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === 'sending' ? 'Verzenden…' : 'Verstuur je aanvraag'}
      </button>
    </form>
  );
}
