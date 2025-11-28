import HeroBanner from '../components/HeroBanner';
import StatsSection from '../components/StatsSection';
import ServiceCard from '../components/ServiceCard';
import AboutSection from '../components/AboutSection';
import Testimonial from '../components/Testimonial';
import QuoteForm from '../components/QuoteForm';
import GallerySection from '../components/Gallery';
import services from '../data/services';
import { Helmet } from 'react-helmet-async';

export default function Home(){
  return (
    <div>
      <Helmet>
        <title>FastLane Towing | 24/7 Towing & Roadside Assistance in Dubai</title>
        <meta name="description" content="FastLane Towing provides fast, reliable 24/7 emergency towing and roadside assistance across Dubai. Expert team ensures your vehicle is safely recovered." />
      </Helmet>
      
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* About Section with Features */}
      <AboutSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Services Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='mb-3'>
              <span className='text-sm md:text-base font-semibold text-gray-800 uppercase tracking-widest'>
                Our Services
              </span>
              <div className='w-12 md:w-16 h-0.5 md:h-1 bg-yellow-400 mt-2 mx-auto'></div>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>Emergency Roadside Assistant</h2>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((s, index) => <ServiceCard key={s.id} service={s} index={index} />)}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <Testimonial />
      
      {/* Quote Form Section */}
      <QuoteForm />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Call to Action Section */}
      <section className='py-20 bg-blue-600 text-white text-center'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>WE ARE READY 24/7 HOURS TO HELP YOU.</h2>
          <p className='text-xl mb-8 max-w-3xl mx-auto'>
            Whether it's a flat tire at Dubai Mall or a breakdown near Dubai Marina, our expert team is on standby around the clock.
          </p>
          <a 
            href='tel:+971504054022' 
            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg'
          >
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
}
