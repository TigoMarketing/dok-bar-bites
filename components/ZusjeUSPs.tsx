'use client';

import { motion } from 'framer-motion';
import { Sparkles, KeyRound, GlassWater, PartyPopper } from 'lucide-react';
import Link from 'next/link';

const usps = [
  {
    icon: KeyRound,
    title: 'Volledige exclusiviteit',
    body: 'Eigen privébar, eigen muziekinstallatie, eigen toiletten én een eigen stuk terras aan het water.',
    accent: 'bg-blauw',
  },
  {
    icon: GlassWater,
    title: 'Onbeperkt drinken, geen verrassingen',
    body: 'Bier, fris en wijn onbeperkt vanaf €9 per persoon per uur — vooraf duidelijk, geen rekening achteraf die tegenvalt.',
    accent: 'bg-gold',
  },
  {
    icon: PartyPopper,
    title: 'Aankleding op maat',
    body: 'Ballonnenbogen, fotobooth of teksten naar keuze, samen met onze ballonnenpartner.',
    accent: 'bg-blauw',
  },
];

export default function ZusjeUSPs() {
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
            Waarom vieren bij Het Zusje?
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
            Alles tot in de puntjes geregeld
          </p>
        </motion.div>

        {/* Hoofd-differentiator, uitgelicht */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-roze p-8 text-center text-white shadow-lg md:flex-row md:items-center md:gap-8 md:p-10 md:text-left"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-roze">
            <Sparkles size={30} />
          </div>
          <div>
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 font-display text-xs font-bold uppercase tracking-widest">
              Het verschil
            </span>
            <h3 className="mt-2 font-display text-2xl font-extrabold md:text-3xl">
              Kant-en-klaar sfeervol, geen kale zaal
            </h3>
            <p className="mt-2 text-base leading-relaxed text-white/90">
              Waar andere feestlocaties vaak kille, lege ruimtes zijn die je
              zelf nog moet aankleden, is Het Zusje vanaf het eerste moment
              warm, kleurrijk en feestelijk ingericht. Binnenlopen en klaar.
            </p>
          </div>
        </motion.div>

        {/* Overige USP's */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-6 shadow-md"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-white ${usp.accent}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-zwart">
                  {usp.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zwart/75">
                  {usp.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-roze px-8 py-3.5 font-display text-sm font-bold text-white"
          >
            Ontvang een voorstel op maat
          </Link>
        </div>
      </div>
    </section>
  );
}
