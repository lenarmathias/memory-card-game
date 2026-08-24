import styled, { css } from 'styled-components';

interface ContainerProps {
  $flexColumn?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 20px auto;
  width: 80%;
  max-width: 1200px;
  padding: 40px 20px;

  ${({ $flexColumn }) => $flexColumn && css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;
