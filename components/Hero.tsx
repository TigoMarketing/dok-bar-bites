'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zwart px-6 pb-20 pt-16 md:px-12">
      {/* TODO: vervang door echte sfeervideo/slideshow van het terras (autoplay, muted, loop) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8a6a4a] to-[#3a2c1e]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-3 block font-display text-xs font-bold uppercase tracking-widest text-cream">
            Jouw favoriete terras aan het water in Dordrecht
          </span>
          <h1 className="font-brush text-4xl leading-tight text-roze md:text-6xl">
            Funky Food, Great Drinks & Ibiza Vibes
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-cream">
            Plof neer in de zon aan de Spuiboulevard. Geniet van een lazy
            weekend lunch, kleurrijke shared dining bites of onze unieke
            kwaliteitswijnen. Geen reservering? Geen probleem! Bij ons is er
            altijd een vrije inloop vanaf 2 personen. Schuif gezellig aan!
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              data-zc-action="open"
              className="flex items-center gap-2 rounded-full bg-roze px-6 py-3 font-display text-sm font-semibold text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-roze">
                Z
              </span>
              Reserveer direct een tafel
            </button>
            <a
              href="#kaarten"
              className="rounded-full border border-beige px-6 py-3 font-display text-sm font-semibold text-beige"
            >
              Bekijk de kaarten ↓
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl bg-cream/95 p-6 shadow-2xl md:justify-self-end"
        >
          {/* TODO: vervang door echte Zenchef widget-embed zodra restaurant-ID bekend is */}
          <p className="font-display text-sm font-bold text-zwart">
            Zenchef reserveringswidget
          </p>
          <p className="mt-1 text-sm text-zwart/60">
            (widget komt hier zodra restaurant-ID bekend is)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
