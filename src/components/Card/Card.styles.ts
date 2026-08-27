import styled from 'styled-components';

export const GameCard = styled.button`
  width: 76px;
  height: 86px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
`;
