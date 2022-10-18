import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const StylesClients = styled.div`
  ${() => css`
    background: ${theme.colors.white};
  `}
`;

export const ContainerClients = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  padding-top: 1rem;

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
`;

export const ContainerSlide = styled.div``;
