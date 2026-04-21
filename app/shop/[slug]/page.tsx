import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductDetail } from './ProductDetail';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — Sewell's Florist`,
    description: p.description,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  return <ProductDetail product={product} related={related} />;
}
