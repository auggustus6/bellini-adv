import styled, { css } from "styled-components";
import { fromBottom } from "../../styles/Keyframes/Keyframes";

export const Card = styled.div`
  max-width: 31rem;
  display: flex;

  &.active {
    animation-name: ${fromBottom};
    animation-duration: 1.5s;
  }

  @media (max-width: 660px) {
    max-width: 20rem;
    height: 26rem;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 440px) {
    max-width: 38rem;
    border: 2px solid #242428;
    padding: 1rem;
    border-radius: 5px;
  }
`;

export const CardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h3 {
      margin: 2.4rem 0 2.4rem;
      color: ${theme.colors.darkBlack};
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    p {
      color: ${theme.colors.darkBlack};
      margin-bottom: 2.4rem;
    }

    a {
      padding: 1.2rem 2.4rem;
      border-radius: 37px;
      border: 2px solid #242428;
      max-width: 15rem;
      color: ${theme.colors.darkBlack};
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;
    }

    @media (max-width: 660px) {
      img {
        width: 3rem;
        height: 3rem;
      }

      h3 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.4rem;
      }

      a {
        font-size: 1.4rem;
        max-width: 12rem;
        border-radius: 30px;
        padding: 0.6rem 1.4rem;
      }
    }
  `}
`;
