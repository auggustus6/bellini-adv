import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const StylesClients = styled.div`
  ${() => css`
    background: ${theme.colors.white};
  `}
`;

export const ContainerClients = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding: 10rem 2rem 5rem 2rem;

  &.active {
    animation-name: ${fromBottomMenu};
    animation-duration: 1.5s;
  }

  h4 {
    font-size: 2.4rem;
    color: ${theme.colors.darkBlack};
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4.8rem;
    color: ${theme.colors.darkBlack};
    font-weight: 400;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const ContainerSlide = styled.div``;
