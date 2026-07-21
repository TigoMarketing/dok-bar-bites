'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const tiles = [
  'row-span-2',
  'row-span-1',
  'row-span-1',
  'row-span-1',
  'row-span-2',
  'row-span-1',
  'row-span-1',
  'row-span-1',
];

export default function ZusjeGallery() {
  return (
    <section className="bg-beige/40 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-brush text-4xl text-roze md:text-5xl">
            Zo ziet feesten er bij ons uit
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
            Geen stockfoto&apos;s — dit zijn echte avonden bij Het Zusje
          </p>
        </motion.div>

        {/* TODO: vervang tegels door echte Zusje-sfeerfoto's (public/Images/zusje-gallery-N.jpg) */}
        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((span, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-xl bg-gradient-to-br from-gold to-espresso transition-opacity hover:opacity-80 ${span}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-roze px-8 py-3.5 font-display text-sm font-bold text-white"
          >
            Wij willen dit ook
          </Link>
        </div>
      </div>
    </section>
  );
}
