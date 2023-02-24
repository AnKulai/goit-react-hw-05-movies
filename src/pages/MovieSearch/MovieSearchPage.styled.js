import styled from 'styled-components';

export const StyledSearchPage = styled.form`
  display: flex;
  gap: 5px;
  & input,
  & button {
    font-size: 18px;
    padding: 5px 20px;
  }

  & button {
    background: transparent;
    transition: all 0.3s;

    &:hover {
      background: black;
      color: white;
    }
  }
`;
export const StyledMoviesGallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
  gap: 15px;
`;
