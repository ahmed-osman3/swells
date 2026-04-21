'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/lib/data';
import { useCart } from './CartProvider';

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);
  const secondary = product.gallery[1] ?? product.image;

  return (
    <div className="group">
      <Link href={`/shop/${product.slug}`} className="block">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-ivory-100"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
            className={`object-cover transition-all duration-1000 ease-out ${
              hover ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          <Image
            src={secondary}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-1000 ease-out ${
              hover ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
          />
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="text-[10px] uppercase tracking-[0.22em] bg-ivory-50 px-2.5 py-1">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="text-[10px] uppercase tracking-[0.22em] bg-sage-700 text-ivory-50 px-2.5 py-1">
                Bestseller
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            aria-label={`Add ${product.name} to basket`}
            className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-ivory-50 text-charcoal flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-charcoal hover:text-ivory-50"
          >
            <ShoppingBag size={15} strokeWidth={1.25} />
          </button>
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.28em] text-sage-700 mb-1">
              {product.category}
            </div>
            <h3 className="font-serif text-xl leading-tight text-charcoal">
              {product.name}
            </h3>
          </div>
          <div className="font-serif text-xl tabular-nums text-charcoal whitespace-nowrap">
            {product.priceFrom && <span className="text-[10px] uppercase tracking-[0.22em] text-sage-700 mr-1">from</span>}
            £{product.price}
          </div>
        </div>
      </Link>
    </div>
  );
}
