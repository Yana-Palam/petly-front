import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from 'utils/device';

export const ListWrapper = styled.div`
  @media ${device.fabletAndMobileOnly} {
    margin-bottom: 60px;
  }
  @media ${device.desktop} {
    flex-grow: 1;
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 12px;
  justify-content: center;

  @media ${device.desktop} {
    justify-content: flex-end;
    margin-left: 20px;
  }
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  padding: 8px 28px;

  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.nav};
  letter-spacing: ${({ theme }) => theme.letterSpacing.l};
  text-transform: ${({ theme }) => theme.textTransform.cap};

  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  outline: ${({ theme }) => theme.borders.normal};
  border-radius: ${({ theme }) => theme.radii.xxl};
  outline-color: ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
    outline: 2px solid #ff6101;
    transition: color ${p => p.theme.animation.cubic},
      outline ${p => p.theme.animation.cubic};
  }
  @media ${device.desktop} {
    align-items: flex-end;
    height: 32px;
  }
`;

export const AccentLink = styled(LinkStyled)`
  min-width: 95px;
  height: 35px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};
  border-color: ${({ theme }) => theme.colors.accent};
  }

   &:hover,
    &:focus {
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    transition: color ${p => p.theme.animation.cubic};
  }
`;
