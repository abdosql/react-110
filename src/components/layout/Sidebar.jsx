import React from 'react';
import { RiDashboardLine, RiTempHotLine, RiWaterPercentLine, 
         RiMapPinLine, RiHistoryLine, RiTeamLine, RiSettings4Line } from 'react-icons/ri';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../common/Logo';
import {
  SidebarWrapper,
  Logo as LogoContainer,
  NavItems,
  NavItem
} from '../../styles/components/SidebarStyles';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <SidebarWrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems>
        <NavItem 
          active={isActive('/')} 
          onClick={() => navigate('/')}
        >
          <RiDashboardLine /> Dashboard
        </NavItem>
        <NavItem 
          active={isActive('/temperature')}
          onClick={() => navigate('/temperature')}
        >
          <RiTempHotLine /> Temperature
        </NavItem>
        <NavItem 
          active={isActive('/humidity')}
          onClick={() => navigate('/humidity')}
        >
          <RiWaterPercentLine /> Humidity
        </NavItem>
        <NavItem 
          active={isActive('/sensors-location')}
          onClick={() => navigate('/sensors-location')}
        >
          <RiMapPinLine /> Sensors Location
        </NavItem>
        <NavItem 
          active={isActive('/alerts-history')}
          onClick={() => navigate('/alerts-history')}
        >
          <RiHistoryLine /> Alerts History
        </NavItem>
        <NavItem 
          active={isActive('/operateurs')}
          onClick={() => navigate('/operateurs')}
        >
          <RiTeamLine /> Operateurs
        </NavItem>
        <NavItem 
          active={isActive('/settings')}
          onClick={() => navigate('/settings')}
        >
          <RiSettings4Line /> Settings
        </NavItem>
      </NavItems>
    </SidebarWrapper>
  );
};

export default Sidebar; 