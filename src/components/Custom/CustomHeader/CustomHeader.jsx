import React from 'react';
import { StyleHeader } from './CustomHeader.styled';

const CustomHeader = ({ children }) => {
  return <StyleHeader>{children}</StyleHeader>;
};

export default CustomHeader;
