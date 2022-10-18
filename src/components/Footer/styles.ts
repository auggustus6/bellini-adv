import styled, { css } from "styled-components";

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkBlack};

    div {
      display: flex;
    }
  `}
`;

export const ContainerFooter = styled.div`
  display: flex;
  gap: 10rem;
`;

export const AboutContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    p {
      max-width: 30rem;
      margin: 3rem 0 3rem;
      color: ${theme.colors.darkBlack};
      font-weight: 500;
    }
  `}
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ContainerCopy = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-top: 3rem;
`;
