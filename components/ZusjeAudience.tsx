'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ZusjeAudience() {
  return (
    <section className="bg-cream px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-brush text-4xl text-roze md:text-5xl">
            Waar vier jij het?
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
            Van babyshower tot bedrijfsborrel — er is altijd een reden
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-beige/50 p-8"
          >
            <p className="font-display text-xs font-bold uppercase tracking-widest text-blauw">
              Persoonlijke momenten
            </p>
            <p className="mt-4 text-base leading-relaxed text-zwart">
              Een babyshower vol roze details, een verjaardag die net wat
              meer wow verdient, of een bruiloftsborrel met uitzicht op het
              water. Het Zusje maakt elk persoonlijk moment een tikkeltje
              bijzonderder.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-roze px-6 py-3 font-display text-sm font-bold text-white"
            >
              Plan jouw feestje
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-blauw p-8 text-cream"
          >
            <p className="font-display text-xs font-bold uppercase tracking-widest text-beige">
              Werk vieren, geen werk maken
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream/90">
              Vrijmibo met het team, een personeelsfeest waar mensen het nog
              weken over hebben, een kerstborrel of een netwerkevent zonder
              saaie vergaderzaal-sfeer. Wij regelen de aankleding en de
              drank, jij hoeft alleen nog maar te zorgen dat iedereen komt
              opdagen.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-roze px-6 py-3 font-display text-sm font-bold text-white"
            >
              Plan een zakelijk feestje
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
