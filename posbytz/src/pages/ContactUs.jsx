import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import axios from 'axios';
import HeroSection from '../components/about/HeroSection';
import ContactSection from '../components/contact/ContactSection';
import ApiService from '../api/ApiService';

const ContactUs = () => {
  const [contactData, setContactData] = useState(null);
  const [countryCodes, setCountryCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContactData = async () => {
    try {
      const data = await ApiService.getContactData();
      console.log('Fetched contact data:', data);
      setContactData(data[0]);
    } catch (error) {
      console.error('Error fetching contact data:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCountryCodes = async () => {
    try {
      const countryResponse = await axios.get('/data/CountryCodes.json');
      setCountryCodes(countryResponse.data);
    } catch (error) {
      console.error('Error fetching country codes:', error);
      setError('Failed to load country codes. Please try again later.');
    }
  };

  useEffect(() => {
    fetchContactData();
    fetchCountryCodes();
  }, []);

  // Loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!contactData) return <div>No data available</div>;

  // Add checks for contactData properties
  const { heroSection } = contactData;
  const heroTitle = heroSection?.title || "Default Title";
  const heroBreadcrumbs = heroSection?.breadcrumbs || [];

  return (
    <Layout>
      <HeroSection
        title={heroTitle}
        breadcrumbs={heroBreadcrumbs}
      />
      <ContactSection 
        contactData={contactData} 
        countryCodes={countryCodes} 
      />
    </Layout>
  );
};

export default ContactUs;
