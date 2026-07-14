'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [subject, setSubject] = useState<'restaurant' | 'zusje'>('restaurant');
  const [submitted, setSubmitted] = useState(false);

  // TODO: koppel dit aan een echte backend/e-mailservice (bv. Resend, Formspree, of een eigen API-route)
  // Nu wordt er alleen lokaal een bevestiging getoond, er wordt nog niets verstuurd.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-beige/40 p-8 text-center">
        <p className="font-display text-lg font-bold text-zwart">
          Bedankt voor je bericht!
        </p>
        <p className="mt-2 text-sm text-zwart/70">
          We nemen zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setSubject('restaurant')}
          className={`flex-1 rounded-full px-4 py-2.5 font-display text-sm font-semibold transition-colors ${
            subject === 'restaurant'
              ? 'bg-roze text-white'
              : 'bg-beige/50 text-zwart'
          }`}
        >
          Het Restaurant
        </button>
        <button
          type="button"
          onClick={() => setSubject('zusje')}
          className={`flex-1 rounded-full px-4 py-2.5 font-display text-sm font-semibold transition-colors ${
            subject === 'zusje'
              ? 'bg-roze text-white'
              : 'bg-beige/50 text-zwart'
          }`}
        >
          Het Zusje
        </button>
      </div>

      <div>
        <label className="mb-1.5 block font-display text-sm font-semibold text-zwart">
          Naam
        </label>
        <input
          type="text"
          required
          className="w-full rounded-xl border border-beige-line bg-white px-4 py-3 text-sm text-zwart outline-none focus:border-roze"
          placeholder="Jouw naam"
        />
      </div>

      <div>
        <label className="mb-1.5 block font-display text-sm font-semibold text-zwart">
          E-mail of telefoonnummer
        </label>
        <input
          type="text"
          required
          className="w-full rounded-xl border border-beige-line bg-white px-4 py-3 text-sm text-zwart outline-none focus:border-roze"
          placeholder="jij@voorbeeld.nl of 06 12345678"
        />
      </div>

      <div>
        <label className="mb-1.5 block font-display text-sm font-semibold text-zwart">
          Bericht
        </label>
        <textarea
          required
          rows={5}
          className="w-full rounded-xl border border-beige-line bg-white px-4 py-3 text-sm text-zwart outline-none focus:border-roze"
          placeholder={
            subject === 'zusje'
              ? 'Vertel ons over je feestje: datum, aantal personen, wensen...'
              : 'Waar kunnen we je mee helpen?'
          }
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-roze px-6 py-3 font-display text-sm font-semibold text-white"
      >
        Versturen
      </button>
    </form>
  );
}
