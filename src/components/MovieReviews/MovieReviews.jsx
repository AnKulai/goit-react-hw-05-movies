import Loader from 'components/Loader/Loader';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from 'service/movieAPI';
import { StyledReviews } from './MovieReviews.styled';

const MovieReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams(null);

  // Fetch reviews from DB

  const getReviews = async () => {
    try {
      setIsLoading(true);
      const { results } = await movieApi.fetchReviews(movieId);
      setReviews(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Markup for review block

  const createReviewBlock = () => {
    if (reviews === null) return false;
    if (reviews.length > 0) {
      return reviews.map(author => {
        return <ReviewItem key={author.id} author={author} />;
      });
    }
    return <h1>No one has left a review for this movie yet...</h1>;
  };

  // Get reviews by click

  useEffect(() => {
    if (movieId === null) return;
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  // Render

  return (
    <StyledReviews>
      {isLoading ? <Loader /> : createReviewBlock()}
    </StyledReviews>
  );
};

export default MovieReviews;
