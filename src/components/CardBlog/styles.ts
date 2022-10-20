import styled, { css } from "styled-components";

export const CardBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 42rem;
  height: 40rem;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;

  img {
    border-radius: 8px 8px 0 0;
  }

  p {
    padding: 0 2rem 2rem;
    color: #9b9b9b;
  }

  @media (max-width: 1330px) {
    max-width: 32rem;
  }

  @media (max-width: 1048px) {
    max-width: 36rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 5rem;

  h2 {
    padding-left: 2rem;
    font-size: 2.4rem;
  }
`;
