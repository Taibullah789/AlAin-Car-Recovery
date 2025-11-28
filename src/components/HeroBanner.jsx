import gi1 from '../assets/gi1.webp';

export default function HeroBanner() {
  return (
    <section className="relative text-white h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gi1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center h-full">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full mb-4 text-sm md:text-base font-semibold">
            24/7 Towing Service
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
            SWIFTTOWDUBAI
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-yellow-400">
            Towing & Roadside Assistance
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast, reliable 24/7 emergency towing and roadside assistance across Dubai—
            our expert team ensures your vehicle is safely recovered and back on the road in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="tel:+971504054022"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition shadow-lg w-full md:w-auto text-center"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
