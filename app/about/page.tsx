import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

export const metadata = {
  title: "Our Story — Sewell's Florist",
  description:
    "An East London family florist since 1974 — three generations designing flowers from our studio on Plaistow Road.",
};

const milestones = [
  { year: '1974', title: 'A market barrow', copy: 'Dorothy Sewell opens a flower stall outside Plaistow station.' },
  { year: '1982', title: '165 Plaistow Road', copy: 'The shop moves into the green-fronted building it still calls home.' },
  { year: '1998', title: 'Second generation', copy: 'Helen Sewell joins the studio; weddings become a specialism.' },
  { year: '2014', title: 'Third generation', copy: 'Rosa and Iman take on design, bringing an editorial, modern hand.' },
  { year: '2020', title: 'The new studio', copy: 'A quiet refit — concrete, oak and brass — without losing a single regular.' },
  { year: '2024', title: 'Fifty years on', copy: 'Still family, still family-run, still in the same little corner of E15.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-edge pt-16 md:pt-24 pb-8">
        <Reveal>
          <div className="eyebrow mb-6">Our story</div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="font-serif text-[52px] md:text-[96px] leading-[0.98] tracking-[-0.01em] text-charcoal max-w-5xl text-balance">
            Three generations of <em className="italic font-light text-sage-700">East London</em> florists.
          </h1>
        </Reveal>
      </section>

      <section className="relative h-[56vh] min-h-[440px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1533616688419-b7a585564566?auto=format&fit=crop&w=2000&q=85"
          alt="Inside the Sewell's studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <div className="eyebrow mb-5">A family business</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              Flowers and family, inseparable.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 text-charcoal/80 leading-relaxed space-y-6 text-pretty">
          <Reveal>
            <p>
              Sewell&rsquo;s was started in 1974 by our Grandma Dot — a barrow, two
              buckets of daffodils and a pitch outside Plaistow station. Fifty
              years on, the barrow is long gone, but the shop is still run by
              the same family, from a corner of the same little street.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              We think flowers are most beautiful when they feel like they have
              been gathered, not arranged — so we design the way our Nan did:
              loose, seasonal, and unfussy. Expect English garden roses in
              summer, dinner-plate dahlias in autumn and armfuls of narcissi the
              moment the mornings lighten.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Most of our customers are neighbours — some we&rsquo;ve known for
              thirty-five years. We&rsquo;ve designed their weddings, their
              christenings, and, in time, the tributes for the people they&rsquo;ve
              loved. It is a privilege we take seriously.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-edge pb-24 md:pb-32 grid grid-cols-12 gap-4 md:gap-6">
        {[
          { src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=85', span: 'col-span-7 aspect-[5/4]' },
          { src: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1200&q=85', span: 'col-span-5 aspect-[4/5]' },
          { src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1200&q=85', span: 'col-span-5 aspect-[5/4]' },
          { src: 'https://images.unsplash.com/photo-1524598171353-ce84a157c61d?auto=format&fit=crop&w=1200&q=85', span: 'col-span-7 aspect-[5/4]' },
        ].map((img, i) => (
          <Reveal key={img.src} delay={i * 120} className={`${img.span} relative overflow-hidden`}>
            <Image src={img.src} alt="" fill sizes="50vw" className="object-cover" />
          </Reveal>
        ))}
      </section>

      {/* Timeline */}
      <section className="bg-charcoal text-ivory-50">
        <div className="container-edge py-24 md:py-32">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <div className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/55 mb-5">Fifty years</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
                A short <em className="italic font-light text-blush-300">history</em> of Sewell&rsquo;s.
              </h2>
            </div>
          </Reveal>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory-50/10">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <li className="bg-charcoal p-8 h-full">
                  <div className="font-serif text-6xl text-blush-300">{m.year}</div>
                  <div className="mt-4 font-serif text-2xl">{m.title}</div>
                  <p className="mt-3 text-sm text-ivory-50/70 leading-relaxed">{m.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge py-24 md:py-32 text-center">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] max-w-3xl mx-auto text-balance">
            Come and meet us on <em className="italic font-light text-sage-700">Plaistow Road</em>.
          </h2>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">Visit the studio</Link>
            <Link href="/shop" className="btn-outline">Shop flowers</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
