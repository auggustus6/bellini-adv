import styled, { css } from "styled-components";
import { fromBottomMin } from "../../styles/Keyframes/Keyframes";

export const ContainerCard = styled.div`
  max-width: 38rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem;
`;

export const TitleContent = styled.div`
  &.active {
    animation-name: ${fromBottomMin};
    animation-duration: 1.5s;
  }

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
