'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  {
    number: '1',
    title: 'Vertel ons je plan',
    body: 'Datum, aantal gasten, en of het Het Zusje of heel DOK wordt.',
  },
  {
    number: '2',
    title: 'Wij stellen een voorstel op maat',
    body: 'Inclusief aankleding, drankenarrangement en eventuele extra\'s.',
  },
  {
    number: '3',
    title: 'Jij schuift aan',
    body: 'Wij zorgen voor de rest, jij hoeft alleen nog maar te genieten.',
  },
];

export default function ZusjeHowItWorks() {
  return (
    <section className="bg-blauw px-6 py-20 text-cream md:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="font-brush text-4xl text-beige md:text-5xl">
            Van aanvraag tot aanschuiven
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-cream/80">
            In drie stappen geregeld
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-roze font-display text-2xl font-extrabold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/85">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-14 inline-block rounded-full bg-roze px-8 py-3.5 font-display text-sm font-bold text-white"
        >
          Stap 1 — vertel ons je plan
        </Link>
      </div>
    </section>
  );
}
