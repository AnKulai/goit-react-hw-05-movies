import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div {
  }

  & .vote {
    background: lightcoral;
    border-radius: 5px;
    padding: 0 2px;
  }

  & li {
    list-style-type: none;
  }

  & .image__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  & .description__wrapper {
    width: 100%;
    display: block;
    font-size: 22px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  color: black;
  padding: 10px 0;
  width: 100%;
  display: block;
  border: 2px solid black;

  &:nth-of-type(1) {
    border-right: none;
  }

  &:nth-of-type(2) {
    border-left: none;
  }

  text-align: center;
  &.active {
    background: red;
    color: white;
    border: 2px solid red;
  }
`;
