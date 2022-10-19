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
    padding-top: 20rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    display: flex;

    h1 {
      font-size: 7.2rem;
      font-weight: 300;
      color: ${theme.colors.darkBlack};
      margin-bottom: 1.6rem;
      max-width: 70rem;
    }

    p {
      font-size: 3.2rem;
      line-height: 39px;
      color: ${theme.colors.darkBlack};
      margin-bottom: 4rem;
    }

    a {
      padding: 1.2rem 2.4rem;
      background: ${theme.colors.darkBlack};
      border-radius: 37px;
      color: ${theme.colors.white};
    }

    @media (max-width: 1030px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-top: 10rem;

      img {
        max-width: 100%;
        margin-top: 4rem;
      }

      h1 {
        font-size: 5.2rem;
      }
    }
    @media (max-width: 500px) 
      h1 {
        font-size: 3.2rem;
      }

      p {
        font-size: 2.2rem;
      }
    }
  `}
`;

export const ContantInfo = styled.div`
  padding: 2rem 0 2rem;
`;

export const ContantImg = styled.div`
  display: flex;
`;
