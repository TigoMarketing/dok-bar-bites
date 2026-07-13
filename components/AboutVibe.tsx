'use client';

import { motion } from 'framer-motion';
import { Sun, Wine, Users } from 'lucide-react';

const usps = [
  {
    icon: Sun,
    title: 'Het mooiste terras van Dordt',
    body: 'Geniet van de zon, het kabbelende water en de voorbijvarende boten.',
  },
  {
    icon: Wine,
    title: 'Unieke wijnselectie',
    body: 'Geen dertien-in-een-dozijn wijnen. Onze kaart is met zorg samengesteld met kwaliteitswijnen die je nergens anders in de stad schenkt.',
  },
  {
    icon: Users,
    title: 'Vrije inloop vanaf 2 personen',
    body: "Gezellig met z'n tweetjes spontaan een wijntje of speciaalbiertje drinken? Kom gewoon langs, we hebben altijd plek!",
  },
];

export default function AboutVibe() {
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
            Where Good Vibes Meet Great Taste
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
            Het leukste terras aan het water
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            Gelegen aan het bruisende water van de Spuiboulevard vind je DOK
            Bar & Bites – de ultieme spot in Dordrecht om te ontspannen. We
            hebben de industriële look verruild voor warme, zomerse
            Ibiza-vibes. Of je nu langskomt voor een spontane borrel met
            vrienden, een zonnige lunch of een gezellig diner: bij DOK ben je
            always in good company.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {usps.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-beige/40 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blauw text-cream">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-zwart">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zwart/80">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
