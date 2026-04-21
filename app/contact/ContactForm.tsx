'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="border border-sage-200 bg-sage-50 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-sage-500 mx-auto mb-6 flex items-center justify-center">
          <Check size={22} className="text-ivory-50" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-3xl mb-3">Thank you.</h3>
        <p className="text-charcoal/70">We&rsquo;ll get back to you within one working day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <label className="block">
        <span className="eyebrow mb-3 block">Your name *</span>
        <input required className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 focus:outline-none transition-colors" />
      </label>
      <label className="block">
        <span className="eyebrow mb-3 block">Email *</span>
        <input type="email" required className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 focus:outline-none transition-colors" />
      </label>
      <label className="block md:col-span-2">
        <span className="eyebrow mb-3 block">Subject</span>
        <input className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 focus:outline-none transition-colors" />
      </label>
      <label className="block md:col-span-2">
        <span className="eyebrow mb-3 block">Message</span>
        <textarea rows={5} className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 focus:outline-none resize-none transition-colors" />
      </label>
      <div className="md:col-span-2 flex justify-end pt-2">
        <button type="submit" className="btn-primary">Send message</button>
      </div>
    </form>
  );
}
