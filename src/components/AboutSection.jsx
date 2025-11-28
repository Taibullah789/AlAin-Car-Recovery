import { useFadeIn } from '../hooks/useFadeIn';
import topImg from '../assets/s2.jpeg';
import bottomImg from '../assets/s3.webp';

export default function AboutSection() {
  const [ref, isVisible] = useFadeIn();
  const features = [
    'Free Maintenance',
    'Perfect Work',
    'Professional Service',
    'Satisfaction Guaranteed'
  ];

  return (
    <section className='py-16 md:py-24 bg-white' ref={ref}>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          {/* Left: images with overlapping "29 Years" badge */}
          <div className={`${isVisible ? 'fade-in-visible' : 'fade-in'} transition-all duration-700`}>
            <div className='relative z-10'>
              <img
                src={topImg}
                alt='Towing service'
                className='w-full max-w-md h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-2xl'
              />
            </div>

            {/* badge */}
            <div className='absolute -top-6 left-8 z-30 bg-black text-white rounded-lg px-6 py-4 md:px-8 md:py-6 shadow-xl'>
              <div className='flex items-center gap-4'>
                <div className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400'>29</div>
                <div>
                  <div className='text-sm md:text-base font-semibold'>Years Of</div>
                  <div className='text-sm md:text-base font-semibold'>Experience</div>
                </div>
              </div>
            </div>

            {/* bottom small image overlapping */}
            <div className='absolute -bottom-12 left-6 z-20 w-48 md:w-64 lg:w-72'>
              <img
                src={bottomImg}
                alt='Vehicle recovery'
                className='w-full h-36 md:h-48 object-cover rounded-lg shadow-2xl border-8 border-white'
              />
            </div>
          </div>

          {/* Right: content */}
          <div className={`pt-6 md:pt-0 ${isVisible ? 'fade-in-visible fade-in-delay-2' : 'fade-in'}`}>
            <div className='mb-3'>
              <span className='text-xs md:text-sm font-semibold text-gray-800 uppercase tracking-widest'>ABOUT US</span>
              <div className='w-12 md:w-16 h-0.5 md:h-1 bg-yellow-400 mt-2'></div>
            </div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6'>
              Experience In
              <br />
              Towing Service
            </h2>

            <p className='text-gray-700 text-base md:text-lg mb-8 leading-relaxed'>
              Swift Tow Dubai is your trusted partner for 24/7 emergency towing and roadside assistance across the Emirates. Our team of certified technicians uses state-of-the-art equipment to ensure your vehicle is assessed, secured, and transported safely—every time.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
              {features.map((feature, i) => (
                <div key={i} className='flex items-center gap-3'>
                  <span className='w-7 h-7 flex items-center justify-center bg-yellow-400 rounded-full text-black shrink-0'>
                    <svg className='w-4 h-4' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M7.5 13.5L4 10l1.06-1.06L7.5 11.38 14.94 4.94 16 6l-8.5 7.5z' fill='currentColor'/>
                    </svg>
                  </span>
                  <span className='text-gray-800 font-medium'>{feature}</span>
                </div>
              ))}
            </div>

            <a href='tel:+971504054022' className='inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-yellow-300 transition shadow-lg'>
              CALL US NOW
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
}

