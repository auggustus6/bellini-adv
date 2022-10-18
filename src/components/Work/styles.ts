import styled, { css } from "styled-components";

export const ContainerWork = styled.div`
  ${() => css`
    max-width: 140rem;
    margin: 0 auto;
    padding: 10rem 0 10rem;

    h1 {
      font-weight: 400;
      font-size: 4.8rem;
      line-height: 6.4rem;
      color: #242428;
      margin-bottom: 5rem;
    }

    @media (max-width: 930px) {
      h1 {
        text-align: center;
      }
    }
  `}
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 930px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
