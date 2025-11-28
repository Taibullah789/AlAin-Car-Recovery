import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm(){
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_PUBLIC_KEY')
      .then(()=>alert('Message sent successfully! We will contact you soon.'))
      .catch(()=>alert('Error sending message. Please try calling us directly.'));
  };
  
  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
      <div>
        <input 
          type='text' 
          name='name' 
          placeholder='Full Name' 
          required 
          className='w-full border bg-transparent border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition'
        />
      </div>
      
      <div>
        <input 
          type='email' 
          name='email' 
          placeholder='Email' 
          required 
          className='w-full border bg-transparent border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition'
        />
      </div>
      
      <div>
        <input 
          type='tel' 
          name='phone' 
          placeholder='Phone Number' 
          required 
          className='w-full border bg-transparent border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition'
        />
      </div>
      
      <div>
        <textarea 
          name='message' 
          placeholder='Message' 
          rows='5'
          required
          className='w-full border bg-transparent border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition resize-none'
        />
      </div>
      
      <button 
        type='submit' 
        className='bg-yellow-400 text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg uppercase tracking-wide'
      >
        Submit
      </button>
    </form>
  );
}
