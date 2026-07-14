'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// TODO: vervang door echte teamleden (naam, functie, foto) zodra bekend
const team = [
  { name: 'Naam teamlid', role: 'Functie' },
  { name: 'Naam teamlid', role: 'Functie' },
  { name: 'Naam teamlid', role: 'Functie' },
  { name: 'Naam teamlid', role: 'Functie' },
  { name: 'Naam teamlid', role: 'Functie' },
];

export default function MeetTheTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -280 : 280,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-blauw px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-brush text-4xl text-beige md:text-5xl">
              Meet the Team
            </h2>
            <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-cream">
              De gezichten achter DOK
            </p>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Vorige"
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-roze"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Volgende"
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-roze"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl bg-cream"
            >
              {/* TODO: vervang door echte teamfoto */}
              <div className="aspect-square bg-gradient-to-br from-[#8a6a4a] to-[#5c4530]" />
              <div className="p-4">
                <p className="font-display text-base font-bold text-zwart">
                  {member.name}
                </p>
                <p className="text-sm text-zwart/70">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
