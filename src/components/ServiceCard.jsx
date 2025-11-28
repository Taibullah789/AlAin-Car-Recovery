import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

export default function ServiceCard({service, index = 0}){
  const [ref, isVisible] = useFadeIn({ 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div 
      ref={ref}
      className={`bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-0'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transformOrigin: 'center center'
      }}
    >
      {service.image && (
        <div className='mb-4'>
          <img 
            src={service.image} 
            alt={service.name}
            className='w-full h-48 object-cover rounded-lg'
          />
        </div>
      )}
      {!service.image && service.icon && (
        <div className='text-5xl mb-4'>{service.icon}</div>
      )}
      <h2 className='text-2xl font-bold mb-3 text-gray-800'>{service.name}</h2>
      <p className='text-gray-600 mb-4 leading-relaxed'>{service.description}</p>
      <Link 
        to={`/services/${service.slug}`} 
        className='inline-block text-blue-600 font-semibold hover:text-blue-800 transition'
      >
        Learn More →
      </Link>
    </div>
  );
}
