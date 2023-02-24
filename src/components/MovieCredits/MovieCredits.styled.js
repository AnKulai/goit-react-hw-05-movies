import styled from 'styled-components';

export const StyledReviewsContainer = styled.div`
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  margin-top: 30px;
  display: flex;
  gap: 20px;
  overflow-x: scroll;


  ::-webkit-scrollbar {
    width: 12px; /* ширина всей полосы прокрутки */
  }

  ::-webkit-scrollbar-track {
    background: red; /* цвет зоны отслеживания */
  }

  ::-webkit-scrollbar-thumb {
    background-color: black; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: 3px solid black; /* отступ вокруг бегунка */
  }
`;
