import React from 'react';
import { RiDashboardLine, RiTempHotLine, RiWaterPercentLine, 
         RiMapPinLine, RiHistoryLine, RiTeamLine, RiSettings4Line } from 'react-icons/ri';
import Logo from '../common/Logo';
import {
  SidebarWrapper,
  Logo as LogoContainer,
  NavItems,
  NavItem
} from '../../styles/components/SidebarStyles';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems>
        <NavItem active>
          <RiDashboardLine /> Dashboard
        </NavItem>
        <NavItem>
          <RiTempHotLine /> Temperature
        </NavItem>
        <NavItem>
          <RiWaterPercentLine /> Humidity
        </NavItem>
        <NavItem>
          <RiMapPinLine /> Sensors Location
        </NavItem>
        <NavItem>
          <RiHistoryLine /> Alerts History
        </NavItem>
        <NavItem>
          <RiTeamLine /> Operateurs
        </NavItem>
        <NavItem>
          <RiSettings4Line /> Settings
        </NavItem>
      </NavItems>
    </SidebarWrapper>
  );
};

export default Sidebar; 