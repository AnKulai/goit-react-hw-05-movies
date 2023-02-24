import React from 'react';
import { StyledLink, StyledMovieCard } from './MovieTrendCards.styled';

const MovieCard = ({ movie, putMovieID }) => {
  const { id, backdrop_path, title, name } = movie;
  // Fix API title bug
  let correctTitle = title || name;
  // Cropping for better display
  if (correctTitle.length > 26) {
    correctTitle = correctTitle.slice(0, 26).concat('...');
  }

  const handleMovieDetails = () => {
    putMovieID(id);
  };

  return (
    <StyledLink to={`/movies/${id}`}>
      <StyledMovieCard onClick={handleMovieDetails}>
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

export default MovieCard;
