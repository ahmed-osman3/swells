import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-edge pt-24 pb-32 text-center">
      <div className="eyebrow mb-5">404</div>
      <h1 className="font-serif text-6xl md:text-8xl leading-[1.02] max-w-3xl mx-auto text-balance">
        This page has <em className="italic font-light text-sage-700">wilted</em>.
      </h1>
      <p className="mt-6 text-charcoal/70 max-w-md mx-auto">
        We can&rsquo;t find the page you&rsquo;re looking for, but we have plenty of flowers
        that are still very much in bloom.
      </p>
      <Link href="/" className="btn-primary mt-10">Back to home</Link>
    </section>
  );
}
