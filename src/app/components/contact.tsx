import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
      <section
        className="text-gray-600 body-font relative"
        style={{
          backgroundImage: 'url(/image/bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white opacity-40"></div>

        <div className="container px-5 py-16 md:py-24 mx-auto flex justify-center items-center relative z-10">
          <div className="lg:w-1/3 md:w-1/2 w-full bg-white rounded-lg p-6 md:p-8 flex flex-col shadow-md">
            <h2 className="text-gray-900 text-2xl md:text-3xl mb-2 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-[#EA1D5D] text-base md:text-lg">
              Feel free to connect with us
            </p>

            {/* Full Name Field */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-2 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Contact No Field */}
            <div className="relative mb-4">
              <label htmlFor="contact" className="leading-7 text-sm text-gray-700">
                Contact No
              </label>
              <input
                type="number"
                id="contact"
                name="contact"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-2 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Email Field */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-2 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Message Field */}
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* Send Message Button */}
            <button className="text-white bg-[#EA1D5D] border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg transition duration-200 ease-in-out">
              Send message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
