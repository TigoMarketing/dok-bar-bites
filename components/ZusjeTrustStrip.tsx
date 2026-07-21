'use client';

const stats = [
  { value: 'Tot 50', label: 'gasten' },
  { value: 'Gratis', label: 'zaalhuur vanaf 30 pers.' },
  { value: '€9', label: 'p.p./uur onbeperkt' },
  { value: '4,3★', label: '424 Google-reviews' },
];

export default function ZusjeTrustStrip() {
  return (
    <section className="bg-roze px-6 py-10 md:px-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-2xl font-extrabold text-white md:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/80 md:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/contact"
          className="inline-block rounded-full bg-zwart px-6 py-3 font-display text-sm font-bold text-cream"
        >
          Check de mogelijkheden voor jouw groep
        </a>
      </div>
    </section>
  );
}
