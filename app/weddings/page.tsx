import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { WeddingForm } from './WeddingForm';

export const metadata = {
  title: "Weddings — Sewell's Florist",
  description:
    "Bespoke wedding flowers in East London, designed from first bloom to last petal. Studio consultations by appointment.",
};

const stages = [
  {
    n: '01',
    title: 'Consultation',
    copy:
      'We sit down with you — over tea, in the Plaistow Road studio — to understand your day, your palette, and the feeling you want the flowers to hold.',
  },
  {
    n: '02',
    title: 'Proposal & mood',
    copy:
      'Two weeks later, a full visual proposal: palette boards, sample stems, costings, and a full floral brief tailored to your venue.',
  },
  {
    n: '03',
    title: 'Studio refinements',
    copy:
      'An in-studio mock-up of your bouquet and centrepiece, so you see and touch the flowers before the day itself.',
  },
  {
    n: '04',
    title: 'Wedding day',
    copy:
      'Our senior designers install everything by hand — then return the next morning to take it all down. Leaving only the photos.',
  },
];

const stories = [
  {
    title: 'Sophia & Adam',
    sub: 'May 2025 · Town Hall Hotel',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Priya & James',
    sub: 'April 2025 · Asia House',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Harriet & Luke',
    sub: 'September 2024 · Epping Forest',
    img: 'https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1200&q=85',
  },
];

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85"
          alt="Bridal arch of roses and peonies"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-charcoal/60" />
        <div className="container-edge relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 text-ivory-50">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.32em] mb-6 flex items-center gap-3">
              <span className="block w-10 h-px bg-ivory-50" /> Weddings & events
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-serif text-[48px] sm:text-7xl md:text-[110px] leading-[0.95] tracking-[-0.01em] max-w-5xl text-balance">
              Flowers for <span className="font-script italic text-[1.15em] text-blush-200 align-[-0.08em]">the one</span> day.
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 text-lg md:text-xl max-w-xl text-ivory-50/85">
              Wedding florals designed in East London since 1974. Editorial,
              romantic, a little wild — always tailored to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro split */}
      <section className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div className="md:col-span-5">
          <Reveal>
            <div className="eyebrow mb-5">How we work</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
              A slow, thoughtful <em className="italic font-light text-sage-700">design process</em>.
            </h2>
            <p className="mt-6 text-charcoal/75 leading-relaxed max-w-md">
              We take on a small number of weddings each season, so every couple
              receives our senior team. Expect three in-studio visits, a full
              design proposal, and a single point of contact from enquiry to
              install.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-3">
          <Reveal>
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=900&q=85"
                alt=""
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="relative aspect-[4/5] mt-16">
              <Image
                src="https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=900&q=85"
                alt=""
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sage-50">
        <div className="container-edge py-24 md:py-32">
          <Reveal>
            <div className="text-center mb-16">
              <div className="eyebrow mb-5">The process</div>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">
                From first email to last petal.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-sage-100">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="bg-sage-50 p-8 h-full">
                  <div className="font-serif text-5xl text-sage-500 mb-6">{s.n}</div>
                  <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="container-edge py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-5">Recent weddings</div>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">
                Quiet ceremonies, grand affairs.
              </h2>
            </div>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="font-serif text-2xl">{s.title}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-sage-700 mt-1.5">{s.sub}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-charcoal text-ivory-50">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/55 mb-5">Investment</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
                Honest, transparent pricing.
              </h2>
              <p className="mt-6 text-ivory-50/75 leading-relaxed max-w-md">
                Most of our weddings invest between £3,500 and £12,000 in
                florals, depending on scale and palette. Consultations are
                always complimentary.
              </p>
              <Link href="#enquire" className="btn-ghost text-ivory-50 hover:text-blush-300 mt-8">
                Enquire now <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            {[
              { n: 'Intimate', range: 'From £1,200', copy: 'Bride & bridesmaid bouquets, buttonholes, a simple ceremony arrangement.' },
              { n: 'Celebrated', range: 'From £4,500', copy: 'Full bridal party florals, ceremony installation, six centrepieces.' },
              { n: 'Grand', range: 'From £9,000', copy: 'Large-scale installation, floral arches, twenty-plus table centrepieces.' },
            ].map((tier, i) => (
              <Reveal key={tier.n} delay={i * 120}>
                <div className="flex items-start justify-between gap-10 border-t border-ivory-50/15 py-8 last:border-b">
                  <div>
                    <div className="font-serif text-3xl mb-2">{tier.n}</div>
                    <p className="text-sm text-ivory-50/70 max-w-md leading-relaxed">{tier.copy}</p>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-blush-300 whitespace-nowrap pt-2">{tier.range}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="container-edge py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <div className="eyebrow mb-5">Enquire</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
                Tell us <em className="italic font-light text-sage-700">about your day</em>.
              </h2>
              <p className="mt-6 text-charcoal/75 leading-relaxed max-w-md">
                A few details, and we&rsquo;ll be in touch within two working days to
                arrange your complimentary studio consultation.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <WeddingForm />
          </div>
        </div>
      </section>
    </>
  );
}
