'use client';

import { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { X, Plus, Minus } from 'lucide-react';
import type { Product } from '@/lib/data';
import clsx from 'clsx';

type CartItem = {
  product: Product;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (p: Product) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addItem = useCallback((p: Product) => {
    setItems((curr) => {
      const existing = curr.find((i) => i.product.slug === p.slug);
      if (existing) {
        return curr.map((i) =>
          i.product.slug === p.slug ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...curr, { product: p, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((curr) => curr.filter((i) => i.product.slug !== slug));
  }, []);

  const updateQty = useCallback((slug: string, qty: number) => {
    setItems((curr) =>
      qty <= 0
        ? curr.filter((i) => i.product.slug !== slug)
        : curr.map((i) => (i.product.slug === slug ? { ...i, qty } : i))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const subtotal = items.reduce((s, i) => s + i.qty * i.product.price, 0);
    return {
      items,
      count,
      subtotal,
      addItem,
      removeItem,
      updateQty,
      clear,
      openCart,
      closeCart,
      isOpen,
    };
  }, [items, addItem, removeItem, updateQty, clear, openCart, closeCart, isOpen]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQty, removeItem } = useCart();
  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 transition-opacity duration-500',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-charcoal/40" onClick={closeCart} />
      <aside
        className={clsx(
          'absolute top-0 right-0 h-full w-full max-w-md bg-ivory-50 flex flex-col transition-transform duration-500',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-sage-100">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-sage-700">
              Your basket
            </div>
            <div className="font-serif text-2xl mt-1">
              {items.length === 0 ? 'Empty for now' : `${items.length} ${items.length === 1 ? 'item' : 'items'}`}
            </div>
          </div>
          <button onClick={closeCart} aria-label="Close basket">
            <X size={22} strokeWidth={1.25} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="text-center pt-20">
              <div className="font-serif italic text-2xl text-charcoal/70 mb-4">
                Nothing picked yet.
              </div>
              <p className="text-sm text-charcoal/60 mb-8">
                Browse the shop and add a bouquet — we'll hand-deliver it across
                East London.
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="btn-primary inline-flex"
              >
                Browse the shop
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-sage-100">
              {items.map(({ product, qty }) => (
                <li key={product.slug} className="py-5 flex gap-4">
                  <div
                    className="w-20 h-24 flex-shrink-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div>
                        <div className="font-serif text-lg leading-tight">{product.name}</div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-sage-700 mt-1">{product.category}</div>
                      </div>
                      <button
                        onClick={() => removeItem(product.slug)}
                        className="text-xs text-charcoal/50 hover:text-blush-600 transition-colors"
                        aria-label="Remove"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-sage-200 px-2 py-1">
                        <button
                          onClick={() => updateQty(product.slug, qty - 1)}
                          aria-label="Decrease"
                          className="p-1"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="text-sm tabular-nums w-4 text-center">{qty}</span>
                        <button
                          onClick={() => updateQty(product.slug, qty + 1)}
                          aria-label="Increase"
                          className="p-1"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="font-serif text-lg tabular-nums">
                        £{(product.price * qty).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-sage-100 px-8 py-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-charcoal/70">Subtotal</span>
              <span className="font-serif text-lg tabular-nums">£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-charcoal/60">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-primary w-full"
            >
              Checkout
            </Link>
            <Link
              href="/shop"
              onClick={closeCart}
              className="block text-center text-xs uppercase tracking-[0.22em] text-charcoal/70 hover:text-sage-700"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
