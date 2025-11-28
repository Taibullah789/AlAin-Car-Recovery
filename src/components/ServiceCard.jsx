import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

export default function ServiceCard({service, index = 0}){
  const [ref, isVisible] = useFadeIn({ 
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  return (
    <article
      ref={ref}
      className={`relative overflow-hidden rounded-2xl p-0 border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-card hover:shadow-card-hover transform transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image / Media */}
      {service.image ? (
        <div className='relative h-48 w-full overflow-hidden'>
          <img src={service.image} alt={service.name} className='w-full h-full object-cover transform transition-transform duration-700 hover:scale-105' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
          <div className='absolute left-4 bottom-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white border border-white/10'>
            {service.tag || '24/7'}
          </div>
        </div>
      ) : (
        <div className='h-48 w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50'>
          {service.icon ? <div className='text-6xl'>{service.icon}</div> : <div className='text-3xl font-semibold text-gray-700'>{service.name}</div>}
        </div>
      )}

      {/* Content */}
      <div className='p-6 bg-white'>
        <div className='flex items-start gap-4'>
          <div className='flex-1'>
            <h3 className='text-xl font-semibold text-gray-900 mb-1'>
              {service.name}
            </h3>
            <p className='text-gray-600 text-sm mb-4 line-clamp-3'>{service.description}</p>
            <div className='flex items-center justify-between gap-4'>
              <Link to={`/services/${service.slug}`} className='text-primary-500 font-semibold hover:underline transition'>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
