import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import IntroContent from '../components/home/IntroContent';
import Features from '../components/home/Features';
import VideoSection from '../components/home/VideoSection';
import ReasonsSection from '../components/home/ReasonsSection';
import IntegrationSection from '../components/home/IntegrationSection';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import FaqSection from '../components/home/FaqSection';
import Trustedbrands from '../components/home/Trustedbrands';
import ApiService from '../api/ApiService';
import Chatbot from '../components/chatBot/Chatbox';


const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHomeData = async () => {
    try {
      const data = await ApiService.getHomeData();
      console.log('Fetched home data:', data);
      setHomeData(data[0]);
    } catch (error) {
      console.error('Error fetching home data:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!homeData) return <div>No data available</div>;

  return (
    <>
      <section>
        <Layout>
          <IntroContent introData={homeData.intro} />
          <Features featuresData={homeData.features} />
          <VideoSection videoData={homeData.videoSection} />
          <ReasonsSection reasonsData={homeData.reasonsSection} />
          <IntegrationSection integrationData={homeData.integrations} />
          <Trustedbrands brand={homeData.brands} tagline={homeData.tagline} />
          <TestimonialsSlider testimonialsData={homeData.testimonials} />
          <FaqSection faqData={homeData.faqData} />
        </Layout>
      </section>
      <Chatbot />
    </>

  );
};

export default Home;
