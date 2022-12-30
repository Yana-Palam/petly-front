import styled from 'styled-components';
import { device } from 'utils/device';
import { StyledButton } from 'components/Common/Button/Button.styled';
import { ReactComponent as Delete } from 'assets/icons/delete.svg';
import { ModalContent } from 'components/Common/Modal/Modal.styled';

export const DelPetBox = styled(ModalContent)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: rgba(33, 33, 33, 0.12);

  @media (${device.mobile}) {
  }
  // @media (${device.fablet}) {
  //   width: 450px;
  // }

  /* @media (${device.tablet}) {
    padding: 34px 40px;
  }

  @media (${device.desktop}) {
    width: 588px;
    height: 38px;
    padding: 34px 40px;
  } */

  // min-width: ${p => `${p.theme.space[7] * 3}px`};
  /* background-color: ${p => p.theme.colors.white}; */
`;
export const DelPetBtn = styled(StyledButton)`
  width: ${p => `${p.theme.space[8] - 26}px`};

  @media (${device.tablet}) {
    width: ${p => `${p.theme.space[8] - 8}px`};
  }
`;

export const AnimalsBtnDel = styled(DelPetBtn)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;
export const AnimalsDeleteSvg = styled(Delete)`
  width: ${p => `${p.theme.space[4]}px`};
  height: ${p => `${p.theme.space[4]}px`};
  fill: currentColor;
`;
export const CancelPetBtn = styled.div``;
