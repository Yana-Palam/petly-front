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
  font-family: Manrope;
  font-size: 28px;
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 38px;
  letter-spacing: -0.01em;
  text-align: left;
  width: 230px;
  margin-top: ${p => `${p.theme.space[4] + 4}px`};
`;

export const AnimalsUl = styled.ul`
  margin-top: ${p => `${p.theme.space[4] + 4}px`};
`;

export const AnimalsLi = styled.li`
  font-family: Manrope;
  font-size: 16px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 22px;
  display: flex;
`;

export const AnimalsSpanTitle = styled.span`
  width: 60px;
`;

export const AnimalsSpan = styled.span``;

export const AnimalsCategoryDiv = styled.div`
  position: absolute;
  width: 158px;
  height: 28px;
  left: 0px;
  top: 75px;
  border-radius: 0 40px 40px 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
`;
export const AnimalsCategory = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  padding-left: 20px;
`;
export const AnimalsBtnMore = styled.button`
  margin: 20px 0 12px 16px;
  /* margin-left: 16px; */
  width: 248px;
  height: 38px;
  color: #f59256;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  @media ${device.tablet} {
    margin-left: 44px;
    margin-top: 60px;
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }
`;

export const AnimalsBtnDel = styled.button`
  margin-left: 16px;
  width: 248px;
  height: 38px;
  color: #ff6101;
  border: 2px solid #ff6101;
  border-radius: 40px;
  background: #ffffff;
  @media ${device.tablet} {
    margin-left: 44px;
  }
  @media ${device.desktop} {
    margin-left: 20px;
  }
`;
