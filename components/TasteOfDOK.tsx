'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    kop: 'Funky Food',
    subkop: 'Shared Dining & Lunch',
    body: "Van onze unieke 'KFC' (Korean Fried Chicken) en loaded nacho's tot vers gemaakte bruschetta. Perfect om te delen, of gewoon lekker voor jezelf te houden.",
    button: 'Bekijk de Foodkaart',
  },
  {
    kop: 'Great Drinks',
    subkop: 'Cocktails & Unieke Wijnen',
    body: 'Onze wijnkaart is met zorg samengesteld met kwaliteitswijnen die je nergens anders in Dordrecht op de kaart vindt. Daarnaast shaken we de lekkerste klassiekers en unieke gin-tonics.',
    button: 'Bekijk de Kaart',
  },
];

export default function TasteOfDOK() {
  return (
    <section id="kaarten" className="bg-cream px-6 py-20 md:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.kop}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl bg-zwart text-cream"
          >
            {/* TODO: vervang door echte detailfoto (wijnglas / bites-plank) */}
            <div className="aspect-[4/3] bg-gradient-to-br from-[#8a6a4a] to-[#5c4530]" />
            <div className="p-8">
              <h3 className="font-brush text-3xl text-roze">{card.kop}</h3>
              <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-beige">
                {card.subkop}
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream/90">
                {card.body}
              </p>
              <button className="mt-6 rounded-full bg-beige px-6 py-3 font-display text-sm font-semibold text-zwart">
                {card.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
