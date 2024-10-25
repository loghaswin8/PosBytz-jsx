import React from 'react';
import siteData from '../data/siteData.json'; 
import HeroSection from '../components/about/HeroSection';
import AboutSection from '../components/about/AboutSection';
import '../styles/about-us.css';
import HowToReach from '../components/about/HowToReach';
import HeaderFooterLayout from '../layout/Layout';



const AboutUs = () => {
  return (
    <>
      <HeaderFooterLayout>
        <HeroSection siteData={siteData} sectionKey="about" />
        <AboutSection aboutData={siteData} sectionKey="about" />
        <HowToReach howToReachData={siteData} sectionKey="about" />
      </HeaderFooterLayout>
    </>
  );
};

export default AboutUs;
