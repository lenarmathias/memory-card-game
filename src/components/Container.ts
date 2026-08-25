import styled, { css } from 'styled-components';

interface ContainerProps {
  $flex?: boolean;
  $flexColumn?: boolean;
  $noPadding?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 20px auto;
  width: 80%;
  max-width: 1200px;
  padding: 40px 20px;

  ${({ $flex }) => $flex && css`
    display: flex;
    gap: 20px;
    justify-content: center;
  `}

  ${({ $flexColumn }) => $flexColumn && css`
    flex-direction: column;
  `}

  ${({ $noPadding }) => $noPadding && css`
    padding: 0;
  `}
`;
