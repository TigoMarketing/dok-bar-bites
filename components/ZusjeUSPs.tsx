'use client';

import { motion } from 'framer-motion';
import { Gift, KeyRound, GlassWater, Users2, PartyPopper } from 'lucide-react';

const usps = [
  {
    icon: Gift,
    title: 'Gratis zaalhuur vanaf 30 personen',
    body: 'Kom je met een groep van 30 personen of meer? Dan vervalt de zaalhuur (t.w.v. €350,- tot €400,-) volledig! Je betaalt alleen voor wat je eet en drinkt.',
  },
  {
    icon: KeyRound,
    title: 'Volledige exclusiviteit',
    body: 'De ruimte is helemaal van jou. Dat betekent een eigen privébar, eigen muziekinstallatie, eigen toiletten én een eigen stuk terras aan het water. Geen pottenkijkers!',
  },
  {
    icon: GlassWater,
    title: 'Onbeperkt genieten vanaf €9,50 per uur',
    body: 'Geen onverwachte kosten achteraf. Maak gebruik van ons drankenarrangement met onbeperkt bier, fris en wijn vanaf slechts €9,50 per persoon per uur!',
  },
  {
    icon: Users2,
    title: 'Capaciteit tot 50 personen',
    body: 'Perfect ingericht voor groepen tot 50 personen (binnen). Bij mooi weer kunnen we dit in overleg uitbreiden tot grotere groepen met het terras erbij.',
  },
  {
    icon: PartyPopper,
    title: 'Aankleding op maat',
    body: 'We werken samen met een professionele ballonnenpartner. Afhankelijk van jouw besteedbare budget, krijg je van ons een budget vrij om de ruimte nóg feestelijker aan te kleden met ballonnenbogen, fotobooths of teksten naar keuze!',
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
          className="max-w-2xl"
        >
          <h2 className="font-brush text-4xl text-roze md:text-5xl">
            Waarom vieren bij Het Zusje?
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
            Alles tot in de puntjes geregeld
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            Waar andere feestlocaties vaak kille, kale ruimtes zijn die je
            zelf nog moet aankleden, is Het Zusje vanaf het eerste moment
            sfeervol, warm en feestelijk ingericht.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {usps.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-4 rounded-2xl bg-beige/40 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blauw text-cream">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-zwart">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zwart/80">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
