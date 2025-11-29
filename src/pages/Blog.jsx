import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Blog() {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });

  return (
    <div>
      {/* SEO & Meta */}
      <Helmet>
        <html lang="en" />
        <title>Blog | Alain Car Recovery</title>
        <meta
          name="description"
          content="Read our latest blog posts about towing tips, vehicle maintenance, and roadside assistance."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="towing blog, roadside assistance tips, vehicle maintenance, Alain Car Recovery"
        />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        title="Blog"
        breadcrumbs={[{ label: 'Blog', path: '/blog' }]}
      />

      {/* Blog Placeholder */}
      <section
        ref={ref}
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              Blog posts coming soon...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
