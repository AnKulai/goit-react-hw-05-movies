import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledMoviesGallery,
  StyledSearchPage,
} from './MovieSearchPage.styled';
import movieApi from 'service/movieAPI';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const LazyMovieCard = lazy(() =>
  import('components/MovieCard/MovieTrendCards')
);

const MovieSearchPage = props => {
  const [foundMovies, setFoundMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const inputValue = useRef();

  //   Set query for fetch

  const handleSearchMovie = event => {
    event.preventDefault();
    setSearchParams({ query: inputValue.current.value });
  };

  //   Fetch movie by query

  const getFoundMovieList = async query => {
    try {
      setIsLoading(true);
      const { results: movies } = await movieApi.fetchMoviesByQuery(query);
      const filterList = filterMoviesWithoutBackdrop(movies);
      setFoundMovies(filterList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  //   Remove movies without pictures

  const filterMoviesWithoutBackdrop = movies => {
    const filterMovies = movies.filter(({ backdrop_path }) => backdrop_path);
    const difference = movies.length - filterMovies.length;
    if (difference > 0)
      Notify.warning(
        `${difference} films were filtered due to lack of information`
      );
    return filterMovies;
  };

  //   Create movie list

  const createSearchList = () => {
    if (foundMovies === null) return;
    return foundMovies.map(movie => {
      return <LazyMovieCard key={movie.id} movie={movie} />;
    });
  };

  useEffect(() => {
    if (!searchParams.get(`query`)) return;
    getFoundMovieList(searchParams.get(`query`));
    Notify.info(`Showing results for "${searchParams.get(`query`)}"`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get(`query`)]);

  //   Render

  return (
    <>
      <StyledSearchPage>
        <input
          type="text"
          placeholder="Enter movie title..."
          ref={inputValue}
          required
        />
        <button onClick={handleSearchMovie} type="submit">
          Search
        </button>
      </StyledSearchPage>
      <StyledMoviesGallery>
        <Suspense>{isLoading ? <Loader /> : createSearchList()}</Suspense>
      </StyledMoviesGallery>
    </>
  );
};

MovieSearchPage.propTypes = {};

export default MovieSearchPage;
