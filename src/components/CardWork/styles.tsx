import styled, { css } from "styled-components";

export const Card = styled.div`
  max-width: 31rem;
`;

export const CardContent = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    img {
      width: 6rem;
      height: 6rem;
    }

    h3 {
      margin: 2.4rem 0 2.4rem;
      color: ${theme.colors.darkBlack};
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    p {
      color: ${theme.colors.darkBlack};
      margin-bottom: 2.4rem;
    }

    a {
      padding: 1.2rem 2.4rem;
      border-radius: 37px;
      border: 2px solid #242428;
      max-width: 15rem;
      color: ${theme.colors.darkBlack};
      font-weight: 700;
      font-size: 1.8rem;
    }
  `}
`;
