import ServiceCard from '../components/ServiceCard';
import services from '../data/services';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';

export default function Services(){
  return (
    <div>
      <Helmet>
        <title>Our Services | SwiftTow Dubai</title>
        <meta name="description" content="SwiftTow Dubai offers comprehensive towing and roadside assistance services in Dubai." />
      </Helmet>
      <PageHero 
        title="Our Services"
        breadcrumbs={[{ label: 'Services', path: '/services' }]}
      />
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {services.map((s, index) => <ServiceCard key={s.id} service={s} index={index} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
