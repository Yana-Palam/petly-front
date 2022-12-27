import styled from 'styled-components';
import { device } from 'utils/device';

export const DivUserInfo = styled.div`
  background: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0 40px 40px 0;
  width: 280px;
  height: 537px;
  margin-top: 18px;
  padding: 20px 23px;

  @media (${device.fablet}) {
    width: 736px;
    height: 311px;
    margin-top: 40px;
    padding: 24px 40px 24px 32px;
  }
  @media (${device.desktop}) {
    width: 411px;
    height: 541px;
    margin-top: 24px;
    padding: 20px 16px;
  }
`;

export const DivWrapperMain = styled.div`
  //margin-top: 61px;

  @media (${device.tablet}) {
    //margin-top: 88px;
  }
  @media (${device.desktop}) {
    display: flex;
    //margin-top: 58px;
  }
`;

export const DivWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (${device.fablet}) {
    margin-right: 32px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  color: ${p => p.theme.colors.black};

  @media (${device.mobileOnly}) {
    font-size: 20px;
    line-height: 27px;
  }
`;
