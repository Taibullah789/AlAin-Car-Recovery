import { Link } from 'react-router-dom';
import FloatingContactBanner from './FloatingContactBanner';
import gi1 from '../assets/gi1.webp';

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
  // Default breadcrumbs based on current path
  const defaultBreadcrumbs = [
    { label: 'Home', path: '/' },
    ...breadcrumbs
  ];
  
  return (
    <section className='relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden'>
      {/* Background Image with Overlay */}
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url(${gi1})`
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80'></div>
      </div>
      
      {/* Content */}
      <div className='relative z-10 h-full flex flex-col justify-center items-center text-white px-4 pt-20'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-center tracking-tight'>
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <nav className='flex items-center space-x-2 text-sm md:text-base mb-12'>
          {defaultBreadcrumbs.map((crumb, index) => (
            <div key={index} className='flex items-center'>
              {index > 0 && <span className='mx-2 text-yellow-400 font-bold'>›</span>}
              {index === defaultBreadcrumbs.length - 1 ? (
                <span className='text-yellow-400 font-semibold'>{crumb.label}</span>
              ) : (
                <Link to={crumb.path} className='hover:text-yellow-400 transition text-white'>
                  {crumb.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Decorative Elements - Chevron patterns */}
        <div className='absolute bottom-32 left-0 right-0 flex justify-center space-x-1 opacity-40'>
          <div className='w-12 h-0.5 bg-white transform rotate-45 origin-center'></div>
          <div className='w-12 h-0.5 bg-white transform -rotate-45 origin-center'></div>
          <div className='w-12 h-0.5 bg-white transform rotate-45 origin-center'></div>
          <div className='w-12 h-0.5 bg-white transform -rotate-45 origin-center'></div>
          <div className='w-12 h-0.5 bg-white transform rotate-45 origin-center'></div>
        </div>
      </div>
      
      {/* Yellow Wave Divider */}
      <div className='absolute bottom-0 left-0 right-0 z-20'>
        <svg 
          viewBox='0 0 1440 150' 
          fill='none' 
          xmlns='http://www.w3.org/2000/svg'
          className='w-full h-28 md:h-36 lg:h-40'
          preserveAspectRatio='none'
        >
          <path 
            d='M0,80 C360,20 720,140 1080,80 C1260,50 1380,100 1440,80 L1440,150 L0,150 Z' 
            fill='#FCD34D'
          />
        </svg>
      </div>
      
      {/* Contact Banner - Positioned on Hero */}
      <FloatingContactBanner />
    </section>
  );
}

