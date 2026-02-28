import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { waLink } from '@/components/ProductCard';
import products from '@/data/products.json';

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

const poppins: CSSProperties = { fontFamily: 'Poppins, sans-serif' };
const playfair: CSSProperties = { fontFamily: '"Playfair Display", serif' };

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.imageUrl];

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const waBtnStyle: CSSProperties = {
    background: '#25D366',
    boxShadow: '0 4px 24px rgba(37,211,102,0.35)',
    fontFamily: 'Poppins, sans-serif',
  };

  const categoryBadgeStyle: CSSProperties = {
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/products"
        className="text-[#1d4ed8] text-sm font-semibold mb-6 inline-block hover:underline"
        style={poppins}
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <div>
          <img
            src={galleryImages[0]}
            alt={product.name}
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: '4/5', boxShadow: '0 4px 32px rgba(15,23,42,0.12)' }}
          />
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-3 gap-3 mt-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border-2 border-[#e2e8f0] hover:border-[#1d4ed8] transition-colors"
                  style={{ aspectRatio: '1/1' }}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <span
            className="text-xs font-semibold text-[#1d4ed8] bg-[#dbeafe] px-3 py-1 rounded-lg"
            style={categoryBadgeStyle}
          >
            {product.category}
          </span>

          <h1
            className="font-bold text-[#0f172a] mt-3 leading-tight"
            style={{ ...playfair, fontSize: 'clamp(24px, 3vw, 38px)' }}
          >
            {product.name}
          </h1>

          <p
            className="font-bold text-[#1d4ed8] text-3xl mt-3"
            style={poppins}
          >
            ₹{product.price}
          </p>

          <p
            className="text-[#475569] text-sm leading-relaxed mt-3"
            style={poppins}
          >
            {product.description}
          </p>

          {product.sizes && (
            <div className="mt-5">
              <p
                className="text-xs font-semibold text-[#0f172a] uppercase tracking-wide mb-2"
                style={poppins}
              >
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="border border-[#e2e8f0] px-4 py-1 rounded-lg text-sm text-[#374151] hover:border-[#1d4ed8] cursor-pointer transition-colors"
                    style={poppins}
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
                style={poppins}
              >
                Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="bg-[#f1f5f9] px-4 py-1 rounded-lg text-sm text-[#374151]"
                    style={poppins}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          
            href={waLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 mt-8 text-white font-bold text-lg py-4 rounded-xl hover:opacity-90 transition-opacity"
            style={waBtnStyle}
          >
            💬 Buy Now via WhatsApp
          </a>

          <p
            className="text-center text-[#94a3b8] text-xs mt-3"
            style={poppins}
          >
            Click to open WhatsApp and place your order instantly
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2
            className="font-bold text-[#0f172a] text-2xl mb-6"
            style={playfair}
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
