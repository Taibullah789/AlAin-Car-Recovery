import { useParams } from 'react-router-dom';
import services from '../data/services';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';

export default function ServiceDetail(){
  const { slug } = useParams();
  const service = services.find(s => s.slug===slug);
  if(!service) return <div>Service not found</div>;
  return (
    <div>
      <Helmet>
        <title>{service.name} | SwiftTow Dubai</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <PageHero 
        title={service.name}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.name, path: `/services/${slug}` }
        ]}
      />
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-6xl mb-6'>{service.icon || '🚗'}</div>
            <h2 className='text-3xl font-bold mb-6'>{service.name}</h2>
            <p className='text-lg text-gray-700 leading-relaxed mb-8'>{service.description}</p>
            <div className='bg-blue-50 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4'>Why Choose Our {service.name}?</h3>
              <ul className='list-disc list-inside space-y-2 text-gray-700'>
                <li>24/7 availability for emergency situations</li>
                <li>Certified and experienced technicians</li>
                <li>State-of-the-art equipment</li>
                <li>Fast response time</li>
                <li>Competitive pricing</li>
              </ul>
            </div>
            <div className='mt-8'>
              <a 
                href='tel:+971504054022' 
                className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition'
              >
                Call Now: (+971) 50 405 4022
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
