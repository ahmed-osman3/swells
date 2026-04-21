'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export function WeddingForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-sage-200 bg-sage-50 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-sage-500 mx-auto mb-6 flex items-center justify-center">
          <Check size={22} className="text-ivory-50" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-3xl mb-3">Thank you.</h3>
        <p className="text-charcoal/70 max-w-md mx-auto">
          Your enquiry is with Helen and the team. We&rsquo;ll be in touch within two
          working days to arrange your consultation.
        </p>
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
      <Field label="Your names" name="names" required span={2} placeholder="Sophia & Adam" />
      <Field type="email" label="Email" name="email" required />
      <Field type="tel" label="Phone" name="phone" />
      <Field type="date" label="Wedding date" name="date" />
      <Field label="Venue" name="venue" placeholder="Town Hall Hotel, E2" />
      <Field label="Estimated guest count" name="guests" placeholder="80" />
      <Field label="Approx. floral budget" name="budget" placeholder="£4,500" />
      <div className="md:col-span-2">
        <label className="eyebrow mb-3 block">Tell us about your day</label>
        <textarea
          rows={5}
          name="notes"
          className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 resize-none focus:outline-none transition-colors"
          placeholder="Palette, feeling, venue notes — anything that would help."
        />
      </div>
      <div className="md:col-span-2 flex items-center justify-between mt-2">
        <p className="text-xs text-charcoal/55 max-w-xs">
          We&rsquo;ll never share your details. Required fields are marked.
        </p>
        <button type="submit" className="btn-primary">Send enquiry</button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  placeholder,
  span = 1,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  span?: 1 | 2;
}) {
  return (
    <label className={span === 2 ? 'md:col-span-2 block' : 'block'}>
      <span className="eyebrow mb-3 block">
        {label} {required && <span className="text-blush-600">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 focus:outline-none transition-colors"
      />
    </label>
  );
}
