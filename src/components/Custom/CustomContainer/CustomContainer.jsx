import React from 'react';
import { StyleContainer } from './CustomContainer.styled';

const CustomContainer = ({ children }) => {
  return <StyleContainer>{children}</StyleContainer>;
};

export default CustomContainer;
