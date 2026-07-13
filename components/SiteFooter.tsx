'use client';

export default function SiteFooter() {
  return (
    <footer
      id="footer"
      className="bg-beige px-6 py-16 text-center md:px-12"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='90' viewBox='0 0 120 90'%3E%3Cg fill='none' stroke='%23d6a276' stroke-width='1.4' opacity='0.6'%3E%3Cpath d='M10 80 C10 40, 50 40, 50 80'/%3E%3Cpath d='M18 80 C18 48, 42 48, 42 80'/%3E%3Cpath d='M26 80 C26 56, 34 56, 34 80'/%3E%3Cpath d='M70 80 C70 40, 110 40, 110 80'/%3E%3Cpath d='M78 80 C78 48, 102 48, 102 80'/%3E%3Cpath d='M86 80 C86 56, 94 56, 94 80'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
    >
      <h2 className="font-brush text-4xl text-roze md:text-5xl">
        Are you ready?
      </h2>
      <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
        Kom gezellig langs!
      </p>
      <p className="mt-4 text-base text-zwart">
        Spuiboulevard 97E, Dordrecht | Tel: 078 843 21 52
        <br />
        Geopend van woensdag t/m zondag vanaf 12:00 uur.
      </p>
      <button
        data-zc-action="open"
        className="mx-auto mt-7 flex items-center gap-2 rounded-full bg-roze px-6 py-3 font-display text-sm font-semibold text-white"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-xs font-bold text-roze">
          Z
        </span>
        Claim jouw plekje op het terras
      </button>
    </footer>
  );
}
