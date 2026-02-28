'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 shadow-lg"
      style={{ background: '#0f172a', borderBottom: '2px solid #1d4ed8' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="font-playfair text-[#60a5fa] text-xl font-bold tracking-wide"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            ✦ Trendyclothes
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: path === href ? '#60a5fa' : '#cbd5e1',
                borderBottom: path === href ? '2px solid #60a5fa' : '2px solid transparent',
                paddingBottom: 2,
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <svg width="26" height="26" fill="none" stroke="#60a5fa" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ background: '#0f172a' }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[#cbd5e1] text-base font-semibold"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
