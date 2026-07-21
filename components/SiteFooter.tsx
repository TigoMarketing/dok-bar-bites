'use client';

import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'Funky Food', href: '/#kaarten' },
  { label: 'Great Drinks', href: '/#kaarten' },
  { label: 'Het Zusje', href: '/zusje' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteFooter() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-beige px-6 pb-8 pt-14 md:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45 mix-blend-overlay"
        style={{
          backgroundImage: "url('/Images/Veren off.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr_0.9fr]">
          {/* Brand + CTA */}
          <div>
            <h2 className="font-brush text-3xl text-roze md:text-4xl">
              Are you ready?
            </h2>
            <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-blauw">
              Kom gezellig langs!
            </p>
            <button
              data-zc-action="open"
              className="mt-5 flex w-fit items-center gap-2 rounded-full bg-roze px-6 py-3 font-display text-sm font-bold text-white shadow-lg"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-roze">
                Z
              </span>
              Reserveer een tafel
            </button>
          </div>

          {/* Navigatie */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-zwart/50">
              Menu
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-display text-sm font-semibold text-zwart transition-colors hover:text-roze"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-zwart/50">
              Contact
            </p>
            <div className="mt-4 text-sm leading-relaxed text-zwart/80">
              <p className="font-display font-semibold text-zwart">
                Spuiboulevard 97E
              </p>
              <p>Dordrecht</p>
              <p className="mt-2">Tel: 078 843 21 52</p>
              <p className="mt-2">Woensdag t/m zondag</p>
              <p>vanaf 12:00 uur</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-zwart/50">
              Volg ons
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/dokbarenbites/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-75"
              >
                <Image src="/Images/Instagram off.png" alt="" width={225} height={225} className="h-full w-full object-contain" />
              </a>
              <a
                href="https://www.facebook.com/dokbarenbites"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-75"
              >
                <Image src="/Images/facebook-cropped.png" alt="" width={128} height={126} className="h-full w-full object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-beige-line pt-6 text-center text-xs text-zwart/50">
          © {new Date().getFullYear()} DOK Bar & Bites
        </div>
      </div>
    </footer>
  );
}
