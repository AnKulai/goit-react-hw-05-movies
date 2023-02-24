import React from 'react';
// import { NavLink, Route, Routes } from 'react-router-dom';
import { CustomNav, CustomNavLink } from './MovieNavigation.styled';

const MovieNavigation = () => {
  return (
    <>
      <CustomNav>
        <CustomNavLink to="/" end>
          Home
        </CustomNavLink>
        <CustomNavLink to="/movies" end>
          Movies
        </CustomNavLink>
      </CustomNav>
    </>
  );
};

export default MovieNavigation;
