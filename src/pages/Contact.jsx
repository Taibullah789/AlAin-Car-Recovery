import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import PageHero from '../components/PageHero';

export default function Contact(){
  return (
    <div>
      <Helmet>
        <title>Contact Us | SwiftTow Dubai</title>
        <meta name="description" content="Contact SwiftTow Dubai for 24/7 emergency towing and roadside assistance in Dubai." />
      </Helmet>
      <PageHero 
        title="Contact Us"
        breadcrumbs={[{ label: 'Contact Us', path: '/contact' }]}
      />
      <section className='py-16 md:py-20 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
            {/* Left Side - Contact Information */}
            <div>
              {/* GET IN TOUCH Heading */}
              <div className='mb-4'>
                <span className='text-sm md:text-base font-semibold text-gray-800 uppercase tracking-widest'>
                  Get In Touch
                </span>
                <div className='w-12 md:w-16 h-0.5 md:h-1 bg-yellow-400 mt-2'></div>
              </div>

              {/* Main Title */}
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
                Contact Us To Get In Touch
              </h2>

              {/* Description */}
              <p className='text-gray-600 text-base md:text-lg mb-8 leading-relaxed'>
                Need immediate towing or roadside assistance? SwiftTow Dubai is available 24/7—just reach out and we'll be there fast.
              </p>

              {/* Contact Details */}
              <div className='space-y-6'>
                {/* Location */}
                <div className='flex items-start'>
                  <div className='flex-shrink-0 mt-1'>
                    <svg className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <div className='font-bold text-gray-900 mb-1'>Location</div>
                    <div className='text-gray-600'>United Arab Emirates</div>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start'>
                  <div className='flex-shrink-0 mt-1'>
                    <svg className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <div className='font-bold text-gray-900 mb-1'>Email</div>
                    <a href='mailto:info@fastlanetowing.com' className='text-gray-600 hover:text-yellow-400 transition'>
                      info@fastlanetowing.com
                    </a>
                  </div>
                </div>

                {/* Phone Number */}
                <div className='flex items-start'>
                  <div className='flex-shrink-0 mt-1'>
                    <svg className='w-5 h-5 text-yellow-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                  </div>
                  <div className='ml-4'>
                    <div className='font-bold text-gray-900 mb-1'>Phone Number</div>
                    <a href='tel:+971504054022' className='text-gray-600 hover:text-yellow-400 transition'>
                      +971 50 405 4022
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
