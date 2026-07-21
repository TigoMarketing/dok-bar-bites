'use client';

import { motion } from 'framer-motion';

export default function ZusjeCTA() {
  return (
    <section className="relative overflow-hidden bg-roze px-6 py-20 text-center text-white md:px-12">
      <img
        src="/Images/DOK_Blossom_2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -top-8 w-48 opacity-80 md:w-64"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-2xl"
      >
        <h2 className="font-brush text-4xl md:text-5xl">
          Let&apos;s Celebrate Together!
        </h2>
        <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-beige">
          Plan jouw ultieme feestje bij DOK
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Of het nu een intieme babyshower is of een bedrijfsfeest voor de
          hele afdeling: wij ontzorgen je volledig zodat jij alleen nog
          maar hoeft te genieten. Vul het formulier in en we nemen snel
          contact op.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-zwart px-8 py-3 font-display text-sm font-bold text-cream"
          >
            Vraag nu een offerte aan
          </a>
          <a
            href="tel:0788432152"
            className="rounded-full bg-white px-8 py-3 font-display text-sm font-bold text-roze"
          >
            Bel 078 843 21 52
          </a>
        </div>
      </motion.div>
    </section>
  );
}
