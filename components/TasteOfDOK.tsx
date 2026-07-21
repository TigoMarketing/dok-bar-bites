'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MenuModal from '@/components/MenuModal';

const cards = [
  {
    kop: 'Funky Food',
    subkop: 'Shared Dining & Lunch',
    body: "Van onze unieke 'KFC' (Korean Fried Chicken) en loaded nacho's tot vers gemaakte bruschetta. Perfect om te delen, of gewoon lekker voor jezelf te houden.",
    button: 'Bekijk de Foodkaart',
    image: '/Images/Eten.jpg',
    menuImage: '/Images/Etenkaart.png',
  },
  {
    kop: 'Great Drinks',
    subkop: 'Cocktails & Unieke Wijnen',
    body: 'Onze wijnkaart is met zorg samengesteld met kwaliteitswijnen die je nergens anders in Dordrecht op de kaart vindt. Daarnaast shaken we de lekkerste klassiekers en unieke gin-tonics.',
    button: 'Bekijk de Kaart',
    image: '/Images/Drinken.jpg',
    imagePosition: 'center 21%',
    menuImage: '/Images/Drankenkaart.png',
  },
];

export default function TasteOfDOK() {
  const [activeMenu, setActiveMenu] = useState<{ src: string; alt: string } | null>(null);

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
            className={`overflow-hidden rounded-2xl bg-espresso text-cream ${
              card.kop === 'Funky Food' ? 'relative' : ''
            }`}
          >
            {card.kop === 'Funky Food' && (
              <img
                src="/Images/Funky_Spetters_1.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -top-4 z-10 w-28 rotate-[8deg] drop-shadow-lg"
              />
            )}
            <div className="relative aspect-[4/3]">
              <Image
                src={card.image}
                alt={card.kop}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: card.imagePosition ?? 'center' }}
              />
            </div>
            <div className="p-8">
              <h3 className="font-brush text-3xl text-roze">{card.kop}</h3>
              <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-beige">
                {card.subkop}
              </p>
              <p className="mt-4 text-base leading-relaxed text-cream/90">
                {card.body}
              </p>
              <button
                type="button"
                onClick={() => setActiveMenu({ src: card.menuImage, alt: card.kop })}
                className="mt-6 rounded-full bg-gold px-6 py-3 font-display text-sm font-semibold text-espresso"
              >
                {card.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <MenuModal menu={activeMenu} onClose={() => setActiveMenu(null)} />
    </section>
  );
}
