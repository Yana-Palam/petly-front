import styled from 'styled-components';
import { device } from 'utils/device';

export const LogoContainer = styled.div`
  @media ${device.tablet} {
    flex-grow: 1;
  }
`;
