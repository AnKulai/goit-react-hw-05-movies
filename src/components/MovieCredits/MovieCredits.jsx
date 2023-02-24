import CreditCard from 'components/CreditCard/CreditCard';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from 'service/movieAPI';
import { StyledReviewsContainer } from './MovieCredits.styled';

const MovieCredits = () => {
  const [credits, setCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams(null);

  // Fetch movie credits

  const getCredits = async () => {
    try {
      setIsLoading(true);
      const { cast } = await movieApi.fetchCredits(movieId);
      setCredits(cast);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Create Credits card

  const createCreditsCard = () => {
    if (credits === null) return false;
    return credits.map(cast => <CreditCard key={cast.cast_id} cast={cast} />);
  };

  // Load credits from DB

  useEffect(() => {
    if (movieId === null) return;
    getCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  // Render

  return (
    <StyledReviewsContainer>
      {isLoading ? <Loader /> : createCreditsCard()}
    </StyledReviewsContainer>
  );
};

export default MovieCredits;
