import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { contact } from '@/lib/data';
import { ContactForm } from './ContactForm';

export const metadata = {
  title: "Visit — Sewell's Florist",
  description:
    "Come and see us on Plaistow Road, E15. Open seven days a week with same-day hand delivery across East London.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24 pb-16 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <div className="eyebrow mb-5">Visit</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
              Come and <em className="italic font-light text-sage-700">say hello</em>.
            </h1>
            <p className="mt-6 text-charcoal/75 leading-relaxed max-w-md">
              The studio is open seven days a week. Walk-ins always welcome —
              the kettle is on.
            </p>
          </Reveal>

          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-4">
              <MapPin size={18} strokeWidth={1.5} className="text-sage-700 mt-1" />
              <div>
                <div className="eyebrow mb-2">Studio</div>
                <div className="font-serif text-xl">{contact.address}</div>
                <div className="font-serif text-xl">{contact.city} {contact.postcode}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={18} strokeWidth={1.5} className="text-sage-700 mt-1" />
              <div>
                <div className="eyebrow mb-2">Call</div>
                <a href={contact.phoneHref} className="font-serif text-xl hover:text-sage-700">
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail size={18} strokeWidth={1.5} className="text-sage-700 mt-1" />
              <div>
                <div className="eyebrow mb-2">Write</div>
                <a href={`mailto:${contact.email}`} className="font-serif text-xl hover:text-sage-700">
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={18} strokeWidth={1.5} className="text-sage-700 mt-1" />
              <div>
                <div className="eyebrow mb-2">Opening</div>
                <div className="space-y-0.5">
                  {contact.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-10 text-sm max-w-[260px]">
                      <span>{h.day}</span>
                      <span className="tabular-nums">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1460411794035-42aac080490a?auto=format&fit=crop&w=1600&q=85"
                alt="Sewell's Florist shopfront"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <ContactForm />
        </div>
      </section>

      {/* Map-style strip */}
      <section className="bg-sage-50 border-y border-sage-100">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-40" />
          <div className="container-edge py-20 grid md:grid-cols-12 gap-10 items-center relative">
            <div className="md:col-span-6">
              <div className="eyebrow mb-4">Finding us</div>
              <h2 className="font-serif text-3xl md:text-4xl text-balance">
                Three minutes from Plaistow station — look for the green shopfront.
              </h2>
            </div>
            <div className="md:col-span-6 space-y-3 text-sm text-charcoal/75">
              <div className="flex justify-between gap-6 border-b border-charcoal/15 pb-3">
                <span className="text-[11px] uppercase tracking-[0.22em] text-sage-700">Tube</span>
                <span>Plaistow · District / Hammersmith &amp; City</span>
              </div>
              <div className="flex justify-between gap-6 border-b border-charcoal/15 pb-3">
                <span className="text-[11px] uppercase tracking-[0.22em] text-sage-700">Buses</span>
                <span>69, 276, 330, 473</span>
              </div>
              <div className="flex justify-between gap-6 border-b border-charcoal/15 pb-3">
                <span className="text-[11px] uppercase tracking-[0.22em] text-sage-700">Parking</span>
                <span>Free on Plaistow Road after 6.30pm, metered by day.</span>
              </div>
              <div className="flex justify-between gap-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-sage-700">What3words</span>
                <span className="font-serif italic">///thrown.gains.waters</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
