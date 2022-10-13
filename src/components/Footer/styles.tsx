import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkBlack};

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
