import styled from 'styled-components';
import { device } from 'utils/device';

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;

  @media ${device.fabletAndMobileOnly} {
    padding: 20px 20px 16px;
  }
  @media ${device.tablet} {
    align-items: baseline;
    padding: 20px 32px 16px;
  }
  @media ${device.desktop} {
    padding: 16px 16px 0px;
  }
`;

export const MobMenu = styled.div`
  z-index: 1;
  padding: 60px 20px;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.burgerBackground};

  @media ${device.tablet} {
    padding: 100px 216px;
  }
`;

export const MobMenuButton = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;

  @media ${device.tablet} {
    margin-left: 0;
  }
`;

export const BurgerMenu = styled.img``;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media ${device.mobile} {
    gap: 25px;
    margin-bottom: 46px;
  }
  @media ${device.tablet} {
    margin-bottom: 88px;
  }
`;
