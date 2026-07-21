export default function FloatingReserve() {
  return (
    <button className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-zwart px-5 py-3 font-display text-sm font-semibold text-cream shadow-lg">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)] font-display text-xs font-bold text-white transition-colors duration-500 ease-in-out">
        Z
      </span>
      Reserveer een tafel
    </button>
  );
}
