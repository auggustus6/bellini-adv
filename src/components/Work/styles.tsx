import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const ContainerWork = styled.div`
  ${() => css`
    max-width: 140rem;
    margin: 0 auto 12rem;

    h1 {
      font-weight: 400;
      font-size: 4.8rem;
      line-height: 6.4rem;
      color: #242428;
      margin: 12rem 0 8rem;
    }
  `}
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 2rem;
`;
