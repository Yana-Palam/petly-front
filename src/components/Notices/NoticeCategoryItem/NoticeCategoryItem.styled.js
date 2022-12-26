import styled from 'styled-components';
import { device } from 'utils/device';

export const AnimalsBox = styled.div`
  width: ${p => `${p.theme.space[8] + 24}px`};
  height: ${p => `${p.theme.space[9] + 94}px`};
  background: ${p => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[9] - 176}px`};
  }

  @media ${device.desktop} {
    width: ${p => `${p.theme.space[8] + 32}px`};
  }
`;

export const AnimalsImg = styled.img`
  width: ${p => `${p.theme.space[8] + 24}px`};
  height: ${p => `${p.theme.space[8] + 32}px`};

  @media ${device.tablet} {
    width: ${p => `${p.theme.space[9] - 176}px`};
  }
  @media ${device.desktop} {
    width: ${p => `${p.theme.space[8] + 32}px`};
  }
`;

export const AnimalsDiv = styled.div`
  padding-left: ${p => `${p.theme.space[4] + 4}px`};
  @media ${device.tablet} {
    /* padding-bottom: ${p => `${p.theme.space[4] + 4}px`}; */
  }
`;

export const Title = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacing.xs};
  text-align: left;
  width: ${p => `${p.theme.space[8] - 26}px`};
  margin-top: ${p => `${p.theme.space[4] + 4}px`};
`;

export const AnimalsUl = styled.ul`
  margin-top: ${p => `${p.theme.space[4] + 4}px`};
`;

export const AnimalsLi = styled.li`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
  display: flex;
`;

export const AnimalsSpanTitle = styled.span`
  width: ${p => `${p.theme.space[6] - 4}px`};
`;

export const AnimalsSpan = styled.span``;

export const AnimalsCategoryBox = styled.div`
  position: relative;
`;
export const AnimalsCategoryDiv = styled.div`
  position: absolute;
  width: ${p => `${p.theme.space[7] + 20}px`};
  height: ${p => `${p.theme.space[5] - 4}px`};
  left: ${p => `${p.theme.space[0]}px`};
  top: ${p => `${p.theme.space[4] + 4}px`};
  border-radius: 0 40px 40px 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
`;
export const AnimalsCategory = styled.p`
  font-family: ${p => p.theme.fonts.formInput};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.title};
  text-align: center;
  padding-left: ${p => `${p.theme.space[4] + 4}px`};
`;

export const AnimalsBtnMore = styled.button`
  margin: 20px 0 12px 16px;
  /* margin-left: 16px; */
  width: ${p => `${p.theme.space[8] - 8}px`};
  height: ${p => `${p.theme.space[5] + 6}px`};
  color: ${p => p.theme.colors.accent};
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} #f59256;
  border-radius: ${p => `${p.theme.space[5] + 8}px`};

  @media ${device.tablet} {
    margin-left: ${p => `${p.theme.space[5] + 12}px`};
    margin-top: ${p => `${p.theme.space[6] - 4}px`};
  }
  @media ${device.desktop} {
    margin-left: ${p => `${p.theme.space[4] + 4}px`};
  }
`;

export const AnimalsBtnDel = styled.button`
  margin-left: ${p => `${p.theme.space[4]}px`};
  width: ${p => `${p.theme.space[8] - 8}px`};
  height: ${p => `${p.theme.space[5] + 6}px`};
  color: #ff6101;
  border: ${p => p.theme.borders.normal} #ff6101;
  border-radius: ${p => `${p.theme.space[5] + 8}px`};
  background: ${p => p.theme.colors.white};
  @media ${device.tablet} {
    margin-left: ${p => `${p.theme.space[5] + 12}px`};
  }
  @media ${device.desktop} {
    margin-left: ${p => `${p.theme.space[4] + 4}px`};
  }
`;
