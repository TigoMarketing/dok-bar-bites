'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ZusjeVenueOptions() {
  return (
    <section id="zaalhuur" className="bg-espresso px-6 py-20 text-cream md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-brush text-4xl text-beige md:text-5xl">
            Klein gezelschap of het hele pand?
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-cream/80">
            Kies de setting die bij jouw groep past
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border-2 border-roze bg-cream p-8 text-zwart"
          >
            <span className="absolute -top-3 left-8 rounded-full bg-roze px-4 py-1 font-display text-xs font-bold text-white">
              Meest gekozen
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold">
              Het Zusje
            </h3>
            <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-blauw">
              Voor groepen tot 50 personen
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Een volledig afgesloten, kant-en-klaar ingerichte ruimte met
              eigen bar, muziekinstallatie en een stukje terras aan het
              water. Perfect voor een feest dat privé mag zijn, zonder
              gedeelde ruimte met andere gasten.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-roze px-6 py-3 font-display text-sm font-bold text-white"
            >
              Reserveer Het Zusje
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl border-2 border-gold bg-cream p-8 text-zwart"
          >
            <span className="absolute -top-3 left-8 rounded-full bg-gold px-4 py-1 font-display text-xs font-bold text-espresso">
              Op aanvraag
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold">
              Heel DOK afhuren
            </h3>
            <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-blauw">
              Voor grote(re) bedrijfsfeesten en events
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Groeit jouw feestje uit Het Zusje, of wil je meteen het hele
              restaurant én terras tot je beschikking? Heel DOK is ook
              exclusief af te huren — inclusief bediening,
              drankenarrangement en aankleding op maat. Precies wat je
              nodig hebt, in overleg samengesteld.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-zwart px-6 py-3 font-display text-sm font-bold text-cream"
            >
              Vraag de mogelijkheden op
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
