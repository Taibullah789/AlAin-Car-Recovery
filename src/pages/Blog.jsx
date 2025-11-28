import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';

export default function Blog(){
  return (
    <div>
      <Helmet>
        <title>Blog | FastLane Towing</title>
        <meta name="description" content="Read our latest blog posts about towing tips, vehicle maintenance, and roadside assistance." />
      </Helmet>
      <PageHero 
        title="Blog"
        breadcrumbs={[{ label: 'Blog', path: '/blog' }]}
      />
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <p className='text-gray-600 text-lg'>Blog posts coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

