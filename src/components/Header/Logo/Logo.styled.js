import styled from 'styled-components';
import { device } from 'utils/device';

export const LogoContainer = styled.div`
  @media ${device.tablet} {
    flex-grow: 1;
  }

  @media ${device.desktop} {
    flex-grow: 0;
  }
`;

export const LogoImg = styled.img`
  width: 82px;
  height: 42px;

  @media ${device.tablet} {
    width: 94px;
    height: 48px;
  }
`;
