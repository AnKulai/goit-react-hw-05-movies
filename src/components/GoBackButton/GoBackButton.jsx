import svg from '../../images/sprtite.svg';
import React from 'react';
import { StyledButton } from './GoBackButton.styled';

const GoBackButton = () => {

// Go to back 

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <StyledButton onClick={handleGoBack}>
      <svg width="25px" height="25px">
        <use href={`${svg}#icon-back`}></use>
      </svg>
      <span>Go Back</span>
    </StyledButton>
  );
};

GoBackButton.propTypes = {};

export default GoBackButton;
