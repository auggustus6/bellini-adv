import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const ContainerWork = styled.div`
  ${() => css`
    max-width: 140rem;
    margin: 0 auto;
    padding: 10rem 2rem;

    &.active {
      animation-name: ${fromBottomMenu};
      animation-duration: 1.5s;
    }

    h1 {
      font-weight: 400;
      font-size: 4.8rem;
      color: #242428;
      margin-bottom: 5rem;
      padding-top: 1rem;
    }

    @media (max-width: 930px) {
      h1 {
        text-align: center;
      }
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 3.3rem;
      }
    }
  `}
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 930px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
