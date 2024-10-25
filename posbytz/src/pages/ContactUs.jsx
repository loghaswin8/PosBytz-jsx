import React from 'react';
import siteData from '../data/siteData.json'; // Adjust the path as necessary
import HeroSection from '../components/about/HeroSection';
import '../styles/contact.css'
import ContactSection from '../components/contact/ContactSection';


const ContactUs = () => {
  return (
    <div>
      <HeroSection siteData={siteData} sectionKey="contact" />
      <ContactSection contactData={siteData} sectionKey="contact"/>
    </div>
  );
};

export default ContactUs;
