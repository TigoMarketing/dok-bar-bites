'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const tiles = [
  { src: '/Images/Gallery 1.jpg', width: 4672, height: 7008 },
  { src: '/Images/Gallery-2.jpg', width: 2048, height: 2729 },
  { src: '/Images/Gallery-3.jpg', width: 3373, height: 5689 },
  { src: '/Images/Gallery-4.jpg', width: 2980, height: 4590 },
  { src: '/Images/Gallery-5.jpg', width: 4672, height: 7008 },
  { src: '/Images/Gallery-6.jpg', width: 2048, height: 2729 },
];

export default function VibeGallery() {
  return (
    <section id="sfeerbeelden" className="bg-cream px-6 py-20 md:px-12">
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
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-zwart/70">
            Shared moments bij DOK
          </p>
        </motion.div>

        <div className="mt-12 columns-2 gap-4 md:columns-3">
          {tiles.map((tile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl transition-opacity hover:opacity-80"
            >
              <Image
                src={tile.src}
                alt=""
                width={tile.width}
                height={tile.height}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="h-auto w-full rounded-xl object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
