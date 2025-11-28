import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';
import PageHero from '../components/PageHero';

export default function About(){
  return (
    <div>
      <Helmet>
        <title>About Us | FastLane Towing</title>
        <meta name="description" content="Learn about FastLane Towing - your trusted partner for 24/7 emergency towing and roadside assistance across Dubai." />
      </Helmet>
      <PageHero 
        title="About Us"
        breadcrumbs={[{ label: 'About Us', path: '/about' }]}
      />
      <AboutSection />
    </div>
  );
}
