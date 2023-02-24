import React from 'react';
import { StyledLi } from './ReviewItem.styled';

const ReviewItem = ({ author }) => {
  const { author_details, content } = author;

  if (author_details.avatar_path === null) return;

  return (
    <StyledLi>
      <div className="author__info">
        <img
          src={
            author_details.avatar_path.includes(`https`)
              ? author_details.avatar_path.replace('/', '')
              : `https://image.tmdb.org/t/p/w500${author_details.avatar_path}`
          }
          alt="avatar"
          width="200px"
        />
        <ul className="author__description">
          <li>
            <b>Name:</b> {author_details.name ? author_details.name : `hidden`}
          </li>
          <li>
            <b>Username:</b>
            <i className="username">@{author_details.username}</i>
          </li>
          <li>
            <b>Rating:</b>
            {author_details.rating ? author_details.rating : `unknown`}
          </li>
        </ul>
      </div>
      <div className="reviews">
        <q>{content}</q>
      </div>
    </StyledLi>
  );
};

export default ReviewItem;
