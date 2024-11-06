import React from 'react';
import styled from 'styled-components';
import { RiDashboardLine, RiTempHotLine, RiWaterPercentLine, 
         RiMapPinLine, RiHistoryLine, RiTeamLine, RiSettings4Line } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Logo>
        <LogoText>App Logo</LogoText>
      </Logo>
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

const SidebarWrapper = styled.aside`
  width: 260px;
  background-color: #8d72e1;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Logo = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(185, 224, 255, 0.1);
  margin-bottom: 1rem;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

const NavItems = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.8)'};
  background-color: ${props => props.active ? '#8d9eff' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: ${props => props.active ? '500' : '400'};

  &:hover {
    background-color: ${props => props.active ? '#8d9eff' : 'rgba(141, 158, 255, 0.2)'};
    color: #fff;
  }

  svg {
    font-size: 1.25rem;
    color: ${props => props.active ? '#b9e0ff' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

export default Sidebar; 