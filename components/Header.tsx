'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useBrand, type Brand } from '@/components/BrandProvider';
import BrandSwitcher from '@/components/BrandSwitcher';

const navLinks: Record<Brand, { label: string; href: string }[]> = {
  dok: [
    { label: 'Funky Food & Drinks', href: '/#kaarten' },
    { label: 'Meet the Team', href: '/#team' },
    { label: 'Sfeerbeelden', href: '/#sfeerbeelden' },
    { label: 'Reserveren', href: '/contact' },
  ],
  zusje: [
    { label: 'Home / Over Het Zusje', href: '/zusje' },
    { label: 'Afhuren / Besloten feesten', href: '/zusje#zaalhuur' },
    { label: 'Terras & Binnentuin', href: '/zusje' },
    { label: 'Contact & Reserveren', href: '/contact' },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const { brand } = useBrand();
  const links = navLinks[brand];
  const [mainLinks, ctaLink] = [links.slice(0, -1), links[links.length - 1]];

  return (
    <header className="sticky top-0 z-40 border-b-2 border-gold bg-cream/95 backdrop-blur transition-colors duration-500 ease-in-out">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-12">
        <div className="flex items-center gap-4">
          <Link href={brand === 'zusje' ? '/zusje' : '/'} className="shrink-0">
            <AnimatePresence mode="wait">
              {brand === 'dok' ? (
                <motion.div
                  key="dok-logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src="/Images/dok-logo-square.png"
                    alt="DOK Bar & Bites"
                    width={2480}
                    height={2480}
                    priority
                    className="h-14 w-14 -my-2 md:h-16 md:w-16 md:-my-2"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="zusje-logo"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src="/Images/zusje-logo-square.png"
                    alt="Het Zusje van DOK"
                    width={3152}
                    height={3160}
                    priority
                    className="h-14 w-14 -my-2 md:h-16 md:w-16 md:-my-2"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Link>

          <BrandSwitcher />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-8"
            >
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-display text-sm font-semibold text-zwart transition-colors hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaLink.href}
                className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors duration-500 ease-in-out"
              >
                {ctaLink.label}
              </Link>
            </motion.div>
          </AnimatePresence>
        </nav>

        <button
          aria-label={open ? 'Sluit menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
          className="text-zwart md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-beige-line bg-cream px-6 pb-6 pt-2 md:hidden">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 font-display text-base font-semibold text-zwart"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaLink.href}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 font-display text-sm font-semibold text-white transition-colors duration-500 ease-in-out"
          >
            {ctaLink.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
