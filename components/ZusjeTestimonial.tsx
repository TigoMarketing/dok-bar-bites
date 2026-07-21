'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

// TODO: vervang/vul aan met echte Google review-quotes zodra Tigo ze aanlevert
const quote = {
  text: 'Vandaag een feestje gehad hier. Super goed georganiseerd met heerlijke hapjes en drankjes.',
  source: 'Google review',
};

export default function ZusjeTestimonial() {
  return (
    <section className="relative overflow-hidden bg-espresso px-6 py-20 text-cream md:px-12">
      {/* TODO: vervang door echte feestfoto van Het Zusje */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-espresso" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <div className="flex justify-center gap-1 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
        </div>
        <p className="mt-6 font-brush text-3xl leading-snug text-cream md:text-4xl">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="mt-4 font-display text-sm font-semibold uppercase tracking-widest text-beige">
          — {quote.source}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-roze px-8 py-3.5 font-display text-sm font-bold text-white"
        >
          Boek jouw feestje
        </Link>
      </motion.div>
    </section>
  );
}
