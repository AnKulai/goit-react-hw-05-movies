import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  min-height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    scale: 1.05;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  & > img {
    border-radius: 5px;
  }

  & > .description {
    width: 100%;
    padding: 10px 15px;
    text-align: center;
    color: black;
    height: auto;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
`;
