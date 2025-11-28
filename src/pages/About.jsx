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
        <title>About Us | SwiftTow Dubai</title>
        <meta
          name="description"
          content="Learn about SwiftTow Dubai - your trusted partner for 24/7 emergency towing and roadside assistance across Dubai."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="towing Dubai, roadside assistance Dubai, SwiftTow Dubai, emergency towing"
        />
        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SwiftTow Dubai",
            "url": "https://www.swifttowdubai.com",
            "logo": "https://www.swifttowdubai.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/swifttowdubai",
              "https://www.instagram.com/swifttowdubai"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971504054022",
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
