import { Link } from 'react-router-dom';

export default function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='flex flex-col lg:flex-row'>
        {/* Left Section - Yellow Brand Panel */}
        <div className='bg-yellow-400 text-black w-full lg:w-1/3 px-6 md:px-8 py-12 md:py-16 flex flex-col justify-between'>
          <div>
            {/* Brand */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-yellow-500 rounded flex items-center justify-center text-lg font-bold'>
                🚗
              </div>
              <h3 className='text-xl md:text-2xl font-bold'>SWIFTTOWDUBAI</h3>
            </div>

            {/* Description */}
            <p className='text-sm md:text-base leading-relaxed mb-8'>
              Your trusted 24/7 towing & roadside assistance partner across Dubai—fast, reliable and professional every time.
            </p>
          </div>

          {/* Social Icons */}
          <div className='flex gap-3'>
            <a href='https://facebook.com' aria-label='Facebook' className='w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-1.396-.146-2.568-.146-2.728 0-4.427 1.665-4.427 4.716v1.43z'/></svg>
            </a>
            <a href='https://twitter.com' aria-label='Twitter' className='w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z'/></svg>
            </a>
            <a href='https://wa.me/971504054022' aria-label='WhatsApp' className='w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.688c0 2.192.547 4.334 1.588 6.231L1.064 23.62l6.782-1.982a9.900 9.900 0 004.991 1.271h.005c5.514 0 9.998-4.486 10.002-9.998 0-2.658-1.034-5.159-2.916-7.041-1.882-1.882-4.382-2.916-7.051-2.916'/></svg>
            </a>
            <a href='https://linkedin.com' aria-label='LinkedIn' className='w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center hover:bg-gray-800 transition'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/></svg>
            </a>
          </div>
        </div>

        {/* Right Section - Dark Links */}
        <div className='bg-gray-900 w-full lg:w-2/3 px-6 md:px-8 py-12 md:py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12'>
            {/* Quick Links */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-6'>Quick links</h4>
              <ul className='space-y-3'>
                <li><Link to='/about' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> About Us
                </Link></li>
                <li><Link to='/services' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Services
                </Link></li>
                <li><Link to='/gallery' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Gallery
                </Link></li>
                <li><Link to='/blog' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Blog
                </Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-6'>Our Services</h4>
              <ul className='space-y-3'>
                <li><Link to='/services' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Car Towing
                </Link></li>
                <li><Link to='/services' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Battery Replacement
                </Link></li>
                <li><Link to='/services' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Motorcycle Towing
                </Link></li>
                <li><Link to='/services' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Roadside Assistance
                </Link></li>
                <li><Link to='/services' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-2'>
                  <span className='text-yellow-400'>›</span> Tyre Replacement
                </Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className='text-lg font-semibold text-white mb-6'>Contact Info</h4>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start gap-3'>
                  <span className='text-yellow-400 text-lg'>📍</span>
                  <span>United Arab Emirates</span>
                </li>
                <li>
                  <a href='mailto:arabianrecoverytowingservice@gmail.com' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-3'>
                    <span className='text-yellow-400 text-lg'>✉</span>
                    arabianrecoverytowingservice@gmail.com
                  </a>
                </li>
                <li>
                  <a href='tel:+971567661873' className='text-gray-300 hover:text-yellow-400 transition flex items-center gap-3 font-semibold'>
                    <span className='text-yellow-400 text-lg'>📞</span>
                    (+971) 56 766 1873
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className='bg-black text-center py-6 px-4'>
        <p className='text-gray-400 text-sm'>
          Copyright © {currentYear} Quick Tow Dhabai by Skill Ka Safar All Right Reserved
        </p>
      </div>
    </footer>
  );
}
