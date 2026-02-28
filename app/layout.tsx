import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Trendyclothes – Latest Fashion in Jaipur',
  description:
    'Stylish clothes & shoes for Men, Women & Kids in Jaipur. Ethnic wear, western outfits, sarees, kurtis at affordable prices. Easy WhatsApp orders.',
  keywords: 'clothes jaipur, fashion jaipur, kurti, saree, denim, ethnic wear, johari bazar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
