'use client';

import { motion } from 'framer-motion';

const tiles = [
  'row-span-2',
  'row-span-1',
  'row-span-1',
  'row-span-2',
  'row-span-1',
  'row-span-1',
];

export default function VibeGallery() {
  return (
    <section className="bg-cream px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="font-brush text-4xl text-roze md:text-5xl">
            Always in Good Company
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
            Shared moments bij DOK
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            Lachende gezichten, volle glazen en lange zomeravonden. Onze
            fotobank puilt uit van de gezelligheid – en we kunnen niet
            wachten om jou daar aan toe te voegen.
          </p>
        </motion.div>

        {/* TODO: vervang tegels door echte foto's uit de shoot (behoud de masonry-verhouding) */}
        <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-4 md:grid-cols-3">
          {tiles.map((span, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className={`rounded-xl bg-gradient-to-br from-[#8a6a4a] to-[#5c4530] transition-opacity hover:opacity-80 ${span}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
