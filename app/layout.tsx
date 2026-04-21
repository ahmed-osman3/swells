import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Italianno } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { CartProvider } from '@/components/CartProvider';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italianno',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Sewell's Florist — East London's family florist since 1974",
  description:
    "Hand-tied bouquets, wedding florals and funeral tributes, designed by Sewell's of Plaistow Road, E15. Same-day delivery across East London.",
  openGraph: {
    title: "Sewell's Florist",
    description:
      "East London's family florist since 1974. Hand-tied bouquets, wedding florals and funeral tributes, delivered the same day.",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${italianno.variable}`}
    >
      <body className="font-sans">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
