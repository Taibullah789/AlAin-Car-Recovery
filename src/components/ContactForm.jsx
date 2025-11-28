import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(() =>
        alert('Message sent successfully! We will contact you soon.')
      )
      .catch(() =>
        alert('Error sending message. Please try calling us directly.')
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-5 w-full max-w-lg mx-auto px-4 sm:px-6"
    >
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="sr-only">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Full Name"
          required
          className="w-full border border-gray-300 bg-transparent p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition text-sm sm:text-base"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 bg-transparent p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition text-sm sm:text-base"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full border border-gray-300 bg-transparent p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition text-sm sm:text-base"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="5"
          required
          className="w-full border border-gray-300 bg-transparent p-3 sm:p-4 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition text-sm sm:text-base resize-none"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg uppercase tracking-wide"
      >
        Submit
      </button>
    </form>
  );
}
