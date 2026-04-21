'use client';

import { useEffect, useState } from 'react';

const messages = [
  'Same-day delivery across East London · Order by 1pm',
  'Hand-crafted in Plaistow Road, E15 · Since 1974',
  'Complimentary in-store consultations for weddings & events',
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-charcoal text-ivory-50 text-[11px] uppercase tracking-[0.28em] py-2.5">
      <div className="container-edge flex items-center justify-center">
        <div className="relative h-4 overflow-hidden w-full max-w-md text-center">
          {messages.map((m, i) => (
            <span
              key={m}
              className={`absolute inset-0 transition-all duration-700 ${
                i === index
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
