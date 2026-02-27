# Trendyclothes 👗

A modern, static Next.js website for **Trendyclothes** — a fashion store in Jaipur, Rajasthan.

## Features
- 🛍️ Product catalogue with 20 items (Men, Women, Kids, Ethnic, Western, Shoes)
- 🔍 Client-side search & category filters
- 💬 WhatsApp order integration
- 📱 Fully responsive (mobile-first)
- ⚡ Static export (zero backend)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build Static Site

```bash
npm run build
# Outputs to /out folder — deploy anywhere
```

## WhatsApp Orders
All "Buy Now" buttons link to:
`https://wa.me/916375300834?text=I'm interested in [Product] - ₹[Price]`

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static Export (`output: 'export'`)
