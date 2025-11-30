import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import AboutSection from '../components/AboutSection';
import { useFadeIn } from '../hooks/useFadeIn';

export default function About() {
  const [ref, isVisible] = useFadeIn({ threshold: 0.1 });

  return (
    <div>
      {/* SEO & Structured Data */}
      <Helmet>
        <html lang="en" />
        <title>About Us | Al Ain Car Towing</title>
        <meta
          name="description"
          content="Learn about Al Ain Car Towing - your trusted partner for 24/7 emergency towing and roadside assistance across Al Ain."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="towing Al Ain, roadside assistance Al Ain, Al Ain Car Towing, emergency towing"
        />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Al Ain Car Towing",
            "url": "https://www.alaincartowing.com",
            "logo": "https://www.alaincartowing.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/alaincartowing",
              "https://www.instagram.com/alaincartowing",
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "0569284977",
              "contactType": "customer service",
              "areaServed": "AE"
            }
          }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <PageHero
        title="About Us"
        breadcrumbs={[{ label: 'About Us', path: '/about' }]}
      />

      {/* About Content Section with Fade-In */}
      <section
        ref={ref}
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <AboutSection />
      </section>
    </div>
  );
}
