import ContactForm from '@/components/ContactForm';
import FloatingReserve from '@/components/FloatingReserve';

export default function ContactPage() {
  return (
    <main className="bg-cream px-6 py-16 md:px-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-brush text-4xl text-roze md:text-5xl">
          Neem contact op
        </h1>
        <p className="mt-2 font-display text-sm font-bold uppercase tracking-widest text-blauw">
          We horen graag van je
        </p>
        <p className="mt-5 text-base leading-relaxed text-zwart/80">
          Vraag over het restaurant, of wil je Het Zusje boeken voor een
          feestje? Laat het ons weten via het formulier hieronder, of bel
          direct naar 078 843 21 52.
        </p>

        <div className="mt-10 rounded-3xl bg-white/60 p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
      <FloatingReserve />
    </main>
  );
}
