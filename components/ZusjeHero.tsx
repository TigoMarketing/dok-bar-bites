'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ZusjeHero() {
  return (
    <section className="relative overflow-hidden bg-espresso px-6 pb-20 pt-16 md:px-12">
      {/* TODO: vervang door echte sfeerfoto van Het Zusje interieur — nu tijdelijk dezelfde foto als DOK */}
      <Image
        src="/Images/Header.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/65 to-black/50" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-widest text-cream">
            Jouw eigen kleurrijke, feestelijke eventlocatie in Dordrecht
          </span>
          <h1 className="font-brush text-4xl leading-tight text-roze md:text-6xl">
            Het Zusje van DOK
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream">
            Babyshower, bedrijfsborrel, bruiloft of teamuitje? Het Zusje is
            vanaf het eerste moment sfeervol, artistiek en feestelijk
            ingericht — geen kale zaal die je zelf nog moet optuigen. Kom
            binnen, en de sfeer is er al.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              data-zc-action="open"
              className="flex items-center gap-2 rounded-full bg-roze px-6 py-3 font-display text-sm font-semibold text-white"
            >
              Vraag nu een offerte aan
            </button>
            <a
              href="#zaalhuur"
              className="rounded-full border border-beige px-6 py-3 font-display text-sm font-semibold text-beige"
            >
              Bekijk de mogelijkheden ↓
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-3xl border-4 border-roze shadow-2xl md:justify-self-end"
        >
          {/* TODO: vervang door echte Zusje-bedrijfsvideo, autoplay muted loop, met poster-afbeelding als fallback */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold to-espresso" />
          <button
            aria-label="Speel video af"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-white"
          >
            <Play size={24} fill="currentColor" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
