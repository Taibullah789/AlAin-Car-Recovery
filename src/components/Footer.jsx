import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>FastLane Towing</h3>
            <p className='text-gray-400 mb-4'>
              Your trusted 24/7 towing & roadside assistance partner across Dubai—fast, reliable and professional every time.
            </p>
            <div className='flex space-x-4'>
              <a href='#' className='text-gray-400 hover:text-white transition'>📘</a>
              <a href='#' className='text-gray-400 hover:text-white transition'>🐦</a>
              <a href='#' className='text-gray-400 hover:text-white transition'>💬</a>
              <a href='#' className='text-gray-400 hover:text-white transition'>💼</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick links</h4>
            <ul className='space-y-2'>
              <li><Link to='/about' className='text-gray-400 hover:text-white transition'>About Us</Link></li>
              <li><Link to='/services' className='text-gray-400 hover:text-white transition'>Services</Link></li>
              <li><Link to='/gallery' className='text-gray-400 hover:text-white transition'>Gallery</Link></li>
              <li><Link to='/blog' className='text-gray-400 hover:text-white transition'>Blog</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Our Services</h4>
            <ul className='space-y-2'>
              <li><Link to='/services/towing-services' className='text-gray-400 hover:text-white transition'>Car Towing</Link></li>
              <li><Link to='/services/battery-replacement' className='text-gray-400 hover:text-white transition'>Battery Replacement</Link></li>
              <li><Link to='/services/motorcycle-towing' className='text-gray-400 hover:text-white transition'>Motorcycle Towing</Link></li>
              <li><Link to='/services/tire-change' className='text-gray-400 hover:text-white transition'>Tyre Replacement</Link></li>
              <li><Link to='/services/roadside-assistant' className='text-gray-400 hover:text-white transition'>Roadside Assistance</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact Info</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>United Arab Emirates</li>
              <li>
                <a href='mailto:info@fastlanetowing.com' className='hover:text-white transition'>
                  info@fastlanetowing.com
                </a>
              </li>
              <li>
                <a href='tel:+971504054022' className='hover:text-white transition font-semibold'>
                  (+971) 50 405 4022
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className='border-t border-gray-800 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm mb-4 md:mb-0'>
              Copyright © 2025 FastLane Towing. All rights reserved.
            </p>
            <div className='text-center md:text-right'>
              <p className='text-gray-400 text-sm mb-2'>
                WE ARE READY 24/7 HOURS TO HELP YOU.
              </p>
              <p className='text-gray-400 text-sm'>
                Whether it's a flat tire at Dubai Mall or a breakdown near Dubai Marina, our expert team is on standby around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
