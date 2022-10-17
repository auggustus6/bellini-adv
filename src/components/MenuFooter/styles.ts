import styled, { css } from "styled-components";

export const NavFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h1 {
      margin: 1rem 0 3rem;
      font-size: 2.4rem;
      color: ${theme.colors.darkBlack};
    }

    ul li {
      margin-bottom: 1.6rem;
    }

    ul li:last-child {
      margin-bottom: 0;
    }

    ul li a {
      color: ${theme.colors.darkBlack};
      font-weight: bold;
      
    }
  `}
`;
