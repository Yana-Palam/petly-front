import styled from 'styled-components';
import { device } from 'utils/device';

export const ModalBackdrop = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.12);
  display: flex;

  justify-content: center;
  align-items: baseline;
  pointer-events: all;
  overflow: scroll;

  @media ${device.tabletOnly} {
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  padding: 20px 20px;
  border-radius: ${p => `${p.theme.space[5] + 8}px`};
  background-color: ${p => p.theme.colors.white};

  @media ${device.tablet} {
    padding: 32px 20px;
    /* position: relative; */
  }
  /* @media ${device.tablet} {
    padding: 40px 20px;
  } */
  /* @media ${device.desktop} {
    width: ${p => `${p.theme.space[8] + 32}px`};
  } */
`;
