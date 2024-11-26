import React from 'react';
import styled from 'styled-components';


import StatsCard from '../common/StatsCard';
import TemperatureCard from './States/TemperatureCard';
import HumidityCard from './States/HumidityCard';
import AverageHumidityCard from './States/AverageHumidityCard';
import AverageTemperatureCard from './States/AverageTemperatureCard';
import {CardsSection} from '../../styles/components/StatsCardStyles';
import { useState, useEffect } from 'react';
import AlertTable from '../data/tables/AlertTable';
import OperatorsTable from '../data/tables/OperatorsTable';
import SensorsTable from '../data/tables/SensorsTable';

import MapView from '../common/MapView';

const DashboardPage = () => {
  const [timeSinceUpdate, setTimeSinceUpdate] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setTimeSinceUpdate((prevTime) => (prevTime < 20 ? prevTime + 1 : 0));
    };
    // Increment time every minute; reset every 20 mins
    const interval = setInterval(updateTime, 60000); // 60000ms = 1 minute
    return () => clearInterval(interval);
  }, []);
    const latitude = 34.657467; // Replace with your latitude
    const longitude = -1.907816; 
  return (
    <DashboardContainer>
      <DashboardHeader>

      </DashboardHeader>
      
      <MapView latitude={latitude} longitude={longitude} sensorName="ESP6682"/>
      <DashboardContent>
        <SensorsTable/>
      </DashboardContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 1rem;
`;

const DashboardHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #6c757d;
  font-size: 0.875rem;
`;

const DashboardContent = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export default DashboardPage; 