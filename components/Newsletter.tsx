'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section className="bg-sage-50 border-y border-sage-100">
      <div className="container-edge py-24 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <div className="eyebrow mb-4">Our letters</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-charcoal text-balance">
            Seasonal notes from the studio, straight to your inbox.
          </h2>
        </div>
        <div className="md:col-span-6 md:pl-10">
          <p className="text-charcoal/70 max-w-md mb-6 leading-relaxed">
            Occasional dispatches — the blooms in season, tips from our
            designers, and a first look at new arrivals. No spam, ever.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setDone(true);
            }}
            className="flex items-center border-b border-charcoal/30 focus-within:border-charcoal transition-colors max-w-lg"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={done}
              placeholder="your@email.com"
              className="flex-1 bg-transparent py-3 text-lg placeholder:text-charcoal/40 focus:outline-none"
            />
            <button
              type="submit"
              disabled={done}
              className="flex items-center gap-2 py-3 text-[12px] uppercase tracking-[0.22em] text-charcoal hover:text-sage-700"
            >
              {done ? (
                <>
                  Welcome <Check size={16} strokeWidth={1.5} />
                </>
              ) : (
                <>
                  Subscribe <ArrowRight size={16} strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
