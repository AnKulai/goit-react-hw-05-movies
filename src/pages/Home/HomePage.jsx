import React, { useEffect, useState } from 'react';
import { StyledHome } from './HomePage.styled';

import movieApi from 'service/movieAPI';
import MovieCard from 'components/MovieCard/MovieTrendCards';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [movieList, setMovieList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch trending movies from DB

  const getTrendingMoviesList = async () => {
    try {
      setIsLoading(true);
      const { results: movies } = await movieApi.fetchTrends();
      setMovieList(movies);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createMovieCards = () => {
    if (movieList === null) return;
    return movieList.map(movie => <MovieCard key={movie.id} movie={movie} />);
  };

  // Get default trending movies

  useEffect(
    () => {
      getTrendingMoviesList();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Render

  return <StyledHome>{isLoading ? <Loader /> : createMovieCards()}</StyledHome>;
};

export default HomePage;
