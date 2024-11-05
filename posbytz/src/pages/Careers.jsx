import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import TopContent from '../components/careers/TopContent';
import TeamWork from '../components/careers/TeamWork';
import CoreValues from '../components/careers/CoreValues';
import WorkLife from '../components/careers/WorkLife';
import OpenPosition from '../components/careers/OpenPosition';
import Principle from '../components/careers/Principle';
import FunWork from '../components/careers/FunWork';
import ApiService from '../api/ApiService';


const Careers = () => {
  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCareerData = async () => {
    try {
      const data = await ApiService.getCareerData();
      console.log('Fetched career data:', data);
      setCareerData(data[0]);
    } catch (error) {
      console.error('Error fetching career data:', error);
      setError('Failed to load data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareerData();
  }, []);
  
  if (loading) return <div>Loading...</div>; 
  if (error) return <div>{error}</div>; 
  if (!careerData) return <div>No data available</div>; 

  console.log('Career Data for Rendering:', careerData);

  return (
    <Layout>
      <TopContent careerTopData={careerData.topContent || {}} />
      <TeamWork teamData={careerData.whereWeWork || []} />
      <CoreValues 
        about={careerData.coreValues?.about || []} 
        icon={careerData.coreValues?.icon || []} 
        image={careerData.coreValues?.image || ""} 
      />
      <WorkLife
        about={careerData.worklife?.about || []} 
        activities={careerData.worklife?.activities || []} 
        image={careerData.worklife?.image || ""} 
      />
      <OpenPosition openPosition={careerData.openPosition || []} />
      <Principle 
        title={careerData.principles?.title || "Default Title"} 
        description={careerData.principles?.description || []} 
        buttonText={careerData.principles?.buttonText || "Learn More"} 
      />
      <FunWork 
        title={careerData.funAtWork?.title || "Fun at Work"} 
        description={careerData.funAtWork?.description || ""} 
        backgroundImage={careerData.funAtWork?.backgroundImage || ""} 
      />
    </Layout>
  );
};


export default Careers;
