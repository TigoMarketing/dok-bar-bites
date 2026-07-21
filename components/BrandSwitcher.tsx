'use client';

import { motion } from 'framer-motion';
import { useBrand, type Brand } from '@/components/BrandProvider';

const tabs: { id: Brand; label: string }[] = [
  { id: 'dok', label: 'Bar & Bites' },
  { id: 'zusje', label: 'Het Zusje' },
];

export default function BrandSwitcher() {
  const { brand, setBrand } = useBrand();

  // `brand` is already derived from the current route (/ -> dok, /zusje -> zusje),
  // so it doubles as the pathname check for which page-specific pill styling to use.
  const activeBg = brand === 'zusje' ? 'bg-beige' : 'bg-zwart';
  const activeText = brand === 'zusje' ? 'text-roze' : 'text-beige';

  return (
    <div className="relative flex items-center gap-0.5 rounded-full bg-zwart/10 p-1">
      {tabs.map((tab) => {
        const active = brand === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setBrand(tab.id)}
            aria-pressed={active}
            className={`relative z-10 rounded-full px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wide transition-colors duration-300 ${
              active ? activeText : 'text-zwart/60 hover:text-zwart'
            }`}
          >
            {active && (
              <motion.span
                layoutId="brand-switch-pill"
                className={`absolute inset-0 -z-10 rounded-full transition-colors duration-500 ease-in-out ${activeBg}`}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
