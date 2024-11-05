import React, { useState } from 'react';
import CountrySelector from './CountrySelector'; // Ensure this is imported if not done yet

const ContactSection = ({ contactData, countryCodes }) => {
  const [phonePlaceholder, setPhonePlaceholder] = useState(contactData?.formPlaceholders?.phone || '');

  const handleCountryChange = (dialCode) => {
    setPhonePlaceholder(`${dialCode} Your Phone`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!'); // Replace with actual submission logic
  };

  // Early return if contactData is not ready
  if (!contactData || !contactData.header) {
    return <div>Loading contact information...</div>; // Optional loading state for ContactSection
  }

  return (
    <section className="p-10 shadow-md border border-white rounded-md">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-5">
        <div className="text-center mb-5">
          <h2 className="text-2xl font-semibold text-gray-800 pb-4">{contactData.header.title || "Contact Us"}</h2>
          <p className="text-gray-500 font-roboto text-lg font-normal pb-4">{contactData.header.description || "Please reach out for any inquiries."}</p>
        </div>
        
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder={contactData.formPlaceholders.name || "Your Name"} 
                required
                className="w-full p-2 shadow-md border border-white rounded-md text-base" 
              />
            </div>
            <div className="flex-1">
              <input 
                type="email" 
                placeholder={contactData.formPlaceholders.email || "Your Email"} 
                required
                className="w-full p-2 shadow-md border border-white rounded-md text-base" 
              />
            </div>
          </div>

          <div className="flex items-center">
            <CountrySelector countryCodes={countryCodes} onCountryChange={handleCountryChange} />
            <input 
              type="tel" 
              id="phone-number" 
              name="your-phone" 
              placeholder={phonePlaceholder} 
              required
              className="w-full p-2 shadow-md border border-white rounded-md text-base" 
            />
          </div>

          <div>
            <input 
              type="text" 
              placeholder={contactData.formPlaceholders.subject || "Subject"} 
              required
              className="w-full p-2 shadow-md border border-white rounded-md text-base" 
            />
          </div>

          <div>
            <textarea 
              placeholder={contactData.formPlaceholders.message || "Your Message"} 
              rows="4" 
              required
              className="w-full p-2 shadow-md border border-white rounded-md text-base resize-y" 
            />
          </div>

          <button 
            type="submit" 
            className="bg-orange-500 text-white border-none py-3 px-4 rounded-md cursor-pointer text-base font-semibold transition duration-300 ease-in-out hover:bg-blue-700 w-1/2"
          >
            {contactData.submitButton || "Submit Details"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
