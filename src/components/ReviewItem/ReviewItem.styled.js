import styled from 'styled-components';

export const StyledLi = styled.li`
  list-style-type: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  & li {
    list-style-type: none;
    font-size: 22px;
  }

  & .author__info {
    padding: 35px 30px 10px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  & .reviews {
    padding: 25px;
    font-style: italic;
  }

  & .username {
    color: gray;
  }
`;
