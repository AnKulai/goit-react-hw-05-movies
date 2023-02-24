import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CustomNav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const CustomNavLink = styled(NavLink)`
  font-size: 22px;
  text-decoration: none;
  color: black;
  &.active {
    color: red;
    position: relative;
    transition: all 0.3s;
    &::after {
      content: '';
      position: absolute;
      width: 110%;
      height: 2px;
      left: -5%;
      top: 57%;
      background-color: red;
      display: block;
    }
  }
`;
