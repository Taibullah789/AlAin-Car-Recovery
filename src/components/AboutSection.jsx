export default function AboutSection(){
  const features = [
    'Free Maintenance',
    'Perfect Work',
    'Professional Service',
    'Satisfaction Guaranteed'
  ];

  return (
    <section className='py-16 md:py-20 bg-white'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='grid md:grid-cols-2 gap-8 lg:gap-16 items-start'>
          {/* Left Side - Years of Experience Block with Images */}
          <div className='relative'>
            {/* Top Image - Main large image */}
            <div className='relative z-10'>
              <img 
                src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
                alt='Towing service'
                className='w-full max-w-lg h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-2xl'
              />
            </div>
            
            {/* Black Block with 29 - Overlapping Top Left Corner */}
            <div className='bg-black p-5 md:p-7 lg:p-9 absolute top-4 left-4 z-30 w-40 md:w-48 lg:w-56'>
              <div className='text-yellow-400 font-bold text-4xl md:text-5xl lg:text-6xl leading-none mb-1'>
                29
              </div>
              <div className='text-white text-sm md:text-base lg:text-lg font-semibold leading-tight'>
                <div>Years Of</div>
                <div>Experience</div>
              </div>
            </div>
            
            {/* Bottom Image - Smaller, overlapping bottom-left */}
            <div className='relative -mt-20 md:-mt-24 lg:-mt-28 ml-4 md:ml-6 lg:ml-8 z-20 w-64 md:w-72 lg:w-80'>
              <img 
                src='https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80'
                alt='Vehicle recovery'
                className='w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-2xl'
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className='pt-8 md:pt-12 lg:pt-16'>
            {/* ABOUT US Label */}
            <div className='mb-3'>
              <span className='text-xs md:text-sm font-semibold text-gray-800 uppercase tracking-widest'>
                About Us
              </span>
              <div className='w-12 md:w-16 h-0.5 md:h-1 bg-yellow-400 mt-2'></div>
            </div>

            {/* Main Heading */}
            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              Experience In Towing Service
            </h2>

            {/* Description */}
            <p className='text-gray-700 text-base md:text-lg mb-8 leading-relaxed'>
              FastLane Towing is your go-to partner for 24/7 emergency towing and roadside assistance across the Emirates. Our certified technicians utilize cutting-edge equipment to assess, secure, and transport your vehicle safely—every time.
            </p>

            {/* Features List */}
            <ul className='space-y-3 md:space-y-4 mb-8'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-start'>
                  <svg 
                    className='w-5 h-5 text-yellow-400 mr-3 flex-shrink-0 mt-0.5' 
                    fill='currentColor' 
                    viewBox='0 0 20 20'
                  >
                    <path 
                      fillRule='evenodd' 
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' 
                      clipRule='evenodd' 
                    />
                  </svg>
                  <span className='text-gray-800 text-base md:text-lg font-medium'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <a 
              href='tel:+971504054022' 
              className='inline-block bg-yellow-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-sm md:text-base lg:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg uppercase tracking-wide'
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

