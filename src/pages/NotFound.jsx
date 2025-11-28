import PageHero from '../components/PageHero';

export default function NotFound(){
  return (
    <div>
      <PageHero 
        title="404 - Page Not Found"
        breadcrumbs={[{ label: '404', path: '' }]}
      />
      <section className='py-20 bg-white text-center'>
        <div className='container mx-auto px-4'>
          <p className='text-lg text-gray-600 mb-8'>The page you are looking for does not exist.</p>
          <a 
            href='/' 
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition'
          >
            Go Back Home
          </a>
        </div>
      </section>
    </div>
  );
}
