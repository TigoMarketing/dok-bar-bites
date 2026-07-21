import ContactForm from '@/components/ContactForm';
import FloatingReserve from '@/components/FloatingReserve';

export default function ContactPage() {
  return (
    <main className="bg-cream px-6 py-16 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-brush text-4xl text-roze md:text-5xl">
          Neem contact op
        </h1>
        <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
          We horen graag van je
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-zwart/80">
          Vraag over het restaurant, of wil je Het Zusje boeken voor een
          feestje? Laat het ons weten via het formulier hieronder, of bel
          direct naar 078 843 21 52.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_300px]">
          <div className="rounded-3xl bg-white/60 p-6 md:p-8">
            <ContactForm />
          </div>

          <div className="overflow-hidden rounded-3xl border-2 border-beige-line">
            <iframe
              title="DOK Bar & Bites op de kaart"
              src="https://maps.google.com/maps?q=Spuiboulevard+97E+Dordrecht&z=16&output=embed"
              className="h-56 w-full md:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-white/80 p-4">
              <p className="font-display text-sm font-bold text-zwart">
                Spuiboulevard 97E
              </p>
              <p className="text-sm text-zwart/70">3311 GN Dordrecht</p>
              <a
                href="https://maps.google.com/maps?q=Spuiboulevard+97E+Dordrecht"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-display text-sm font-semibold text-roze"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
      <FloatingReserve />
    </main>
  );
}
