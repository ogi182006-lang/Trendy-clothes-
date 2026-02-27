import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact – Trendyclothes Jaipur',
  description:
    'Visit Trendyclothes at Shop No. 45, Johari Bazar, Jaipur. Call or WhatsApp us at +91 63753 00834.',
};

const WA_NUMBER = '916375300834';

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p
          className="text-[#1d4ed8] text-xs tracking-[4px] uppercase font-semibold"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Get In Touch
        </p>
        <h1
          className="font-bold text-[#0f172a] mt-2"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(28px, 4vw, 48px)',
          }}
        >
          Contact Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info Card */}
        <div>
          <div
            className="bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0]"
          >
            <h2
              className="font-bold text-[#0f172a] text-xl mb-6"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Shop Information
            </h2>
            {[
              ['📍', 'Address', 'Shop No. 45, Johari Bazar\nJaipur, Rajasthan 302003'],
              ['📞', 'Phone / WhatsApp', '+91 63753 00834'],
              ['🕐', 'Hours', 'Mon–Sat: 10:00 AM – 8:00 PM\nSun: 11:00 AM – 6:00 PM'],
              ['✉️', 'Email', 'trendyclothes.jpr@gmail.com'],
            ].map(([icon, label, val]) => (
              <div key={label} className="flex gap-4 mb-6">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p
                    className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wide"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm text-[#374151] mt-1 whitespace-pre-line"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {val}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 mt-5 text-white font-bold text-lg py-4 rounded-xl hover:opacity-90 transition-opacity"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: '#25D366',
              boxShadow: '0 4px 24px rgba(37,211,102,0.3)',
            }}
          >
            💬 Chat on WhatsApp Now
          </a>
        </div>

        {/* Map */}
        <div>
          <div className="rounded-2xl overflow-hidden border border-[#e2e8f0]" style={{ height: 340 }}>
            <iframe
              title="Johari Bazar Jaipur – Trendyclothes Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1396752083027!2d75.82074931504497!3d26.920742583123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db18e0d5bfde7%3A0x7e97e43d5e4e4db5!2sJohari%20Bazaar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-[#dbeafe] rounded-xl px-5 py-4 mt-4 flex gap-3 items-center">
            <span className="text-2xl">🗺️</span>
            <div>
              <p
                className="text-sm font-semibold text-[#1d4ed8]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Find us at Johari Bazar
              </p>
              <p
                className="text-xs text-[#3b82f6]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Jaipur&apos;s most famous shopping street for fashion &amp; jewellery
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
