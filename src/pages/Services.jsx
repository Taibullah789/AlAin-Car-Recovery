import ServiceCard from '../components/ServiceCard';
import services from '../data/services';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Our Services | Al Ain Car Towing</title>
        <meta 
          name="description" 
          content="Al Ain Car Towing offers comprehensive towing and roadside assistance services in Al Ain,Uae." 
        />
      </Helmet>

      <PageHero 
        title="Our Services"
        breadcrumbs={[{ label: 'Services', path: '/services' }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Section Intro */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Emergency Roadside Assistance</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide 24/7 towing and roadside assistance across Al Ain. Explore our services below and get help when you need it most.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, index) => (
              <ServiceCard key={s.id} service={s} index={index} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
