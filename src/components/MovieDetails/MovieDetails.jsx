import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import movieApi from 'service/movieAPI';
import { StyledLink, StyledWrapper } from './MovieDetails.styled';
import GoBackButton from 'components/GoBackButton/GoBackButton';
import Loader from './../Loader/Loader';

const LazyMovieCredits = lazy(() =>
  import('components/MovieCredits/MovieCredits')
);
const LazyMovieReviews = lazy(() =>
  import('components/MovieReviews/MovieReviews')
);

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch movie details

  const getMovieDetails = async () => {
    try {
      setIsLoading(true);
      const result = await movieApi.fetchDetails(movieId);
      setMovie(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Markup logic (Movie details or exceptions)

  const createDetailInfo = () => {
    if (movie === null) return false;
    if (movie === undefined)
      return (
        <>
          <h1>
            We're sorry, detailed information on the selected movie is not
            available at the moment, please try again later...
          </h1>
          <GoBackButton></GoBackButton>
        </>
      );

    return (
      <>
        <StyledWrapper>
          {console.log(movie)}
          <div className="image__wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster_image"
              height="85%"
            />
          </div>
          <ul className="description__wrapper">
            <h2>Desription:</h2>
            <li>
              <b>Title:</b> {movie.title || movie.name}
            </li>
            <li>
              <b>Genres:</b> {movie.genres.map(({ name }) => name).join(', ')}
            </li>
            <li>
              <b>Popularity:</b> {movie.popularity.toFixed(2)}
            </li>
            <li>
              <b>Vote average:</b>{' '}
              <span className="vote">{movie.vote_average.toFixed(2)}</span> / 10
            </li>
            <li>
              <b>Release date:</b> {movie.release_date.slice(0, 4)}
            </li>
            <li>
              <b>Production countries:</b>{' '}
              {movie.production_countries.length
                ? movie.production_countries.map(({ name }) => name).join(', ')
                : `unknown`}
            </li>
            <h2>Overview:</h2>
            <span>{movie.overview}</span>
            <GoBackButton />
          </ul>

          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
        </StyledWrapper>
        <Suspense>
          <Routes>
            <Route path="cast" element={<LazyMovieCredits />} />
            <Route path="reviews" element={<LazyMovieReviews />} />
          </Routes>
        </Suspense>
      </>
    );
  };

  // Load details about movie from DB

  useEffect(() => {
    if (movieId === null) return;
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  // Render function

  return <>{isLoading ? <Loader /> : createDetailInfo()}</>;
};

export default MovieDetails;
