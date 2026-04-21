import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { contact } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory-50 mt-24">
      <div className="container-edge pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-[0.18em] mb-2">
              SEWELL&rsquo;S
            </div>
            <div className="text-[10px] uppercase tracking-[0.42em] text-ivory-50/60 mb-6">
              Florist · Est. 1974
            </div>
            <p className="text-sm leading-relaxed text-ivory-50/75 max-w-sm">
              An East London family florist, designing hand-tied bouquets,
              weddings and tributes from our studio on Plaistow Road for over
              fifty years.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-ivory-50/20 hover:border-ivory-50 transition-colors"
              >
                <Instagram size={16} strokeWidth={1.25} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 border border-ivory-50/20 hover:border-ivory-50 transition-colors"
              >
                <Facebook size={16} strokeWidth={1.25} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/50 mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="hover:text-blush-300 transition-colors" href="/shop">All Flowers</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/shop?c=Bouquets">Bouquets</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/shop?c=Luxury">Luxury</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/shop?c=Seasonal">Seasonal</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/shop?c=Plants">Plants</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/50 mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="hover:text-blush-300 transition-colors" href="/weddings">Weddings</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/funerals">Sympathy</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/delivery">Delivery</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/about">Our Story</Link></li>
              <li><Link className="hover:text-blush-300 transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.28em] text-ivory-50/50 mb-5">
              Studio
            </h4>
            <address className="not-italic text-sm leading-relaxed text-ivory-50/75">
              {contact.address}<br />
              {contact.city} {contact.postcode}
            </address>
            <a
              href={contact.phoneHref}
              className="block mt-4 font-serif text-2xl tracking-wide hover:text-blush-300 transition-colors"
            >
              {contact.phone}
            </a>
            <div className="mt-6 text-xs text-ivory-50/60 space-y-1">
              {contact.hours.map((h) => (
                <div key={h.day} className="flex justify-between max-w-[220px]">
                  <span>{h.day}</span>
                  <span className="tabular-nums">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-ivory-50/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-ivory-50/50">
          <span>© {new Date().getFullYear()} Sewell&rsquo;s Florist Ltd.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-ivory-50 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-ivory-50 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-ivory-50 transition-colors">Care guide</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
