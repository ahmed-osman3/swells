'use client';

import { useState } from 'react';
import { Check, X, MapPin } from 'lucide-react';

const deliveredPrefixes = ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'IG1', 'IG2', 'IG3', 'IG6', 'IG11'];

export function PostcodeChecker() {
  const [postcode, setPostcode] = useState('');
  const [result, setResult] = useState<'ok' | 'no' | null>(null);

  const check = (pc: string) => {
    const clean = pc.trim().toUpperCase().replace(/\s/g, '');
    if (!clean) return setResult(null);
    const matched = deliveredPrefixes.some((p) => clean.startsWith(p));
    setResult(matched ? 'ok' : 'no');
  };

  return (
    <div className="bg-ivory-50 border border-sage-200 p-7 md:p-8 shadow-sm">
      <div className="eyebrow mb-3 flex items-center gap-2">
        <MapPin size={13} strokeWidth={1.5} /> Check your postcode
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          check(postcode);
        }}
        className="flex items-stretch border-b border-charcoal/30 focus-within:border-charcoal"
      >
        <input
          value={postcode}
          onChange={(e) => {
            setPostcode(e.target.value);
            if (result) setResult(null);
          }}
          placeholder="E15 3ET"
          className="flex-1 bg-transparent py-3 text-xl tracking-[0.1em] uppercase placeholder:text-charcoal/30 focus:outline-none"
        />
        <button type="submit" className="text-[12px] uppercase tracking-[0.22em] text-charcoal hover:text-sage-700 px-4">
          Check
        </button>
      </form>
      {result === 'ok' && (
        <div className="mt-5 flex items-start gap-3 text-sage-700">
          <span className="w-6 h-6 rounded-full bg-sage-500 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check size={13} className="text-ivory-50" strokeWidth={2} />
          </span>
          <div>
            <div className="font-serif text-lg">Same-day delivery, by our team.</div>
            <div className="text-xs text-charcoal/70 mt-1">Order by 1pm and we&rsquo;ll be with you today.</div>
          </div>
        </div>
      )}
      {result === 'no' && (
        <div className="mt-5 flex items-start gap-3 text-blush-700">
          <span className="w-6 h-6 rounded-full bg-blush-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <X size={13} className="text-ivory-50" strokeWidth={2} />
          </span>
          <div>
            <div className="font-serif text-lg">Not on our van route — but still possible.</div>
            <div className="text-xs text-charcoal/70 mt-1">
              We&rsquo;ll send via our nationwide independent florist network.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
