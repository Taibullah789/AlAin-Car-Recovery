import HeroBanner from '../components/HeroBanner';
import StatsSection from '../components/StatsSection';
import ServiceCard from '../components/ServiceCard';
import AboutSection from '../components/AboutSection';
import TestimonialWithForm from '../components/TestimonialWithForm';
import GallerySection from '../components/Gallery';
import ReadySection from '../components/ReadySection';
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
      
      {/* Testimonial & Quote Form Section */}
      <TestimonialWithForm />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Ready 24/7 Section */}
      <ReadySection />
    </div>
  );
}
