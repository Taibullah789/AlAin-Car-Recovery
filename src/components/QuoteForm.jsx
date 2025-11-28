import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function QuoteForm(){
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_PUBLIC_KEY')
      .then(()=>alert('Quote request sent successfully! We will contact you soon.'))
      .catch(()=>alert('Error sending message. Please try calling us directly.'));
  };
  
  return (
    <section className='py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>Get Your Towing Quote</h2>
          <p className='text-lg opacity-90'>Fill out the form below and we'll get back to you with a quote</p>
        </div>
        
        <div className='max-w-2xl mx-auto'>
          <form ref={form} onSubmit={sendEmail} className='bg-white text-gray-800 p-8 rounded-lg shadow-xl'>
            <div className='grid md:grid-cols-2 gap-6 mb-6'>
              <div>
                <label className='block text-sm font-semibold mb-2'>Full Name</label>
                <input 
                  type='text' 
                  name='name' 
                  required 
                  className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-semibold mb-2'>Phone Number</label>
                <input 
                  type='tel' 
                  name='phone' 
                  required 
                  className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                />
              </div>
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-semibold mb-2'>Email</label>
              <input 
                type='email' 
                name='email' 
                required 
                className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
              />
            </div>
            <div className='mb-6'>
              <label className='block text-sm font-semibold mb-2'>Message</label>
              <textarea 
                name='message' 
                rows='4'
                className='w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                placeholder='Tell us about your towing needs...'
              />
            </div>
            <button 
              type='submit' 
              className='w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

