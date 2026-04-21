'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useCart } from './CartProvider';
import clsx from 'clsx';

const nav = [
  { href: '/shop', label: 'Shop' },
  { href: '/weddings', label: 'Weddings' },
  { href: '/funerals', label: 'Sympathy' },
  { href: '/about', label: 'Our Story' },
  { href: '/delivery', label: 'Delivery' },
  { href: '/contact', label: 'Visit' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={clsx(
        'sticky top-0 z-40 transition-all duration-500',
        scrolled
          ? 'bg-ivory-50/90 backdrop-blur-md border-b border-sage-100'
          : 'bg-ivory-50 border-b border-transparent'
      )}
    >
      <div className="container-edge h-[72px] flex items-center justify-between gap-6">
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -ml-2 text-charcoal"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.25} />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.slice(0, 3).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[12px] uppercase tracking-[0.22em] text-charcoal hover:text-sage-700 transition-colors link-underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="flex flex-col items-center group">
          <span className="font-serif text-2xl md:text-[28px] leading-none tracking-[0.18em] text-charcoal group-hover:text-sage-700 transition-colors">
            SEWELL&rsquo;S
          </span>
          <span className="mt-1 text-[9px] uppercase tracking-[0.42em] text-sage-700">
            Florist · Est. 1974
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.slice(3).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[12px] uppercase tracking-[0.22em] text-charcoal hover:text-sage-700 transition-colors link-underline"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2 text-charcoal hover:text-sage-700 transition-colors hidden sm:block"
          >
            <Search size={18} strokeWidth={1.25} />
          </button>
          <button
            onClick={openCart}
            aria-label="Open basket"
            className="relative p-2 text-charcoal hover:text-sage-700 transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-blush-600 text-ivory-50 text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-500',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/40"
          onClick={() => setOpen(false)}
        />
        <div
          className={clsx(
            'absolute top-0 left-0 h-full w-[85%] max-w-sm bg-ivory-50 p-8 transition-transform duration-500',
            open ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-serif text-2xl tracking-[0.18em]">SEWELL&rsquo;S</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={22} strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-serif text-3xl text-charcoal hover:text-sage-700 transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="mt-16 pt-8 border-t border-sage-100 text-sm text-charcoal/70 space-y-2">
            <p>165 Plaistow Road, London E15 3ET</p>
            <a href="tel:+442085345182" className="block hover:text-sage-700">
              020 8534 5182
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
