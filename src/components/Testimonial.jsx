import { useFadeIn } from '../hooks/useFadeIn';

export default function Testimonial() {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg">
            {/* Quote Icon */}
            <div className="text-4xl text-blue-600 mb-4">"</div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
             Al Ain Car Recovery came to my rescue when my supercar stalled near the Burj Khalifa. Their rapid response and professional care were truly impressive!
            </p>

            {/* Author */}
            <div className="flex items-center mt-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                KA
              </div>
              <div>
                <div className="font-bold text-lg md:text-xl">Khalid Al Mansoori</div>
                <div className="text-gray-600 md:text-base">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
