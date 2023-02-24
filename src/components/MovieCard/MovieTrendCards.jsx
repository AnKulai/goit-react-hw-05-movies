import React from 'react';
import { StyledLink, StyledMovieCard } from './MovieTrendCards.styled';
import { PropTypes } from 'prop-types';

const MovieCard = ({ movie }) => {
  const { id, backdrop_path, title, name } = movie;
  // Fix API title bug
  let correctTitle = title || name;
  // Cropping for better display
  if (correctTitle.length > 26) {
    correctTitle = correctTitle.slice(0, 26).concat('...');
  }

  return (
    <StyledLink to={`/movies/${id}`}>
      <StyledMovieCard>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt="photos"
          width="100%"
          height="auto"
        />
        <div className="description">{correctTitle}</div>
      </StyledMovieCard>
    </StyledLink>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
