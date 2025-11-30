import { Helmet } from 'react-helmet-async';
import GallerySection from '../components/Gallery';
import PageHero from '../components/PageHero';

export default function Gallery() {
  return (
    <div>
      <Helmet>
        <title>Gallery | Al Ain Car Towing</title>
        <meta 
          name="description" 
          content="View our gallery of towing and roadside assistance services in Al Ain." 
        />
      </Helmet>

      <PageHero 
        title="Gallery"
        breadcrumbs={[{ label: 'Gallery', path: '/gallery' }]}
      />

      <section className='pt-20'>
        <GallerySection />
      </section>
    </div>
  );
}
