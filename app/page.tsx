import type { Metadata } from 'next';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products.json';

export const metadata: Metadata = {
  title: 'Trendyclothes – Latest Fashion in Jaipur',
  description:
    'Shop stylish clothes & shoes for Men, Women & Kids in Jaipur. Ethnic wear, western outfits, sarees, kurtis at affordable prices.',
};

const WA_NUMBER = '916375300834';

export default function HomePage() {
  const featured = products.slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '90vh', minHeight: 500 }}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="Fashion hero banner – Trendyclothes Jaipur"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(15,23,42,0.85) 0%, rgba(29,78,216,0.45) 100%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p
            className="text-[#60a5fa] text-xs tracking-[4px] uppercase font-semibold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ✦ Jaipur&apos;s Favourite Fashion Store
          </p>
          <h1
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(32px, 6vw, 72px)',
              maxWidth: 800,
            }}
          >
            Trendyclothes –<br />Latest Fashion Trends in Jaipur
          </h1>
          <p
            className="text-[#cbd5e1] mt-5 max-w-xl leading-relaxed"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(13px, 2vw, 17px)',
            }}
          >
            Stylish Clothes &amp; Shoes for Men, Women &amp; Kids | Affordable Prices | Easy
            WhatsApp Orders
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/products"
              className="font-bold text-white px-9 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              style={{
                fontFamily: 'Poppins, sans-serif',
                background: '#1d4ed8',
                boxShadow: '0 4px 24px rgba(29,78,216,0.4)',
                fontSize: 15,
              }}
            >
              Browse All Products →
            </Link>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white px-9 py-3.5 rounded-full hover:opacity-90 transition-opacity"
              style={{
                fontFamily: 'Poppins, sans-serif',
                background: '#25D366',
                boxShadow: '0 4px 24px rgba(37,211,102,0.4)',
                fontSize: 15,
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-5" style={{ background: '#f8fafc' }}>
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-[#1d4ed8] text-xs tracking-[4px] uppercase font-semibold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About Us
          </p>
          <h2
            className="font-bold text-[#0f172a] mt-3"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(24px, 4vw, 40px)',
            }}
          >
            Fashion That Fits Your Life
          </h2>
          <p
            className="text-[#475569] text-sm mt-4 leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Trendyclothes offers the latest ethnic wear, western outfits, shoes and accessories at
            great prices in Jaipur. Browse our collection or message us on WhatsApp to order. We
            bring the best of Indian fashion — from vibrant sarees to sleek western wear — right to
            your doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              ['🛍️', '2000+ Products'],
              ['⭐', 'Trusted by 5000+'],
              ['🚀', 'Fast Delivery'],
              ['💬', 'WhatsApp Orders'],
            ].map(([icon, txt]) => (
              <div key={txt} className="text-center">
                <div className="text-3xl">{icon}</div>
                <p
                  className="text-xs font-semibold text-[#0f172a] mt-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {txt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p
            className="text-[#1d4ed8] text-xs tracking-[4px] uppercase font-semibold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Collection
          </p>
          <h2
            className="font-bold text-[#0f172a] mt-2"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(24px, 4vw, 40px)',
            }}
          >
            Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="font-bold text-white px-11 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: '#0f172a',
              fontSize: 15,
            }}
          >
            Browse All Products →
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="text-center py-16 px-5"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)',
        }}
      >
        <h2
          className="text-white font-bold"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(22px, 4vw, 40px)',
          }}
        >
          Order Directly on WhatsApp
        </h2>
        <p
          className="text-[#93c5fd] text-sm mt-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Browse, pick, and message us — we&apos;ll confirm and deliver!
        </p>
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 font-bold text-white px-11 py-4 rounded-full hover:opacity-90 transition-opacity"
          style={{
            fontFamily: 'Poppins, sans-serif',
            background: '#25D366',
            fontSize: 16,
          }}
        >
          💬 +91 63753 00834
        </a>
      </section>
    </main>
  );
}
