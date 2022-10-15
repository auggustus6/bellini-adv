import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const StylesHome = styled.div`
  ${() => css`
    background: ${theme.colors.colorHome};
  `}
`;

export const ContainerHome = styled.div`
  ${() => css`
    max-width: 140rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    display: flex;

    h1 {
      font-size: 7.2rem;
      line-height: 7.4rem;
      font-weight: 300;
      color: ${theme.colors.darkBlack};
      margin-bottom: 1.6rem;
      max-width: 70rem;
    }

    p {
      font-size: 3.2rem;
      line-height: 39px;
      color: ${theme.colors.darkBlack};
    }
  `}
`;

export const ContantInfo = styled.div``;

export const ContantImg = styled.div``;
