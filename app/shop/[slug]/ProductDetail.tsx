'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, Minus, Plus, ShoppingBag, Truck, Leaf, HeartHandshake } from 'lucide-react';
import type { Product } from '@/lib/data';
import { useCart } from '@/components/CartProvider';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';

const sizes = [
  { key: 'classic', label: 'Classic', multiplier: 1 },
  { key: 'abundant', label: 'Abundant', multiplier: 1.35 },
  { key: 'opulent', label: 'Opulent', multiplier: 1.8 },
];

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [size, setSize] = useState(sizes[0]);
  const [qty, setQty] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);
  const { addItem } = useCart();

  const price = Math.round(product.price * size.multiplier);
  const gallery = [product.image, ...product.gallery.filter((g) => g !== product.image)];

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-edge pt-8 pb-2">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-charcoal/55">
          <Link href="/" className="hover:text-charcoal">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link href="/shop" className="hover:text-charcoal">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <section className="container-edge pt-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7 grid grid-cols-[80px_1fr] gap-4 items-start">
          <div className="flex flex-col gap-3 order-2 lg:order-1 col-span-2 lg:col-span-1 overflow-x-auto lg:overflow-visible">
            <div className="flex lg:flex-col gap-3">
              {gallery.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveImage(g)}
                  className={`relative w-20 aspect-[4/5] flex-shrink-0 overflow-hidden transition-opacity ${
                    activeImage === g ? 'ring-1 ring-charcoal' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={g} alt="" fill sizes="80px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 col-span-2 lg:col-span-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-ivory-100">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.isBestseller && (
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.22em] bg-sage-700 text-ivory-50 px-2.5 py-1">
                  Bestseller
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Detail */}
        <div className="lg:col-span-5 lg:pl-6 lg:sticky lg:top-28 self-start">
          <div className="eyebrow mb-3">{product.category}</div>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.02] text-charcoal text-balance">
            {product.name}
          </h1>
          <div className="mt-5 font-serif text-3xl tabular-nums">£{price}</div>
          <p className="mt-6 text-charcoal/75 leading-relaxed text-pretty">
            {product.longDescription}
          </p>

          {/* Palette */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-sage-700">Palette</span>
            <div className="flex items-center gap-1.5">
              {product.palette.map((c) => (
                <span
                  key={c}
                  className="w-6 h-6 rounded-full border border-charcoal/10"
                  style={{ background: c }}
                  title={c}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-[0.22em] text-sage-700">Size</span>
              <span className="text-[11px] text-charcoal/55">Hand-gathered to order</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSize(s)}
                  className={`border px-3 py-3 text-left transition-colors ${
                    size.key === s.key
                      ? 'border-charcoal bg-charcoal text-ivory-50'
                      : 'border-charcoal/20 hover:border-charcoal'
                  }`}
                >
                  <div className="font-serif text-lg leading-tight">{s.label}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] opacity-70 mt-0.5">
                    £{Math.round(product.price * s.multiplier)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="mt-10 flex items-stretch gap-3">
            <div className="flex items-center border border-charcoal/20">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-4 py-3" aria-label="Decrease">
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="px-4 tabular-nums">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-4 py-3" aria-label="Increase">
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>
            <button
              onClick={() => {
                for (let i = 0; i < qty; i++) addItem(product);
                setAddedMessage(true);
                setTimeout(() => setAddedMessage(false), 1500);
              }}
              className="flex-1 btn-primary"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {addedMessage ? 'Added' : `Add to basket · £${price * qty}`}
            </button>
          </div>

          {/* Stems */}
          {product.stems && (
            <div className="mt-10 border-t border-charcoal/15 pt-6">
              <div className="eyebrow mb-3">What&rsquo;s inside</div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-serif italic text-charcoal/75">
                {product.stems.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Assurances */}
          <div className="mt-8 grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-start gap-3 border-t border-charcoal/10 pt-4">
              <Truck size={18} strokeWidth={1.25} className="text-sage-700 mt-0.5" />
              <div>
                <div className="font-medium">Hand-delivered, same day</div>
                <div className="text-charcoal/60 text-xs mt-0.5">
                  Order by 1pm for same-day delivery across East London.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-charcoal/10 pt-4">
              <Leaf size={18} strokeWidth={1.25} className="text-sage-700 mt-0.5" />
              <div>
                <div className="font-medium">Market-fresh, designed today</div>
                <div className="text-charcoal/60 text-xs mt-0.5">
                  Gathered from New Covent Garden this morning.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-charcoal/10 pt-4">
              <HeartHandshake size={18} strokeWidth={1.25} className="text-sage-700 mt-0.5" />
              <div>
                <div className="font-medium">Made by our senior florists</div>
                <div className="text-charcoal/60 text-xs mt-0.5">
                  Every arrangement hand-tied by the team on Plaistow Road.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-edge py-16 md:py-24 border-t border-sage-100">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-balance">
              You may also <em className="italic font-light text-sage-700">adore</em>
            </h2>
          </Reveal>
          <Link href="/shop" className="btn-ghost">Browse all</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
