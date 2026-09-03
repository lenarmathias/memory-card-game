import styled, { css } from 'styled-components';

interface TextProps {
  $topGame?: boolean;
}

export const Text = styled.p<TextProps>`
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;

  ${({ $topGame }) => $topGame && css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin: 10px 0;
    font-size: 16px;
  `}
`;
