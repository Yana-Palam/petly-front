import styled from 'styled-components';
import { device } from 'utils/device';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(33, 33, 33, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: all;
  overflow: scroll;
`;

export const ModalContent = styled.div`
  padding: 40px 20px;
  border-radius: ${p => `${p.theme.space[4] + 4}px`};
  background-color: ${p => p.theme.colors.white};
  @media ${device.tablet} {
    padding: 32px 20px;
  }
  /* @media ${device.desktop} {
    width: ${p => `${p.theme.space[8] + 32}px`};
  } */
`;
