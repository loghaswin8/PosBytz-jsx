import React from 'react';
import siteData from '../data/siteData.json'; // Adjust the path as necessary
import HeroSection from '../components/about/HeroSection';
import '../styles/support.css'
import HelpSection from '../components/support/HelpSection';



const Support = () => {
  return (
    <div>
      <HeroSection siteData={siteData} sectionKey="support" />
      <HelpSection />
    </div>
  );
};

export default Support;
