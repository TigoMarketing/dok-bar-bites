'use client';

import { motion } from 'framer-motion';

export default function FeelTheVibe() {
  return (
    <section className="bg-blauw px-6 py-20 text-center text-cream md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="font-brush text-4xl text-beige md:text-5xl">
          Good Music, Better Vibes
        </h2>
        <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-cream">
          Ervaar DOK in 30 seconden
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/90">
          Onze sfeer laat zich niet makkelijk in woorden vangen. Neem een
          kijkje in onze keuken, ontmoet ons team en voel de zonnige
          Ibiza-vibe aan het water in Dordrecht. Dit is waar je vanavond wil
          zitten.
        </p>
      </motion.div>
    </section>
  );
}
