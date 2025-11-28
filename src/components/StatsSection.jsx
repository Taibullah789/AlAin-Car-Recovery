export default function StatsSection(){
  return (
    <section className='py-16 md:py-20 bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          <div className='text-center bg-gray-800 rounded-lg p-6 md:p-8'>
            <div className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2'>29</div>
            <div className='text-sm md:text-base text-white/90'>years of experience</div>
          </div>
          <div className='text-center bg-gray-800 rounded-lg p-6 md:p-8'>
            <div className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2'>50</div>
            <div className='text-sm md:text-base text-white/90'>Offices Worldwide</div>
          </div>
          <div className='text-center bg-gray-800 rounded-lg p-6 md:p-8'>
            <div className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2'>2550</div>
            <div className='text-sm md:text-base text-white/90'>Vehicles Towed</div>
          </div>
          <div className='text-center bg-gray-800 rounded-lg p-6 md:p-8'>
            <div className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2'>50</div>
            <div className='text-sm md:text-base text-white/90'>Active Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}

