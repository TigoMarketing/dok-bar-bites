'use client';

import { motion } from 'framer-motion';

export default function ZusjeHero() {
  return (
    <section className="relative overflow-hidden bg-blauw px-6 pb-20 pt-16 text-cream md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-brush text-4xl text-roze md:text-6xl">
            Het Zusje van DOK
          </h1>
          <p className="mt-3 font-display text-sm font-bold uppercase tracking-widest text-beige">
            Jouw eigen kleurrijke, feestelijke eventlocatie in Dordrecht
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/90">
            Babyshower, verjaardag, bruiloft of bedrijfsuitje? Ontdek
            &quot;Het Zusje van DOK&quot;. Een unieke, artistieke en kleurrijk
            ingerichte ruimte (met vrolijk roze en blauw!) die direct zorgt
            voor de perfecte feeststemming.
          </p>
          <button className="mt-8 rounded-full bg-roze px-8 py-3 font-display text-sm font-bold text-white">
            Vraag nu een offerte aan
          </button>
        </motion.div>
      </div>
    </section>
  );
}
