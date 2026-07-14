'use client';

import { useEffect, useState } from 'react';

// TODO: sluitingstijd checken bij Luuk — nu ingesteld op 00:00 als placeholder
const OPEN_HOUR = 12;
const CLOSE_HOUR = 24; // 24 = middernacht
const CLOSED_DAYS = [1, 2]; // 0=zo, 1=ma, 2=di, 3=wo ... 6=za — dicht op ma & di

function getStatus() {
  const now = new Date();
  const day = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const isClosedDay = CLOSED_DAYS.includes(day);
  const isOpenNow =
    !isClosedDay &&
    minutesNow >= OPEN_HOUR * 60 &&
    minutesNow < CLOSE_HOUR * 60;

  return isOpenNow
    ? `Nu open · sluit om ${CLOSE_HOUR === 24 ? '00:00' : CLOSE_HOUR + ':00'}`
    : 'Nu gesloten · open woensdag t/m zondag vanaf 12:00';
}

export default function StatusBar() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    setStatus(getStatus());
    const interval = setInterval(() => setStatus(getStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blauw px-4 py-2 text-center font-display text-xs font-semibold tracking-wide text-cream">
      {status ?? 'Woensdag t/m zondag vanaf 12:00'} &nbsp;·&nbsp; Spuiboulevard 97E, Dordrecht
    </div>
  );
}
