import React from 'react';
import { StyledCredits } from './CreditCard.styled';

const CreditCard = ({ cast: { profile_path, name, character } }) => {
  // Cast card markup

  return (
    <>
      {profile_path && (
        <StyledCredits>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            width="250px"
            alt=""
          />
          <h2>{name}</h2>
          <p>Charter: {character}: </p>
        </StyledCredits>
      )}
    </>
  );
};

export default CreditCard;
