import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

export default function ReadySection() {
  const [ref, isVisible] = useFadeIn();
  
  return (
    <section 
      className='relative py-20 md:py-32 bg-cover bg-center bg-no-repeat text-white'
      ref={ref}
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(30, 58, 138, 0.7) 100%), url("/image.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center ${isVisible ? 'fade-in-visible' : 'fade-in'}`}>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight'>
          WE ARE READY 24/7<br />HOURS TO HELP YOU.
        </h2>
        
        <p className='text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-3xl mx-auto text-gray-100 leading-relaxed'>
          Whether it's a flat tire at Dubai Mall or a breakdown near Dubai Marina, our expert team is on standby around the clock.
        </p>
        
        <Link 
          to='/contact'
          className='inline-block bg-yellow-400 text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-300 transition shadow-lg'
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
