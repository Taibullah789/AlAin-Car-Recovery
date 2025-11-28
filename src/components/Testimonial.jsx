export default function Testimonial(){
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg'>
            <div className='text-4xl text-blue-600 mb-4'>"</div>
            <p className='text-xl md:text-2xl text-gray-700 mb-6 italic'>
              FastLane Towing came to my rescue when my supercar stalled near the Burj Khalifa. Their rapid response and professional care were truly impressive!
            </p>
            <div className='flex items-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4'>
                KA
              </div>
              <div>
                <div className='font-bold text-lg'>Khalid Al Mansoori</div>
                <div className='text-gray-600'>CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

