'use client';
import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

const categories = ['All', 'Men', 'Women', 'Kids', 'Shoes', 'Ethnic', 'Western'];

export default function ProductsPage() {
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(12);

  const filtered = productsData.filter(
    (p) =>
      (cat === 'All' || p.category === cat) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p
          className="text-[#1d4ed8] text-xs tracking-[4px] uppercase font-semibold"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Shop Now
        </p>
        <h1
          className="font-bold text-[#0f172a] mt-2"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
          }}
        >
          Our Collection
        </h1>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-7 relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]">🔍</span>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisible(12);
          }}
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-3 rounded-full border border-[#e2e8f0] text-sm outline-none bg-[#f8fafc] focus:border-[#1d4ed8] transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCat(c);
              setVisible(12);
            }}
            className="px-5 py-2 rounded-full text-sm font-semibold border transition-all"
            style={{
              fontFamily: 'Poppins, sans-serif',
              borderColor: cat === c ? '#1d4ed8' : '#e2e8f0',
              background: cat === c ? '#1d4ed8' : '#fff',
              color: cat === c ? '#fff' : '#475569',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.slice(0, visible).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          className="text-center py-16 text-[#94a3b8]"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <p className="text-5xl">🔍</p>
          <p className="text-lg mt-4">No products found</p>
          <p className="text-sm mt-2">Try a different search or category</p>
        </div>
      )}

      {visible < filtered.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible((v) => v + 8)}
            className="font-semibold text-white px-9 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: '#0f172a',
              fontSize: 14,
            }}
          >
            Load More ({filtered.length - visible} remaining)
          </button>
        </div>
      )}
    </main>
  );
}
