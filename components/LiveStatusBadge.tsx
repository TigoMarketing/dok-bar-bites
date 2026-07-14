'use client';

import { useEffect, useState } from 'react';

// TODO: sluitingstijd checken bij Luuk — nu ingesteld op 00:00 als placeholder
const OPEN_HOUR = 12;
const CLOSE_HOUR = 24; // 24 = middernacht
const CLOSED_DAYS = [1, 2]; // 0=zo, 1=ma, 2=di ... 6=za — dicht op ma & di

function getStatus() {
  const now = new Date();
  const day = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const isClosedDay = CLOSED_DAYS.includes(day);
  const isOpenNow =
    !isClosedDay &&
    minutesNow >= OPEN_HOUR * 60 &&
    minutesNow < CLOSE_HOUR * 60;

  return {
    open: isOpenNow,
    label: isOpenNow
      ? `Nu open · sluit om ${CLOSE_HOUR === 24 ? '00:00' : CLOSE_HOUR + ':00'}`
      : 'Nu gesloten · open woensdag t/m zondag vanaf 12:00',
  };
}

export default function LiveStatusBadge() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const interval = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const glow = status.open
    ? 'shadow-[0_0_10px_3px_rgba(57,255,20,0.8)] bg-[#39ff14]'
    : 'shadow-[0_0_10px_3px_rgba(255,49,49,0.8)] bg-[#ff3131]';

  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
      <span className={`h-2.5 w-2.5 shrink-0 animate-pulse rounded-full ${glow}`} />
      <span className="font-display text-xs font-semibold uppercase tracking-wide text-cream">
        {status.label}
      </span>
    </div>
  );
}
