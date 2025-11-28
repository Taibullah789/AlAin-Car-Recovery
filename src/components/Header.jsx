import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header(){
  const [servicesOpen, setServicesOpen] = useState(false);
  
  return (
    <header className='bg-blue-600 text-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='text-2xl md:text-3xl font-bold hover:text-blue-200 transition'>
            FastLane Towing
          </Link>
          <nav className='hidden md:flex items-center space-x-6'>
            <Link to='/' className='hover:text-blue-200 transition'>Home</Link>
            <div 
              className='relative'
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link to='/services' className='hover:text-blue-200 transition flex items-center'>
                Services
                <svg className='w-4 h-4 ml-1' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
                </svg>
              </Link>
              {servicesOpen && (
                <div className='absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg py-2'>
                  <Link to='/services/towing-services' className='block px-4 py-2 hover:bg-blue-50'>Towing Services</Link>
                  <Link to='/services/tire-change' className='block px-4 py-2 hover:bg-blue-50'>Tire Change</Link>
                  <Link to='/services/roadside-assistant' className='block px-4 py-2 hover:bg-blue-50'>Roadside Assistant</Link>
                  <Link to='/services/sports-recovery' className='block px-4 py-2 hover:bg-blue-50'>Sports Recovery</Link>
                  <Link to='/services/desert-pullout' className='block px-4 py-2 hover:bg-blue-50'>Desert Pullout</Link>
                  <Link to='/services/4x4-recovery' className='block px-4 py-2 hover:bg-blue-50'>4x4 Recovery</Link>
                </div>
              )}
            </div>
            <Link to='/about' className='hover:text-blue-200 transition'>About</Link>
            <Link to='/gallery' className='hover:text-blue-200 transition'>Gallery</Link>
            <Link to='/blog' className='hover:text-blue-200 transition'>Blog</Link>
            <Link to='/contact' className='hover:text-blue-200 transition'>Contact Us</Link>
          </nav>
          <div className='md:hidden'>
            <button className='text-white'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
