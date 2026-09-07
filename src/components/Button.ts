import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ButtonProps {
  $topLeft?: boolean;
}

const buttonStyles = css`
  width: 100%;
  max-width: 200px;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.colors.buttonBorder};
  border-radius: 4px;
  align-content: center;
  align-self: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
`;

export const Button = styled.button`
  ${buttonStyles}
`;

export const StyledNavLink = styled(NavLink) <ButtonProps>`
  ${buttonStyles}

  ${({ $topLeft }) => $topLeft && css`
    position: absolute;
    top: 0;
    left: 0;
  `}
`;
