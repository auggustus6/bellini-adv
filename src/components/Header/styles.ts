import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 2rem 0 3rem;
    width: 100%;
    position: fixed;
    z-index: 9999;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
