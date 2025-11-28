import gi1 from '../assets/gi1.webp';

export default function HeroBanner(){
  return (
    <section className='relative text-white py-20 md:py-32 h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden'>
      {/* Background Image with Overlay */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${gi1})`
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80'></div>
      </div>
      <div className='container mx-auto px-4 relative z-10'>
        {/* Brand title centered as the primary heading */}
        <div className='text-center mb-12'>
          <div className='inline-block bg-blue-500 px-4 py-2 rounded-full mb-4 text-sm font-semibold'>
            24/7 Towing Service
          </div>
          <h1 className='text-5xl md:text-7xl font-bold mb-2 text-white'>SWIFTTOWDUBAI</h1>
          <h2 className='text-2xl md:text-4xl font-light mb-6 text-primary-500'>Towing & Roadside Assistance</h2>
          <p className='text-lg md:text-xl mb-8 max-w-3xl mx-auto'>
            Fast, reliable 24/7 emergency towing and roadside assistance across Dubai—our expert team ensures your vehicle is safely recovered and back on the road in minutes.
          </p>
          <div className='flex flex-col md:flex-row items-center justify-center gap-4 mb-12'>
            <a 
              href='tel:+971504054022' 
              className='bg-yellow-400 text-black-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg'
            >
              Call Us Now
            </a>
            <div className='text-2xl font-bold'>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
