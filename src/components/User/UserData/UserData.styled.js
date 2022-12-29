import styled from 'styled-components';
import { device } from 'utils/device';

export const DivPhoto = styled.div`
  width: 233px;
  height: 233px;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};

  @media (${device.mobileOnly}) {
    margin-bottom: 68px;
  }
  @media (${device.desktop}) {
    margin-bottom: 32px;
    margin-left: 89px;
  }
`;

export const ImgPhoto = styled.img`
  width: 233px;
  height: 233px;
  border-radius: ${p => p.theme.radii.round};
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (${device.fablet}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media (${device.desktop}) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: ${p => p.theme.borders.none};
  background: none;
  position: absolute;
  top: 240px;
  right: 0;
  fill: ${p => p.theme.colors.accent};

  @media (${device.fablet}) {
    top: 240px;
    right: 0;
  }
  @media (${device.desktop}) {
    top: 210px;
    right: 0;
  }
`;

export const Span = styled.span`
  margin-left: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.sectionTitle};
`;
