import { useEffect, useState } from 'react';

export default function FloatingContactBanner(){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`absolute top-1/2 left-1/2 z-0 transition-all duration-1000 ease-out ${
        isVisible 
          ? '-translate-y-1/2 translate-x-[calc(30%+80px)] opacity-100' 
          : 'translate-y-[-50%] translate-x-[50vw] opacity-0'
      }`}
    >
      <a 
        href='tel:+971504054022'
        className='bg-gray-900 text-white px-5 md:px-7 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-gray-800 block min-w-[260px] md:min-w-[300px]'
      >
        {/* Top Line - 24/7 Towing Service */}
        <div className='flex items-center space-x-2 mb-3'>
          <svg 
            className='w-5 h-5 md:w-6 md:h-6 text-yellow-400 flex-shrink-0' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth={2.5} 
              d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' 
            />
          </svg>
          <span className='font-bold text-sm md:text-base whitespace-nowrap'>24/7 Recovery Service</span>
        </div>
        
        {/* Bottom Line - Phone Number with Underline */}
        <div className='text-center'>
          <div className='text-lg md:text-xl font-bold border-b-2 border-white pb-1 inline-block'>
            (056) 9284977
          </div>
        </div>
      </a>
    </div>
  );
}

