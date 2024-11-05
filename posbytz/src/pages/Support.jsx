import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import ApiService from '../api/ApiService';
import HeroSection from '../components/about/HeroSection';
import HelpSection from '../components/support/HelpSection';
import Kindhelp from '../components/support/Kindhelp';
import WhatsAppSupport from '../components/support/WhatsAppSupport';

const Support = () => {
  const [supportData, setSupportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSupportData = async () => {
    try {
      const data = await ApiService.getSupportData();
      console.log('Fetched support data:', data);
      setSupportData(data[0]);
    } catch (error) {
      console.error('Error fetching support data:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSupportData();
  }, []);
  
  if (loading) return <div>Loading...</div>; 
  if (error) return <div>{error}</div>; 
  if (!supportData) return <div>No data available</div>; 

  return (
    <Layout>
      <HeroSection
        title={supportData.heroSection.title}
        breadcrumbs={supportData.heroSection.breadcrumbs} 
      />
      <HelpSection helpItems={supportData.help} />
      <Kindhelp helpKindData={supportData.helpKindData} />
      <WhatsAppSupport whatsapp={supportData.whatsapp} />
    </Layout>
  );
};

export default Support;
