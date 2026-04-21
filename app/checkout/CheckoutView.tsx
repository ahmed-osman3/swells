'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { Check, Lock, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const steps = ['Delivery', 'Billing', 'Review'] as const;

export function CheckoutView() {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const delivery = subtotal > 60 ? 0 : 6;
  const total = subtotal + delivery;

  if (complete) {
    return (
      <section className="container-edge pt-16 pb-24 max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-sage-500 mx-auto mb-8 flex items-center justify-center">
          <Check size={24} strokeWidth={1.5} className="text-ivory-50" />
        </div>
        <div className="eyebrow mb-5">Order placed</div>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
          Thank you. The studio is already <em className="italic font-light text-sage-700">on it</em>.
        </h1>
        <p className="mt-6 text-charcoal/75 leading-relaxed">
          A confirmation is on its way to your inbox. If anything changes,
          we&rsquo;ll call you on the number you gave us.
        </p>
        <div className="mt-10">
          <Link href="/shop" className="btn-primary">Continue browsing</Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="container-edge pt-16 pb-24 text-center max-w-xl mx-auto">
        <div className="eyebrow mb-5">Checkout</div>
        <h1 className="font-serif text-5xl leading-[1.05]">Your basket is empty.</h1>
        <p className="mt-6 text-charcoal/75">Pick a few blooms and we&rsquo;ll meet you right here.</p>
        <Link href="/shop" className="btn-primary mt-8 inline-flex">Browse the shop</Link>
      </section>
    );
  }

  return (
    <section className="container-edge pt-12 pb-24">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight">Checkout</h1>
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-sage-700">
          <Lock size={12} strokeWidth={1.5} /> Secure checkout
        </div>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-4 mb-12 border-t border-b border-charcoal/15 py-5">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <span
              className={clsx(
                'w-7 h-7 rounded-full border flex items-center justify-center text-xs tabular-nums',
                i <= step ? 'bg-charcoal text-ivory-50 border-charcoal' : 'border-charcoal/30 text-charcoal/50'
              )}
            >
              {i + 1}
            </span>
            <span
              className={clsx(
                'text-[12px] uppercase tracking-[0.22em]',
                i <= step ? 'text-charcoal' : 'text-charcoal/50'
              )}
            >
              {s}
            </span>
            {i < steps.length - 1 && <ChevronRight size={14} className="text-charcoal/30" />}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7">
          {step === 0 && <DeliveryStep onContinue={() => setStep(1)} />}
          {step === 1 && <BillingStep onContinue={() => setStep(2)} onBack={() => setStep(0)} />}
          {step === 2 && (
            <ReviewStep
              onBack={() => setStep(1)}
              onPlace={() => {
                clear();
                setComplete(true);
              }}
            />
          )}
        </div>

        {/* Summary */}
        <aside className="md:col-span-5 md:pl-8">
          <div className="border border-sage-100 bg-ivory-100 p-8 md:sticky md:top-28">
            <div className="eyebrow mb-5">Order summary</div>
            <ul className="divide-y divide-sage-200">
              {items.map(({ product, qty }) => (
                <li key={product.slug} className="py-4 flex gap-4">
                  <div
                    className="w-14 h-16 bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-serif text-base leading-tight">{product.name}</div>
                    <div className="text-xs text-charcoal/55 mt-0.5">Qty {qty}</div>
                  </div>
                  <div className="font-serif tabular-nums">£{product.price * qty}</div>
                </li>
              ))}
            </ul>
            <div className="pt-5 mt-4 border-t border-sage-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-charcoal/70">Subtotal</span>
                <span className="tabular-nums">£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal/70">Delivery</span>
                <span className="tabular-nums">{delivery === 0 ? 'Complimentary' : `£${delivery.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between pt-3 mt-2 border-t border-sage-200 text-lg font-serif">
                <span>Total</span>
                <span className="tabular-nums">£{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Input({
  label,
  type = 'text',
  required,
  span = 1,
  placeholder,
}: {
  label: string;
  type?: string;
  required?: boolean;
  span?: 1 | 2;
  placeholder?: string;
}) {
  return (
    <label className={span === 2 ? 'md:col-span-2 block' : 'block'}>
      <span className="eyebrow mb-3 block">
        {label} {required && <span className="text-blush-600">*</span>}
      </span>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 focus:outline-none transition-colors"
      />
    </label>
  );
}

function DeliveryStep({ onContinue }: { onContinue: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onContinue();
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <Input label="Recipient name" required span={2} />
      <Input label="Phone" type="tel" required />
      <Input label="Email for updates" type="email" required />
      <Input label="Delivery address" required span={2} />
      <Input label="Town" required />
      <Input label="Postcode" required />
      <label className="md:col-span-2 block">
        <span className="eyebrow mb-3 block">Delivery note (optional)</span>
        <textarea
          rows={3}
          placeholder="e.g. leave with the neighbour in No. 14"
          className="w-full bg-transparent border-b border-charcoal/30 focus:border-charcoal py-3 focus:outline-none resize-none"
        />
      </label>
      <div className="md:col-span-2 flex justify-end mt-4">
        <button type="submit" className="btn-primary">Continue to billing</button>
      </div>
    </form>
  );
}

function BillingStep({ onContinue, onBack }: { onContinue: () => void; onBack: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onContinue();
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <Input label="Card number" required span={2} placeholder="4242 4242 4242 4242" />
      <Input label="Expiry" required placeholder="MM / YY" />
      <Input label="Security code" required placeholder="123" />
      <Input label="Name on card" required span={2} />
      <Input label="Billing address (if different)" span={2} />
      <div className="md:col-span-2 flex justify-between mt-4">
        <button type="button" onClick={onBack} className="btn-ghost">Back</button>
        <button type="submit" className="btn-primary">Review order</button>
      </div>
    </form>
  );
}

function ReviewStep({ onPlace, onBack }: { onPlace: () => void; onBack: () => void }) {
  return (
    <div>
      <p className="text-charcoal/75 leading-relaxed max-w-lg mb-8">
        Everything looks good. Once you place the order our designers begin
        immediately — we&rsquo;ll send a photo of the finished arrangement before it
        heads out for delivery.
      </p>
      <div className="flex items-center justify-between">
        <button type="button" onClick={onBack} className="btn-ghost">Back</button>
        <button onClick={onPlace} className="btn-primary">Place order</button>
      </div>
      <p className="mt-6 text-xs text-charcoal/55 max-w-md">
        By placing your order, you agree to our terms of service. Your card is
        authorised now and charged when your order is dispatched.
      </p>
    </div>
  );
}
