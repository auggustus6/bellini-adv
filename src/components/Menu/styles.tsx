import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
    }

    ul li:last-child a {
      padding: 1.2rem 2.4rem;
      background: #242428;
      border-radius: 37px;
      color: ${theme.colors.white};
      letter-spacing: -0.035em;
    }

    li {
      list-style: none;
    }

    li + li {
      margin-left: 2rem;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.darkBlack};
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.4;
    }

    @media screen and (max-width: 768px) {
      ul {
        flex-direction: column;
        position: absolute;
        left: -100rem;
        top: 0;

        background-color: #242428;
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.5s;
      }

      li + li {
        margin-left: 0;
      }

      a {
        color: ${theme.colors.white};
      }

      &.active {
        ul {
          left: 0;
        }
      }
    }
  `}
`;
