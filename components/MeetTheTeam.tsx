'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const team = [
  { name: 'Joey', photo: '/Images/Joey.jpg' },
  { name: 'Luuk', photo: '/Images/Luuk.jpg' },
  { name: 'Victor', photo: '/Images/Victor.jpg' },
  { name: 'Naam teamlid', photo: null },
  { name: 'Naam teamlid', photo: null },
];

export default function MeetTheTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth',
    });
  };

  return (
    <section id="team" className="bg-zwart px-6 py-20 md:px-12">
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
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              aria-label="Vorige"
              onClick={() => scroll('left')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-goud"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Volgende"
              onClick={() => scroll('right')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-goud"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="mt-10 grid grid-cols-2 gap-4 md:flex md:snap-x md:snap-mandatory md:gap-5 md:overflow-x-auto md:pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-cream md:w-[340px] md:shrink-0 md:snap-start"
            >
              {member.photo ? (
                <div className="relative aspect-square">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 340px, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                // TODO: vervang door echte teamfoto
                <div className="aspect-square bg-gradient-to-br from-gold to-espresso" />
              )}
              <div className="p-5">
                <p className="font-brush text-3xl text-roze">{member.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
