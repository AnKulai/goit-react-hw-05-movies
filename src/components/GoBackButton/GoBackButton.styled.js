import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 30px;
  background: transparent;
  transition: all 0.3s;

  &:hover {
    background-color: black;
    color: white;
    fill: white;
  }
`;
