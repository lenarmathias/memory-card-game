import styled, { css } from 'styled-components';

interface GameCardProps {
  $backCover?: boolean;
}

export const GameCard = styled.button<GameCardProps>`
  width: 76px;
  height: 86px;
  border-radius: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  ${({ $backCover }) => $backCover && css`
    border: 3px solid ${({ theme }) => theme.colors.cardBackground};
    background-color: ${({ theme }) => theme.colors.cardBackCover};
    cursor: pointer;
  `}
`;
