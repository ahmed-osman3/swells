import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/data';
import { Phone } from 'lucide-react';

export const metadata = {
  title: "Sympathy Flowers — Sewell's Florist",
  description:
    "Quiet, considered tributes and funeral flowers, delivered across East London with care.",
};

const tributes = [
  { title: 'Hand-tied sheaves', copy: 'Natural, gathered sheaves presented for the casket or graveside.' },
  { title: 'Wreaths', copy: 'Traditional and modern wreaths, from quiet ivory to seasonal colour.' },
  { title: 'Letter tributes', copy: '"Mum", "Dad", "Nan" — classic East London letter frames, hand-massed.' },
  { title: 'Casket sprays', copy: 'Floral covers styled to the casket, in the colours closest to them.' },
  { title: 'Hearts & cushions', copy: 'Open and closed hearts, cushions and pillows — understated or dressed.' },
  { title: 'Bespoke tributes', copy: 'Shapes, symbols, clubs and crests — hand-built to any design.' },
];

export default function FuneralsPage() {
  const sympathy = products.filter((p) => p.category === 'Funeral');

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-ivory-100">
        <div className="container-edge grid md:grid-cols-12 gap-10 md:gap-16 items-center py-20 md:py-28">
          <div className="md:col-span-6 relative z-10">
            <Reveal>
              <div className="eyebrow mb-5 flex items-center gap-3">
                <span className="block w-10 h-px bg-sage-500" /> With care, from Sewell&rsquo;s
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-charcoal text-balance">
                Quiet flowers, <em className="italic font-light text-sage-700">for a difficult time</em>.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lg text-charcoal/75 leading-relaxed max-w-lg">
                For fifty years we have been East London&rsquo;s funeral florist —
                working alongside every local funeral director, and the families
                they serve. Let us take this off your mind.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex items-center gap-4 flex-wrap">
                <a href="tel:+442085345182" className="btn-primary">
                  <Phone size={14} strokeWidth={1.5} /> Call our funeral team
                </a>
                <Link href="#shop" className="btn-ghost">Browse tributes</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="md:col-span-6">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1518895312237-a9e23508077d?auto=format&fit=crop&w=1400&q=85"
                alt="A quiet white sympathy arrangement"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Note */}
      <section className="container-edge py-20 md:py-28 max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-serif italic text-3xl md:text-4xl leading-[1.25] text-charcoal/85 text-balance">
            &ldquo;We are so sorry for your loss. Please take all the time you
            need — our funeral team will guide every detail, quietly, and without
            fuss.&rdquo;
          </p>
          <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-sage-700">
            Helen · Senior Funeral Designer
          </div>
        </Reveal>
      </section>

      {/* Tributes grid */}
      <section className="bg-sage-50 border-y border-sage-100">
        <div className="container-edge py-24 md:py-28">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <div className="eyebrow mb-5">What we design</div>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">
                Every tribute, hand-made in our studio.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sage-100">
            {tributes.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <div className="bg-sage-50 p-8 h-full">
                  <h3 className="font-serif text-2xl mb-3">{t.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{t.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shop section */}
      {sympathy.length > 0 && (
        <section id="shop" className="container-edge py-24 md:py-32">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="eyebrow mb-5">Ready to order</div>
                <h2 className="font-serif text-4xl md:text-5xl text-balance">
                  A small collection of sympathy flowers.
                </h2>
              </div>
              <Link href="/shop?c=Funeral" className="btn-ghost">View all sympathy</Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
            {sympathy.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="container-edge py-24 md:py-28 border-t border-sage-100">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-5">In case it helps</div>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              A few things we&rsquo;re often asked.
            </h2>
          </div>
        </Reveal>
        <dl className="max-w-3xl divide-y divide-charcoal/15">
          {[
            { q: 'Can you deliver directly to the funeral?', a: 'Yes. Tell us the funeral director and service details — we liaise directly with them and arrive in good time.' },
            { q: 'How quickly can you design a tribute?', a: 'We can usually design and deliver within 24 hours, and often the same day for simple pieces.' },
            { q: 'Do you work with our funeral director?', a: 'Almost certainly. We work alongside every East London funeral director and can handle all logistics with them on your behalf.' },
            { q: 'Can the design be kept quiet and simple?', a: 'Of course. Quiet white-and-green is what we do best. Tell us what feels right — we will not oversell you on anything.' },
          ].map((f, i) => (
            <Reveal key={f.q} delay={i * 80}>
              <div className="py-8 grid md:grid-cols-12 gap-4 md:gap-10">
                <dt className="md:col-span-5 font-serif text-xl md:text-2xl text-charcoal">{f.q}</dt>
                <dd className="md:col-span-7 text-charcoal/70 leading-relaxed">{f.a}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </section>
    </>
  );
}
