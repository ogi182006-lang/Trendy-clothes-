import Link from 'next/link';

export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  sizes?: string[];
  colors?: string[];
};

const WA_NUMBER = '916375300834';

export function waLink(name: string, price: number) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `I'm interested in ${name} - ₹${price}`
  )}`;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white hover:-translate-y-1 transition-all duration-200"
      style={{ boxShadow: '0 2px 16px rgba(30,58,138,0.08)' }}
    >
      <div className="relative overflow-hidden" style={{ paddingBottom: '125%' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className="absolute top-3 left-3 text-xs font-semibold text-white px-2 py-1 rounded-lg"
          style={{ background: '#1d4ed8', fontFamily: 'Poppins, sans-serif' }}
        >
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3
          className="font-bold text-[#0f172a] leading-tight text-base"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {product.name}
        </h3>
        <p
          className="text-[#64748b] text-xs mt-1 line-clamp-2 leading-relaxed"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span
            className="font-bold text-[#1d4ed8] text-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ₹{product.price}
          </span>
          <a
            href={waLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white text-xs font-semibold px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
            style={{ background: '#25D366', fontFamily: 'Poppins, sans-serif' }}
          >
            💬 Buy Now
          </a>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="block mt-2 w-full text-center text-[#1d4ed8] border border-[#1d4ed8] rounded-lg py-1.5 text-xs font-semibold hover:bg-[#1d4ed8] hover:text-white transition-all"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
