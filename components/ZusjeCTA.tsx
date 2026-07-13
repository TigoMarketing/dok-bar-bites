'use client';

import { motion } from 'framer-motion';

export default function ZusjeCTA() {
  return (
    <section className="bg-roze px-6 py-20 text-center text-white md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="font-brush text-4xl md:text-5xl">
          Let&apos;s Celebrate Together!
        </h2>
        <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-beige">
          Plan jouw ultieme feestje bij DOK
        </p>
        <p className="mt-6 text-lg leading-relaxed">
          Of je nu een kleinschalige verjaardag viert of een grootschalig
          bedrijfsuitje organiseert: wij ontzorgen je volledig zodat jij
          alleen nog maar hoeft te genieten. Vul ons contactformulier in of
          bel direct naar 078 843 21 52 om de mogelijkheden te bespreken. We
          maken er samen iets onvergetelijks van!
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-blauw px-8 py-3 font-display text-sm font-bold text-cream">
            Vraag nu een offerte aan
          </button>
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
