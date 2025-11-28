import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

export default function ReadySection() {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      ref={ref}
      className={`relative py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat text-white`}
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(30,58,138,0.7) 100%), url("/image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for extra readability on smaller screens */}
      <div className="absolute inset-0 bg-black/30 lg:bg-black/40"></div>

      {/* Content */}
      <div
        className={`relative z-10 container mx-auto px-4 text-center transition-all duration-700 ${
          isVisible ? 'fade-in-visible' : 'fade-in'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-snug">
          WE ARE READY 24/7
          <br />
          HOURS TO HELP YOU.
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-100 leading-relaxed">
          Whether it's a flat tire at Al Ain or a breakdown near Al Ain, our expert team is on standby around the clock.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-yellow-400 text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-yellow-300 transition-shadow shadow-lg"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
