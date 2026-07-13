'use client';

import { motion } from 'framer-motion';

export default function FoodDrinksSpotlight() {
  return (
    <section className="bg-blauw px-6 py-20 text-cream md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="font-brush text-4xl text-roze md:text-5xl">
            Sip Happens... In Style!
          </h2>
          <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-beige">
            Onze specials die je móét proberen
          </p>
          <p className="mt-5 text-lg leading-relaxed text-cream/90">
            Van juicy burgers tot onze favoriete all day bites zoals
            knapperige bruschetta, steak tartaar en onze eigen &apos;KFC&apos;
            (Korean Fried Chicken) – we serveren kwalitatief eten voor een
            betaalbare prijs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 grid items-center gap-10 rounded-2xl bg-cream p-8 text-zwart md:grid-cols-2 md:p-10"
        >
          <div className="aspect-square rounded-xl bg-gradient-to-br from-[#8a6a4a] to-[#5c4530]">
            {/* TODO: vervang door echte foto van de Cocktail Tree */}
          </div>
          <div>
            <span className="rounded-full bg-roze px-3 py-1 font-display text-xs font-bold text-white">
              De bestseller van Dordt
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">
              De Cocktail & Spritz Trees
            </h3>
            <p className="mt-3 text-base leading-relaxed">
              Heb je iets te vieren of wil je écht indruk maken op je
              vrienden? Bestel onze exclusieve Cocktail, Spritz of Gin &
              Tonic Tree! Je krijgt 6 premium drankjes, prachtig
              gepresenteerd in een toren voor slechts €70,-. De ultieme
              Instagram-waardige ervaring in Dordrecht!
            </p>
            <p className="mt-4 font-display text-3xl font-extrabold text-blauw">
              €70,- <span className="text-base font-medium text-zwart/60">/ 6 drankjes</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
