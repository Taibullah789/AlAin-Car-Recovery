import { useParams, Link } from 'react-router-dom';
import services from '../data/services';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-6">We couldn't find the service you're looking for.</p>
        <Link 
          to="/services" 
          className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{service.name} | Alain Car Recovery</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <PageHero 
        title={service.name}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.name, path: `/services/${slug}` }
        ]}
      />

      <section className="py-20 bg-white" aria-label={service.name}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Icon / Image */}
            <div className="text-6xl text-center mb-6">{service.icon || '🚗'}</div>
            
            {/* Service Name */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{service.name}</h2>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">{service.description}</p>

            {/* Why Choose Us */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Why Choose Our {service.name}?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>24/7 availability for emergency situations</li>
                <li>Certified and experienced technicians</li>
                <li>State-of-the-art equipment</li>
                <li>Fast response time</li>
                <li>Competitive pricing</li>
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <a 
                href="tel:0569284977" 
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition shadow-lg"
              >
                Call Now: (056) 92 84 977
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
