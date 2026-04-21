import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Clock, Sparkles } from 'lucide-react';
import { products, testimonials, deliveryAreas, contact } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { Newsletter } from '@/components/Newsletter';

export default function Home() {
  const featured = products.filter((p) => p.isBestseller || p.isNew).slice(0, 4);
  const seasonal = products.filter((p) => p.category === 'Seasonal').slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ivory-100">
        <div className="container-edge pt-16 md:pt-20 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 relative z-10">
            <Reveal>
              <div className="eyebrow mb-6 flex items-center gap-3">
                <span className="block w-8 h-px bg-sage-500" />
                East London&rsquo;s florist · Since 1974
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-serif text-[46px] sm:text-[64px] md:text-[82px] leading-[0.98] tracking-[-0.01em] text-charcoal text-balance">
                Flowers, <em className="italic font-light text-sage-700">gathered</em> by hand <br className="hidden md:block" />
                in <span className="font-script text-[1.4em] text-blush-600 align-[-0.1em]">Plaistow</span>.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 text-lg text-charcoal/75 leading-relaxed max-w-lg text-pretty">
                Three generations of family florists, designing seasonal
                hand-ties, wedding florals and tributes from our studio on
                Plaistow Road. Hand-delivered across East London — often
                within the hour.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link href="/shop" className="btn-primary">
                  Shop the collection
                </Link>
                <Link href="/weddings" className="btn-ghost">
                  Wedding enquiries <ArrowUpRight size={15} strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 text-sm text-charcoal/70">
                <div className="flex items-center gap-2.5">
                  <Clock size={15} strokeWidth={1.5} className="text-sage-700" />
                  Same-day · Order by 1pm
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={15} strokeWidth={1.5} className="text-sage-700" />
                  Hand-delivered across E1–E17
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles size={15} strokeWidth={1.5} className="text-sage-700" />
                  4.9 ★ from 1,200+ neighbours
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 relative">
            <div className="relative aspect-[4/5] md:aspect-[5/6]">
              <Reveal className="absolute inset-0">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1600&q=85"
                    alt="A hand-tied bouquet of garden roses and ranunculus"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover animate-slow-zoom"
                  />
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="absolute -left-4 md:-left-12 bottom-10 w-44 md:w-56 aspect-[3/4] shadow-2xl overflow-hidden hidden sm:block">
                  <Image
                    src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85"
                    alt="Our studio on Plaistow Road"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={600}>
                <div className="absolute -right-2 md:-right-6 top-6 bg-ivory-50 px-5 py-4 shadow-xl max-w-[220px]">
                  <div className="eyebrow mb-1">In the studio this week</div>
                  <div className="font-serif text-lg leading-tight">Peonies, sweet peas & Icelandic poppies</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Decorative marquee */}
        <div className="border-y border-sage-100 bg-ivory-50">
          <div className="overflow-hidden py-5">
            <div className="flex whitespace-nowrap animate-marquee gap-14">
              {Array.from({ length: 2 }).map((_, r) => (
                <div key={r} className="flex items-center gap-14 flex-shrink-0">
                  {['Peonies', 'Garden roses', 'Ranunculus', 'Sweet peas', 'Delphinium', 'Lisianthus', 'Tulips', 'Hydrangea', 'Dahlias', 'Jasmine'].map((w) => (
                    <span key={`${r}-${w}`} className="font-serif italic text-3xl md:text-4xl text-sage-700">
                      {w} <span className="text-sage-300 mx-4">·</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-edge py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <Reveal>
            <div>
              <div className="eyebrow mb-5">This week&rsquo;s favourites</div>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] text-charcoal max-w-2xl">
                Designed today, <em className="italic font-light text-sage-700">delivered by dusk</em>.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Link href="/shop" className="btn-ghost">
              Browse all <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-charcoal text-ivory-50 relative overflow-hidden">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/50 mb-5">
                <span className="block w-8 h-px bg-blush-400 mb-3" />
                Our story
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-balance">
                Fifty years of flowers on Plaistow Road.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-3 text-ivory-50/80 leading-relaxed space-y-6">
            <Reveal delay={220}>
              <p className="text-pretty">
                Sewell&rsquo;s has been a part of East London life since 1974 —
                designing the flowers for christenings, first dances and final
                goodbyes across four generations of local families.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <p className="text-pretty">
                Every morning we drive into New Covent Garden Market before
                sunrise, so that whatever you order reaches you the same day it
                was cut. Our designers build each arrangement by hand, with a
                gardener&rsquo;s eye for how flowers actually grow.
              </p>
            </Reveal>
            <Reveal delay={460}>
              <Link href="/about" className="btn-ghost text-ivory-50 hover:text-blush-300 mt-2">
                Read the full story <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="container-edge pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              { k: '50+', v: 'Years in East London' },
              { k: '800+', v: 'Weddings designed' },
              { k: '1hr', v: 'Typical delivery window' },
              { k: '4.9★', v: 'From local reviews' },
            ].map((s, i) => (
              <Reveal key={s.v} delay={i * 100}>
                <div className="border-t border-ivory-50/15 pt-6">
                  <div className="font-serif text-5xl md:text-6xl leading-none">{s.k}</div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ivory-50/55">
                    {s.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="container-edge py-24 md:py-32">
        <Reveal>
          <div className="text-center mb-16">
            <div className="eyebrow mb-5">Florals for every occasion</div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] text-balance max-w-3xl mx-auto">
              From the everyday to <em className="italic font-light text-sage-700">the once-in-a-lifetime</em>.
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: 'Bouquets',
              copy: 'Seasonal, hand-tied arrangements wrapped in Italian paper.',
              img: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=85',
              href: '/shop?c=Bouquets',
            },
            {
              title: 'Weddings',
              copy: 'Bespoke design from first bloom to last petal. By consultation.',
              img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
              href: '/weddings',
            },
            {
              title: 'Sympathy',
              copy: 'Tributes of quiet beauty, made with care by our funeral team.',
              img: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=85',
              href: '/funerals',
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <Link
                href={card.href}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={card.img}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-ivory-50">
                  <div className="font-serif text-4xl mb-3">{card.title}</div>
                  <p className="text-sm text-ivory-50/80 max-w-xs mb-5">
                    {card.copy}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] border-b border-ivory-50/50 pb-1 group-hover:border-ivory-50 transition-colors">
                    Explore <ArrowUpRight size={13} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEASONAL EDITORIAL */}
      <section className="bg-sage-50">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <Reveal>
              <div className="eyebrow mb-5">In season now</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.02] text-balance mb-6">
                Spring, <em className="italic font-light text-blush-600">at its most painterly</em>.
              </h2>
              <p className="text-charcoal/75 leading-relaxed mb-8 max-w-md">
                April brings Icelandic poppies, English ranunculus and the first
                flush of garden roses into the studio. Soft, romantic, and
                unmistakably seasonal.
              </p>
              <Link href="/shop?c=Seasonal" className="btn-outline">
                Shop spring
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 grid grid-cols-2 gap-3 md:gap-5">
            {seasonal.map((p, i) => (
              <Reveal
                key={p.slug}
                delay={i * 120}
                className={i === 0 ? 'col-span-2 aspect-[5/3]' : 'aspect-[4/5]'}
              >
                <Link href={`/shop/${p.slug}`} className="relative block w-full h-full overflow-hidden group">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-5 right-5 flex justify-between items-end text-ivory-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-serif text-xl">{p.name}</span>
                    <span className="font-serif">£{p.price}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-edge py-24 md:py-32">
        <Reveal>
          <div className="eyebrow text-center mb-5">Word from the neighbourhood</div>
          <h2 className="font-serif text-4xl md:text-5xl text-center leading-[1.05] max-w-3xl mx-auto text-balance">
            &ldquo;The most beautiful bouquet I have ever seen in London.&rdquo;
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-16">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 120}>
              <figure className="border-t border-charcoal/15 pt-6 h-full">
                <blockquote className="font-serif text-xl md:text-[22px] leading-[1.35] text-charcoal mb-8 text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <div className="text-[13px] font-medium">{t.author}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-sage-700 mt-1">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DELIVERY AREAS */}
      <section className="bg-charcoal text-ivory-50">
        <div className="container-edge py-24 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/50 mb-5 flex items-center gap-3">
                <span className="block w-8 h-px bg-blush-400" /> Delivered by us
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6 text-balance">
                Hand-delivered across <em className="italic font-light text-blush-300">East London</em>.
              </h2>
              <p className="text-ivory-50/70 leading-relaxed max-w-md">
                We drive our own vans — no third-party couriers. Order before
                1pm for same-day delivery across E1–E17 and IG postcodes.
              </p>
              <Link href="/delivery" className="btn-ghost text-ivory-50 hover:text-blush-300 mt-8">
                Check your postcode <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-ivory-50/10">
                {deliveryAreas.map((a) => (
                  <div
                    key={a.name}
                    className="bg-charcoal px-5 py-5 hover:bg-charcoal-soft transition-colors"
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] text-ivory-50/50 mb-1">
                      {a.postcode}
                    </div>
                    <div className="font-serif text-xl">{a.name}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <Newsletter />

      {/* VISIT */}
      <section className="container-edge py-24 md:py-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <div>
            <div className="eyebrow mb-5">Come and say hello</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-8 text-balance">
              Visit our studio on Plaistow Road.
            </h2>
            <dl className="space-y-6 text-charcoal/85">
              <div className="flex items-start gap-4">
                <MapPin size={18} strokeWidth={1.5} className="text-sage-700 mt-1 flex-shrink-0" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-sage-700 mb-1">Address</dt>
                  <dd className="font-serif text-xl">{contact.address}, {contact.city} {contact.postcode}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} strokeWidth={1.5} className="text-sage-700 mt-1 flex-shrink-0" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-sage-700 mb-1">Call us</dt>
                  <dd>
                    <a href={contact.phoneHref} className="font-serif text-xl hover:text-sage-700 transition-colors">
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={18} strokeWidth={1.5} className="text-sage-700 mt-1 flex-shrink-0" />
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-sage-700 mb-1">Opening</dt>
                  <dd className="space-y-0.5">
                    {contact.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8 text-sm max-w-xs">
                        <span>{h.day}</span>
                        <span className="tabular-nums">{h.time}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1460411794035-42aac080490a?auto=format&fit=crop&w=1400&q=85"
              alt="The Sewell's Florist studio on Plaistow Road"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
