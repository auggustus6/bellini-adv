import styled, { css } from "styled-components";

export const StylesBlog = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.colorAbout};
  `}
`;

export const ContainerBlog = styled.div`
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10rem 0 10rem;

  h4 {
    font-size: 2.4rem;
    margin-bottom: 0.8rem;
  }

  h1 {
    font-size: 4.8rem;
    font-weight: 400;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 3rem;
`;
