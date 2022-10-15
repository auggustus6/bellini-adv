import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const StylesAbout = styled.div`
  ${() => css`
    background: ${theme.colors.colorHome};
  `}
`;

export const ContainerAbout = styled.div`
  ${() => css`
    max-width: 140rem;
    width: 100%;
    margin: 0 auto;
  `}
`;
