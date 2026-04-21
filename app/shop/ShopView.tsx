'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { products, type Product } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { Check, SlidersHorizontal, X } from 'lucide-react';
import clsx from 'clsx';

const categories: Array<Product['category'] | 'All'> = [
  'All',
  'Bouquets',
  'Luxury',
  'Seasonal',
  'Wedding',
  'Funeral',
  'Plants',
];

const priceBands = [
  { label: 'Under £50', min: 0, max: 50 },
  { label: '£50 – £80', min: 50, max: 80 },
  { label: '£80 – £120', min: 80, max: 120 },
  { label: '£120 +', min: 120, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'new', label: 'New arrivals' },
];

export function ShopView() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialCat = (searchParams.get('c') as Product['category'] | null) ?? 'All';
  const [category, setCategory] = useState<(typeof categories)[number]>(initialCat);
  const [bands, setBands] = useState<string[]>([]);
  const [sort, setSort] = useState<string>('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All') params.delete('c');
    else params.set('c', category);
    const next = params.toString();
    router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
  }, [category, pathname, router, searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'All') list = list.filter((p) => p.category === category);
    if (bands.length > 0) {
      list = list.filter((p) =>
        bands.some((b) => {
          const band = priceBands.find((pb) => pb.label === b)!;
          return p.price >= band.min && p.price < band.max;
        })
      );
    }
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'new':
        list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
        break;
      default:
        list.sort(
          (a, b) =>
            Number(!!b.isBestseller) - Number(!!a.isBestseller) ||
            Number(!!b.isNew) - Number(!!a.isNew)
        );
    }
    return list;
  }, [category, bands, sort]);

  const toggleBand = (label: string) =>
    setBands((cur) =>
      cur.includes(label) ? cur.filter((b) => b !== label) : [...cur, label]
    );

  return (
    <>
      {/* Hero banner */}
      <section className="bg-sage-50 border-b border-sage-100">
        <div className="container-edge pt-16 md:pt-20 pb-12 md:pb-16">
          <div className="eyebrow mb-4">The shop</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] text-charcoal max-w-4xl text-balance">
            Every bloom, <em className="italic font-light text-sage-700">gathered this morning</em>.
          </h1>
          <p className="mt-6 text-charcoal/70 max-w-xl leading-relaxed">
            Our full collection — from a single wrap of sweet peas to a couture
            hatbox. Order by 1pm for same-day hand delivery.
          </p>
        </div>
      </section>

      {/* Category rail */}
      <div className="sticky top-[72px] z-30 bg-ivory-50/95 backdrop-blur border-b border-sage-100">
        <div className="container-edge flex items-center justify-between gap-4 py-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={clsx(
                  'relative py-2 text-[12px] uppercase tracking-[0.22em] transition-colors whitespace-nowrap',
                  category === c ? 'text-charcoal' : 'text-charcoal/50 hover:text-charcoal'
                )}
              >
                {c}
                {category === c && (
                  <span className="absolute inset-x-0 -bottom-[17px] h-px bg-charcoal" />
                )}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5 flex-shrink-0">
            <button
              onClick={() => setFiltersOpen(true)}
              className="flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-charcoal hover:text-sage-700"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} /> Filter
              {bands.length > 0 && (
                <span className="ml-1 bg-charcoal text-ivory-50 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {bands.length}
                </span>
              )}
            </button>
            <div className="relative hidden md:block">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent text-[12px] uppercase tracking-[0.22em] text-charcoal pr-6 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    Sort · {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="container-edge py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-3xl text-charcoal/70">Nothing matches those filters.</p>
            <button
              onClick={() => {
                setCategory('All');
                setBands([]);
              }}
              className="btn-ghost mt-6"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <>
            <div className="text-xs text-charcoal/55 mb-8">
              Showing {filtered.length} {filtered.length === 1 ? 'arrangement' : 'arrangements'}
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12 md:gap-x-8">
              {filtered.map((p, i) => (
                <ProductCard key={p.slug} product={p} priority={i < 4} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Filter drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-50 transition-opacity duration-500',
          filtersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-charcoal/40" onClick={() => setFiltersOpen(false)} />
        <aside
          className={clsx(
            'absolute top-0 right-0 h-full w-full max-w-md bg-ivory-50 flex flex-col transition-transform duration-500',
            filtersOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-8 py-6 border-b border-sage-100">
            <div className="font-serif text-2xl">Filter</div>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters">
              <X size={22} strokeWidth={1.25} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-10">
            <div>
              <div className="eyebrow mb-4">Price</div>
              <div className="space-y-3">
                {priceBands.map((b) => (
                  <label
                    key={b.label}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <span
                      className={clsx(
                        'w-5 h-5 border flex items-center justify-center transition-colors',
                        bands.includes(b.label)
                          ? 'bg-charcoal border-charcoal'
                          : 'border-charcoal/30 group-hover:border-charcoal'
                      )}
                    >
                      {bands.includes(b.label) && <Check size={12} className="text-ivory-50" strokeWidth={2} />}
                    </span>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={bands.includes(b.label)}
                      onChange={() => toggleBand(b.label)}
                    />
                    <span className="text-sm">{b.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow mb-4">Sort by</div>
              <div className="space-y-3">
                {sortOptions.map((o) => (
                  <label key={o.value} className="flex items-center gap-3 cursor-pointer">
                    <span
                      className={clsx(
                        'w-5 h-5 rounded-full border flex items-center justify-center',
                        sort === o.value
                          ? 'bg-charcoal border-charcoal'
                          : 'border-charcoal/30'
                      )}
                    >
                      {sort === o.value && <span className="w-2 h-2 bg-ivory-50 rounded-full" />}
                    </span>
                    <input
                      type="radio"
                      name="sort"
                      className="sr-only"
                      value={o.value}
                      checked={sort === o.value}
                      onChange={(e) => setSort(e.target.value)}
                    />
                    <span className="text-sm">{o.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-sage-100 px-8 py-6 grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setBands([]);
                setSort('featured');
              }}
              className="btn-outline"
            >
              Clear
            </button>
            <button onClick={() => setFiltersOpen(false)} className="btn-primary">
              Apply
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
