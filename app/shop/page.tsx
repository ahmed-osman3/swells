import { Suspense } from 'react';
import { ShopView } from './ShopView';

export const metadata = {
  title: "Shop — Sewell's Florist",
  description:
    "Hand-tied bouquets, seasonal arrangements, luxury florals and plants, designed in our Plaistow studio.",
};

export default function ShopPage() {
  return (
    <Suspense>
      <ShopView />
    </Suspense>
  );
}
