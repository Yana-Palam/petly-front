import styled from 'styled-components';
import { device } from 'utils/device';

export const UlList = styled.ul`
  background: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  padding: 20px;
  position: relative;

  @media (${device.mobileOnly}) {
    width: 280px;
  }
  @media (${device.fabletOnly}) {
    width: 736px;
  }
  @media (${device.tabletOnly}) {
    width: 736px;
  }

`;

export const LiItem = styled.li`
  display: flex;
  align-items: flex-start;

  @media (${device.mobileOnly}) {
    flex-direction: column;
  }
`;

export const UlWrap = styled.ul`
  display: flex;
  flex-direction: column;

  @media (${device.mobileOnly}) {
    margin-top: 20px;
  }
  @media (${device.fablet}) {
    margin-left: 32px;
  }
`;

export const LiWrap = styled.li`
  display: flex;
  margin-bottom: 12px;
`;

export const LiWrapComment = styled.li`
  display: flex;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  width: 161px;
  height: 161px;
  border-radius: 40px;

  @media (${device.mobileOnly}) {
    width: 240px;
    height: 240px;
  }
`;

export const Span = styled.span`
  font-weight: 500;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 44px;
  height: 44px;
  background: ${p => p.theme.colors.primaryBackground};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};

  @media (${device.mobileOnly}) {
    right: 20px;
    top: 268px;
  }
`;

export const ImgDelete = styled.img`
  width: 24px;
  height: 24px;
`;
