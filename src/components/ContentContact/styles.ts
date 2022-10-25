import styled, { css } from "styled-components";
import theme from "../../styles/theme";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const StylesContact = styled.div`
  ${() => css`
    background: ${theme.colors.darkBlack};
  `}
`;

export const ContainerContact = styled.div`
  ${() => css`
    max-width: 140rem;
    width: 100%;
    margin: 0 auto;
    padding: 10rem 2rem;

    &.active {
      animation-name: ${fromBottomMenu};
      animation-duration: 1.5s;
    }

    h4 {
      color: ${theme.colors.white};
      margin-bottom: 0.8rem;
      font-size: 2.4rem;
    }

    h1 {
      color: ${theme.colors.white};
      margin-bottom: 2.4rem;
      font-size: 4.8rem;
    }

    p {
      color: ${theme.colors.white};
      font-size: 2rem;
    }

    @media (max-width: 500px) {
      text-align: center;
    }
  `}
`;

export const Box = styled.div`
  display: flex;
  margin-top: 7rem;
  justify-content: space-between;

  @media (max-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.6rem;
  }

  p:last-child {
    font-size: 4.8rem;
  }

  @media (max-width: 740px) {
    margin-bottom: 3rem;
  }
`;
