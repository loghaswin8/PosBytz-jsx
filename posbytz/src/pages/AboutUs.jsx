import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import AboutSection from '../components/about/AboutSection';
import HeroSection from '../components/about/HeroSection';
import HowToReach from '../components/about/HowToReach';
import ApiService from '../api/ApiService';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAboutData = async () => {
    try {
      const data = await ApiService.getAboutData();
      console.log('Fetched about data:', data);
      setAboutData(data);
    } catch (error) {
      console.error('Error fetching about data:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!aboutData) return <div>No data available</div>;

  return (
    <Layout>
      <HeroSection
        title={aboutData.heroSection?.title || "Default Title"}
        breadcrumbs={aboutData.heroSection?.breadcrumbs || []}
      />
      <AboutSection aboutData={aboutData.aboutSection} logos={aboutData.logos} />
      <HowToReach howToReachData={aboutData.howToReach} />
    </Layout>
  );
};

export default AboutUs;
