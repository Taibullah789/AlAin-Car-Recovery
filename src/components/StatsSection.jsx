import { useFadeIn } from '../hooks/useFadeIn';

export default function StatsSection(){
  const [ref, isVisible] = useFadeIn();
  
  const stats = [
    {
      icon: (
        <svg className='w-16 h-16 md:w-20 md:h-20 text-yellow-400' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth='1.5'>
          <circle cx='12' cy='12' r='10' />
          <path d='M12 6v6l4 2' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      ),
      number: '29',
      label: 'Years Of Experience'
    },
    {
      icon: (
        <svg className='w-16 h-16 md:w-20 md:h-20 text-yellow-400' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/>
        </svg>
      ),
      number: '50',
      label: 'Offices Worldwide'
    },
    {
      icon: (
        <svg className='w-16 h-16 md:w-20 md:h-20 text-yellow-400' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M18 18.5a1.5 1.5 0 01-1.5-1.5V5a3 3 0 00-3-3h-1a3 3 0 00-3 3v12a1.5 1.5 0 01-3 0V5a6 6 0 016-6h1a6 6 0 016 6v12a1.5 1.5 0 01-1.5 1.5z'/>
        </svg>
      ),
      number: '2550',
      label: 'Vehicles Towed'
    },
    {
      icon: (
        <svg className='w-16 h-16 md:w-20 md:h-20 text-yellow-400' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/>
        </svg>
      ),
      number: '50',
      label: 'Active Members'
    }
  ];

  return (
    <section className='py-16 md:py-20 bg-gray-900' ref={ref}>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          {stats.map((stat, index) => (
            <div key={index} className={`text-center flex flex-col items-center justify-center ${isVisible ? 'fade-in-visible' : 'fade-in'}`} style={{ animationDelay: isVisible ? `${index * 100}ms` : '0s' }}>
              {/* Icon */}
              <div className='mb-6 md:mb-8'>
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3'>
                {stat.number}
              </div>
              
              {/* Label */}
              <div className='text-sm md:text-base text-white/90 font-semibold'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

