import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function QuoteForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() =>
        alert('Quote request sent successfully! We will contact you soon.')
      )
      .catch(() =>
        alert('Error sending message. Please try calling us directly.')
      );
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Get Your Towing Quote
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a quote.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white text-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="+971 50 123 4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="example@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us about your towing needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl hover:bg-blue-700 transition-shadow shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
