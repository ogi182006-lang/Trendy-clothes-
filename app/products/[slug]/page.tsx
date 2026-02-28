import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { waLink } from '@/components/ProductCard';
import products from '@/data/products.json';

const EXTRA_IMGS = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&q=70',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=300&q=70',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&q=70',
];

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) return { title: 'Product Not Found' };
  return {
    title: `${p.name} – ₹${p.price} | Trendyclothes`,
    description: p.description,
  };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const thumbs = [product.imageUrl, ...EXTRA_IMGS];
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/products"
        className="text-[#1d4ed8] text-sm font-semibold mb-6 inline-block hover:underline"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: '4/5', boxShadow: '0 4px 32px rgba(15,23,42,0.12)' }}
          />
          <div className="flex gap-3 mt-4">
            {thumbs.map((t, i) => (
              <img
                key={i}
                src={t}
                alt={`${product.name} view ${i + 1}`}
                className="w-16 h-16 rounded-xl object-cover cursor-pointer border-2 border-[#e2e8f0] hover:border-[#1d4ed8] transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <span
            className="text-xs font-semibold text-[#1d4ed8] bg-[#dbeafe] px-3 py-1 rounded-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {product.category}
          </span>
          <h1
            className="font-bold text-[#0f172a] mt-3 leading-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(24px, 3vw, 38px)',
            }}
          >
            {product.name}
          </h1>
          <p
            className="font-bold text-[#1d4ed8] text-3xl mt-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ₹{product.price}
          </p>
          <p
            className="text-[#475569] text-sm leading-relaxed mt-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {product.description}
          </p>

          {product.sizes && (
            <div className="mt-5">
              <p
                className="text-xs font-semibold text-[#0f172a] uppercase tracking-wide mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="border border-[#e2e8f0] px-4 py-1 rounded-lg text-sm text-[#374151] hover:border-[#1d4ed8] cursor-pointer transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className="mt-4">
              <p
                className="text-xs font-semibold text-[#0f172a] uppercase tracking-wide mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="bg-[#f1f5f9] px-4 py-1 rounded-lg text-sm text-[#374151]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          <a
            href={waLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 mt-8 text-white font-bold text-lg py-4 rounded-xl hover:opacity-90 transition-opacity"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: '#25D366',
              boxShadow: '0 4px 24px rgba(37,211,102,0.35)',
            }}
          >
            💬 Buy Now via WhatsApp
          </a>
          <p
            className="text-center text-[#94a3b8] text-xs mt-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Click to open WhatsApp and place your order instantly
          </p>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2
            className="font-bold text-[#0f172a] text-2xl mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
