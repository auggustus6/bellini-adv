import styled, { css } from "styled-components";
import { fromBottomMenu } from "../../styles/Keyframes/Keyframes";

export const StylesBlog = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.colorAbout};
    &.active {
      animation-name: ${fromBottomMenu};
      animation-duration: 1.5s;
    }
  `}
`;

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 1048px) {
    flex-direction: column;
  }
`;

export const ContainerBlog = styled.div`
  ${({ theme }) => css`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0 10rem;

  a {
    color: ${theme.colors.darkBlack};
    padding: 1.2rem 2.4rem;
    border: 2px solid ${theme.colors.darkBlack};
    border-radius: 37px;
    font-weight: 700;
    font-size: 1.8rem;
    margin-top: 5rem;
  }

  a:hover {
    opacity: .8;
  }

  h4 {
    font-size: 2.4rem;
    margin-bottom: 0.8rem;
  }

  h1 {
    font-size: 4.8rem;
    font-weight: 400;
    margin-bottom: 4.8rem;
  `}
`;
