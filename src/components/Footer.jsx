import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Section - Brand */}
        <div className="bg-yellow-400 text-black w-full md:w-1/3 px-4 sm:px-6 py-12 md:py-16 flex flex-col justify-between">
          <div>
            {/* Brand */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center text-lg">
                {/* SVG logo */}
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 20L44 6h6"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50 6v4c0 2-1 3-2 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 30v-8c0-2 1-3 3-3h10l5 8h14c2 0 4 2 4 4v8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 30h40v10H10z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="18" cy="44" r="6" stroke="currentColor" strokeWidth="2.5" />
                  <circle cx="42" cy="44" r="6" stroke="currentColor" strokeWidth="2.5" />
                  <path d="M24 44h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">ALAIN CAR RECOVERY</h3>
            </div>

            <p className="text-sm sm:text-base leading-relaxed mb-8">
              Your trusted 24/7 towing & roadside assistance partner across Al Ain—fast, reliable and professional every time.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            <a href="https://facebook.com" aria-label="Facebook" className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition">
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.396-.146-2.568-.146-2.728 0-4.427 1.665-4.427 4.716v1.43z"/></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition">
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/></svg>
            </a>
            <a href="https://wa.me/971504054022" aria-label="WhatsApp" className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition">
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.688c0 2.192.547 4.334 1.588 6.231L1.064 23.62l6.782-1.982a9.900 9.900 0 004.991 1.271h.005c5.514 0 9.998-4.486 10.002-9.998 0-2.658-1.034-5.159-2.916-7.041-1.882-1.882-4.382-2.916-7.051-2.916"/></svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="w-8 h-8 sm:w-10 sm:h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition">
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-900 w-full md:w-2/3 px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-6">Quick links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Services</Link></li>
                <li><Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Gallery</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Blog</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Car Towing</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Battery Replacement</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Motorcycle Towing</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Roadside Assistance</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"><span className="text-yellow-400">›</span> Tyre Replacement</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-6">Contact Info</h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-yellow-400 text-lg">📍</span> Al Ain</li>
                <li><a href="mailto:arabianrecoverytowingservice@gmail.com" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-3"><span className="text-yellow-400 text-lg">✉</span> shakilrecoveryservice@gmail.com</a></li>
                <li><a href="tel:0569284977" className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-3 font-semibold"><span className="text-yellow-400 text-lg">📞 (056) 9284977</span> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/3 text-center py-6 px-4">
        <p className="text-gray-400 text-sm">
          Copyright © {currentYear} Al Ain Car Recovery by Skill Ka Safar. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
