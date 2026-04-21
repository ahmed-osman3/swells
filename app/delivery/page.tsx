import Link from 'next/link';
import Image from 'next/image';
import { Clock, Truck, MapPin } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { deliveryAreas } from '@/lib/data';
import { PostcodeChecker } from './PostcodeChecker';

export const metadata = {
  title: "Delivery — Sewell's Florist",
  description:
    'Hand-delivered same-day flowers across East London. Order by 1pm for same-day; nationwide options available.',
};

export default function DeliveryPage() {
  return (
    <>
      <section className="bg-sage-50 border-b border-sage-100">
        <div className="container-edge pt-16 pb-16 md:pt-20 md:pb-20 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <div className="eyebrow mb-5">Delivery</div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
                Hand-delivered, <em className="italic font-light text-sage-700">not couriered</em>.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-charcoal/75 leading-relaxed max-w-xl">
                Across East London we drive our own vans — no third-party
                couriers. For everywhere else, we&rsquo;ve partnered with a
                hand-picked network of independent florists.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-5" delay={200}>
            <PostcodeChecker />
          </Reveal>
        </div>
      </section>

      {/* Three options */}
      <section className="container-edge py-24 md:py-32 grid md:grid-cols-3 gap-px bg-sage-100">
        {[
          { icon: Clock, title: 'Same-day, East London', copy: 'Order by 1pm Mon–Sat and we&rsquo;ll hand-deliver the same day across E1–E17.', price: 'from £6' },
          { icon: Truck, title: 'Next-day, UK-wide', copy: 'Ordered before 4pm, sent with our trusted independent florist network.', price: 'from £9' },
          { icon: MapPin, title: 'Studio collection', copy: 'Order online and collect in-store — we&rsquo;ll have it wrapped and waiting for you.', price: 'free' },
        ].map((o, i) => (
          <Reveal key={o.title} delay={i * 120}>
            <div className="bg-ivory-50 p-10 h-full">
              <o.icon size={24} strokeWidth={1.25} className="text-sage-700 mb-6" />
              <h3 className="font-serif text-2xl mb-3">{o.title.replace('&rsquo;', '’')}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: o.copy }} />
              <div className="mt-6 text-[11px] uppercase tracking-[0.22em] text-sage-700">{o.price}</div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Areas */}
      <section className="bg-charcoal text-ivory-50">
        <div className="container-edge py-24 md:py-32">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/55 mb-5">Where we deliver, by hand</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
                Fifty years of the same streets.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ivory-50/10">
            {deliveryAreas.map((a) => (
              <div key={a.name} className="bg-charcoal px-5 py-5 hover:bg-charcoal-soft transition-colors">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ivory-50/55 mb-1">{a.postcode}</div>
                <div className="font-serif text-xl">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <div className="eyebrow mb-5">Delivery windows</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Choose the moment they arrive.
            </h2>
            <p className="mt-6 text-charcoal/75 leading-relaxed max-w-md">
              For East London deliveries we offer two-hour windows, and a named
              recipient handover at your request.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <div className="divide-y divide-charcoal/15">
            {[
              { when: 'Morning', time: '9.00 — 11.00' },
              { when: 'Midday', time: '11.00 — 13.00' },
              { when: 'Afternoon', time: '13.00 — 15.00' },
              { when: 'Early evening', time: '15.00 — 18.00' },
            ].map((s) => (
              <div key={s.when} className="flex items-center justify-between py-5">
                <span className="font-serif text-2xl">{s.when}</span>
                <span className="text-sm text-charcoal/70 tabular-nums">{s.time}</span>
              </div>
            ))}
          </div>
          <Link href="/shop" className="btn-primary mt-8">Shop flowers</Link>
        </div>
      </section>

      {/* Closing image */}
      <section className="relative h-[52vh] min-h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&w=2000&q=85"
          alt="Our delivery van, loaded"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>
    </>
  );
}
