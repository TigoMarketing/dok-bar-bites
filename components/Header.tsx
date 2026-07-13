'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Funky Food', href: '/#kaarten' },
  { label: 'Great Drinks', href: '/#kaarten' },
  { label: 'Het Zusje', href: '/zusje' },
  { label: 'Contact', href: '/#footer' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" className="font-display text-xl font-extrabold text-zwart">
          DOK <span className="text-roze">Bar & Bites</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-sm font-semibold text-zwart transition-colors hover:text-roze"
            >
              {link.label}
            </Link>
          ))}
          <button
            data-zc-action="open"
            className="flex items-center gap-2 rounded-full bg-roze px-5 py-2.5 font-display text-sm font-semibold text-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-roze">
              Z
            </span>
            Reserveer
          </button>
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
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 font-display text-base font-semibold text-zwart"
            >
              {link.label}
            </Link>
          ))}
          <button
            data-zc-action="open"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-roze px-5 py-3 font-display text-sm font-semibold text-white"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-roze">
              Z
            </span>
            Reserveer een tafel
          </button>
        </nav>
      )}
    </header>
  );
}
