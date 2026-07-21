'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: 'Kan ik ook heel DOK afhuren in plaats van alleen Het Zusje?',
    a: 'Zeker! Voor grotere bedrijfsfeesten, borrels of events kun je het hele restaurant en terras exclusief afhuren. Vraag naar de mogelijkheden — we stellen graag een voorstel op maat op.',
  },
  {
    q: 'Vanaf hoeveel personen is de zaalhuur gratis?',
    a: 'Vanaf 30 personen vervalt de zaalhuur (t.w.v. €350–€400) volledig. Je betaalt dan alleen voor eten en drinken.',
  },
  {
    q: 'Mag ik zelf nog versieren?',
    a: 'Het Zusje is al sfeervol ingericht, maar we werken samen met een professionele ballonnenpartner voor extra aankleding op maat — ballonnenbogen, fotobooth of teksten naar keuze.',
  },
  {
    q: 'Is er een aparte ingang of parkeergelegenheid?',
    a: 'TODO: nog navragen bij Luuk — stond niet in de meetings.',
  },
  {
    q: 'Tot hoe laat kunnen we blijven?',
    a: 'TODO: sluitingstijd nog bevestigen bij Luuk.',
  },
];

export default function ZusjeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream px-6 py-20 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-brush text-4xl text-roze md:text-5xl">
            Nog vragen?
          </h2>
        </div>

        <div className="mt-10 divide-y divide-beige-line">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="py-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between text-left font-display text-base font-semibold text-zwart"
              >
                {faq.q}
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <p className="mt-3 text-sm leading-relaxed text-zwart/75">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-roze px-8 py-3.5 font-display text-sm font-bold text-white"
          >
            Staat je vraag er niet bij? Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}
