'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

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
          Onze sfeer laat zich niet makkelijk in woorden vangen. Druk op
          play, neem een kijkje in onze keuken, ontmoet ons team en voel de
          zonnige Ibiza-vibe aan het water in Dordrecht. Dit is waar je
          vanavond wil zitten.
        </p>

        {/* TODO: vervang door echte bedrijfsvideo (autoplay muted preview on scroll) */}
        <div className="relative mx-auto mt-10 aspect-video max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#8a6a4a] to-[#3a2c1e]">
          <button
            aria-label="Speel video af"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-roze text-white"
          >
            <Play size={26} fill="currentColor" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
