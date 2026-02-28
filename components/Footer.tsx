export default function Footer() {
  return (
    <footer
      className="mt-16 py-10"
      style={{ background: '#0f172a', borderTop: '2px solid #1d4ed8' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[#94a3b8] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <p className="text-[#60a5fa] font-bold text-base" style={{ fontFamily: '"Playfair Display", serif' }}>
            ✦ Trendyclothes
          </p>
          <p className="mt-1">Shop No. 45, Johari Bazar, Jaipur, Rajasthan 302003</p>
          <p>WhatsApp: +91 63753 00834</p>
        </div>
        <div
          className="text-[#64748b] text-sm text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <p>© 2026 Trendyclothes | Jaipur</p>
          <div className="flex gap-4 mt-2 justify-center">
            <a href="#" className="text-[#60a5fa] hover:text-white transition-colors">
              📸 Instagram
            </a>
            <a href="#" className="text-[#60a5fa] hover:text-white transition-colors">
              👍 Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
