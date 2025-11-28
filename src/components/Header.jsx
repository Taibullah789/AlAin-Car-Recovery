import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import services from '../data/services';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-2 py-1 text-sm md:text-base font-medium transition ${
      isActive ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-white hover:text-yellow-300'
    }`;

  return (
    <header className="bg-black/60 backdrop-blur-sm text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-yellow-400 flex items-center justify-center text-black font-bold">
            {/* Truck SVG */}
            <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 20L44 6h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M50 6v4c0 2-1 3-2 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 30v-8c0-2 1-3 3-3h10l5 8h14c2 0 4 2 4 4v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 30h40v10H10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
              <circle cx="18" cy="44" r="6" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="42" cy="44" r="6" stroke="currentColor" strokeWidth="2.5"/>
              <path d="M24 44h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="hidden sm:inline-block text-white font-bold tracking-wide">AL AIN CAR RECOVERY</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <NavLink to="/services" className={linkClass} end={false} aria-haspopup="true">Services</NavLink>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg py-2">
                {services.map((service) => (
                  <NavLink key={service.id} to={`/services/${service.slug}`} className="block px-4 py-2 hover:bg-gray-100">
                    {service.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:0569284977" className="hidden md:inline-block bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            CALL US NOW
          </a>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(s => !s)}
            className="lg:hidden text-white focus:outline-none"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-black/90 text-white overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          <NavLink to="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-lg font-medium">Home</NavLink>
          <button
            onClick={() => setMobileServicesOpen(s => !s)}
            className="w-full flex items-center justify-between px-3 py-2 text-lg font-medium"
            aria-expanded={mobileServicesOpen}
          >
            <span>Services</span>
            <svg className={`w-5 h-5 transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd"/>
            </svg>
          </button>
          <div className={`pl-4 mt-1 flex flex-col gap-1 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {services.map(s => (
              <NavLink key={s.id} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="px-3 py-2">{s.name}</NavLink>
            ))}
          </div>
          <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-lg font-medium">About</NavLink>
          <NavLink to="/gallery" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-lg font-medium">Gallery</NavLink>
          <NavLink to="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-lg font-medium">Blog</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-lg font-medium">Contact Us</NavLink>
          <a href="tel:+971504054022" className="mt-2 w-full text-center bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">CALL US NOW</a>
        </div>
      </div>
    </header>
  );
}
