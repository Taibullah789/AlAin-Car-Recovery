import { useFadeIn } from '../hooks/useFadeIn';
import gi1 from '../assets/gi1.webp';
import gi2 from '../assets/gi2.webp';
import gi3 from '../assets/gi3.webp';
import gi4 from '../assets/gi4.webp';
import gi5 from '../assets/gi5.webp';
import gi6 from '../assets/gi6.webp';
import gi7 from '../assets/gi7.webp';
import gi8 from '../assets/gi8.webp';
import gi9 from '../assets/gi9.webp';

export default function Gallery() {
  const galleryImages = [
    { id: 1, title: 'Towing Service', url: gi1 },
    { id: 2, title: 'Roadside Assistance', url: gi2 },
    { id: 3, title: 'Vehicle Recovery', url: gi3 },
    { id: 4, title: 'Professional Team', url: gi4 },
    { id: 5, title: 'Emergency Service', url: gi5 },
    { id: 6, title: '24/7 Available', url: gi6 },
    { id: 7, title: 'Car Towing', url: gi7 },
    { id: 8, title: 'Fast Response', url: gi8 },
    { id: 9, title: 'Expert Service', url: gi9 },
  ];

  function GalleryItem({ image, index }) {
    const [ref, isVisible] = useFadeIn({
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    return (
      <div
        ref={ref}
        className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-700 group cursor-pointer will-change-transform will-change-opacity ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
        style={{
          transitionDelay: `${index * 100}ms`,
          transformOrigin: 'center center',
        }}
      >
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
          <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition duration-300">
            {image.title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Recent Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            See our team in action providing professional towing services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
