import React from 'react';
import useMatchMedia from 'hooks/useMatchMedia';
import HeroWrap from './HeroWrap/HeroWrap';

import { ImgStyled } from './HeroBg.styled';

import mob_lady from '../../assets/hero/mob/mob_1x.webp';
import tab_lady from '../../assets/hero/tab/tab_1x.webp';
import desk_lady from '../../assets/hero/desk/desc_1x.webp';
// import layerFour from '../../assets/hero/desk/layer4.svg';

function HeroBg() {
  const { isDesktop, isTablet, isMobile } = useMatchMedia();

  return (
    <>
      <HeroWrap />

      {isMobile && <ImgStyled src={mob_lady} alt="lady with a dog" />}
      {isTablet && <ImgStyled src={tab_lady} alt="lady with a dog" />}
      {isDesktop && <ImgStyled src={desk_lady} alt="lady with a dog" />}
    </>
  );
}
export default HeroBg;
