import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { waLink } from '@/components/ProductCard';
import products from '@/data/products.json';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = products.find((p) => p.slug === params.slug);
  if (!p) return { title: 'Product Not Found' };
  return { title: `${p.name} – ₹${p.price} | Trendyclothes`, description: p.description };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const gallery = product.images && product.images.length > 0 ? product.images : [product.imageUrl];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">

      <Link href="/products" className="text-blue-700 text-sm font-semibold mb-6 inline-block underline">
        Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <img
            src={gallery[0]}
            alt={product.name}
            className="w-full rounded-2xl object-cover shadow-lg"
          />
          {gallery.length > 1 && (
            <div className="grid grid-cols-3 gap-3 mt-4">
              {gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={product.name}
                  className="w-full rounded-xl object-cover border-2 border-gray-200 hover:border-blue-700 transition-colors"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-lg">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold text-slate-900 mt-3 leading-tight">
            {product.name}
          </h1>

          <p className="text-3xl font-bold text-blue-700 mt-3">
            Rs. {product.price}
          </p>

          <p className="text-slate-500 text-sm leading-relaxed mt-3">
            {product.description}
          </p>

          {product.sizes && (
            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-2">
                Available Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span key={s} className="border border-gray-200 px-4 py-1 rounded-lg text-sm text-gray-700 hover:border-blue-700 cursor-pointer transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-2">
                Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span key={c} className="bg-slate-100 px-4 py-1 rounded-lg text-sm text-gray-700">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          
            href={waLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 mt-8 text-white font-bold text-lg py-4 rounded-xl bg-green-500 hover:bg-green-600 transition-colors"
          >
            Buy Now via WhatsApp
          </a>

          <p className="text-center text-gray-400 text-xs mt-3">
            Click to open WhatsApp and place your order instantly
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-bold text-slate-900 text-2xl mb-6">
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
