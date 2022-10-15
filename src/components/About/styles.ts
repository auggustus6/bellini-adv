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
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 5rem;
    padding-bottom: 4rem;
  `}

  img {
    width: 100rem;
  }

  @media (max-width: 980px) {
    flex-direction: column;

    img {
      width: 50rem;
    }
  }
`;

export const ContentAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  ${() => css`
    h4 {
      color: ${theme.colors.darkBlack};
      font-size: 2.4rem;
      margin-bottom: 0.8rem;
    }

    h1 {
      font-weight: 400;
      font-size: 3.8rem;
      color: ${theme.colors.darkBlack};
      margin-bottom: 2rem;
    }

    p {
      color: ${theme.colors.darkBlack};
      font-weight: 500;
      font-size: 1.8rem;
    }

    a {
      margin-top: 3rem;
      padding: 1.2rem 2.4rem;
      border-radius: 37px;
      border: 2px solid #242428;
      max-width: 15rem;
      color: ${theme.colors.darkBlack};
      font-weight: 700;
      font-size: 1.8rem;
      font-weight: 700;
    }

    @media (max-width: 980px) {
      align-items: center;
      text-align: center;
    }
  `}
`;