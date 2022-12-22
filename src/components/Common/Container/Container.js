import styled from 'styled-components';
import { device } from 'utils/device';

const Container = styled.div`
  // width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  // margin: 0 auto;

  @media (${device.tabletOnly}) {
    padding-right: 32px;
    padding-left: 32px;
  }

  @media (${device.desktop}) {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export default Container;
