import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 1rem 0;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
