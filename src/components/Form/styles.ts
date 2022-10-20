import styled, { css } from "styled-components";

export const ContainerMain = styled.div`
  max-width: 140rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  ${({ theme }) => css`
    border: 1px solid red;
    max-width: 66rem;
    text-align: center;
    margin-top: -5rem;
    background: #fff;
    border: 4px solid ${theme.colors.colorHome};
    padding: 3rem;

    button {
      cursor: pointer;
      width: 100%;
      background: ${theme.colors.darkBlack};
      color: ${theme.colors.white};
      font-weight: 700;
      padding: 1.2rem 2.4rem;
      border-radius: 37px;
      font-size: 1.8rem;
    }

    button:hover {
      opacity: 0.9;
    }

    @media (max-width: 510px) {
      width: 85%;
    }
  `};
`;

export const ContainerTextArea = styled.div`
  margin: 2.4rem 0 2.4rem;

  textarea {
    width: 100%;
    height: 16rem;
    padding: 1.2rem 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    outline: none;
    font-size: 1.8rem;
    color: #9b9b9b;
  }
`;

export const Form = styled.form`
  width: 100%;

  p {
    max-width: 59rem;
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    font-weight: 500;
  }

  input {
    padding: 1.2rem 1.6rem;
    gap: 10px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    outline: none;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  margin-top: 3rem;
  gap: 2rem;
`;

export const ContentOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
`;
export const ContentTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
`;
