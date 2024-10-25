import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import IntroContent from '../components/home/IntroContent';
import Features from '../components/home/Features';
import VideoSection from '../components/home/VideoSection';
import ReasonsSection from '../components/home/ReasonsSection';
import axios from 'axios';
import IntegrationSection from '../components/home/IntegrationSection';
import Brands from '../components/home/Brands';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import FaqSection from '../components/home/FaqSection';
import Trustedbrands from '../components/home/Trustedbrands';


const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios.get('/data/siteData.json')
      .then((response) => {
        const homeInfo = response.data.home[0]; // Access the first element of the home array
        setHomeData(homeInfo);
        console.log('Fetched home data:', homeInfo); // Log fetched data
      })
      .catch((error) => {
        console.error('Error fetching home data:', error);
      });
  }, []);

  if (!homeData) {
    return <div>Loading...</div>; // Show a loading state while data is being fetched
  }

  return (
    <Layout>
      <IntroContent introData={homeData.intro} />
      <Features featuresData={homeData.features} />
      <VideoSection videoData={homeData.videoSection} />
      <ReasonsSection reasonsData={homeData.reasonsSection} />
      <IntegrationSection integrationData={homeData.integrations} />
      <Trustedbrands brand={homeData.brands} tagline={homeData.tagline} />
      {/* <Brands brandsData={homeData.brands} /> */}
      <TestimonialsSlider testimonialsData={homeData.testimonials} /> 
      <FaqSection faqData={homeData.faqData} />
    </Layout>
  );
};

export default Home;
