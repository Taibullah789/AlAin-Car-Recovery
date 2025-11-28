import ContactForm from './ContactForm';
import { useFadeIn } from '../hooks/useFadeIn';

export default function TestimonialWithForm() {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });

  return (
    <section className="py-0" ref={ref}>
      <div className="flex flex-col lg:flex-row min-h-[500px] md:min-h-[600px]">
        
        {/* Left Side - Yellow Testimonial Panel */}
        <div
          className={`w-full lg:w-1/2 bg-yellow-400 text-black px-6 md:px-12 py-16 md:py-20 flex flex-col justify-center items-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-lg text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Testimonial</h2>

            <p className="text-base md:text-lg italic mb-10 leading-relaxed font-medium">
              Swift Tow Dubai came to my rescue when my supercar stalled near the Burj Khalifa. Their rapid response and professional care were truly impressive!
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-white text-base font-bold flex-shrink-0">
                KA
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">Khalid Al Mansoori</div>
                <div className="text-black text-sm font-semibold">CEO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Dark Form Panel */}
        <div
          className={`w-full lg:w-1/2 bg-gray-800 text-white px-6 md:px-12 py-16 md:py-20 flex flex-col justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-lg mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
              Get Your Towing Quote
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
